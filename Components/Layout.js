import Navbar from "./Navbar";
import Footer from "./footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div className="bg-white-100">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
