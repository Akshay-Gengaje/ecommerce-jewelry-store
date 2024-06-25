import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <AppLayout>
      <Banner />
      <NewArrivals />
    </AppLayout>
  );
}

export default App;
