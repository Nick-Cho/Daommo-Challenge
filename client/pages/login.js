import AuthForm from "../components/AuthForm"
import loginpic from "../public/assets/images/conversation.png"
import Link from "next/link"
function Login() {
  return (
    <div className = "vertical-center" style = {{overflow: "hidden"}}>
      <div className = "row" >
        {/* <div className = " offset-md-2 col-md-4 ">
          <img src = {loginpic}/>
        </div> */}
        <div 
        className = " offset-md-4 col-md-4 text-center p-5" 
        style = {{
          borderRadius: "10px",
          border: "solid 0.2px gray"
          }}
        >
          <h1 className = "display-4">Login</h1>
          <AuthForm/>
          <Link href="/register">
            <h7 className = "text-primary" style = {{cursor:"pointer"}}>Don't have an account?</h7>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Login