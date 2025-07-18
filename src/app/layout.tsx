
import "./globals.css";

import { Oswald } from 'next/font/google';
import { ToastContainer } from "react-toastify";


const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Choose weights you need
  variable: '--font-oswald', // Optional: for CSS variable usage
  display: 'swap',
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body
        className={oswald.className}
      >
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
        {children}
      </body>
    </html>
  );
}
