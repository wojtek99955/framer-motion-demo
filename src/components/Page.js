import StartPage from "./StartPage";
import BurgerType from "./BurgerType";
import Toppings from "./Toppings";
import { useState } from "react";
import Sauces from "./Sauces";
import Order from "./Order";

function Page({ page, nextPage, PreviousPage }) {
  const [customBurger, setCustomBurger] = useState({
    type: "",
    toppings: [],
    sauce: "",
  });
  if (page === 0) {
    return (
      <StartPage
        customBurger={customBurger}
        setCustomBurger={setCustomBurger}
        nextPage={nextPage}
        PreviousPage={PreviousPage}
      />
    );
  } else if (page === 1) {
    return (
      <BurgerType
        customBurger={customBurger}
        setCustomBurger={setCustomBurger}
        nextPage={nextPage}
        PreviousPage={PreviousPage}
      />
    );
  } else if (page === 2) {
    return (
      <Toppings
        customBurger={customBurger}
        setCustomBurger={setCustomBurger}
        nextPage={nextPage}
        PreviousPage={PreviousPage}
      />
    );
  } else if (page === 3) {
    return (
      <Sauces
        customBurger={customBurger}
        setCustomBurger={setCustomBurger}
        nextPage={nextPage}
        PreviousPage={PreviousPage}
      />
    );
  } else if (page === 4) {
    return (
      <Order
        customBurger={customBurger}
        setCustomBurger={setCustomBurger}
        nextPage={nextPage}
        PreviousPage={PreviousPage}
      />
    );
  }
}

export default Page;
