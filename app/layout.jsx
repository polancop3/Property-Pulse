import React from "react";
import Navbar from "@/components/Navbar";
import '@/assets/styles/global.css'
export const metadata = {
  title: 'Property Pulse | Find the Perfect Rental',
  description: 'Find your dream rental property',
  keyword: 'rental, property, find rentals, find properties'
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Navbar/>
      <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
