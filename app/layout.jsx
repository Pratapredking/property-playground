
import Navbar from "@/component/Navbar";
import "./globals.css";
import Footer from "@/component/Footer";



const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main> {children}</main>
        <Footer/>
      </body>
    </html>
  );
};

export default MainLayout;