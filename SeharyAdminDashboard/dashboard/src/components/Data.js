import React from "react";

import { BsGraphUpArrow } from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    
  },
  {
    title: "Employees",
    path: "/employees",
    icon: <HiUserGroup />,
    
  },
  {
    title: "Location",
    path: "/location",
    icon: <IoLocationSharp />,
    
  },
  
  {
    title: "Statistics",
    path: "/statistics",
    icon: <BsGraphUpArrow />,
    
  },
  
];

export default SidebarData;