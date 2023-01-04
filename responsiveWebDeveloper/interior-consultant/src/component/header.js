import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" flex items-center justify-between">
        <span className="border-2 p-2 font-CrimsonPro text-sm text-white ">
          THIS INTERIOR
        </span>
        <span className=" cursor-pointer text-5xl text-white md:hidden">
          <ion-icon
            name="menu-outline"
            onClick={() => {
              setOpen(!open);
            }}
          ></ion-icon>
        </span>
        <ul className=" md:item-center hidden text-white md:flex md:space-x-4 md:text-xl lg:space-x-16">
          <li className=" border-0 border-white font-Montserrat font-medium hover:border-b-2 hover:font-bold">
            Home
          </li>
          <li className=" border-0 border-white font-Montserrat font-medium hover:border-b-2 hover:font-bold">
            Collection
          </li>
          <li className=" border-0 border-white font-Montserrat font-medium hover:border-b-2 hover:font-bold">
            About
          </li>
          <li className=" border-0 border-white font-Montserrat font-medium hover:border-b-2 hover:font-bold">
            Contact
          </li>
        </ul>
      </div>
      {open ? (
        <div className=" fixed top-0   h-full w-full bg-black text-center text-white ">
          <span className=" fixed right-3 top-3 text-5xl">
            <ion-icon
              name="close-outline"
              onClick={() => {
                setOpen(!open);
              }}
            ></ion-icon>
          </span>
          <ul className=" mx-auto  mt-64 space-y-10 text-2xl">
            <li className=" mt-11 font-Montserrat font-medium decoration-slate-300 decoration-0 hover:font-bold hover:underline hover:decoration-4">
              Home
            </li>
            <li className="  font-Montserrat font-medium decoration-slate-300 decoration-0 hover:font-bold hover:underline hover:decoration-4">
              Collection
            </li>
            <li className=" font-Montserrat font-medium decoration-slate-300 decoration-0 hover:font-bold hover:underline hover:decoration-4">
              About
            </li>
            <li className=" font-Montserrat font-medium decoration-slate-300 decoration-0 hover:font-bold hover:underline hover:decoration-4">
              Contact
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
