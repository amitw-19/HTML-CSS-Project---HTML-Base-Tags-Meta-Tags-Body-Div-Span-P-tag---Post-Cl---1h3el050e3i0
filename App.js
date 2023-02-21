let home =
  "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg";
let work =
  "https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8&w=747&hash=0FC8E3209597476C90DAEE09EFE172AE";
let blog = "https://static.teamguru.com/data/images/thumb/180_da8e22ef6e.jpg";
let aboutUs =
  "https://st2.depositphotos.com/3591429/6006/i/450/depositphotos_60063963-stock-photo-people-discussing-about-us.jpg";

let imageBox = document.getElementById("imageBox");
let navi = document.getElementById("navi");
let navbar = document.getElementsByClassName("navbar");

let div1 = document.getElementById("1");
div1.style.color = "purple";
let div2 = document.getElementById("2");
let div3 = document.getElementById("3");
let div4 = document.getElementById("4");

div1.addEventListener("click", () => {
  div1.style.color = "purple";
  div2.style.color = "#666";
  div3.style.color = "#666";
  div4.style.color = "#666";
  imageBox.style.backgroundImage = `url(${home})`;
});

div2.addEventListener("click", () => {
  div2.style.color = "purple";
  div1.style.color = "#666";
  div3.style.color = "#666";
  div4.style.color = "#666";
  imageBox.style.backgroundImage = `url(${work})`;
});
div3.addEventListener("click", () => {
  div3.style.color = "purple";
  div2.style.color = "#666";
  div1.style.color = "#666";
  div4.style.color = "#666";
  imageBox.style.backgroundImage = `url(${blog})`;
});
div4.addEventListener("click", () => {
  div4.style.color = "purple";
  div2.style.color = "#666";
  div3.style.color = "#666";
  div1.style.color = "#666";
  imageBox.style.backgroundImage = `url(${aboutUs})`;
});
