import React, { useState } from 'react';
import Setting from '../../svgs/Setting';
import NftListing from '../../svgs/NftListing';
import Notification from '../../svgs/Notification';
import HomeSvg from '../../svgs/HomeSvg';

function Tabbar() {
  const [homeColor, setHomeColor] = useState(false);
  const [nftColor, setNftColor] = useState(false);
  const [settingColor, setSettingColor] = useState(false);

  return (
    <div className="bg-current h-screen flex flex-col justify-between items-center">
      <div className="my-5 p-4">
        <img src={require('../../images/brandlogo.png')} alt="Logo" width="40" height="40" />
      </div>
      <div className="p-4 space-y-8 flex flex-col items-center">
        <div
          className={`border-l-2 px-10 py-1 transition-colors ${
            homeColor ? 'border-white' : 'border-transparent'
          }`}
          onClick={() => setHomeColor(true)}
        >
          <HomeSvg color={homeColor ? 'white' : 'gray'} height={24} width={24} />
        </div>
        <div
          className={`border-l-2 px-10 py-1 transition-colors ${
            settingColor ? 'border-white' : 'border-transparent'
          }`}
          onClick={() => setSettingColor(true)}
        >
          <Setting color={settingColor ? 'white' : 'gray'} height={24} width={24} />
        </div>
        <div
          className={`border-l-2 px-10 py-1 transition-colors ${
            nftColor ? 'border-white' : 'border-transparent'
          }`}
          onClick={() => setNftColor(true)}
        >
          <NftListing color={nftColor ? 'white' : 'gray'} height={24} width={24} />
        </div>
      </div>
      <div className="p-4">
        <Notification height={24} width={24} color="gray" />
      </div>
    </div>
  );
}

export default Tabbar;
