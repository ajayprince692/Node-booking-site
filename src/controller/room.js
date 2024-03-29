import { findIndex } from "../common/booking.js";

const customer = [
  {
    roomId: 1,
    customerId: 1,
    name: "Ajay",
    date: "17/01/2024",
    startTime: "09.00 AM",
    endTime: "10.00 PM",
  },
  {
    roomId: 2,
    customerId: 2,
    name: "Tony Stark",
    date: "15/01/2024",
    startTime: "08.00 AM",
    endTime: "08.00 PM",
  },
  {
    roomId: 3,
    customerId: 3,
    name: "Brock Lesnar",
    date: "14/01/2024",
    startTime: "9.30 AM",
    endTime: "10.00 PM",
  },
];

const room = [
  {
    roomId: 1,
    roomType: "Buisness class",
    bookStatus: true,
    pricePerHour: 1500,
  },
  {
    roomId: 2,
    roomType: "Party hall",
    bookStatus: true,
    pricePerHour: 1000,
  },
  {
    roomId: 3,
    roomType: "Non Ac",
    bookStatus: true,
    pricePerHour: 1500,
  },
  {
    roomId: 4,
    roomType: "Ac",
    bookStatus: false,
    pricePerHour: 1500,
  },
];

const createRoom = (req, res) => {
  try {
    const id = room.length ? room[room.length - 1].roomId + 1 : 1;
    req.body.roomId = id;
    req.body.roomStatus = false;
    room.push(req.body);
    res.status(200).send({
      message: "Room created successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server Error",
    });
  }
};

const bookedRoom = (req, res) => {
  try {
    let bookedRoom = [];

    for (let i = 0; i < customer.length; i++) {
      for (let j = 0; j < room.length; j++) {
        if (customer[i].roomId === room[j].roomId) {
          bookedRoom.push({
            roomType: room[j].roomType,
            roomStatus: room[j].bookStatus,
            customer: customer[i],
          });
        }
      }
    }
    res.status(200).send(bookedRoom);
  } catch (error) {
    res.status(500).send({
      message: "Internal server Error",
    });
  }
};
const allCustomerData = (req, res) => {
  try {
    let allcustomer = [];
    for (let i = 0; i < customer.length; i++) {
      for (let j = 0; j < room.length; j++) {
        if (customer[i].roomId === room[j].roomId) {
          allcustomer.push({
            CustomerName: customer[i].name,
            Room_Type: room[j].roomType,
            Date: customer[i].date,
            startTime: customer[i].startTime,
            endTime: customer[i].endTime,
          });
        }
      }
    }
    res.status(200).send(allcustomer);
  } catch (error) {
    res.status(500).send({
      message: "Internal server Error",
    });
  }
};
//Booking function
const Booking = (req, res) => {
  try {
    const { id } = req.params;
    const roomId = +id;
    const index = findIndex(room, id);
    const temp = { ...room[index] };
    temp.bookStatus = true;

    if (index !== -1 && room[index].bookStatus == false) {
      room.splice(index, 1, temp); // Room status changing
      const { name, date, startTime, endTime } = req.body;
      const id = customer.length
        ? customer[customer.length - 1].customerId + 1
        : 1;
      const newCustomer = {
        customerId: id,
        name,
        date,
        startTime,
        endTime,
        roomId: roomId,
      };
      customer.push(newCustomer); 
      res.status(200).send({
        message: "Room Booking Successfully",
      });
    } else if (room[index].bookStatus == true) {
      res.status(500).send({
        messag: "This Room is already booking",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

//Deleting by id
const deleteById = (req, res) => {
  try {
    const { id } = req.params;
    const index = findIndex(room, id);
    if (index !== -1) {
      room.splice(index, 1);
      res.status(200).send({
        message: "Deleted Successfully",
      });
    } else {
      res.status(400).send({
        message: "Invalid Room Id",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

export default {
  bookedRoom,
  createRoom,
  allCustomerData,
  Booking,
  deleteById,
};
