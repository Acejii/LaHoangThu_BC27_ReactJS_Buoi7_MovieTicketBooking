import React from "react";
import "../scss/Seat.scss";
import SeatList from "./SeatList";
const Seat = () => {
  return (
    <div className="seat-container">
      <img src="img/screen.png" alt="screen" width="80%" />
      <div className="seat-list">
        <SeatList />
      </div>
    </div>
  );
};

export default Seat;
