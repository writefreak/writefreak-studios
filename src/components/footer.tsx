import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#377389] text-white mt-14 flex flex-col justify-between md:items-center md:block">
      <div className="flex justify-between p-4 md:px-14 md:py-7">
        <div className="md:flex items-center hidden ">
          <h3 className="md:text-4xl">
            Let's Start
            <br /> Something Great!
          </h3>
        </div>

        <div className="md:flex gap-10 hidden">
          <div className="space-y-2">
            <h3 className="text-lg">Contact Us</h3>
            <p className="text-sm">writefreakstudios@gmail.com</p>
            <p className="text-sm">(+234) 9169615448</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg">Legal</h3>
            <p className="text-sm">Terms Of Service</p>
            <p className="text-sm">Privacy Policy</p>
            <p className="text-sm">FAQ</p>
          </div>
        </div>
      </div>
      <div className="md:border-t text-xs p-4  md:pr-0 md:px-10 md:py-3">
        <p>© 2025 Writefreak Studios. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
