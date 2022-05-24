import AuthForm from '../components/AuthForm';
import Link from "next/link"
function Register() {
  return (
    <div className = "vertical-center" style = {{overflow: "hidden"}}>
      <div className = "row">
        <div 
        className = " offset-md-4 col-md-4 text-center p-5" 
        style = {{
          borderRadius: "10px",
          border: "solid 0.2px gray"
          }}
        >
          <h1 className = "display-4">Register</h1>
          <AuthForm register = {true}/>
          <Link href="/login">
            <h7 className = "text-primary" style = {{cursor:"pointer"}}>Already have an account?</h7>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Register