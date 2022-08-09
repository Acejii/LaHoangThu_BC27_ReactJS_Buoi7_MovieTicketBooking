import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../scss/SeatList.scss";

const SeatList = () => {
  const { data } = useSelector((state) => state.bookTicket);
  const dispatch = useDispatch();

  const handleSelect = (seatName) => {
    dispatch({ type: "handleBooked", payload: seatName });
    dispatch({ type: "handleBookedIntoCart" });
  };
  return (
    <div className="list-container">
      {data.map((item) => (
        <div key={item.row} className="row-list">
          <p className="row">{item.row}</p>
          {item.seats.map((seat) => (
            <button
              key={seat.name}
              className={`seat-item ${seat.booked ? "booked" : ""}`}
              onClick={() => handleSelect(seat.name)}
            >
              {seat.id}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatList;
