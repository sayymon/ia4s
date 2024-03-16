import type { Metadata } from "next";
import {Providers} from "./providers";


export const metadata: Metadata = {
  title: "IA4s uma plataforma inovadora dedicada a soluções de IA",
  description: "Transforme seu cotidiano com IA's revolucionarias: Descubra as soluções mais inovadoras para otimizar sua vida. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
