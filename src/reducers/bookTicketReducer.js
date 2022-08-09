import data from "../data.json";

const initialValue = {
  data: data,
  bookedSeat: [],
};

const bookTicketReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "handleBooked":
      // handle select seat
      const newData = state.data.map((item) => {
        const newSeats = item.seats.map((seat) => {
          if (seat.name === action.payload) {
            return { ...seat, booked: !seat.booked };
          }
          return seat;
        });
        return { ...item, seats: newSeats };
      });
      return {
        ...state,
        data: newData,
      };

    case "handleBookedIntoCart":
      const seats = state.data.map((item) => item.seats);
      const seatList = seats.reduce((acc, curr) => {
        return [...acc, ...curr];
      }, []);
      const seatBooked = seatList.filter((seat) => seat.booked === true);
      return { ...state, bookedSeat: seatBooked };

    case "resetBookedSeat":
      const newSeatData = state.data.map((item) => {
        const newItem = item.seats.map((seat) => {
          return { ...seat, booked: false };
        });
        return { ...item, seats: newItem };
      });
      return { ...state, data: newSeatData };

    case "removeSeat":
      const newBookedSeat = state.bookedSeat.filter(
        (seat) => seat.name !== action.payload
      );
      console.log(newBookedSeat);
      return { ...state, bookedSeat: newBookedSeat };

    case "removeAllSeat":
      return { ...state, bookedSeat: [] };

    default:
      return state;
  }
};

export default bookTicketReducer;
