import React, { useState, useEffect } from 'react';
import './BarGraph.css'; // Import your CSS file

const BarGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Assume fetchData is a function that fetches data from your JSON file
    const fetchData = async () => {
      try {
        const response = await fetch('user.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bar-graph">
      {data.map((item, index) => (
        <div
          key={index}
          className="bar"
          style={{ height: `${item.value * 10}px` }}
        >
          {item.value > 0 && <span>{item.value}</span>}
        </div>
      ))}
    </div>
  );
};

export default BarGraph;