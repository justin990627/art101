/**
* Author: Christian Decareau & Justin Juang
* Date: 10/19/2021
*
**/

chrisTransport = ["Bus", "Bike", "Carpool", "Uber", "Car"];

var chrisMainRide = {
make: 'Chrysler',
model: 'PT Cruiser',
color: 'Silver',
year: '2021'
};

document.writeln("Getting around: " + chrisTransport + "<br>");

document.writeln("My Main Ride: </pre>", JSON.stringify(chrisMainRide, null, '\t'), "</pre>");

justinTransport = ["Bus", "Bike", "Uber", "Car"];

var justinMainRide = {
make: 'Mercedes Benz',
model: 'Class C',
color: 'Silver',
year: '2015'
};

document.writeln("Getting around: " + justinTransport + "<br>");

document.writeln("My Main Ride: </pre>", JSON.stringify(justinMainRide, null, '\t'), "</pre>");
