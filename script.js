const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

var watchId;

function getLocation() {
  watchId = navigator.geolocation.watchPosition(
    successCallback,
    errorCallback,
    options
  );
}

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
};

const successCallback = (position) => {
  content1.innerHTML = "Speed: " + position.coords.speed;
  content2.innerHTML = "Accuracy: " + position.coords.accuracy;
};

const errorCallback = (error) => {
  console.log(error);
};

function stop() {
  navigator.geolocation.clearWatch(watchId);
}
