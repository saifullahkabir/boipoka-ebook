import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from '../../api/utils';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
  const { createUser, signInWithGoogle, updateUserProfile, loading, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value;
    const password = form.password.value.trim();
    const image = form.image.files[0];

    if (!name) {
      return toast.error('Name is required!')
    }

    try {
      setLoading(true);
      // 1. Upload image and get image url
      const image_url = await imageUpload(image);

      // 2.User registration
      await createUser(email, password);

      // 3. save user name and photo in firebase
      await updateUserProfile(name, image_url);
      toast.success('SignUp Successfully!');
      navigate('/');

    }
    catch (err) {
      toast.error(err.message);
      setLoading(false)
    }

  }

  // handle google signIn
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success('SignUp Successfully!');
      navigate('/');
    }
    catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <>
      <Helmet>
        <title>Sign Up | BoiPoka</title>
      </Helmet>
      
      <div className='flex justify-center items-center min-h-screen p-4 md:p-0'>
        <div className='flex flex-col min-w-full md:min-w-md p-4 md:p-8  rounded-md shadow-md border border-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
            <p className='text-sm text-gray-400'>Welcome to BoiPoka</p>
          </div>
          <form
            onSubmit={handleSignUp}
            className='space-y-6'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter Your Name Here'
                  className='w-full px-3 py-2 border rounded-md border-none shadow-md  focus:outline-rose-500 bg-gray-100 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <label htmlFor='image' className='block mb-2 text-sm'>
                  Select Image:
                </label>
                <input
                  required
                  type='file'
                  id='image'
                  name='image'
                  accept='image/*'
                  className='w-full px-3 py-2 border rounded-md border-none shadow-md  focus:outline-rose-500 bg-gray-100 text-gray-900'
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
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
                  autoComplete='new-password'
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
                className='w-full h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c]  hover:scale-105 active:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] active:from-[#be123c] active:to-[#fb7185]'
              >
                {loading ? <TbFidgetSpinner className='animate-spin m-auto text-xl' /> : 'Sign Up'}
              </button>
            </div>
          </form>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Signup with social accounts
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
            Already have an account?{' '}
            <Link
              to='/login'
              className='hover:underline hover:text-rose-500 text-gray-600'
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp
