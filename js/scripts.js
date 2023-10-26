window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // 1. surveasy
  removeViewSurveasy();
  document.getElementById("title1").addEventListener("click", clickSurveasy);
  document.getElementById("title1").addEventListener("mouseover", function () {
    changeColorDiv("title1");
  });
  document.getElementById("title1").addEventListener("mouseout", function () {
    returnColorDiv("title1");
  });

  // 2. screenscenes
  removeViewScreenScenes();
  document
    .getElementById("title2")
    .addEventListener("click", clickScreenScenes);
  document.getElementById("title2").addEventListener("mouseover", function () {
    changeColorDiv("title2");
  });
  document.getElementById("title2").addEventListener("mouseout", function () {
    returnColorDiv("title2");
  });

  // 3. nowauction
  removeViewNowAuction();
  document.getElementById("title3").addEventListener("click", clickNowAuction);
  document.getElementById("title3").addEventListener("mouseover", function () {
    changeColorDiv("title3");
  });
  document.getElementById("title3").addEventListener("mouseout", function () {
    returnColorDiv("title3");
  });

  // 4. lotto645
  removeViewLotto();
  document.getElementById("title4").addEventListener("click", clickLotto);
  document.getElementById("title4").addEventListener("mouseover", function () {
    changeColorDiv("title4");
  });
  document.getElementById("title4").addEventListener("mouseout", function () {
    returnColorDiv("title4");
  });

  // ------------------------------------------------------------
  // 모달
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  var thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach(function (thumbnail) {
    thumbnail.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };
  });

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };

  modal.onclick = function (event) {
    // 모달 배경만 클릭됐는지 확인하기 위해 target을 확인
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

// 공통 ------------------------------------------------------
function changeColorDiv(elemname) {
  document.getElementById(elemname).style.backgroundColor = "#14eb55";
}

function returnColorDiv(elemname) {
  if (!document.getElementById(elemname).classList.contains("active")) {
    document.getElementById(elemname).style.backgroundColor = "transparent";
  }
}
// ------------------------------------------------------------
// 1. surveasy
function clickSurveasy() {
  if (document.getElementById("title1").classList.contains("active")) {
    document.getElementById("title1").classList.remove("active");
    removeViewSurveasy();
  } else {
    document.getElementById("title1").classList.add("active");
    viewSurveasy();
    document.getElementById("title1").scrollIntoView({ behavior: "smooth" });
  }
}

function viewSurveasy() {
  const testtt = document.getElementById("surveasy");
  testtt.style.display = "block";
  testtt.style.opacity = "1";
  document.getElementById("title1").style.backgroundColor = "#14eb55";
}

function removeViewSurveasy() {
  const testtt = document.getElementById("surveasy");
  testtt.style.display = "none";
  testtt.style.opacity = "0";
  document.getElementById("title1").style.backgroundColor = "transparent";
}
// ------------------------------------------------------------
// 2. screenScene
function clickScreenScenes() {
  if (document.getElementById("title2").classList.contains("active")) {
    document.getElementById("title2").classList.remove("active");
    removeViewScreenScenes();
  } else {
    document.getElementById("title2").classList.add("active");
    viewScreenScenes();
    document.getElementById("title2").scrollIntoView({ behavior: "smooth" });
  }
}

function viewScreenScenes() {
  const testtt2 = document.getElementById("screenscenes");
  testtt2.style.display = "block";
  testtt2.style.opacity = "1";
  document.getElementById("title2").style.backgroundColor = "#14eb55";
}

function removeViewScreenScenes() {
  const testtt2 = document.getElementById("screenscenes");
  testtt2.style.display = "none";
  testtt2.style.opacity = "0";
  document.getElementById("title2").style.backgroundColor = "transparent";
}
// ------------------------------------------------------------
// 3. NowAuction
function clickNowAuction() {
  if (document.getElementById("title3").classList.contains("active")) {
    document.getElementById("title3").classList.remove("active");
    removeViewNowAuction();
  } else {
    document.getElementById("title3").classList.add("active");
    viewNowAuction();
    document.getElementById("title3").scrollIntoView({ behavior: "smooth" });
  }
}

function viewNowAuction() {
  const testtt2 = document.getElementById("nowauction");
  testtt2.style.display = "block";
  testtt2.style.opacity = "1";
  document.getElementById("title3").style.backgroundColor = "#14eb55";
}

function removeViewNowAuction() {
  const testtt2 = document.getElementById("nowauction");
  testtt2.style.display = "none";
  testtt2.style.opacity = "0";
  document.getElementById("title3").style.backgroundColor = "transparent";
}
// ------------------------------------------------------------
// 4. Lotto6/45
function clickLotto() {
  if (document.getElementById("title4").classList.contains("active")) {
    document.getElementById("title4").classList.remove("active");
    removeViewLotto();
  } else {
    document.getElementById("title4").classList.add("active");
    viewLotto();
    document.getElementById("title4").scrollIntoView({ behavior: "smooth" });
  }
}

function viewLotto() {
  const testtt2 = document.getElementById("lotto");
  testtt2.style.display = "block";
  testtt2.style.opacity = "1";
  document.getElementById("title4").style.backgroundColor = "#14eb55";
}

function removeViewLotto() {
  const testtt2 = document.getElementById("lotto");
  testtt2.style.display = "none";
  testtt2.style.opacity = "0";
  document.getElementById("title4").style.backgroundColor = "transparent";
}
