import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#377389] text-white mt-14 flex flex-col justify-between md:items-center md:block">
      <div className="flex md:flex-row flex-col justify-between p-4 md:px-14 md:py-7">
        <div className="md:flex items-center pt-10 md:pb-0 pb-6 md:pt-0">
          <h3 className="md:text-4xl text-3xl">
            Let's Start
            <br /> Something Great!
          </h3>
        </div>

        <div className="flex md:flex-row flex-col gap-7 md:gap-10 pt-4 ">
          <div className="space-y-2">
            <h3 className="text-lg">Contact Us</h3>
            <p className="md:text-sm text-xs">writefreakstudios@gmail.com</p>
            <p className="md:text-sm text-xs">(+234) 9169615448</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg">Legal</h3>
            <p className="md:text-sm text-xs">Terms Of Service</p>
            <p className="md:text-sm text-xs">Privacy Policy</p>
            <p className="md:text-sm text-xs">FAQ</p>
          </div>
        </div>
      </div>
      <div className="border-t text-xs p-4  md:pr-0 md:px-10 md:py-3 py-6">
        <p>© 2025 Writefreak Studios. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
