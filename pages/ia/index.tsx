import Navigation from "@/app/components/navigation";

import '../pages.css'; // Importa estilos globais

export default function IAPage() {
    return (
        <>
            <Navigation />
            <div className="dark container mx-auto px-4" >
                <h1>IA</h1>
                <p>This is a content to make our page longer</p>
                <div className="w-full h-screen bg-green-300"></div>
                <p>
                Lorem Ipsum is simply dummy text ...
                </p>
            </div>        
        </>            
    );
}