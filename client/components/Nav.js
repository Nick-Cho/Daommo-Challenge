import Link from "next/link"
function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      
      <a class="navbar-brand text-light" style = {{marginLeft: "3rem"}}>Navbar</a>
      
      <div class="collapse navbar-collapse justify-content-end" style ={{marginRight: "2rem"}} id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item active">
            <Link  href="/">
              <a class="nav-link text-light">Home</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link  href="/login">
              <a class="nav-link text-light">Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav