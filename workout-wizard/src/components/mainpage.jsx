import React, { useState, useEffect } from "react";

function MainPage() {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const muscle = "biceps";
        const response = await fetch(
          `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
          {
            headers: {
              "X-Api-Key": "CODE HERE",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setFetchedData(data);
      } catch (error) {
        console.error("Request failed:", error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      <h1>Main Page</h1>
      <p>{JSON.stringify(fetchedData)}</p>
    </div>
  );
}

export default MainPage;
