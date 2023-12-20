import { useEffect, useState } from "react";
import Header from "./Header";
import "../css/home.css";
import CalCardSmall from "./CalCardSmall";
import AddModalButton from "./AddModalButton";

function Home() {
  const [exerciseData, setExerciseData] = useState([]);
  const muscleGroups = {
    Arms: ["biceps", "triceps", "forearms"],
    Legs: ["quadriceps", "hamstrings", "calves"],
    Chest: ["chest"],
    Back: ["lats", "lower_back", "middle_back", "traps"],
    Core: ["abdominals"],
    Cardio: ["cardio"],
  };

  function renderCalCardSmallComponents() {
    const schedule = {};

    // Group exercises by day
    exerciseData.forEach((data) => {
      const { selectedDay } = data;
      if (!schedule[selectedDay]) {
        schedule[selectedDay] = [];
      }

      schedule[selectedDay].push(data);
    });

    // Render CalCardSmall components for each day
    return Object.keys(schedule).map((day) => (
      <div key={day} className="schedule-day">
        <p className="font-size-16B">{day}</p>
        {schedule[day].map((exercise, index) => (
          <CalCardSmall
            key={index}
            text={exercise.selectedMuscle} // Assuming selectedMuscle is the relevant property
            color={"lightgray"} // Replace with logic to map the selected muscle to its color
          />
        ))}
      </div>
    ));
  }

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = JSON.parse(localStorage.getItem("exerciseData")) || [];

    const dayToNumber = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };

    const sortedData = storedData.sort((a, b) => {
      const dayA = dayToNumber[a.selectedDay];
      const dayB = dayToNumber[b.selectedDay];
      return dayA - dayB;
    });

    // Sort the exercises based on the selected day
    // const sortedData = storedData.sort((a, b) => {
    //   const dayOrder = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //   return dayOrder.indexOf(a.selectedDay) - dayOrder.indexOf(b.selectedDay);
    // });

    setExerciseData(sortedData);
    console.log(sortedData);
  }, []);

  /////////////////////////////////////////////////////////

  return (
    <div>
      <Header className="header-class" />
      <div className="body-flex">
        <div>
          <AddModalButton />
        </div>
        {/* Render the schedule based on fetched data */}
        {renderCalCardSmallComponents()}
      </div>
    </div>
  );
}

export default Home;
