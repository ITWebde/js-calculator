var walkSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

var elForm = document.querySelector("#form");
var elResultWalk = document.querySelector("#resultWalk");
var elResultBike = document.querySelector("#resultBike");
var elResultCar = document.querySelector("#resultCar");
var elResultPlane = document.querySelector("#resultPlane");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    var elInput = document.querySelector("#inputNumber").value.trim();

    
    var spendTimeWalk = elInput / walkSpeed;
    var spendTimeBike = elInput / bikeSpeed;
    var spendTimeCar = elInput / carSpeed;
    var spendTimePlane = elInput / planeSpeed;
    var minutWalk = Math.ceil(((spendTimeWalk - Math.floor(spendTimeWalk)) * 60));
    var minutBike = Math.ceil(((spendTimeBike - Math.floor(spendTimeBike)) * 60));
    var minutCar = Math.ceil(((spendTimeCar - Math.floor(spendTimeCar)) * 60));
    var minutPlane = Math.ceil(((spendTimePlane - Math.floor(spendTimePlane)) * 60));

    elResultWalk.textContent = Math.floor(spendTimeWalk) + " h " + minutWalk + " min ";
    elResultBike.textContent = Math.floor(spendTimeBike) + " h " + minutBike + "min ";
    elResultCar.textContent = Math.floor(spendTimeCar) + " h " + minutCar + " min ";
    elResultPlane.textContent = Math.floor(spendTimePlane) + " h " + minutPlane + " min ";
});