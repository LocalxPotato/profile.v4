var body = document.querySelector("body");
var errorDiv = document.querySelectorAll(".errors div");

var leftText = document.querySelectorAll(".left> div h1, .left >div>div");
var chair = document.querySelector(".chair");
var hearts = document.querySelectorAll(".hearts g");
var hashtags = document.querySelectorAll(".ghumDhorse, .v4, .special");
var snakeRect = document.querySelectorAll(".snake rect");
var spongbob = document.querySelector(".spongbob");
var eye = document.querySelector(".eye");
var developer = document.querySelector(".developer");
var snake = document.querySelector(".snake");
console.log(errorDiv.length);

document.addEventListener("mousemove", (e) => {
  var clientX = e.clientX;
  var clientY = e.clientY;
  var rect = spongbob.getBoundingClientRect();
  var anchorX = rect.left + rect.width / 2;
  var anchorY = rect.top + rect.height / 2;
  var angleDeg = angle(clientX, clientY, anchorX, anchorY);
  eye.style.transform = `rotate(${angleDeg - 50}deg)`;
  errorDiv.forEach((div) => {
    var mainTop = e.pageY;
    var mainLeft = e.pageX;
    div.style.left = mainLeft / 10 + "px";
    div.style.top = mainTop / 10 + "px";
  });
});
var angle = (cx, cy, ex, ey) => {
  var dy = ey - cy;
  var dx = ex - cx;
  var rad = Math.atan2(dy, dx);
  var deg = (rad * 180) / Math.PI;
  return deg;
};
var time = 0;
var errorTransition = 0;
for (i = 9; i > 0; i -= 1) {
  time += 150;
  errorTransition += 50;
  errorDiv[i].style.opacity = "1";
  errorDiv[i].style.transition = errorTransition + "ms";

  errorDiv[i].style.animationDelay = time + "ms";
}
setTimeout(() => {
  leftText.forEach((item) => {
    item.style.left = "0%";
    chair.style.right = "5%";
  });
}, 50);
var heartsTransitionDelay = 0;
for (i = 0; i < hearts.length; i++) {
  heartsTransitionDelay += 50;
  hearts[i].style.transitionDelay = heartsTransitionDelay + "ms";
}

setTimeout(() => {
  hearts.forEach((heart) => {
    heart.style.opacity = "1";
    heart.style.scale = "1";
  });
}, 700);
setTimeout(() => {
  hashtags.forEach((tags) => {
    tags.classList.remove("hasInactive");
  });
}, 100);
var designer = document.querySelector(".designer");
var penguineCard = document.querySelector(".penguineCard");
var designerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        var designerEverything = document.querySelectorAll(".designer *");
        var designerTheDiv = document.querySelector(".designer .theDiv");
        console.log("designer!");
        designerTheDiv.style.left = "2vw"
        designerEverything.forEach((item) => {
          item.style.animationPlayState = "running  ";
        });
      }
    });
  },
  { rootMargin: "0px 0px -50% 0px" }
);
designerObserver.observe(designer);
var snakeRight = 54;

var developerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        var developerTheDiv = document.querySelector(".developer .theDiv");
        developerTheDiv.style.left = "2vw"
        var devEverything = document.querySelectorAll(".developer *");
        devEverything.forEach((item) => {
          item.style.animationPlayState = "running";
        });
        var snakeMove = setInterval(() => {
          snakeRight += 3;
          snake.style.right = snakeRight + "%";
        }, 50);
        setTimeout(() => {
          clearInterval(snakeMove);
        }, 1200);
      }
    });
  },
  { rootMargin: "0px 0px -50% 0px" }
);
developerObserver.observe(developer);
var spaceEverything = document.querySelector(".space *")

var leftOverObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        var leftOverTheDiv = document.querySelector(".leftOver .theDiv");
        leftOverTheDiv.style.left = "2vw"
        var leftOver = document.querySelector(".leftOver img")
        leftOver.style.translate = "0% 0%"
        leftOver.style.opacity = "1"
        spaceEverything.style.animationPlayState = "running"
      } else {
        spaceEverything.style.animationPlayState = "paused"

      }
    });
  },
  { rootMargin: "50% 0px -20% 0px" }
);
var leftOverSection = document.querySelector(".leftOver")

leftOverObserver.observe(leftOverSection)
