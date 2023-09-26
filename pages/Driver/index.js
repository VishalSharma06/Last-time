import React from "react";
import { useState } from "react";
import axios from "axios";

const index = () => {
  const [VehicleNumber, setVehicleNumber] = useState();
  const [LicenseNumber, setLicenseNumber] = useState();
  const [ContactNumber, setContactNumber] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const intValue1 = parseInt(VehicleNumber, 10);
    const intValue2 = parseInt(LicenseNumber, 10);
    const intValue3 = parseInt(ContactNumber, 10);
    axios
      .post("http://localhost:3000/api/driver", {
        intValue1,
        intValue2,
        intValue3,
      })
      .then((res) => {
        // router.push('/Login')
        alert("Data Inserted Sucessfully");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="min-h-screen bg-blue-100 py-6 flex flex-col justify-center sm:py-12">
        <form
          onSubmit={handleSubmit}
          className="relative py-3 sm:max-w-xl sm:mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Driver Registration</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="VehicleNumber"
                      name="VehicleNumber"
                      type="number"
                      onChange={(e) => setVehicleNumber(e.target.value)}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Vehicle Number"
                    />
                    <label
                      for="VehicleNumber"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Vehicle Number
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="LicenseNumber"
                      name="number"
                      type="LicenseNumber"
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="License Number"
                    />
                    <label
                      for="LicenseNumber"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      License Number
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="ContactNumber"
                      name="ContactNumber"
                      type="number"
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Contact Number"
                    />
                    <label
                      for="Contact Number"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Contact Number
                    </label>
                  </div>
                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
