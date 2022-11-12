import { RiHandCoinFill } from "react-icons/ri";
import { GiCoins } from "react-icons/gi";
import { IconContext } from "react-icons";
import { BsFillUnlockFill } from "react-icons/bs";
import { RiLuggageDepositFill } from "react-icons/ri";
import "./style.scss";

const staticData = {
  benefitList: [
    {
      icon: (
        <IconContext.Provider value={{ className: "apr" }}>
          <GiCoins />
        </IconContext.Provider>
      ),
      text: "Estimated APR",
      value: "80%",
    },
    {
      icon: (
        <IconContext.Provider value={{ className: "commission" }}>
          <RiHandCoinFill />
        </IconContext.Provider>
      ),
      text: "Comission",
      value: "3%",
    },
    {
      icon: (
        <IconContext.Provider value={{ className: "unlock" }}>
          <BsFillUnlockFill />
        </IconContext.Provider>
      ),
      text: "Unlocked Period",
      value: "6 months",
    },
    {
      icon: (
        <IconContext.Provider value={{ className: "minimum" }}>
          <RiLuggageDepositFill />
        </IconContext.Provider>
      ),
      text: "Min. Stake Required",
      value: "1 Token X",
    },
  ],
};

export default staticData;
