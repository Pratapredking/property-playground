
import Navbar from "@/component/Navbar";
import "./globals.css";
import Footer from "@/component/Footer";
import AuthProvider from "@/component/AuthProvider";
 


const MainLayout = ({children}) => {
  return (
    <AuthProvider>
    <html lang="en">
      <body>
        <Navbar/>
        <main> {children}</main>
        <Footer/>
      </body>
    </html>
    </AuthProvider>
  );
};

export default MainLayout;