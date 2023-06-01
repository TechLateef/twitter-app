import Input from "./Input";
import searchIcon from "../asset/search_FILL0_wght700_GRAD0_opsz48.svg";
import settingIcon from "../asset/settings_FILL0_wght700_GRAD0_opsz48.svg";
const Explore = () => {
  return (
    <div className="main">
      <section className="main-sec">
        <img className="search-main" src={searchIcon} />
        <Input type="text" placeholder="Search" />
        <img className="set" src={settingIcon} />
      </section>
      <div className="scrollable">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
        <div className="item">7</div>
        <div className="item">7</div>
        <div className="item">8</div>
        <div className="item">9</div>
        <div className="item">0</div>
      </div>
    </div>
  );
};

export default Explore;
