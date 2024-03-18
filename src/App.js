import "./App.css";
import MainNavigator from "./components/nav";
import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactCard from "./components/contact";
import ShopPage from "./components/shop";
import SignIn from "./components/sign-up";
import { Provider } from "react-redux";
import store from "./redux/store";
import Checkout from "./components/checkout";
import GeneralItemsPage from "./components/generalItems/generalItemsPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainNavigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactCard />} />
          <Route path="/sign-up" element={<SignIn />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop/:route" element={<GeneralItemsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
