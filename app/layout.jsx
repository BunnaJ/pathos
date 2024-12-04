import {inter} from '@/app/ui/fonts';
import "./globals.css";
import NavBar from './components/NavBar';
import Footer from './components/sections/Footer';


export const metadata = {
  title: "Embassy | travel | embassy experience",
  description:
    "PathosEmbassy is a comprehensive platform dedicated to sharing experiences and insights on visa processing and embassy interactions. Connect with a community of travelers, learn from their stories, and find valuable tips to navigate the complexities of obtaining visas for your international journeys.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <NavBar/>
        <main className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          {children}
          </main>
          <Footer/>
      </body>
    </html>
  );
}
