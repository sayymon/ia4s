'use client'

import React, { useRef } from 'react';
import Image from 'next/image';

const DiamondImage: React.FC<{ src: string; alt: string; width: number; height: number }> = ({ src, alt, width, height }) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} priority/>
  );
}  

const DiamondLayout: React.FC = () => {

  const audioRef = useRef<HTMLAudioElement>(null);

  const playSoundAndRedirect = (icone: string, href: string) => {
    // Reproduz o som
    const audio = new Audio(`/hover-sound-${icone}.mp3`);
    audio.play();
    
    // Define o redirecionamento após a reprodução do áudio
    setTimeout(() => {
      window.location.href = href;
    }, 2000);
  };



  return (
    <div className="diamond-container">
      <div className="diamond-img ia-losango" onClick={() => playSoundAndRedirect("ia-losango", "/ia")}>
        <DiamondImage src="/ia-losango-logo.png" alt="IA" width={500} height={500}/>
      </div>
      <div className="diamond-img you-brain" onClick={() => playSoundAndRedirect("you", "/you")}>
        <DiamondImage src="/you-brain-logo.png" alt="You" width={150} height={150}/>
      </div>
      <div className="diamond-img car" onClick={() => playSoundAndRedirect("car", "/car")}>
        <DiamondImage src="/car-logo.png" alt="Car" width={200} height={100}/>
      </div>
      <div className="diamond-img home" onClick={() => playSoundAndRedirect("home", "/home")}>
        <DiamondImage src="/home-logo.png" alt="Home" width={150} height={150}/>
      </div>
      <div className="diamond-img business-work" onClick={() => playSoundAndRedirect("business", "/business")}>
        <DiamondImage src="/business-work-logo.png" alt="Business" width={150} height={150}/>
      </div>
      <div className="diamond-img ia4s" onClick={() => playSoundAndRedirect("ia4s", "/ia4s")}>
        <DiamondImage src="/ia4s-logo.png" alt="IA4S" width={350} height={150}/>
      </div>
    </div>
  );
}

export default DiamondLayout;
