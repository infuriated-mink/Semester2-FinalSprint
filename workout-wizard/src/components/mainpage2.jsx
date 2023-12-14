import React, { useState, useEffect } from "react";
import $ from "jquery";

const ExerciseList = () => {
  const [results, setResults] = useState([]);
  const [muscle, setMuscle] = useState("biceps");
  const [level, setLevel] = useState("beginner");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await $.ajax({
          method: "GET",
          url: `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&difficulty=${level}`,
          headers: { "X-Api-Key": "CODE YOUR" },
          contentType: "application/json",
        });
        setResults(result);
      } catch (error) {
        console.error("Error: ", error.responseText);
      }
    };

    fetchData();
  }, [muscle, level]); // Trigger the effect when muscle or level changes

  return (
    <div>
      <h1>Exercise List</h1>
      <div>
        <label>Muscle: </label>
        <input
          type="text"
          value={muscle}
          onChange={(e) => setMuscle(e.target.value)}
        />
      </div>
      <div>
        <label>Level: </label>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </div>
      <div>
        <h2>Results:</h2>
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ExerciseList;
