import{j as e,a8 as oe,T as R,P as s,i as ie,B as w,o as _,r as h,q as U,w as $,ad as le,S as M,A as ce,v as A,a_ as de,ai as pe,aj as N,ae as ue,af as he,L as ge,E as xe,ax as me,a$ as fe,D as be,av as ye,W as je}from"./index-b845eb7f.js";import{I as ve,C as Ce}from"./index-0ae2faa8.js";import{T as E,a as b,b as ke,c as Te,d as Se,e as Re,f as Pe,g as we}from"./TableSortLabel-01651e90.js";import{C as q}from"./Checkbox-88c8303c.js";import{O as Ae}from"./Select-ef47f645.js";import{C as Ee}from"./Container-cab2a165.js";import{C as Fe}from"./Card-75b46024.js";function z({query:t}){return e.jsx(E,{children:e.jsx(b,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(oe,{sx:{textAlign:"center"},children:[e.jsx(R,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(R,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',t,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}z.propTypes={query:s.string};const Ie=ie(w)(({theme:t,ownerState:n})=>{const r=t.palette.mode==="light",c=n.variant==="filled",a=n.variant==="outlined",d=n.variant==="soft",p={...n.color==="default"&&{...c&&{color:r?t.palette.common.white:t.palette.grey[800],backgroundColor:t.palette.text.primary},...a&&{backgroundColor:"transparent",color:t.palette.text.primary,border:`2px solid ${t.palette.text.primary}`},...d&&{color:t.palette.text.secondary,backgroundColor:_(t.palette.grey[500],.16)}}},g={...n.color!=="default"&&{...c&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main},...a&&{backgroundColor:"transparent",color:t.palette[n.color].main,border:`2px solid ${t.palette[n.color].main}`},...d&&{color:t.palette[n.color][r?"dark":"light"],backgroundColor:_(t.palette[n.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:t.spacing(0,.75),fontSize:t.typography.pxToRem(12),fontWeight:t.typography.fontWeightBold,transition:t.transitions.create("all",{duration:t.transitions.duration.shorter}),...p,...g}}),D=h.forwardRef(({children:t,color:n="default",variant:r="soft",startIcon:c,endIcon:a,sx:d,...p},g)=>{const i=U(),x={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return e.jsxs(Ie,{ref:g,component:"span",ownerState:{color:n,variant:r},sx:{...c&&{pl:.75},...a&&{pr:.75},...d},theme:i,...p,children:[c&&e.jsxs(w,{sx:{mr:.75,...x},children:[" ",c," "]}),t,a&&e.jsxs(w,{sx:{ml:.75,...x},children:[" ",a," "]})]})});D.propTypes={children:s.node,endIcon:s.object,startIcon:s.object,sx:s.object,variant:s.oneOf(["filled","outlined","ghost","soft"]),color:s.oneOf(["default","primary","secondary","info","success","warning","error"])};const H=D;function B({selected:t,id:n,employeeId:r,name:c,profilePic:a,department:d,role:p,salary:g,finalAmount:i,handleClick:x}){const y=$(),[k,m]=h.useState(""),C=j=>{j.target.closest(".checkbox-cell")||y.push(`/user/${n}`)};return h.useEffect(()=>{const j=le(a);m(j)},[a]),e.jsxs(E,{hover:!0,tabIndex:-1,role:"checkbox",selected:t,onClick:C,sx:{cursor:"pointer"},children:[e.jsx(b,{padding:"checkbox",children:e.jsx(q,{disableRipple:!0,checked:t,onChange:x,className:"checkbox-cell"})}),e.jsx(b,{component:"th",scope:"row",padding:"none",children:e.jsxs(M,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(ce,{src:k,alt:c}),e.jsx(R,{variant:"subtitle2",noWrap:!0,children:c})]})}),e.jsx(b,{children:r}),e.jsx(b,{children:p}),e.jsx(b,{children:d}),e.jsx(b,{align:"center",children:e.jsx(H,{children:g.toFixed(2)})}),e.jsx(b,{align:"center",children:e.jsxs(H,{children:["₹",i.toFixed(2)]})})]})}B.propTypes={id:s.string.isRequired,employeeId:s.any,profilePic:s.any,department:s.any,handleClick:s.func,name:s.any,role:s.any,selected:s.any,salary:s.number,finalAmount:s.number};const Oe={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function Ne(t,n,r){return t?Math.max(0,(1+t)*n-r):0}function W(t,n,r){return t[r]===null?1:n[r]===null||n[r]<t[r]?-1:n[r]>t[r]?1:0}function Ue(t,n){return t==="desc"?(r,c)=>W(r,c,n):(r,c)=>-W(r,c,n)}function Le({inputData:t,comparator:n,filterName:r}){const c=t.map((a,d)=>[a,d]);return c.sort((a,d)=>{const p=n(a[0],d[0]);return p!==0?p:a[1]-d[1]}),t=c.map(a=>a[0]),r&&(t=t.filter(a=>a.name.firstName.toLowerCase().indexOf(r.toLowerCase())!==-1||a.name.lastName.toLowerCase().indexOf(r.toLowerCase())!==-1)),t}function V({order:t,orderBy:n,rowCount:r,headLabel:c,numSelected:a,onRequestSort:d,onSelectAllClick:p}){const g=i=>x=>{d(x,i)};return e.jsx(ke,{children:e.jsxs(E,{children:[e.jsx(b,{padding:"checkbox",children:e.jsx(q,{indeterminate:a>0&&a<r,checked:r>0&&a===r,onChange:p})}),c.map(i=>e.jsx(b,{align:i.align||"left",sortDirection:n===i.id?t:!1,sx:{width:i.width,minWidth:i.minWidth},children:e.jsxs(Te,{hideSortIcon:!0,active:n===i.id,direction:n===i.id?t:"asc",onClick:g(i.id),children:[i.label,n===i.id?e.jsx(w,{sx:{...Oe},children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},i.id))]})})}V.propTypes={order:s.oneOf(["asc","desc"]),orderBy:s.string,rowCount:s.number,headLabel:s.array,numSelected:s.number,onRequestSort:s.func,onSelectAllClick:s.func};function Q({emptyRows:t,height:n}){return t?e.jsx(E,{sx:{...n&&{height:n*t}},children:e.jsx(b,{colSpan:9})}):null}Q.propTypes={emptyRows:s.number,height:s.number};function G({numSelected:t,filterName:n,onFilterName:r,removeEmployee:c,setSnackbar:a,refetch:d}){const p=U(),g=A(l=>l.user.token),i=A(l=>l.user.user.role),[x,{isLoading:y,data:k,error:m}]=de(),C=h.useRef(),j=l=>{const T=new FormData;T.append("attendance",l.target.files[0]),x({token:g,body:T})},F=e.jsxs(e.Fragment,{children:[e.jsx(ge,{loading:y,loadingIndicator:e.jsx(xe,{}),variant:"contained",color:"primary",onClick:()=>{C.current.click()},children:"Upload Attendance"}),e.jsx("input",{ref:C,type:"file",accept:".csv",style:{display:"none"},onChange:j})]});return h.useEffect(()=>{if(m){let l="";m.status==="FETCH_ERROR"?l="Server is not responding!":l=m.data.error,a({open:!0,mssg:l,bgColor:p.palette.error.dark,anchorOrigin:{vertical:"top",horizontal:"center"}})}k&&(a({open:!0,mssg:"Attendance Uploaded!",bgColor:p.palette.success.dark,anchorOrigin:{vertical:"top",horizontal:"center"}}),d())},[m,k,p,d,a]),e.jsxs(pe,{sx:{height:96,display:"flex",justifyContent:"space-between",p:l=>l.spacing(0,1,0,3),...t>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[t>0?e.jsxs(R,{component:"div",variant:"subtitle1",children:[t," selected"]}):e.jsxs(e.Fragment,{children:[e.jsx(Ae,{value:n,onChange:r,placeholder:"Search user...",startAdornment:e.jsx(ve,{position:"start",children:e.jsx(N,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),i==="HR"&&F]}),i==="HR"&&t===1&&e.jsx(ue,{title:"Delete",children:e.jsx(he,{onClick:c,children:e.jsx(N,{icon:"eva:trash-2-fill"})})})]})}G.propTypes={numSelected:s.number,filterName:s.string,onFilterName:s.func,removeEmployee:s.func,setSnackbar:s.func,refetch:s.func};function _e(){const t=$(),n=U(),r=A(o=>o.user.token),c=A(o=>o.user.user.role),{data:a,refetch:d}=me({token:r}),[p]=fe(),g={open:!1,mssg:"",bgColor:n.palette.error.dark,anchorOrigin:{vertical:"top",horizontal:"center"}},[i,x]=h.useState(g),[y,k]=h.useState([]),[m,C]=h.useState(0),[j,F]=h.useState("asc"),[l,T]=h.useState([]),[I,J]=h.useState("name"),[P,K]=h.useState(""),[S,X]=h.useState(5),Y=(o,u)=>{u!==""&&(F(I===u&&j==="asc"?"desc":"asc"),J(u))},Z=o=>{if(o.target.checked){const u=y.map(f=>f._id);T(u);return}T([])},ee=(o,u)=>{const f=l.indexOf(u);let v=[];f===-1?v=v.concat(l,u):f===0?v=v.concat(l.slice(1)):f===l.length-1?v=v.concat(l.slice(0,-1)):f>0&&(v=v.concat(l.slice(0,f),l.slice(f+1))),T(v)},te=(o,u)=>{C(u)},ne=o=>{C(0),X(parseInt(o.target.value,10))},re=o=>{C(0),K(o.target.value)},O=Le({inputData:y,comparator:Ue(j,I),filterName:P}),L=o=>{p({token:r,id:o}).then(()=>{const u=y.filter(f=>f._id!==o);k(u)}),T([])},se=!O.length&&!!P,ae=()=>{t.push("/newUser")};return h.useEffect(()=>{a&&k(a.employees)},[a]),e.jsxs(Ee,{children:[e.jsx(Ce,{open:i.open,mssg:i.mssg,bgColor:i.bgColor,closeSnackbar:()=>{x(g)},severity:"error",anchorOrigin:i.anchorOrigin}),e.jsxs(M,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsx(R,{variant:"h4",children:"Users"}),c==="HR"&&e.jsx(be,{variant:"contained",color:"inherit",startIcon:e.jsx(N,{icon:"eva:plus-fill"}),onClick:ae,children:"New User"})]}),e.jsxs(Fe,{children:[e.jsx(G,{numSelected:l.length,filterName:P,onFilterName:re,removeEmployee:()=>L(l[0]),setSnackbar:x,refetch:d}),e.jsx(ye,{children:e.jsx(Se,{sx:{overflow:"unset"},children:e.jsxs(Re,{sx:{minWidth:800},children:[e.jsx(V,{order:j,orderBy:I,rowCount:O.length,numSelected:l.length,onRequestSort:Y,onSelectAllClick:Z,headLabel:[{id:"name",label:"Name"},{id:"employeeId",label:"Employee ID"},{id:"role",label:"Role"},{id:"department",label:"Department"},{id:"salary",label:"Base Salary",align:"center"},{id:"finalSalary",label:"Salary Till Now",align:"center"}]}),e.jsxs(Pe,{children:[O.slice(m*S,m*S+S).map(o=>e.jsx(B,{id:o._id,employeeId:o.employeeId,name:`${o.name.firstName} ${o.name.lastName}`,role:o.role,salary:o.salary.base,department:o.department?o.department.name:"-",profilePic:o.profilePic,selected:l.indexOf(o._id)!==-1,handleClick:u=>ee(u,o._id),removeEmployee:()=>L(o._id),finalAmount:o.salary.finalAmount},o._id)),e.jsx(Q,{height:77,emptyRows:Ne(m,S,y.length)}),se&&e.jsx(z,{query:P})]})]})})}),e.jsx(we,{page:m,component:"div",count:y.length,rowsPerPage:S,onPageChange:te,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:ne})]})]})}function Be(){return e.jsxs(e.Fragment,{children:[e.jsx(je,{children:e.jsx("title",{children:" User | Employee Management System "})}),e.jsx(_e,{})]})}export{Be as default};
