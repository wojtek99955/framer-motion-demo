import StartPage from "./StartPage";
import BurgerType from "./BurgerType";
import Toppings from "./Toppings";
import { useState } from "react";

function Page({ page, nextPage, PreviousPage }) {
  const [customBurger, setCustomBurger] = useState({
    type: "",
    toppings: [],
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
  }
}

export default Page;
