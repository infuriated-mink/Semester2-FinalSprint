import { useEffect, useState } from "react";
import Header from "./Header";
import "../css/home.css";
import CalCardSmall from "./CalCardSmall";
import AddModalButton from "./AddModalButton";

function Home() {
  const [exerciseData, setExerciseData] = useState([]);

  // Retrieve existing data from local storage
  const existingData = JSON.parse(localStorage.getItem("exerciseData")) || [];

  console.log(existingData);

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

    const colorMap = {
      Chest: "#FF6347",
      Back: "#6A5ACD",
      Arms: "#FFD700",
      Legs: "#0094FF",
      Core: "#32CD32",
    };

    const colorStyle = (muscle) => {
      return colorMap[muscle] || "#F900B3"; // Default color
    };

    // Inside the renderCalCardSmallComponents function
    return Object.keys(schedule).map((day) => (
      <div key={day} className="schedule-day">
        <p className="font-size-16B">{day}</p>
        {schedule[day].map((exercise, index) => (
          <CalCardSmall
            key={index}
            text={exercise.selectedMuscle}
            color={colorStyle(exercise.selectedMuscle)}
            exercises={exercise.exercises}
            sets={exercise.buildSets}
            reps={exercise.buildReps}
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
