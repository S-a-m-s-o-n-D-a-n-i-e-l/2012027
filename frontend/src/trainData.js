const mockTrains = [
    {
      trainName: "Chennai Exp",
      trainNumber: "2344",
      departureTime: {
        hours: 21,
        minutes: 35,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 3,
        AC: 1,
      },
      price: {
        sleeper: 200, // Price in hundreds
        AC: 500,     // Price in hundreds
      },
      delayedBy: 15,
    },
    {
      trainName: "Mumbai Fast",
      trainNumber: "1289",
      departureTime: {
        hours: 9,
        minutes: 45,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 5,
        AC: 2,
      },
      price: {
        sleeper: 300, // Price in hundreds
        AC: 800,     // Price in hundreds
      },
      delayedBy: 5,
    },
    {
      trainName: "Delhi Express",
      trainNumber: "5117",
      departureTime: {
        hours: 14,
        minutes: 20,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 2,
        AC: 0,
      },
      price: {
        sleeper: 200, // Price in hundreds
        AC: 500,
      },
      delayedBy: 0,
    },
    {
      trainName: "Kolkata Superfast",
      trainNumber: "6003",
      departureTime: {
        hours: 7,
        minutes: 15,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 8,
        AC: 3,
      },
      price: {
        sleeper: 400, // Price in hundreds
        AC: 1000,    // Price in hundreds
      },
      delayedBy: 20,
    },
    {
      trainName: "Bangalore Express",
      trainNumber: "8126",
      departureTime: {
        hours: 18,
        minutes: 0,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 1,
        AC: 0,
      },
      price: {
        sleeper: 100, // Price in hundreds
        AC: 300,
      },
      delayedBy: 0,
    },
    {
      trainName: "Hyderabad Rajdhani",
      trainNumber: "2001",
      departureTime: {
        hours: 12,
        minutes: 30,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 0,
        AC: 10,
      },
      price: {
        sleeper: 800,
        AC: 1200,    // Price in hundreds
      },
      delayedBy: 10,
    },
    // Add more train data entries
    {
      trainName: "Kochi Express",
      trainNumber: "3498",
      departureTime: {
        hours: 16,
        minutes: 45,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 6,
        AC: 4,
      },
      price: {
        sleeper: 350, // Price in hundreds
        AC: 900,     // Price in hundreds
      },
      delayedBy: 0,
    },
    {
      trainName: "Pune Duronto",
      trainNumber: "8097",
      departureTime: {
        hours: 13,
        minutes: 10,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 4,
        AC: 8,
      },
      price: {
        sleeper: 280, // Price in hundreds
        AC: 750,     // Price in hundreds
      },
      delayedBy: 8,
    },
    {
      trainName: "Jaipur Express",
      trainNumber: "1536",
      departureTime: {
        hours: 8,
        minutes: 30,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 7,
        AC: 1,
      },
      price: {
        sleeper: 250, // Price in hundreds
        AC: 600,     // Price in hundreds
      },
      delayedBy: 3,
    },
    {
      trainName: "Lucknow Shatabdi",
      trainNumber: "4492",
      departureTime: {
        hours: 10,
        minutes: 55,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 0,
        AC: 9,
      },
      price: {
        sleeper: 500,
        AC: 1100,    // Price in hundreds
      },
      delayedBy: 5,
    },
    {
      trainName: "Ahmedabad Express",
      trainNumber: "6120",
      departureTime: {
        hours: 15,
        minutes: 40,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 3,
        AC: 5,
      },
      price: {
        sleeper: 180, // Price in hundreds
        AC: 420,     // Price in hundreds
      },
      delayedBy: 10,
    },
    {
      trainName: "Goa Superfast",
      trainNumber: "7514",
      departureTime: {
        hours: 11,
        minutes: 25,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 4,
        AC: 3,
      },
      price: {
        sleeper: 280, // Price in hundreds
        AC: 650,     // Price in hundreds
      },
      delayedBy: 7,
    },
    {
      trainName: "Bhubaneswar Express",
      trainNumber: "9617",
      departureTime: {
        hours: 17,
        minutes: 15,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 5,
        AC: 2,
      },
      price: {
        sleeper: 320, // Price in hundreds
        AC: 800,     // Price in hundreds
      },
      delayedBy: 12,
    },
    {
      trainName: "Amritsar Mail",
      trainNumber: "3045",
      departureTime: {
        hours: 6,
        minutes: 0,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 8,
        AC: 1,
      },
      price: {
        sleeper: 380, // Price in hundreds
        AC: 600,     // Price in hundreds
      },
      delayedBy: 0,
    },
    {
      trainName: "Patna Rajdhani",
      trainNumber: "2013",
      departureTime: {
        hours: 20,
        minutes: 50,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 100,
        AC: 600,
      },
      price: {
        sleeper: 140, // Price in hundreds
        AC: 550,     // Price in hundreds
      },
      delayedBy: 17,
    },
    {
      trainName: "Indore Express",
      trainNumber: "7016",
      departureTime: {
        hours: 14,
        minutes: 30,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 6,
        AC: 3,
      },
      price: {
        sleeper: 240, // Price in hundreds
        AC: 700,     // Price in hundreds
      },
      delayedBy: 5,
    },
    {
      trainName: "Chandigarh Shatabdi",
      trainNumber: "6529",
      departureTime: {
        hours: 8,
        minutes: 15,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 0,
        AC: 8,
      },
      price: {
        sleeper: 700,
        AC: 900,     // Price in hundreds
      },
      delayedBy: 0,
    },
    {
      trainName: "Nagpur Superfast",
      trainNumber: "5712",
      departureTime: {
        hours: 12,
        minutes: 5,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 7,
        AC: 4,
      },
      price: {
        sleeper: 270, // Price in hundreds
        AC: 750,     // Price in hundreds
      },
      delayedBy: 8,
    },
    {
      trainName: "Kanyakumari Express",
      trainNumber: "8324",
      departureTime: {
        hours: 16,
        minutes: 50,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 4,
        AC: 6,
      },
      price: {
        sleeper: 320, // Price in hundreds
        AC: 900,     // Price in hundreds
      },
      delayedBy: 3,
    },
    {
      trainName: "Varanasi Express",
      trainNumber: "1217",
      departureTime: {
        hours: 11,
        minutes: 30,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 2,
        AC: 1,
      },
      price: {
        sleeper: 190, // Price in hundreds
        AC: 420,     // Price in hundreds
      },
      delayedBy: 10,
    },
    {
      trainName: "Guwahati Superfast",
      trainNumber: "4052",
      departureTime: {
        hours: 19,
        minutes: 15,
        seconds: 0,
      },
      seatsAvailable: {
        sleeper: 6,
        AC: 5,
      },
      price: {
        sleeper: 280, // Price in hundreds
        AC: 800,     // Price in hundreds
      },
      delayedBy: 12,
    },
  ];
  
  export default mockTrains;
  