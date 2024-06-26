import{q as T,aB as P,w as L,b2 as B,r as s,b3 as O,j as e,B as R,b4 as F,o as z,S as v,T as M,af as V,aj as W,L as A,E as G,W as _}from"./index-b845eb7f.js";import{v as q}from"./index-346462fc.js";import{C as D,I as H}from"./index-0ae2faa8.js";import{C as J}from"./Card-75b46024.js";import{T as S}from"./TextField-d83749d3.js";import"./Select-ef47f645.js";import"./isMuiElement-b9421f36.js";function N(){const r=T(),c=P(),g=L(),[b,{error:a,data:n,isLoading:k}]=B(),[i,C]=s.useState(""),[l,w]=s.useState(""),[u,m]=s.useState(!0),[h,p]=s.useState(!0),[d,y]=s.useState(!1),x={open:!1,mssg:"",bgColor:r.palette.error.dark,anchorOrigin:{vertical:"top",horizontal:"right"}},[o,f]=s.useState(x),I=()=>{if(!q.isEmail(i)){m(!1);return}if(m(!0),l.length===0){p(!1);return}p(!0);const t=JSON.stringify({email:i,password:l});b({body:t})};s.useEffect(()=>{if(a){let t="";a.status==="FETCH_ERROR"?t="Server is not responding!":t=a.data.error,f({open:!0,mssg:t,bgColor:r.palette.error.dark,anchorOrigin:{vertical:"top",horizontal:"right"}}),console.error(a)}if(n){const{id:t,token:j}=n;c(O({id:t,token:j})),localStorage.setItem("id",t),localStorage.setItem("token",j),g.push("/")}},[a,n,g,r,c]);const E=e.jsxs(v,{spacing:6,children:[e.jsx(S,{name:"email",label:"Email address",value:i,helperText:!u&&"Invalid Email",error:!u,onChange:t=>{C(t.target.value)}}),e.jsx(S,{name:"password",label:"Password",type:d?"text":"password",value:l,helperText:!h&&"Invalid Password",error:!h,onChange:t=>{w(t.target.value)},InputProps:{endAdornment:e.jsx(H,{position:"end",children:e.jsx(V,{onClick:()=>y(!d),edge:"end",children:e.jsx(W,{icon:d?"eva:eye-fill":"eva:eye-off-fill"})})})}}),e.jsx(A,{loading:k,loadingIndicator:e.jsx(G,{}),fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:I,children:"Login"})]});return e.jsxs(R,{sx:{...F({color:z(r.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(D,{open:o.open,mssg:o.mssg,bgColor:o.bgColor,closeSnackbar:()=>{f(x)},severity:"error",anchorOrigin:o.anchorOrigin}),e.jsx(v,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(J,{sx:{p:5,width:1,maxWidth:420},children:[e.jsx(M,{variant:"h4",gutterBottom:!0,children:"Sign in"}),E]})})]})}function ee(){return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx("title",{children:" Login | Employee Management System "})}),e.jsx(N,{})]})}export{ee as default};
