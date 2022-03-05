import { useState } from "react";
import { Tab } from "@headlessui/react";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className=" w-screen h-  sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
         <Tab 
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
         1
          </Tab>
     
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
  1
          </Tab>
          <Tab 
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            1
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
