import React from 'react';
import AppStore from "../components/img/App Store.png";
import GooglePlay from "../components/img/Google Play.png";

const DownloadAds = () => {
  const downloadImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'
  return (
    <div className="download">
      <div className="download_images flex">
        <img src={AppStore} alt="" 
          className={downloadImgStyle + ` mr-[2rem] `} />
        <img src={GooglePlay} alt="" 
          className={downloadImgStyle} />
      </div>
    </div>
  );
};

export default DownloadAds;
