import Header from "./Header";
import "../css/home.css";
import CalCardSmall from "./CalCardSmall";
import AddModalButton from "./AddModalButton";

function Home() {
  return (
    <div>
      <Header className="header-class" />
      <div className="body-flex">
        <div>
          <AddModalButton />
        </div>
        <div className="calendar-section-left" id="Sun">
          <p className="font-size-16B">Sun</p>
          {/* <p className="font-size-16B">12/17</p> */}
          <CalCardSmall text={"Legs"} color={"lightblue"} />
        </div>
        <div className="calendar-section-mid" id="Mon">
          <p className="font-size-16B">Mon</p>
          {/* <p className="font-size-16B">12/18</p> */}
        </div>
        <div className="calendar-section-mid" id="Tue">
          <p className="font-size-16B">Tue</p>
          {/* <p className="font-size-16B">12/19</p> */}
          <CalCardSmall text={"Chest"} color={"#FF6347"} />
        </div>
        <div className="calendar-section-mid" id="Wed">
          <p className="font-size-16B">Wed</p>
          {/* <p className="font-size-16B">12/20</p> */}
        </div>
        <div className="calendar-section-mid" id="Thu">
          <p className="font-size-16B">Thu</p>
          {/* <p className="font-size-16B">12/21</p> */}
        </div>
        <div className="calendar-section-mid" id="Fri">
          <p className="font-size-16B">Fri</p>
          {/* <p className="font-size-16B">12/22</p> */}
        </div>
        <div className="calendar-section-right" id="Sat">
          <p className="font-size-16B">Sat</p>
          {/* <p className="font-size-16B">12/23</p> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
