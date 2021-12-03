//mobile menu
const burguerIcon = document.getElementById("burger");
const navbarMenu = document.getElementById("nav-links");

burguerIcon.addEventListener('click', () =>{
    navbarMenu.classList.toggle('is-active');
});

//map logic
mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2FzdG9uY29kZXMiLCJhIjoiY2t3bWVhc2pvMGc0MjJvbXIyNTJoaTB5MiJ9.O6HwC8kOPxUXjcW8fGKlRw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-56.199007321424084, -34.90305349627359],
  zoom: 15,
});

const marker1 = new mapboxgl.Marker({ color: "red" })
  .setLngLat([-56.199007321424084, -34.90305349627359])
  .addTo(map);
/*
const marker2 = new mapboxgl.Marker({ color: "black" })
  .setLngLat([-56.23025889040947, -34.85040517535079])
  .addTo(map);

const marker3 = new mapboxgl.Marker({ color: "yellow" })
  .setLngLat([-56.18150705919531, -34.88589760270305])
  .addTo(map);

const marker4 = new mapboxgl.Marker({ color: "red" })
  .setLngLat([-56.165027566953896, -34.86449130529874])
  .addTo(map);

const marker5 = new mapboxgl.Marker({ color: "green" })
  .setLngLat([-56.12039560880008, -34.88927703482689])
  .addTo(map);

const marker6 = new mapboxgl.Marker({ color: "violet" })
  .setLngLat([-56.19592661490654, -34.82842599685877])
  .addTo(map);*/


  //carousell
  bulmaCarousel.attach('#carousel-demo', {
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 1,
  });