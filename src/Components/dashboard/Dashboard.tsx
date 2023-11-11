import React, { useState, useEffect } from "react";
import Tabbar from "../tabBar/Tabbar";
import "./dashboard.css";
import Card from "../card/Card";
import { array, Item, Nfts } from "../../Helper/data";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey, Keypair } from "@solana/web3.js";

import { useTransition, animated } from "react-spring";
import Loader from "../../svgs/loader";

// import {
//   CardSlider,
//   CardItem,
//   fadeInAnimation,
//   fadeOutAnimation,
// } from "./dashBoardStyles";

function Dashboard() {
  //Handling Slider Animation
  const [nfts, setNfts] = useState([]);
  const [arrayState, setArrayState] = useState<Nfts[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [card1, setCardOne] = useState(0);
  const [card2, setCardTwo] = useState(100);
  const [card3, setCardThree] = useState(200);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await fetch(
        "https://api.solscan.io/account/v2/tokens?address=narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X&cluster="
      );
      const jsonData = await res.json(); // Wait for the promise to resolve
      const firstThreeNFTs = jsonData?.data?.slice(0, 3);
      setNfts(firstThreeNFTs);
      setArrayState(firstThreeNFTs);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nfts.length);
    updateArrayState();
    setCardOne(200);
    setCardTwo(0);
    setCardThree(100);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + nfts.length) % nfts.length);
    updateArrayState();
    setCardOne(200);
    setCardTwo(0);
    setCardThree(100);
  };

  const updateArrayState = () => {
    if (arrayState.length === 0) {
      return;
    }
    const newArray = [...arrayState];
    const firstItem = newArray.shift() as Nfts;
    newArray.push(firstItem);
    setArrayState(newArray);
  };
  //metaplex sdk
  // useEffect(() => {
  //   // fetchNFTs();
  //   fetchUserData();
  // }, []);

  // const fetchUserData = () => {
  //   fetch("https://api.solscan.io/account/v2/tokens?address=narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X&cluster=")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       // console.log("Fetched data : ",data.data);
  //       const firstThreeNFTs = data.data.slice(0, 3);
  //       // console.log("3-nfts : ", firstThreeNFTs);
  //       setNfts(firstThreeNFTs);
  //     })
  // }

  // const fetchNFTs = async () => {
  //   try {
  //     const connection = new Connection('https://rpc.ankr.com/solana');
  //     const owner = new PublicKey("narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X");
  //     // const connection = new Connection(clusterApiUrl('mainnet-beta'));
  //     const wallet = Keypair.generate();
  //     const metaplex = Metaplex.make(connection).use(keypairIdentity(wallet))
  //     .use(bundlrStorage());

  //       // @ts-ignore
  //       const myNfts = await metaplex.nfts().findAllByOwner({
  //         owner
  //     });

  //     // console.log("3 nfts : ", myNfts);
  //     // setNfts(firstThreeNFTs);
  //     console.log('fetched data : ', myNfts);
  //   } catch (error) {
  //     console.error("Error fetching NFTs:", error);
  //   }
  // };

  const transitions = useTransition(arrayState, {
    keys: (item: Nfts) => item.tokenName,
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    config: { duration: 1000 },
  });

  const styles = {
    transform: "translateX(100%)",
  };

  return (
    <div className="flex bg-black">
      <div className="w-1/12">
        <Tabbar />
      </div>

      <div className="bashboard p-4 overflow-y-auto w-11/12 rounded-tl-3xl bg-[#282a31]">
        {/* top user informations and price update */}
        <div className="flex flex-row justify-between">
          <div
            className="w-300 bg-[#18191d] flex flex-row rounded-xl p-2 justify-between"
            style={{ height: "40px" }}
          >
            <img
              src={require("../../images/icon.png")}
              alt="icon"
              className="rounded-full"
              height={35}
              width={24}
            />
            <h1 className="text-white text-sm mx-2">ETH/USTD</h1>
            <h2 className="text-[#0ac18e] text-sm mx-2">1163</h2>
            <div className="flex flex-row">
              <h6 className="text-[#0ac18e] text-sm">+2.64%</h6>
              <FaArrowUp
                size={14}
                className="text-[#0ac18e]"
                style={{ marginTop: "4px" }}
              />
            </div>
          </div>
          <div className="w-300 bg-[#18191d] flex flex-row overflow-y-auto rounded-xl p-1 justify-between items-center">
            <img
              src={require("../../images/avatarimage.png")}
              alt="icon"
              height={24}
              width={24}
              className="rounded-full"
            />
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
          <div className="mr-5">
            {isLoading && <Loader height={60} width={60} color={"white"} />}
          </div>
        </div>
        {/* CardCoponent */}
        {/* {nfts.length > 0 &&
        <div className="card-slider px-12">
        <TransitionGroup className="flex flex-wrap items-center">
          {arrayState.map((item, index) => (
            <CSSTransition key={index} classNames="card-animation" timeout={300}>
              <Card key={index} item={item} />
            </CSSTransition>
          ))}
        </TransitionGroup>
        </div>} */}

        {!isLoading && (
          <div className="card-slider relative h-600">
            <div className="flex items-center">
              {transitions((style, item) => (
                <animated.div
                  style={style}
                  key={item.tokenName}
                  className="card"
                >
                  <Card item={item} />
                </animated.div>
              ))}
            </div>
          </div>
        )}

        {/* style components -- props sliding position */}
        {/* <CardSlider className="card-slider relative h-600">
          <div className="flex items-center">
            {transitions((style, item) => (
              <CardItem as={animated.div} style={style} key={item.tokenName}>
                <Card item={item} />
              </CardItem>
            ))}
          </div>
        </CardSlider> */}

        {/* Next and previous */}
        <div className="flex flex-wrap items-center justify-center p-2">
          <div className="flex items-center justify-between bg-[#000000] w-450 h-20 p-3  rounded-full">
            <div
              className="flex items-center justify-center text-white bg-[#18191d] rounded-full"
              onClick={handleNextClick}
            >
              <MdOutlineKeyboardArrowLeft size={56} />
            </div>
            <div
              className="flex items-center justify-center text-white bg-[#18191d] rounded-full ml-20"
              onClick={handlePrevClick}
            >
              <MdKeyboardArrowRight size={56} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
