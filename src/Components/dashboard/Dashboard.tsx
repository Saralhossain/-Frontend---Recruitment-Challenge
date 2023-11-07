import React , { useState , useEffect } from 'react';
import Tabbar from '../tabBar/Tabbar';
import './dashboard.css';
import Card from '../card/Card';
import { array, Item } from '../../Helper/data';
import { MdKeyboardArrowRight , MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Metaplex, keypairIdentity, bundlrStorage } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey, Keypair } from "@solana/web3.js"; 



function Dashboard() {
  //Handling Slider Animation 
  const [nfts , setNfts] = useState(null);
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
  //metaplex sdk
  useEffect(()=>{
    fetchNFTs();
  }, []);

  const fetchNFTs = async () => {
    try {
      // const connection = new Connection('https://api.testnet.solana.com');
      const owner = new PublicKey("narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X");
      const connection = new Connection(clusterApiUrl('testnet'));
      const wallet = Keypair.generate();
      const metaplex = Metaplex.make(connection)
        .use(keypairIdentity(wallet))
        .use(bundlrStorage());
      const myNfts = await metaplex.nfts().findAllByOwner({
        owner
      });
      const firstThreeNFTs = myNfts.slice(0, 3);
      console.log("3 nfts : ", firstThreeNFTs);
      // setNfts(firstThreeNFTs);
      console.log('fetched data : ',myNfts);
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    }
  };

  return (
    <div className="h-screen flex bg-black">
      <div className="w-1/12">
        <Tabbar />
      </div>

      <div className="bashboard p-4 overflow-y-auto w-11/12 rounded-tl-3xl bg-[#282a31]">  
          {/* top user informations and price update */}
          <div className="flex flex-row justify-between">
            <div className="w-300 bg-[#18191d] flex flex-row rounded-xl p-2 justify-between" style={{ height: "40px" }}>
              <img src={require('../../images/icon.png')} alt='icon' className="rounded-full" height={35} width={24} />
              <h1 className="text-white text-sm mx-2">ETH/USTD</h1>
              <h2 className="text-[#0ac18e] text-sm mx-2">1163</h2>
              <div className='flex flex-row'>
                <h6 className="text-[#0ac18e] text-sm">+2.64%</h6>
                <FaArrowUp size={14} className='text-[#0ac18e]' style={{marginTop: "4px"}} />
              </div>
            </div>
            <div className="w-300 bg-[#18191d] flex flex-row overflow-y-auto rounded-xl p-1 justify-between items-center" >
              <img src={require('../../images/avatarimage.png')} alt='icon' height={24} width={24} className='rounded-full' />
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
          <div className="flex flex-row py-10 px-1 overflow-y-auto items-center justify-between">
            <h1 className="text-white text-fspro text-2xl">Dashboard</h1>
            <img src={require('../../images/refreshcta.png')} alt='refresh icon' height={40} width={40} />
          </div>

          {/* CardCoponent */}
          <div className="card-slider px-12">
          <TransitionGroup className="flex flex-wrap items-center">
            {arrayState.map((item, index) => (
              <CSSTransition key={item.id} classNames="card-animation" timeout={300}>
                <Card key={item.id} item={item} />
              </CSSTransition>
            ))}
          </TransitionGroup>
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