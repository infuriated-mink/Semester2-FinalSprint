import Header from "./Header";
import "../css/home.css";
import CalCardSmall from "./CalCardSmall";

function Home() {
  return (
    <div>
      <Header className="header-class" />
      <div className="body-flex">
        <img src="" alt="+" className="add-button-big" />
        <div className="calendar-section-left">
          <p className="font-size-12">Sun</p>
          <p className="font-size-16B">12/17</p>
          <CalCardSmall text={"Legs"} color={"lightblue"} />
        </div>
        <div className="calendar-section-mid">
          <p className="font-size-12">Mon</p>
          <p className="font-size-16B">12/18</p>
        </div>
        <div className="calendar-section-mid">
          <p className="font-size-12">Tue</p>
          <p className="font-size-16B">12/19</p>
          <CalCardSmall text={"Chest"} color={"#FF6347"} />
        </div>
        <div className="calendar-section-mid">
          <p className="font-size-12">Wed</p>
          <p className="font-size-16B">12/20</p>
        </div>
        <div className="calendar-section-mid">
          <p className="font-size-12">Thu</p>
          <p className="font-size-16B">12/21</p>
        </div>
        <div className="calendar-section-mid">
          <p className="font-size-12">Fri</p>
          <p className="font-size-16B">12/22</p>
        </div>
        <div className="calendar-section-right">
          <p className="font-size-12">Sat</p>
          <p className="font-size-16B">12/23</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
