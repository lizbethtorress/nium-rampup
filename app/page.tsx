'use client'

import Image from 'next/image'
import {useState} from 'react'
import { Button } from '@chakra-ui/react';
import { useFormik } from 'formik'

export default function Home() {
  let count = 0;

  const handleClick = () => {
    // TODO: update count correctly using state
    count += 1;
  }
  const SignupForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
      initialValues: {
        email: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
  
        <button type="submit">Submit</button>
      </form>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
        Welcome to the ramp-up!
      </div>
      <div className="font-bold">
        Count: {count}
      </div>
      {/* 
      FYI: Chakra UI and TailwindCSS tend to clash sometimes when styling components. 
      Hopefully it's not an issue with Nium's components, but that's why we specified color with 
      both class names and the Chakra UI colorScheme prop
      */}
      <Button className="bg-sky-600" colorScheme='blue' onClick={SignupForm}>Insert</Button>
      <div>
        Hello world
      </div>
    </main>
  )
}
