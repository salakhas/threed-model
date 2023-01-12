import React from "react";
import Typed from "react-typed";
import Car from "./Models/Car";

function CarSection() {
  return (
    <div className="h-screen relative">
      <div className="text-white absolute top-[130px] w-full flex justify-center">
        <Typed
          strings={[
            "This is a 3D model of Audi r8  Lms 2016",
            "Try grabbing it with your cursor",
          ]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </div>
      <Car />
    </div>
  );
}

export default CarSection;
