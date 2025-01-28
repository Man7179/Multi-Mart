import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/dashboard">
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "2.25rem",
              color: "#219bc8",
              textShadow:
                "0 0 10px rgba(173, 216, 230, 0.7), 0 0 20px rgba(173, 216, 230, 0.7), 0 0 30px rgba(173, 216, 230, 0.7)",
              display: "flex",
              alignItems: "center",
            }}
          >
            Multi
            <span class="font-bold text-4xl text-[#c88b21]">Mart</span>
            <AiOutlineShop
              className="text-[#2156c8] text-4xl ml-2 mt-1.4 display"
              style={{
                textShadow:
                  "0 0 10px rgba(173, 216, 230, 0.7), 0 0 20px rgba(173, 216, 230, 0.7), 0 0 30px rgba(173, 216, 230, 0.7)",
              }}
            />
          </h1>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard/cupouns" className="800px:block hidden">
            <AiOutlineGift
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-events" className="800px:block hidden">
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-products" className="800px:block hidden">
            <FiShoppingBag
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <BiMessageSquareDetail
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
