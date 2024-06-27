import{w as z,aG as G,v as I,aH as U,q as $,r as o,aI as H,F as j,j as e,S,T as E,D as k,B as V,M as O,L as _,E as q,W as J}from"./index-224a9455.js";import{v as K}from"./index-a6e62268.js";import{C as Q,S as X}from"./index-7d01c825.js";import{e as C,G as l,L as Z,A as ee,D as ae}from"./useMobilePicker-14cc754c.js";import{C as se}from"./Container-3824b982.js";import{C as te}from"./Card-92baec48.js";import{I as n,T as d}from"./TextField-1092968c.js";import{D as re}from"./DatePicker-57c36a70.js";import"./isMuiElement-a670666c.js";function ie(){const w=z(),W=G(),F=I(a=>a.user.token),i=I(a=>a.user.user),[R,{isLoading:L,data:N,error:u}]=U(),m=$(),[x,D]=o.useState({firstName:"",lastName:"",gender:"Male",email:"",phone:"",whatsApp:"",dob:"",role:"HR"}),[s,P]=o.useState(x),c=(a,h)=>{P({...s,[a]:h})},[r,M]=o.useState(!1),y={open:!1,mssg:"",bgColor:m.palette.error.dark,anchorOrigin:{vertical:"top",horizontal:"right"}},[g,p]=o.useState(y),[b,Y]=o.useState(""),[A,B]=o.useState(""),T=()=>{const a={};let h=!0,f="";if(Object.keys(s).forEach(t=>{if(s[t]===""){f=`${t} field is mandatory`,h=!1;return}if(t==="email"){if(!K.isEmail(s[t])){f="Invalid Email",h=!1;return}s[t]!==x[t]&&(a[t]=s[t])}else if(t==="dob"){const v=j(new Date(s[t]),"dd/MM/yyyy");j(new Date(s[t]),"dd/MM/yyyy")!==j(new Date(x[t]),"dd/MM/yyyy")&&(a[t]=v)}else s[t]!==x[t]&&(a[t]=s[t])}),a.name={firstName:s.firstName,lastName:s.lastName},delete a.firstName,delete a.lastName,b!==""){if(b!==A){p({open:!0,mssg:"Password mismatch",bgColor:m.palette.error.dark,anchorOrigin:{vertical:"top",horizontal:"right"}});return}a.password=b}if(!h){p({open:!0,mssg:f,bgColor:m.palette.error.dark,anchorOrigin:{vertical:"top",horizontal:"right"}});return}R({body:{...a},token:F})};return o.useEffect(()=>{if(u){console.log(u);let a="";u.status==="FETCH_ERROR"?a="Server is not responding!":a=u.data.error,p({open:!0,mssg:a,bgColor:m.palette.error.dark,anchorOrigin:{vertical:"top",horizontal:"right"}}),console.error(u)}N&&(D(s),W(H({user:{...s,name:{firstName:s.firstName,lastName:s.lastName},dob:j(new Date(s.dob),"dd/MM/yyyy")}})),p({open:!0,mssg:"Profille Updated",bgColor:m.palette.success.dark,anchorOrigin:{vertical:"top",horizontal:"right"}}),M(a=>!a))},[u,N,m]),o.useEffect(()=>{if(i.role!=="HR"){w.push(`/user/${i._id}`);return}let a=i.dob;const[h,f,t]=i.dob.split("/");if(t){const v=new Date(`${t}-${f}-${h}`);a=C(v).format("YYYY-MM-DD")}D({...i,firstName:i.name.firstName,lastName:i.name.lastName,dob:C(a)}),P({...i,firstName:i.name.firstName,lastName:i.name.lastName,dob:C(a)})},[i,w]),e.jsxs(se,{children:[e.jsx(Q,{open:g.open,mssg:g.mssg,bgColor:g.bgColor,closeSnackbar:()=>{p(y)},severity:"error",anchorOrigin:g.anchorOrigin}),e.jsxs(S,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsx(E,{variant:"h4",children:r?"Update Admin":"Admin Profile"}),e.jsx(S,{direction:"row",spacing:2,children:e.jsx(k,{variant:"contained",onClick:()=>M(!r),children:r?"Cancel":"Edit"})})]}),e.jsxs(te,{sx:{padding:"30px",display:"flex",flexDirection:"column",gap:"50px",marginTop:"50px"},children:[e.jsxs(V,{children:[e.jsx(E,{gutterBottom:!0,variant:"h5",color:m.palette.grey[500],children:"Personal Information"}),e.jsxs(l,{container:!0,spacing:2,alignItems:"stretch",children:[e.jsxs(l,{item:!0,xs:12,sm:6,children:[e.jsx(n,{id:"firstname",children:"First Name"}),e.jsx(d,{disabled:!r,labelId:"firstname",fullWidth:!0,placeholder:"First Name",value:s.firstName,onChange:a=>{c("firstName",a.target.value)}})]}),e.jsxs(l,{item:!0,xs:12,sm:6,children:[e.jsx(n,{id:"lastname",children:"Last Name"}),e.jsx(d,{disabled:!r,labelId:"lastname",fullWidth:!0,placeholder:"Last Name",value:s.lastName,onChange:a=>{c("lastName",a.target.value)}})]}),e.jsxs(l,{item:!0,xs:12,sm:6,children:[e.jsx(n,{id:"gender",children:"Gender"}),e.jsxs(X,{disabled:!r,labelId:"gender",fullWidth:!0,label:"Gender",value:s.gender,onChange:a=>{c("gender",a.target.value)},children:[e.jsx(O,{value:"Male",children:"Male"}),e.jsx(O,{value:"Female",children:"Female"})]})]}),e.jsxs(l,{item:!0,xs:12,sm:6,children:[e.jsx(n,{id:"email",children:"Email"}),e.jsx(d,{disabled:!r,labelId:"email",fullWidth:!0,placeholder:"Email",type:"email",value:s.email,onChange:a=>{c("email",a.target.value)}})]}),e.jsxs(l,{item:!0,xs:12,sm:6,children:[e.jsx(n,{id:"phone",children:"Phone"}),e.jsx(d,{disabled:!r,labelId:"phone",fullWidth:!0,placeholder:"Phone",type:"number",value:s.phone,onChange:a=>{c("phone",a.target.value)}})]}),e.jsxs(l,{item:!0,xs:12,sm:6,children:[e.jsx(n,{id:"whatsapp",children:"Whatsapp No."}),e.jsx(d,{disabled:!r,labelId:"whatsapp",fullWidth:!0,placeholder:"WhatsApp",type:"number",value:s.whatsApp,onChange:a=>{c("whatsApp",a.target.value)}})]}),e.jsxs(l,{item:!0,xs:12,sm:6,children:[e.jsx(n,{id:"dob",children:"Date Of Birth"}),e.jsx(Z,{dateAdapter:ee,children:e.jsx(ae,{components:["DatePicker"],children:e.jsx(re,{disabled:!r,labelId:"dob",format:"DD/MM/YYYY",label:"Date Of Birth",disableFuture:!0,sx:{width:"100%"},value:s.dob===""?null:s.dob,onChange:a=>{c("dob",a)}})})})]}),e.jsxs(l,{item:!0,xs:12,sm:6,children:[e.jsx(n,{id:"role",children:"Admin Role"}),e.jsx(d,{disabled:!0,labelId:"role",fullWidth:!0,placeholder:"Admin Role",value:s.role})]}),e.jsxs(l,{item:!0,xs:12,sm:6,children:[e.jsx(n,{id:"password",children:"Change Password"}),e.jsx(d,{disabled:!r,labelId:"password",fullWidth:!0,placeholder:"Change Password",value:b,type:"password",onChange:a=>{Y(a.target.value)}})]}),e.jsxs(l,{item:!0,xs:12,sm:6,children:[e.jsx(n,{id:"confirmPassword",children:"Confirm Password"}),e.jsx(d,{disabled:!r,labelId:"confirmPassword",type:"password",fullWidth:!0,placeholder:"Confirm Password",value:A,onChange:a=>{B(a.target.value)}})]})]})]}),e.jsx(_,{disabled:!r,loading:L,loadingIndicator:e.jsx(q,{}),variant:"contained",sx:{alignSelf:"flex-start"},onClick:T,children:"Update"})]})]})}function fe(){return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx("title",{children:" Admin Profile | Employee Management System "})}),e.jsx(ie,{})]})}export{fe as default};