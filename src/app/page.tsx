"use client";
import { Head } from "@/heade/page";
import React from 'react';
export default function Home() {
  return (
    <><body className='bg-cyan-500'>


      <Head />


      <div className='max-w-4xl mx-auto  flex md:flex-row flex-col mt-20 '>
        <div className='p-5 mx-auto max-w-lg'>
          <h1 className='text-4xl font-bold' > hi 👋<br />I am Hanzla  web developer</h1>
          <p className='text-2xl'>High-energy student ﬁnalized degree in BS Mathematics and
            start my professional life in IT prepared to contribute my abilities to industry while
            further developing acquired skills and gaining real-world experience.</p>
        </div>
        <img src="./image.jpeg" className='rounded h-64 w-60 mx-auto' alt=" hanzla" />


      </div>
    </body>
    </>
  )
}
