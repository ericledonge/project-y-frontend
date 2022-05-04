import { useState } from "react";
import { useRouter } from 'next/router'
import { supabase } from "../libs/supabaseClient";

const SignUp = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await singUpWithFirebase({ name, email, password });
      // navigate('/');
    } catch (error) {
      // toast.error('Something went wrong with registration');
    }
  };

  const handleSignInWithFacebook = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: 'facebook',
      })
      if (error) throw error
      router.push('/')
    } catch (error) {
      alert(error.error_description || error.message)
    }
  }

  return (
    <>
      <h1>Sign Up</h1>

      <div className="flex-col">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={email} onChange={handleChange} placeholder="Email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handleChange} placeholder="Password"/>
        </div>

      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
      </div>

      Or

      <div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up with Google</button>
        <button onClick={handleSignInWithFacebook} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up with Facebook</button>
      </div>


    </>)
}

export default SignUp
