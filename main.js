function changePage(pageNumber) {
  const block1 = document.getElementById("block1");
  const block2 = document.getElementById("block2");
  const block3 = document.getElementById("block3");

  const navbar1 = document.getElementById("navbar1");
  const navbar2 = document.getElementById("navbar2");
  const navbar3 = document.getElementById("navbar3");

  const block12 = document.getElementById("block12");
  const block22 = document.getElementById("block22");
  const block33 = document.getElementById("block33");

  const navbar12 = document.getElementById("navbar12");
  const navbar22 = document.getElementById("navbar22");
  const navbar33 = document.getElementById("navbar33");

  block1.style.width = "88px";
  block1.style.height = "60px";
  navbar1.style.fontSize = "16px";
  block2.style.width = "88px";
  block2.style.height = "60px";
  navbar2.style.fontSize = "16px";
  block3.style.width = "88px";
  block3.style.height = "60px";
  navbar3.style.fontSize = "16px";

  block12.style.width = "88px";
  block12.style.height = "60px";
  navbar12.style.fontSize = "16px";
  block22.style.width = "88px";
  block22.style.height = "60px";
  navbar22.style.fontSize = "16px";
  block33.style.width = "88px";
  block33.style.height = "60px";
  navbar33.style.fontSize = "16px";

  const progress = document.getElementById("progress");
  const progress1 = document.getElementById("progress1");
  progress.style.width = "0%";
  progress1.style.width = "0%";

  if (pageNumber === 1) {
    block1.style.width = "114px";
    block1.style.height = "80px";
    navbar1.style.fontSize = "26px";
    progress.style.width = "33%";
    block12.style.width = "114px";
    block12.style.height = "80px";
    navbar12.style.fontSize = "26px";
    progress1.style.width = "33%";
  } else if (pageNumber === 2) {
    block2.style.width = "114px";
    block2.style.height = "80px";
    navbar2.style.fontSize = "26px";
    progress.style.width = "66%";
    block22.style.width = "114px";
    block22.style.height = "80px";
    navbar22.style.fontSize = "26px";
    progress1.style.width = "66%";
  } else if (pageNumber === 3) {
    block3.style.width = "114px";
    navbar3.style.fontSize = "26px";
    block3.style.height = "80px";
    progress.style.width = "100%";
    progress1.style.width = "100%";
    block33.style.width = "114px";
    block33.style.height = "80px";
    navbar33.style.fontSize = "26px";
  }
}

function changeClass(pageNumber) {
  const changeClass1 = document.getElementById("changeClass1");
  const changeClass2 = document.getElementById("changeClass2");
  const changeClass3 = document.getElementById("changeClass3");

  if (pageNumber === 1) {
    changeClass1.classList.add("active");
    changeClass2.classList.remove("active");
    changeClass3.classList.remove("active");
  } else if (pageNumber === 2) {
    changeClass2.classList.add("active");
    changeClass1.classList.remove("active");
    changeClass3.classList.remove("active");
  } else if (pageNumber === 3) {
    changeClass3.classList.add("active");
    changeClass2.classList.remove("active");
    changeClass1.classList.remove("active");
  }
}

window.onload = function () {
  changePage(1);
  changeClass(1);
};
