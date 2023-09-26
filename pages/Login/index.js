import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  // const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/login", { email, password })
      .then((res) => {
        console.log(res);
        if(res.data.Status=="Success"){
          if(res.data.role==="admin"){
            router.push("/Dashboard");
          }
          else{
            router.push("/Home")
          }
        }
        // router.push("/Login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="h-screen flex bg-gray-bg1">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
            Login in to your account 🔐
          </h1>

          <form onSubmit={handleSubmit}>
           
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="email"
                autoComplete="off"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
                name="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
                className={`bg-blue-400 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
