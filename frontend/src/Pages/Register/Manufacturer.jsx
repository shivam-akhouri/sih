import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Manufacturer() {
  const url = "http://localhost:8000/api/createSupplier";
  const [formValue, setformValue] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    companyname: "",
    companyaddr: "",
    postal: "",
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
    loginFormData.append("", formValue.companyname)
    loginFormData.append("", formValue.companyaddr)
    loginFormData.append("", formValue.postal)
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
            Supplier Registration
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
                Company Name
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  name="companyname"
                  id="pass"
                  type="text"
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  value={formValue.companyname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-6  w-full">
              <label
                for="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Company Address
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  name="companyaddr"
                  type="text"
                  id="pass"
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  value={formValue.companyaddr}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-6  w-full">
                <label
                  for="pass"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Pin Code
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    name="postal"
                    type="tel"
                    maxLength={6}
                    id="pass"
                    className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    value={formValue.postal}
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
                    type="tel"
                    maxLength={10}
                    id="pass"
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
                    type="tel"
                    maxLength={6}
                    id="pass"
                    className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    value={formValue.license}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
            <Link to="/Manufacturer/SupplierPass">
              <button
                // onChange={handleSubmit}
                type="submit"  
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
               
                Create my account
               
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Manufacturer;
