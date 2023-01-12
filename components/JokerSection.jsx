import React from "react";
import Typed from "react-typed";
import Joker from "./Models/Joker";

function JokerSection() {
  return (
    <div className="h-screen relative">
      <div className="text-white absolute top-[30px] w-full flex justify-center">
        <Typed
          strings={["This is a Joker....", "from Batman Arkham Origins"]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </div>
      <Joker />
    </div>
  );
}

export default JokerSection;
