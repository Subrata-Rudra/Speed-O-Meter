const content = document.getElementById("content");

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
  let sp = position.coords.speed;
  if (sp === null) {
    sp = 0;
  }
  content.innerHTML = "Speed: " + sp.toFixed(2) + " meters/sec";
};

const errorCallback = (error) => {
  console.log(error);
};

function stop() {
  navigator.geolocation.clearWatch(watchId);
}

function reset() {
  window.location.reload();
}
