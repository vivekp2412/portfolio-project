import "./App.css";
import HomeContainer from "./Containers/HomeContainer/HomeContainer";
import ProductContainer from "./Containers/ProuductContainer/ProductContainer";
import NavbarContainer from "./Containers/navbarContainer/NavbarContainer";
function App() {
  return (
    <>
      <NavbarContainer />
      <HomeContainer/>
      <ProductContainer/>
    </>
  );
}

export default App;
