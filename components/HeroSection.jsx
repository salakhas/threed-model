import React from "react";
import Typed from "react-typed";
import Earth from "./Models/Earth";

function HeroSection() {
  return (
    <div className="h-screen relative">
      <h1 className="text-white text-center mt-[30px] absolute left-0 right-0 mx-auto text-[32px]">
        Welcome to 3D model showroom :)
      </h1>
      <div className="text-white absolute top-[130px] w-full flex justify-center">
        <Typed
          strings={[
            "This is a 3D model of planet Earth!",
            "You can move this model by grabbing it with your cursor",
          ]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </div>
      <Earth />
    </div>
  );
}

export default HeroSection;
