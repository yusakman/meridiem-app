import "./style.scss";
import { TbCurrencyEthereum } from "react-icons/tb";
import { IconContext } from "react-icons";
import Deposit from "../Deposit";
import Benefit from "../Benefit";

const Container = () => {
  return (
    <div className="container">
      <IconContext.Provider value={{ className: "token-logo" }}>
        <TbCurrencyEthereum />
      </IconContext.Provider>
      <h3>Stake Your Tokens & Earn Rewards</h3>
      <Deposit></Deposit>
      <Benefit></Benefit>
    </div>
  );
};

export default Container;
