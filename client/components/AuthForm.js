function AuthForm({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  register,
}) {
  return (
    <form>
      <div className = "form-group pt-5">
        <div className="row">
          <div className="col-sm-12">
            <input value={email} type = "text" placeHolder="Email" className = "form-control"/>   
          </div>
        </div>

        {register && 
        <div className = "row pt-4">
          <div className = "col-sm-12">
            <input value={username} type="text" placeHolder="Username" className = "form-control"/>
          </div>
        </div>
        }
        
        <div className="form-group py-4">
          <div className = "row">
            <div className = "col-sm-12">
              <input value ={password} type = "password" placeholder="Password" className = "form-control"/>
            </div>
          </div>
        </div>

        <div className = "form-group">
          <button type="submit" className="button text-light">{register ? "Register" : "Log in"}</button>
        </div>
        
      </div>
    </form>
  )
}

export default AuthForm