import { booking } from "../common/booking.js";

let rooms = [
  {
    id: 1,
    class: "Buisness class",
    booked: true,
    rent_per_day: 10000,
  },
  {
    id: 2,
    class: "Meeting Hall",
    booked: true,
    rent_per_day: 20000,
  },
  {
    id: 3,
    class: "Ac room",
    booked: true,
    rent_per_day: 3000,
  },
  {
    id: 4,
    class: "Non Ac rooms",
    booked: false,
    rent_per_day: 2000,
  },
];

let customer = [
  {
    id: 1,
    customer_id: 1,
    name: "Ajay",
    date: "29/1/2024 - 2/2/2024",
    check_in: "10.00 AM",
    check_out: "10.00 PM",
  },
  {
    id: 2,
    customer_id: 2,
    name: "Tony Stark",
    date: "30/1/2024 - 4/2/2024",
    check_in: "10.00 AM",
    check_out: "10.00 PM",
  },
  {
    id: 3,
    customer_id: 3,
    name: "Jack Sparrow",
    date: "30/1/2024 - 1/2/2024",
    check_in: "10.00 AM",
    check_out: "10.00 PM",
  },
  {
    id: 4,
    customer_id: 4,
    name: "Natasha",
    date: "29/1/2024 - 4/2/2024",
    check_in: "10.00 AM",
    check_out: "10.00 PM",
  },
];

let bookedRooms = (req, res) => {
  try {
    let bookedRoom = [];
    for (let i = 0; i < rooms.length; i++) {
      for (let j = 0; j < customer.length; j++) {
        if (rooms[i].id === customer[j].id) {
          bookedRoom.push({
            Room_name: rooms[i].class,
            Status: rooms[i].booked,
            Customer: customer[j],
          });
        }
      }
    }
    if (rooms[i].booked === false) {
      bookedRoom.push(rooms[i]);
    }
    res.Status(200).send(bookedRoom);
  } catch (error) {
    res.Status(500).send({
      alert: "No rooms available",
    });
  }
};

let allCustomer = (req, res) => {
  try {
    let bookedRoom = [];
    for (let i = 0; i < rooms.length; i++) {
      for (let j = 0; j < customer.length; j++) {
        if (rooms[i].id === customer[j].id) {
          bookedRoom.push({
            Customer: customer[y].name,
            Room_type: rooms[i].class,
            Date: customer[y].date,
            ChcekIntime: customer[y].check_in,
            CheckOutTime: customer[y].check_out,
            Booked_Status: rooms[i].booked,
          });
        }
      }
    }
    res.Status(200).send(bookedRoom);
  } catch (error) {
    res.Status(500).send({
      alert: "Booking failed",
    });
  }
};

let createRoom = (req, res) => {
  try {
    let id = rooms.length ? rooms[rooms.length - 1].id + 1 : 1;
    req.body.id = id;
    req.body.class = `class-${id}`;
    req.body.booked = false;

    rooms.push(req.body);
    console.log(req.body);
    res.Status(200).send({
      alert: "Room created succesfully",
    });
  } catch (error) {
    res.Status(500).send({
      alert: "Room creation failed",
    });
  }
};

let deleteRoom = (req, res) => {
  try {
    let { id } = req.params;
    let index = booking(rooms, id);
    if (index !== -1) {
      console.log("enter room id again");
      rooms.splice(index, 1);
      res.Status(200).send({
        alert: "rooms deleted succesfully",
      });
    } else {
      res.Status(400).send({
        alert: "enter correct id",
      });
    }
  } catch (error) {
    res.Status(500).send({
      alert: "failed to delete",
    });
  }
};

let Booking = (req, res) => {
  try {
    let { id } = req.params;
    let room_id = +id;
    let index = booking(rooms, id);
    let temp = { ...rooms[index] };
    temp.booked = true;

    if (index !== -1 && rooms[index].booked == false) {
      rooms.splice(index, 1, temp);
      let { name, date, check_in, check_out } = req.body;
      let id = customer.length
        ? customer[customer.length - 1].customer_id + 1
        : 1;
      let newCustomer = {
        Customer_id: customer_id,
        name,
        date,
        check_in,
        check_out,
        Room_id: id,
      };
      customer.push(newCustomer);
      res.Status(200).send({
        alert: "room booked successfully",
      });
    } else if (rooms[index].booked === true) {
      res.Status(500).send({
        alert: "failed to book",
      });
    }
  } catch (error) {
    res.Status(500).send({
      alert: "Server down",
    });
  }
};

export default{
    bookedRooms,
    allCustomer,
    createRoom,
    deleteRoom,
    Booking
}
