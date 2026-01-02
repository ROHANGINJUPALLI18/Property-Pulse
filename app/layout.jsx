import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';


export const metadata = {
  title: 'PropertyPulse',
  description: 'Find The Perfect Rental Property',
  keywords: 'rental, property, real estate',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
