import React from "react";
import Typed from "react-typed";
import Pheonix from "./Models/Pheonix";

function PheonixSection() {
  return (
    <div className="h-screen relative">
      <div className="text-white absolute top-[30px] w-full flex justify-center">
        <Typed
          strings={[
            "This is a Pheonix bird ",
            "Look how beautiful it looks ☺️",
          ]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </div>
      <Pheonix />
    </div>
  );
}

export default PheonixSection;
