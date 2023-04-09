import Link from "next/link";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Social() {
  return (
    <div >
      <Link href={"https://www.linkedin.com/in/hanzla-shafiq-31b501212"} target={"_blank"}>
        <div className="ml-[-86px] my-0  hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-gray-600  w-36 py-3 px-5 rounded-r-lg">
          Linkedin
          <FaLinkedin size={30} />
        </div>
      </Link>
      <Link href={"https://github.com/HanzlaShafiq?tab=repositories"} target={"_blank"}>
        <div className=" ml-[-86px] my-14  flex justify-between hover:ml-0 duration-200  text-lg items-center gap-2 fixed text-white bg-gray-600  w-36 py-3 px-5 rounded-r-lg">
          Github
          <FaGithub size={30} />
        </div>
      </Link>
      <Link href={"https://mail.google.com"} target={"_blank"}>
        <div className=" ml-[-86px]  my-28 hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-gray-600 w-36 py-3 px-5 rounded-r-lg">
          Gmail
          <SiGmail size={30} />
        </div>
      </Link>
      
    </div>
  )

}