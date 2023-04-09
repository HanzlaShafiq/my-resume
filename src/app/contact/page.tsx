import { Social } from "@/social/page";
import React from "react";
import { Head } from "@/heade/page";
export default function cer() {
  return (
    <>
      <body className="bg-slate-600">



        <Head />

        <Social />



        <div className=" flex items-center  mx-auto leading-8 mb-10">
          <div className="text-gray-500 px-10 mx-auto">
            <h1 className="text-center text-4xl text-white ">Contact</h1>
            <p className="text-center text-white my-5">Get in touch with me</p>
            <form action="mailto:hanzlashafiq99@gmail.com" method="POST">
              <div>
                <input
                  placeholder="Your name"
                  type="text"
                  required
                  name="name"
                  className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
                />
              </div>
              <div className="my-5">
                <input
                  required
                  className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
                  placeholder="Your email"
                  type="email"
                  name="email"
                />
              </div>
              <div>
                <textarea
                  rows={8}
                  name="meraMessage"
                  required
                  className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="mx-auto block px-5  rounded-md  bg-gradient-to-b from-gray-300 text-black to-gray-600">
                Submit
              </button>
            </form>
          </div>
        </div>

        <footer>
          <div className="box-border font-thin h-auto w-lg p-4  bg-slate-800 rounded-t-3xl">
            <div className="sm:flex sm:items-center sm:justify-between  text-gray-300 text-2xl  rounded-full p-3  " >
              <p className=" text-2xl my-auto">HANZLA SHAFIQ <br /> web developer </p>
              <div className=" my-auto">
                <a href="mailto:hanzlashafiq99@gmail.com" >hanzlashafiq99@gamil.com</a>
                <br />
                <a href="https://wa.me/923040666355/">+923040666355</a>
              </div>
              <img src="./image.jpeg"className="rounded h-32 w-32" alt="Hanzla Shafiq" />



            </div>

          </div>
        </footer>

      </body>
    </>

  )
}