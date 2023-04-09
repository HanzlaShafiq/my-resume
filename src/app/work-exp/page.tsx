
import { Head } from "@/heade/page";
export default function cont() {
  return (
    <>
      <body className="bg-gradient-to-r from-pink-500 to-violet-500">



        <Head />


        <div className=" flex items-center max-w-7xl mx-auto leading-8 mb-10">
          <div className="text-gray-500 px-10 mt-32 mx-auto">
            <h1 className="text-center text-4xl text-white mb-10">Portfolio</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full  ">

              <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
                <div>
                  <img
                    src={"/chakra.png"}alt="chakra"
                    className="w-60 h-40 rounded-t-md"
                  />
                </div>
                <div className="flex justify-between px-5 text-white">
                  <button className="p-4 hover:scale-105 duration-200">
                    <a href="https://chakra-iota.vercel.app/" target={"_blank"}>
                      Demo
                    </a>
                  </button>
                  <button className="p-4 hover:scale-105 duration-200">
                    <a href="https://github.com/HanzlaShafiq/PIAIC_Price-UI-with-Next.js-13-Chakra" target={"_blank"}>
                      Code
                    </a>
                  </button>
                </div>
              </div>



              <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
                <div>
                  <img
                    src={"/todo.png"}alt="todo"
                    className="w-60 h-40 rounded-t-md "
                  />
                </div>
                <div className="flex justify-between px-5 text-white">
                  <button className="p-4 hover:scale-105 duration-200">
                    <a href="https://todo-app-nu-jade.vercel.app/" target={"_blank"}>
                      Demo
                    </a>
                  </button>
                  <button className="p-4 hover:scale-105 duration-200">
                    <a href="https://github.com/HanzlaShafiq/PIAIC_to-do-app" target={"_blank"}>
                      Code
                    </a>
                  </button>
                </div>
              </div>



              <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
                <div>
                  <img
                    src={"/piaic.png"}alt="piaic"
                    className="w-60 h-40 rounded-t-md"
                  />
                </div>
                <div className="flex justify-between px-5 text-white">
                  <button className="p-4 hover:scale-105 duration-200">
                    <a href="https://piaic-mu.vercel.app/" target={"_blank"}>
                      Demo
                    </a>
                  </button>
                  <button className="p-4 hover:scale-105 duration-200">
                    <a href="https://github.com/HanzlaShafiq/PIAIC_webside" target={"_blank"}>
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" flex items-center max-w-7xl   mx-auto leading-8 mb-10">
          <div className=" px-10 mt-32 mx-auto">
            <h1 className="text-center text-4xl text-white mb-10">Skills</h1>

            <div className="grid  grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-20">
              <div className=" p-5 ">
                <img
                  src="/html5.png"alt="html"
                  className="w-20 h-20  object-contain  hover:translate-y-2 hover:scale-110 duration-700 "
                />
                <p className="text-white text-center mt-4">Html5</p>
              </div>
              <div className="p-5">
                <img
                  src="/css.png"alt="css"
                  className="w-20 h-20 object-contain  hover:-translate-y-2 hover:scale-110 duration-700"
                />
                <p className="text-white text-center mt-4">CSS3</p>
              </div>

              <div className=" p-5 ">
                <img
                  src="/js.png"alt="js"
                  className="w-20 h-20  object-contain  hover:-translate-x-2 duration-700"
                />
                <p className="text-white text-center mt-4">Javascript</p>
              </div>
              <div className=" p-5 ">
                <img
                  src="/ts.png" alt="ts"
                  className="w-20 h-20  object-contain  hover:-translate-x-2 duration-700"
                />
                <p className="text-white text-center mt-4">Typescript</p>
              </div>

              <div className=" p-5 ">
                <img
                  src="react.png"alt="react"
                  className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700" />
                <p className="text-white text-center mt-4">React</p>
              </div>

              <div className=" p-5 ">
                <img
                  src="/next.png"alt="next"
                  className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700" />
                <p className="text-white text-center mt-4">NextJS 13</p>
              </div>

              <div className=" p-5 ">
                <img
                  src="/Tailwind.png"alt="tailwind"
                  className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700" />
                <p className="text-white text-center mt-4">Tailwind</p>
              </div>

              <div className=" p-5 ">
                <img
                  src="/chakraIcon.png"alt="chakre"
                  className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700" />
                <p className="text-white text-center mt-4">Chakra</p>
              </div>
              <div className=" p-5 ">
                <img
                  src="/node.png"alt="node"
                  className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700" />
                <p className="text-white text-center mt-4">NodeJS</p>
              </div>


            </div>
          </div>
        </div>

      </body>
    </>
  )
}