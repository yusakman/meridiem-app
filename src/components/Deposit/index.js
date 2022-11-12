import { Input, Button } from "reactstrap";
import "./style.scss";

const Deposit = () => {
  return (
    <div className="deposit">
      <Input className="deposit-input" placeholder="stake your tokens" />
      <Button className="deposit-btn">Stake</Button>
    </div>
  );
};

export default Deposit;
