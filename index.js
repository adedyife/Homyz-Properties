const ham = document.querySelector(".hamburger");
const closeel = document.querySelector(".close-btn");
const menu = document.querySelector(".menucontainer");
const logo = document.querySelector(".hom");
const disc = document.querySelector(".discover");


ham.addEventListener("click", () => {
  menu.classList.add("show");
  logo.classList.add("rel");
  disc.classList.add("rel");
  console.log(disc);
});
closeel.addEventListener("click", () => {
  menu.classList.remove("show");
  menu.classList.add("hide");
  logo.classList.remove("rel");
  disc.classList.remove("rel");
  console.log(disc);
});



("use strict");

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
   let next = document.querySelector(".pro-next");
  let prev = document.querySelector(".pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

      prev[i].addEventListener("click", function () {
    //click previos button
    if (position > 0) {
      //avoid slide left beyond the first item
      position -= 1;
      translateX(position); //translate items
    }
  });

    next[i].addEventListener("click", function () {
    if (position >= 0 && position < hiddenItems()) {
      //avoid slide right beyond the last item
      position += 1;
      translateX(position); //translate items
    }
  });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -400 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

