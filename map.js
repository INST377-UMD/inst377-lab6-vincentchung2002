window.onload = createMap;

function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

function createMap(){
  var map = L.map("map").setView([40, -100], 3);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>', }).addTo(map);
  
  let lat1 = getRandomInRange(30, 35, 3);
  let long1 = getRandomInRange(-90, -100,)

  let lat2 = getRandomInRange(30, 35, 3);
  let long2 = getRandomInRange(-90, -100, 3);

  let lat3 = getRandomInRange(30, 35, 3);
  let long3 = getRandomInRange(-90, -100, 3);

  var marker = L.marker([lat1, long1]).addTo(map);
  L.marker([lat2, long2]).addTo(map);
  L.marker([lat3, long3]).addTo(map);

  marker.bindTooltip('Testing').openTooltip();

  document.getElementById("lati1").innerHTML = "Marker 1: Latitude: " + lat1 + ", Longitude:" + long1;

  document.getElementById("lati2").innerHTML = "Marker 2: Latitude: " + lat2 + ", Longitude:" + long2;
    
  document.getElementById("lati3").innerHTML = "Marker 3: Latitude: " + lat3 + ", Longitude:" + long3;

  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat1}&longitude=${long1}&localityLanguage=en`)
  .then((res) => res.json())
  .then((data) => {console.log(data.locality)
  document.getElementById("loca1").innerHTML = "Locality: " + data.locality;});
  
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat2}&longitude=${long2}&localityLanguage=en`)  
  .then((res) => res.json())
  .then((data) => {console.log(data.locality)
  document.getElementById("loca2").innerHTML = "Locality: " + data.locality;});

  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat3}&longitude=${long3}&localityLanguage=en`)
  .then((res) => res.json())
  .then((data) => {console.log(data.locality)
  document.getElementById("loca3").innerHTML = "Locality: " + data.locality;});
}

