import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function DocPass() {
  const [formValue, setformValue] = React.useState({
    
    password: ''
  });

  const handleSubmit = async() => {
    // // store the states in the form data
    // const loginFormData = new FormData();
    // loginFormData.append("username", formValue.email)
    // loginFormData.append("password", formValue.password)
  
    // try {
    //   // make axios post request
    //   const response = await axios({
    //     method: "post",
    //     url: "/api/login",
    //     data: loginFormData,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    // } catch(error) {
    //   console.log(error)
    // }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
     
          <p
            tabindex="0"
            className="flex justify-center focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Password
          </p>
        

          

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
           
            <hr className="w-full bg-gray-400  " />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              {/* <form> */}
              <label
                id="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Password
              </label>
              <input
              name="password"
              value={formValue.password}
              onChange={handleChange}
      
                type="password"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-6  w-full">
              <label
                for="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Confirm Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  id="pass"
                  type="password"
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                role="button" type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
               Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DocPass;
