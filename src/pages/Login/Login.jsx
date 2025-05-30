import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { signIn, signInWithGoogle, resetPassword, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      toast.success('SignIn Successfully!')
      navigate(from);
    }
    catch (err) {
      toast.error(err.code);
      setLoading(false);
    }
  }

  // handle google signIn
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success('SignIn Successfully!');
      navigate(from);
    }
    catch (err) {
      toast.error(err.code);
      setLoading(false);
    }
  }

  // reset password
  const handleResetPassword = async () => {
    console.log(email, 'email');
    if (!email) return toast.error('Please write your email first!')

    try {
      await resetPassword(email);
      toast.success('Request Success! Check your email for further process...')
      setLoading(false)
    }
    catch (err) {
      toast.error(err.code);
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Log In | BoiPoka</title>
      </Helmet>

      <div className='flex justify-center items-center min-h-screen p-4 md:p-0'>
        <div className='flex flex-col min-w-full md:min-w-md p-4 md:p-8  rounded-md shadow-md border border-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Log In</h1>
            <p className='text-sm text-gray-400'>
              Sign in to access your account
            </p>
          </div>
          <form
            onSubmit={handleLogin}
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-none shadow-md  focus:outline-rose-500 bg-gray-100 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between'>
                  <label htmlFor='password' className='text-sm mb-2'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  autoComplete='current-password'
                  id='password'
                  required
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-none shadow-md  focus:outline-rose-500 bg-gray-100 text-gray-900'
                />
              </div>
            </div>

            <div>
              <button
                disabled={loading}
                type='submit'
                className=' w-full h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c]  hover:scale-105 active:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] active:from-[#be123c] active:to-[#fb7185]'
              >
                {loading ? <TbFidgetSpinner className='animate-spin m-auto text-xl' /> : 'Sign In'}
              </button>
            </div>
          </form>
          <div className='space-y-1'>
            {/* Modal for forget password */}
            <button className="text-xs hover:underline hover:text-rose-500 text-gray-400" onClick={() => document.getElementById('my_modal_3').showModal()}>Forgot password?</button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box max-w-md">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className='space-y-4'>
                  <div>
                    <label htmlFor='email' className='block mb-2 text-sm'>
                      Email
                    </label>
                    <input
                      type='email'
                      disabled
                      placeholder={email}
                      className='w-full px-3 py-2 border rounded-md border-none shadow-md  focus:outline-rose-500 bg-gray-100 text-gray-900 placeholder:text-gray-800'
                      data-temp-mail-org='0'
                    />
                  </div>
                  <div>
                    <button
                      onClick={handleResetPassword}
                      disabled={loading}
                      type='submit'
                      className='w-full h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c]  hover:scale-105 active:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] active:from-[#be123c] active:to-[#fb7185]'
                    >
                      {loading ? <TbFidgetSpinner className='animate-spin m-auto text-xl' /> : 'Forget Password'}
                    </button>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Login with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className='disabled:cursor-not-allowed flex justify-center items-center space-x-2 border my-3 p-2 border-gray-300 border-rounded cursor-pointer hover:bg-gray-900  active:bg-gray-900 active:text-white hover:text-white font-semibold rounded-md'>
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </button>
          <p className='px-6 text-sm text-center text-gray-400'>
            Don&apos;t have an account yet?{' '}
            <Link
              to='/signup'
              className='hover:underline hover:text-rose-500 text-gray-600'
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}

export default Login;
