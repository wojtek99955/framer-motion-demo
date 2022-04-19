import StartPage from "./StartPage";
import BurgerType from "./BurgerType";

function Page({ page, nextPage, PreviousPage }) {
  if (page === 0) {
    return <StartPage nextPage={nextPage} PreviousPage={PreviousPage} />;
  } else if (page === 1) {
    return <BurgerType nextPage={nextPage} PreviousPage={PreviousPage} />;
  }
}

export default Page;
