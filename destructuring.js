let nestedObj = {
  name: "xyz",
  address: {
    city: "knw",
    pin: "450001",
    permanentAddress: {
      city: "indore",
      pin: "452010",
    },
  },
};

let { city, pin } = nestedObj.address.permanentAddress;
console.log(city, pin);
