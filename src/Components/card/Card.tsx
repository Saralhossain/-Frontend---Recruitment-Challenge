import React from 'react';
import { Item, Nfts } from '../../Helper/data';
import { AiOutlineEllipsis } from "react-icons/ai";

interface YourComponentProps {
  item: Nfts;
}

const Card: React.FC<YourComponentProps> = (props) => {
  const { item } = props;
  console.log("Card : ",item);

  return (
    <div className="card flex flex-col rounded-3xl bg-black h-600 w-354 m-4 p-6"> 
      <div className='heading flex flex-row justify-between p-2'>
        <h4 className='text-white'>{item.tokenName} #{item.decimals}</h4>
        <AiOutlineEllipsis size={24} color='gray' />
      </div>
      <div>
        <img className='rounded-lg' height={284} width={284} src={item.tokenIcon} alt='pic' />
      </div>
      <div className='bg-[#18191d] flex flex-col justify-between rounded-lg my-3'>
        <div className='heading flex flex-row bg-[#131417] justify-between m-2 p-1 text-xs rounded-lg items-center'>
          <h2 className='text-white'>Owner</h2>
          <div className='flex flex-row items-center'>
            <p className='text-gray-400 mr-2'>|</p>
            <p className='text-gray-400 p-1'>{item.owner.slice(0, 4)}...{item.owner.slice(-2)}</p>
          </div>
        </div>
        <div className='heading flex flex-row bg-[#131417] justify-between m-2 p-1 text-xs rounded-lg items-center'>
          <h2 className='text-white'>Mint Address</h2>
          <div className='flex flex-row items-center'>
            <p className='text-gray-400 mr-2'>|</p>
            <p className='text-gray-400 p-1'>{item.tokenAddress.slice(0, 4)}...{item.tokenAddress.slice(-2)}</p>
          </div>
        </div>
        <div className='heading flex flex-row bg-[#131417] justify-between m-2 p-1 text-xs rounded-lg items-center'>
          <h2 className='text-white'>Token Address</h2>
          <div className='flex flex-row items-center'>
            <p className='text-gray-400 mr-2'>|</p>
            <p className='text-gray-400 p-1'>{item.tokenAddress.slice(0, 4)}...{item.tokenAddress.slice(-2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
