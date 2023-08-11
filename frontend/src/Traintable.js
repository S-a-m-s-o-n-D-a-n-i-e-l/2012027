import React from "react";

function TrainTable({ trains }) {
  const now = new Date(); // Current time

  // Filter out trains departing in the next 30 minutes
  const filteredTrains = trains.filter((train) => {
    const departureTime = new Date(now);
    departureTime.setHours(train.departureTime.hours, train.departureTime.minutes, train.departureTime.seconds);

    const timeDifference = departureTime - now;
    const minutesUntilDeparture = Math.floor(timeDifference / (1000 * 60));

    return minutesUntilDeparture > 30;
  });

  // Sort trains by price in ascending order
  const sortedTrains = filteredTrains.slice().sort((a, b) => a.price.sleeper - b.price.sleeper);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Train Name</th>
          <th>Train Number</th>
          <th>Departure Time</th>
          <th>Seats Available</th>
          <th>Price (Sleeper/AC)</th>
          <th>Delayed By (minutes)</th>
        </tr>
      </thead>
      <tbody>
        {sortedTrains.map((train) => (
          <tr key={train.trainNumber}>
            <td>{train.trainName}</td>
            <td>{train.trainNumber}</td>
            <td>
              {train.departureTime.hours}:{train.departureTime.minutes}:{train.departureTime.seconds}
            </td>
            <td>Sleeper: {train.seatsAvailable.sleeper}, AC: {train.seatsAvailable.AC}</td>
            <td>Sleeper: {train.price.sleeper}, AC: {train.price.AC}</td>
            <td>{train.delayedBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TrainTable;
