import { Container,LogoutBtn,Logo } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state)=> state.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/megaBlog/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/megaBlog/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/megaBlog/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/megaBlog/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/megaBlog/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className=' py-3 shadow bg-blue-600'>
      <Container>
        <nav className=' flex'>
          <div className=' mr-4'>
            <Link to='/megaBlog/'>
              <Logo />
            </Link>
          </div>
          <ul className=' flex ml-auto'>
            {
              navItems.map((item) => 
              item.active ? (
                <li key = {item.name}>
                    <button 
                    className=' inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    onClick={()=> navigate(item.slug)}>
                      {item.name}
                    </button>
                </li>
              ) : null)
            }
            {
              authStatus && (<li><LogoutBtn /></li>)
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header