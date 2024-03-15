import DiamondLayout from './components/diamond-image';

const VideoComponent: React.FC = () => {
  return (
    <video id="mivideo" muted autoPlay loop playsInline>
      <source src="ia4s-introgaby.mp4" type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
  );
}



export default function Home() {
 
  return (
    <main>

      <VideoComponent />

      <DiamondLayout />
       
    </main>
  );
}
