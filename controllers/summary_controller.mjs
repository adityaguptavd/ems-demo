import Admin from "../db/models/Admin.mjs";
import Employee from "../db/models/Employee.mjs";
import Department from "../db/models/Department.mjs";
import LeaveApplication from "../db/models/LeaveApplication.mjs";
import fetchCredentials from "../middleware/fetchCredentials.mjs";
import Attendance from "../db/models/Attendance.mjs";

// Fetch the total number of expiring documents within 3 days
async function fetchTotalExpiringDocuments() {
  try {
    const currentDate = new Date();
    const threeDaysFromNow = new Date();
    threeDaysFromNow.setDate(currentDate.getDate() + 3);

    const expiringDocumentsCount = await Employee.aggregate([
      {
        $match: {
          $or: [
            {
              "qatarDocs.expiryDate": {
                $lt: threeDaysFromNow,
                $gte: currentDate,
              },
            },
            {
              "passportDocs.expiryDate": {
                $lt: threeDaysFromNow,
                $gte: currentDate,
              },
            },
          ],
        },
      },
      {
        $group: {
          _id: null,
          totalExpiringDocuments: {
            $sum: {
              $add: [
                {
                  $cond: [
                    {
                      $and: [
                        { $lt: ["$qatarDocs.expiryDate", threeDaysFromNow] },
                        { $gte: ["$qatarDocs.expiryDate", currentDate] },
                      ],
                    },
                    1,
                    0,
                  ],
                },
                {
                  $cond: [
                    {
                      $and: [
                        { $lt: ["$passportDocs.expiryDate", threeDaysFromNow] },
                        { $gte: ["$passportDocs.expiryDate", currentDate] },
                      ],
                    },
                    1,
                    0,
                  ],
                },
              ],
            },
          },
        },
      },
    ]);
    if (expiringDocumentsCount.length > 0) {
      return expiringDocumentsCount[0].totalExpiringDocuments;
    } else {
      return 0;
    }
  } catch (error) {
    console.error("Error fetching expiring documents:", error);
    return 0;
  }
}

async function getAbsentLeaveCountByDepartmentThisYearMonthWise() {
  const defaultDataToSend = [
    {
      dapartmentName: "NA",
      attendance: Array(12).fill(0),
    },
    {
      dapartmentName: "NA",
      attendance: Array(12).fill(0),
    },
    {
      dapartmentName: "NA",
      attendance: Array(12).fill(0),
    },
  ];
  try {

    const today = new Date();
    const thisYear = today.getFullYear();

    const results = await Attendance.aggregate([
      {
        $match: {
          status: { $in: ["Absent"] },
          date: {
            $gte: new Date(thisYear, 0, 1), // Start of this year
            $lt: today, // End of today
          },
        },
      },
      {
        $lookup: {
          from: "employees",
          localField: "employee",
          foreignField: "_id",
          as: "employeeDetails",
        },
      },
      {
        $project: {
          department: { $arrayElemAt: ["$employeeDetails.department", 0] },
          status: 1,
          date: 1,
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$date" },
            department: "$department",
          },
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "departments",
          localField: "_id.department",
          foreignField: "_id",
          as: "departmentDetails",
        },
      },
      {
        $project: {
          departmentId: "$departmentDetails._id",
          departmentName: { $arrayElemAt: ["$departmentDetails.name", 0] },
          month: "$_id.month",
          count: "$count",
        },
      },
      {
        $sort: { count: -1 }, // Sort by count
      },
      {
        $limit: 3,
      },
    ]).exec();

    // Create an array of department objects
    const departmentData = [];
    const departmentMap = new Map(); // To group counts by department

    results.forEach((dept) => {
      const { departmentId, departmentName, month, count } = dept;
      if (!departmentMap.has(departmentId.toString())) {
        departmentMap.set(departmentId.toString(), {
          departmentId,
          departmentName,
          attendance: Array(12).fill(0), // Initialize an array for 12 months
        });
      }
      departmentMap.get(departmentId.toString()).attendance[month - 1] = count;
    });

    // Convert the map values to an array
    departmentMap.forEach((dept) => {
      departmentData.push(dept);
    });

    if (departmentData.length === 0) {
      return defaultDataToSend;
    }

    return departmentData;
  } catch (err) {
    console.error("Error fetching data:", err);
    return defaultDataToSend;
  }
}

async function fetchLeavesByType() {
  try {
    const defaultDataToSend = [
      { _id: "Sick Leave", totalLeaves: 0 },
      { _id: "Personal Leave", totalLeaves: 0 },
      { _id: "Others", totalLeaves: 0 },
    ];

    const currentMonth = new Date().getMonth() + 1; // Get the current month (1-12)
    const pipeline = [
      {
        $match: {
          fromDate: {
            $gte: new Date(new Date().getFullYear(), currentMonth - 1, 1), // Start of current month
            $lt: new Date(new Date().getFullYear(), currentMonth, 1), // Start of next month
          },
          status: "Approved",
        },
      },
      {
        $group: {
          _id: "$leaveType",
          totalLeaves: { $sum: 1 },
        },
      },
    ];

    const result = await LeaveApplication.aggregate(pipeline);
    if (result.length === 0) {
      return defaultDataToSend;
    }
    return result;
  } catch (error) {
    console.error(error);
    return defaultDataToSend;
  }
}

export const fetchAdminSummary = [
  fetchCredentials,
  async (req, res) => {
    try {
      const admin = await Admin.findById(req.credential.id);
      if (!admin) {
        return res.status(403).json({ error: "Access Denied" });
      }
      const totalEmployees = await Employee.countDocuments({});
      const totalDepartments = await Department.countDocuments({});
      const pendingApplications = await LeaveApplication.countDocuments({
        status: "Pending",
      });
      const expiringDocuments = await fetchTotalExpiringDocuments();
      const attendanceSummary =
        await getAbsentLeaveCountByDepartmentThisYearMonthWise();

      const leaveSummary = await fetchLeavesByType();

      return res.status(200).json({
        totalEmployees,
        totalDepartments,
        pendingApplications,
        expiringDocuments,
        attendanceSummary,
        leaveSummary,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
];
