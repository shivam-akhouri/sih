import React from "react";
import axios from "axios";

function Doctor() {
  const url = "http://localhost:8000/api/createDoctor";
  const [formValue, setformValue] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    license: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("", formValue.firstname)
    loginFormData.append("", formValue.lastname)
    loginFormData.append("", formValue.email)
    loginFormData.append("", formValue.phone)
    loginFormData.append("", formValue.license)
    console.log(formValue)
    axios.post(url, formValue).then(console.log)
      .catch(console.log)



  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="h-auto bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        {/* <h1>Login</h1> */}
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabindex="0"
            className="flex justify-center focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Registration Form
          </p>

          <div className="w-full flex items-center justify-between py-5">
            {/* <hr className="w-full bg-gray-400" />
            
            <hr className="w-full bg-gray-400  " /> */}
          </div>
          <form method="post" onSubmit={handleSubmit}>
            <div>
              {/* <form> */}
              <label
                id="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                First Name
              </label>
              <input
                name="firstname"
                aria-labelledby="email"
                type="text"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                value={formValue.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="mt-6  w-full">
              <label
                for="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Last Name
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  name="lastname"
                  id="pass"
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  value={formValue.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-6  w-full">
              <div>
                {/* <form> */}
                <label
                  id="email"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Email id
                </label>
                <input
                  name="email"
                  aria-labelledby="email"
                  type="email"
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  value={formValue.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-6  w-full">
              <label
                for="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Phone Number
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  name="phone"
                  id="pass"
                  type="number"
                  maxLength={10}
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  value={formValue.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-6  w-full">
              <label
                for="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Government License
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  name="license"
                  type="number"
                  maxLength={6}
                  id="pass"
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  value={formValue.license}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                // onSubmit={(e) => handleSubmit(e)}

                type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Create my account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
