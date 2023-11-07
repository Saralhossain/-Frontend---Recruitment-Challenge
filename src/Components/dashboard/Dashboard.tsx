import React , { useState } from 'react';
import Tabbar from '../tabBar/Tabbar';
import './dashboard.css';
import Card from '../card/Card';
import { array, Item } from '../../Helper/data';
import { MdKeyboardArrowRight , MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";

function Dashboard() {
  const [arrayState, setArrayState] = useState([...array]);

  const handleNextClick = () => {
    setArrayState((prevArrayState) => {
      const newArray = [...prevArrayState];
      const firstCard = newArray.shift() as Item;
      newArray.push(firstCard);
      return newArray;
    });
  };

  const handlePrevClick = () => {
    setArrayState((prevArrayState) => {
      const newArray = [...prevArrayState];
      const lastCard = newArray.pop() as Item;
      newArray.unshift(lastCard);
      return newArray;
    });
  };

  return (
    <div className="h-screen flex bg-black">
      <div className="w-1/12">
        <Tabbar />
      </div>

      <div className="bashboard p-4 overflow-y-auto w-11/12 rounded-tl-3xl bg-[#282a31]">  
          {/* top user informations and price update */}
          <div className="top-content flex flex-row justify-between">
            <div className="w-300 bg-gray-800 flex flex-row rounded-xl p-2 justify-between" style={{ height: "40px" }}>
              <img src={require('../../images/icon.png')} alt='icon' className="rounded-full" height={35} width={24} />
              <h1 className="text-white text-sm mx-2">ETH/USTD</h1>
              <h2 className="text-green-500 text-sm mx-2">1163</h2>
              <div className='flex flex-row'>
                <h6 className="text-green-500 text-sm">+2.64%</h6>
                <FaArrowUp size={14} className='text-green-500' style={{marginTop: "4px"}} />
              </div>
            </div>
            <div className="w-300 bg-gray-800 flex flex-row overflow-y-auto rounded-xl p-1 justify-between items-center" >
              <img src={require('../../images/avatarimage.png')} alt='icon' height={24} width={24} style={{borderRadius:'50%'}} />
              <div className="flex flex-row mx-2 items-center">
                <h2 className="text-white text-sm mx-2">zash</h2>
                <p className="text-gray-400 text-sm mx-1">|</p>
                <div className="flex flex-row justify-between items-center">
                  <h4 className="text-white text-sm mx-1">User ID: </h4>
                  <p className="text-white text-sm">11026666</p>
                </div>
              </div>
            </div>
          </div>
          {/* Dashboard heading */}
          <div className="flex flex-row py-10 px-4 overflow-y-auto items-center justify-between">
            <h1 className="text-white text-fspro text-2xl">Dashboard</h1>
            <img src={require('../../images/refreshcta.png')} alt='refresh icon' height={40} width={40} />
          </div>

          {/* CardCoponent */}
          {/* <div className="flex flex-wrap items-center">
            {array.map((item: Item) => (
              <Card key={item.id} item={item} />
            ))}
          </div> */}

        <div className="flex flex-wrap items-center">
          {arrayState.map((item: Item, index) => (
            <Card
              key={item.id}
              item={item}
            />
          ))}
        </div>


          {/* Next and previous */}
          <div className="flex flex-wrap items-center justify-center p-2">
              <div className="flex items-center justify-between bg-[#000000] w-450 h-20 p-3  rounded-full">
                <div className="flex items-center justify-center text-white bg-[#18191d] rounded-full" onClick={handleNextClick}>
                  <MdOutlineKeyboardArrowLeft size={56} />
                </div>
                <div className="flex items-center justify-center text-white bg-[#18191d] rounded-full ml-20" onClick={handlePrevClick}>
                  <MdKeyboardArrowRight size={56} />
                </div>
              </div>
          </div>

      </div>
    </div>
  );
}

export default Dashboard;