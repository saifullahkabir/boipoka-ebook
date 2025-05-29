import Container from './Container'
import { AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import avatarImg from '../../assets/placeholder.jpg'
import logo2 from '../../assets/bug (1).png'
import useAuth from '../../hooks/useAuth'
import { getActiveClass } from '../utils/activeLinkClass'

const Navbar = () => {

  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef()

  // Click outside logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='fixed w-full bg-white z-20 shadow-sm'>
      <div className='py-4 border-b-[1px] border-b-gray-100'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
              <h2 className='text-2xl md:text-3xl font-bold flex justify-center items-center'>BoiP<span><img className=' w-[24px] md:w-[30px]' src={logo2} alt="" /></span>ka</h2>
            </Link>
            {/* Dropdown Menu */}
            <div className='relative'
              ref={dropdownRef}>
              {/* Dropdown btn */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className='px-2 py-1 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
              >
                <AiOutlineMenu />
                <div className=''>
                  {/* Avatar */}
                  <img
                    className='rounded-full w-[30px] h-[30px]'
                    referrerPolicy='no-referrer'
                    src={user && user.photoURL ? user.photoURL : avatarImg}
                    alt='profile'

                  />
                </div>
              </div>
              {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] sm:w-[20vw] lg:w-[15vw] xl:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                  <div className='flex flex-col cursor-pointer'>
                    <NavLink
                      to='/'
                      className={getActiveClass}
                    >
                      Home
                    </NavLink>

                    {user ? (
                      <>
                        <NavLink
                          to='/my-books'
                          className={getActiveClass}
                        >
                          My Books
                        </NavLink>
                        <NavLink
                          to='/add-book'
                          className={getActiveClass}
                        >
                          Add Book
                        </NavLink>
                        <NavLink
                          to='/manage-books'
                          className={getActiveClass}
                        >
                          Manage Books
                        </NavLink>
                        <NavLink
                          to='/manage-users'
                          className={getActiveClass}
                        >
                          Manage Users
                        </NavLink>
                        <div
                          onClick={logOut}
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <NavLink
                          to='/login'
                          className={getActiveClass}
                        >
                          Login
                        </NavLink>
                        <NavLink
                          to='/signup'
                          className={getActiveClass}
                        >
                          Sign Up
                        </NavLink>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
