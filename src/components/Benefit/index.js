import staticData from "../../const/staticData";
import "./style.scss";

const Benefit = () => {
  const { benefitList } = staticData;
  return (
    <div className="benefits">
      {benefitList.map((item) => (
        <div className="items">
          <i className="item-icon">{item.icon}</i>
          <p className="item-text">{item.text}</p>
          <p className="item-value">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefit;
