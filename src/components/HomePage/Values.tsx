import React from "react";
import chart from "@/assets/landing_charts.jpg";
import keyboard from "@/assets/landing_keyboard.jpg";

const Values = () => {
  return (
    <div className="w-full h-full p-4 md:p-6 lg:p-8 bg-accent rounded-4xl flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-40 mt-10">
      {/* Left Side: Images */}
      <div className="flex-1 flex items-center justify-center">
        <div
          className="relative flex items-center justify-center w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${keyboard})` }}>
          <div className="absolute top-[50%] right-[-30%]">
            <img
              src={chart}
              alt="chart"
              className="w-20 h-16 md:w-40 md:h-25 lg:w-60 lg:h-30 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Right Side: Text */}
      <div className="flex-1 flex flex-col gap-5 items-center justify-center text-center md:text-left">
        <h1 className="h1-custom">Track real-time progress with Reports</h1>
        <p className="p-custom">
          Gain valuable insights into your productivity and project status with
          our real-time reporting features
        </p>
      </div>
    </div>
  );
};

export default Values;
