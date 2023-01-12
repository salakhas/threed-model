import React from "react";
import Typed from "react-typed";

function ThankYouSection() {
  return (
    <div className="h-screen flex justify-center items-center text-white text-20">
      <Typed
        strings={[
          "Thank you for checking out this website!",
          "Have a nice day!",
        ]}
        typeSpeed={100}
        backSpeed={100}
        loop
      />
    </div>
  );
}

export default ThankYouSection;
