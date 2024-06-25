import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const AppLayout = ({ children }) => {
  return (
    <div className="relative overflow-y-auto overscroll-y-contain snap-y snap-mandatory h-screen w-screen">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
