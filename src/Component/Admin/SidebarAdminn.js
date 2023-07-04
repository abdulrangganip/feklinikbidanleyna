import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsReverseLayoutTextSidebarReverse, BsPerson } from "react-icons/bs";
import { AiOutlineUser, AiOutlineMail, AiOutlineBarChart } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarAdminn = ({ children }) => {
  const user = useSelector((state) => state.data?.user);
  console.log(user);
  const role = user.TIPE_USER;
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  let Menus;
  if (role === "admin") {
    Menus = [
      {
        title: "Dashboard",
        icon: <BsReverseLayoutTextSidebarReverse />,
        path: "/dashboard",
      },
      { title: "Data Pasien", icon: <AiOutlineBarChart />, path: "/data-pasien" },
      {
        title: "Bidan",
        icon: <BsPerson />,
        path: "/bidan",
      },
    ];
  } else if (role === "bidan") {
    Menus = [
      {
        title: "Dashboard",
        icon: <BsReverseLayoutTextSidebarReverse />,
        path: "/dashboard-bidan",
      },
      {
        title: "Data Pasien",
        icon: <AiOutlineBarChart />,
        path: "/data-pasien",
      },
    ];
  } else if (role === "pasien") {
    Menus = [
      {
        title: "Dashboard",
        icon: <BsReverseLayoutTextSidebarReverse />,
        path: "/dashboard-pasien",
      },
      {
        title: "Data Pasien",
        icon: <AiOutlineBarChart />,
        path: "/cek-data-pasien",
      },
    ];
  }

  return (
    <div className="flex">
      <div className={`bg-neutral-100 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />

        <div className="inline-flex">
          <FaUserCircle className={`bg-black-300 text-5xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
          <h1
            className={`text-black origin-left font-medium text-2xl 
            duration-300 ${!open && "scale-0"}`}
          >
            {role.toUpperCase()}
          </h1>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li key={index} className={`text-black-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-slate-300 rounded-md ${menu.spacing ? "mt-9" : "mt-2"} `}>
                <Link to={menu.path} className="flex items-center">
                  <span className="text-2xl block float-left">{menu.icon ? menu.icon : <RiDashboardFill />}</span>
                  <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                </Link>
                {menu.submenu && open && <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)} />}
              </li>

              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItems, index) => (
                    <li key={index} className="text-black-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-300 rounded-md">
                      {submenuItems.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="p-7 w-full">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default SidebarAdminn;
