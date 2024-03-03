import Image from "next/image";

import { CSSProperties } from 'react';

const VideoComponent: React.FC = () => {
  return (
    <video id="mivideo" autoPlay muted loop playsInline>
      <source src="ia4s-introgaby.mp4" type="video/mp4" />
      <source src="secuencia_01.ogv" type="video/ogg" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1>
          <Image
                src="/ia4s-logo.svg"
                alt="IA4s Logo"
                className="dark:invert"
                width={200}
                height={50}
                priority
              />
        </h1>
      </header>
      <VideoComponent />
      <div id="textura"></div>
      
      <div className="wp">
        <div className="container">
          <div className="img i1" data-rel="ia4s" style={{ left: '49.75%', top: '70%' }}>
            <span data-title=""></span>
          </div>
          <div className="img iEmpresas" data-rel="empresas" style={{ left: '62%', top: '65%' }}>
            <span data-title="Empresas"></span>
          </div>
          <div className="img iCasa" data-rel="casa" style={{ left: '64%', top: '51%' }}>
            <span data-title="Casa"></span>
          </div>
          <div className="img iTecnologia" data-rel="tecnologia" style={{ left: '61.5%', top: '42.5%' }}>
            <span data-title="Tecnologia"></span>
          </div>
          <div className="img iVoce" data-rel="voce" style={{ left: '35%', top: '50%' }}>
            <span data-title="Você"></span>
          </div>
          <div className="img iIA" data-rel="horarios" style={{ left: '49.75%', top: '32%' }}>
            <span data-title="Inteligencia Artificial"></span>
          </div>
          <div className="img iMente" data-rel="contacto" style={{ left: '38%', top: '42.5%' }}>
            <span data-title="Mente"></span>
          </div>
          <div className="img iVeiculo" data-rel="veiculo" style={{ left: '37%', top: '63.5%' }}>
            <span data-title="Veiculo"></span>
          </div>
          
          <div className="point">
            <svg id="desktop" x="0px" y="0px" viewBox="0 0 1920 1080" enable-background="new 0 0 1920 1080" xmlSpace="preserve">
              <g>
                <line fill="none" stroke="#bbbbbb" x1="955" y1="325" x2="1250" y2="470"></line> {/* IA para Tecnologia */}
                <line fill="none" stroke="#bbbbbb" x1="1250" y1="470" x2="1310" y2="590"></line> {/* Tecnologia para Casa */}
                <line fill="none" stroke="#bbbbbb" x1="1310" y1="590" x2="1260" y2="790"></line> {/* Casa para Empresa */}
                <line fill="none" stroke="#bbbbbb" x1="1260" y1="790" x2="955" y2="855"></line> {/* Empresa para IA4S */}
                <line fill="none" stroke="#bbbbbb" x1="955" y1="855" x2="645" y2="760"></line> {/* IA4S para Veiculo */}
                <line fill="none" stroke="#bbbbbb" x1="645" y1="760" x2="595" y2="580"></line> {/* Veiculo para Você */}
                <line fill="none" stroke="#bbbbbb" x1="595" y1="580" x2="670" y2="470"></line> {/* Você para Mente */}
                <line fill="none" stroke="#bbbbbb" x1="670" y1="470" x2="955" y2="325"></line> {/* Mente para IA */}
              </g>
            </svg>
          </div> 
          <div className="title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
                  src="/ia4s-logo-removebg.png"
                  alt="IA4S Logo"
                  className="dark:invert"
                  width={500}
                  height={500}
                  priority
                />
          </div>
        </div>        
      </div>      
    </main>
  );
}
