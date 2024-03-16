'use client'

import React, { useRef } from 'react';
import Image from 'next/image';

const DiamondImage: React.FC<{ src: string; alt: string; width: number; height: number }> = ({ src, alt, width, height }) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} priority/>
  );
}  

const DiamondLayout: React.FC = () => {

  const playSoundAndRedirect = (icone: string, href: string) => {
    
    let audio = playSound(icone);
    handleIconClick(icone);
    
    audio.onended = () => {
      window.location.href = href;
    };    
  };

  const playSound = (sound: string) => {
    const clickedIcon = document.querySelector(`.zoom`);
    const audio = new Audio(`./sounds/${sound}.mp3`);
    if (!clickedIcon) {
      audio.play();
    }
    return audio;
  };  

  const handleIconClick = (icone: string) => {
    const clickedIcon = document.querySelector(`.${icone}`);
    if (clickedIcon) {
      const allIcons = document.querySelectorAll('.diamond-img');
      allIcons.forEach(icon => {
        if (icon !== clickedIcon) {
          icon.classList.add('hide');
        }
      });

      clickedIcon.classList.add('zoom');
      clickedIcon.classList.remove('hide');
    }
  }

  return (
    <div className="diamond-container">
      <div className="diamond-img ia-losango" onMouseOver={() => playSound("change")} onClick={() => playSoundAndRedirect("ia-losango", "/ia")}>
        <DiamondImage src="/ia-losango-logo.png" alt="IA" width={500} height={500}/>
      </div>
      <div className="diamond-img you" onMouseOver={() => playSound("change")} onClick={() => playSoundAndRedirect("you", "/you")}>
        <DiamondImage src="/you-brain-logo.png" alt="You" width={150} height={150}/>
      </div>
      <div className="diamond-img car" onMouseOver={() => playSound("change")} onClick={() => playSoundAndRedirect("car", "/car")}>
        <DiamondImage src="/car-logo.png" alt="Car" width={200} height={100}/>
      </div>
      <div className="diamond-img home" onMouseOver={() => playSound("change")} onClick={() => playSoundAndRedirect("home", "/home")}>
        <DiamondImage src="/home-logo.png" alt="Home" width={150} height={150}/>
      </div>
      <div className="diamond-img business" onMouseOver={() => playSound("change")} onClick={() => playSoundAndRedirect("business", "/business")}>
        <DiamondImage src="/business-work-logo.png" alt="Business" width={150} height={150}/>
      </div>
      <div className="diamond-img ia4s" onMouseOver={() => playSound("change")} onClick={() => playSoundAndRedirect("ia4s", "/ia4s")}>
        <DiamondImage src="/ia4s-logo.png" alt="IA4S" width={350} height={150}/>
      </div>
    </div>
  );
}

export default DiamondLayout;
