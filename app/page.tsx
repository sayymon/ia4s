import DiamondLayout from './components/diamond-image';
import "./globals.css";

const VideoComponent: React.FC = () => {
  return (
    <video id="mivideo" muted autoPlay loop playsInline>
      <source src="app-back.mp4" type="video/mp4" />
    </video>
  );
}

export default function Home() {
 
  return (
    <main className="dark text-foreground bg-background">

      <VideoComponent />

      <DiamondLayout />
       
    </main>
  );
}
