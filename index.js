const section = document.querySelectorAll("section");
for (let item of section) {
  item.style.border = "2px solid red";
  item.style.marginBottom = "15px ";
  item.style.padding = "20px";
  item.style.borderRadius = "50px";
}

const place = document.getElementsByClassName("place");
place.classList.add("place");
place.classList.remove("place");
