import Navbar from "./Navbar";
import Footer from "./footer";
import Header from "./Header";
import Card from "./Reviews/Card";
const Layout = ({ children }) => {
  return (
    <Card>
      <div className="bg-white-100">
        <Header />

        <Navbar />
        {children}
        <Footer />
      </div>
    </Card>
  );
};

export default Layout;
