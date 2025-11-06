'use client';
import Lottie from "lottie-react";
import carAnimation from "@/src/Lotties/car_animation.json";


export const Content = () => {
  return (
  <div className='p-8 grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className="flex flex-col gap-6 items-center">
          <h1 className='text-4xl md:text-5xl font-bold text-center max-w-[550px] text-white-950 text-shadow-2xs text-shadow-blue-300'>Welcome to our fleet administrative platform.</h1>
          <h2>Here you can add new vehicles and seek drivers.</h2>
        </div>
        <Lottie animationData={carAnimation} loop={true} />
      </div>
  )
}


