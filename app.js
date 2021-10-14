const burgerMenu = document.querySelector(".burger");
const ul = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");
const button = document.getElementById("nav-btn");
const navSlide = (elType) => {
  // toggleNav

  ul.classList.toggle("nav-active");

  const allLinks = [...navLinks, button];
  allLinks.forEach((el, index) => {
    if (elType === "burger") {
      if (!el.style.animation) {
        el.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
      } else {
        el.style.animation = "";
      }
    } else {
      el.style.animation = "";
    }
  });

  burgerMenu.classList.toggle("toggle");
};

burgerMenu.addEventListener("click", (e) => navSlide("burger"));

navLinks.forEach((el) => {
  el.addEventListener("click", navSlide);
});

$(document).ready(
  function () {
    $(".js--companies").waypoint(function (direction) {
      if (direction === "down") {
        $(".menu-container").addClass("sticky");
      } else {
        $(".menu-container").removeClass("sticky");
      }
    });
  },
  {
    offset: "60px;",
  }
);

// animations on scroll
$(".js--wp-1").waypoint(
  function (direction) {
    $(".js--wp-1").addClass("animate__slideInRight");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-2").waypoint(
  function (direction) {
    $(".js--wp-2").addClass("animate__fadeInDown");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-3").waypoint(
  function (direction) {
    $(".js--wp-3").addClass("animate__fadeInLeft");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-4").waypoint(
  function (direction) {
    $(".js--wp-4").addClass("animate__fadeInRight");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-5").waypoint(
  function (direction) {
    $(".js--wp-5").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-6").waypoint(
  function (direction) {
    $(".js--wp-6").addClass("animate__fadeInRight");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-7").waypoint(
  function (direction) {
    $(".js--wp-7").addClass("animate__fadeInRight");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-8").waypoint(
  function (direction) {
    $(".js--wp-8").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-9").waypoint(
  function (direction) {
    $(".js--wp-9").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-10").waypoint(
  function (direction) {
    $(".js--wp-10").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-11").waypoint(
  function (direction) {
    $(".js--wp-11").addClass("animate__fadeInLeft");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-12").waypoint(
  function (direction) {
    $(".js--wp-12").addClass("animate__fadeInRight");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-13").waypoint(
  function (direction) {
    $(".js--wp-13").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-14").waypoint(
  function (direction) {
    $(".js--wp-14").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-15").waypoint(
  function (direction) {
    $(".js--wp-15").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-16").waypoint(
  function (direction) {
    $(".js--wp-16").addClass("animate__fadeInRight");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-17").waypoint(
  function (direction) {
    $(".js--wp-17").addClass("animate__fadeInRight");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-18").waypoint(
  function (direction) {
    $(".js--wp-18").addClass("animate__fadeInRight");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-19").waypoint(
  function (direction) {
    $(".js--wp-19").addClass("animate__fadeInDown");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-20").waypoint(
  function (direction) {
    $(".js--wp-20").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-21").waypoint(
  function (direction) {
    $(".js--wp-21").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-22").waypoint(
  function (direction) {
    $(".js--wp-22").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-23").waypoint(
  function (direction) {
    $(".js--wp-23").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-24").waypoint(
  function (direction) {
    $(".js--wp-24").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-25").waypoint(
  function (direction) {
    $(".js--wp-25").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-26").waypoint(
  function (direction) {
    $(".js--wp-26").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-27").waypoint(
  function (direction) {
    $(".js--wp-27").addClass("animate__fadeInLeft");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-28").waypoint(
  function (direction) {
    $(".js--wp-28").addClass("animate__fadeInLeft");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-29").waypoint(
  function (direction) {
    $(".js--wp-29").addClass("animate__fadeInDown");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-30").waypoint(
  function (direction) {
    $(".js--wp-30").addClass("animate__fadeInDown");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-31").waypoint(
  function (direction) {
    $(".js--wp-31").addClass("animate__fadeInDown");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-32").waypoint(
  function (direction) {
    $(".js--wp-32").addClass("animate__fadeInDown");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-34").waypoint(
  function (direction) {
    $(".js--wp-34").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-35").waypoint(
  function (direction) {
    $(".js--wp-35").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-36").waypoint(
  function (direction) {
    $(".js--wp-36").addClass("animate__fadeInRight");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-37").waypoint(
  function (direction) {
    $(".js--wp-37").addClass("animate__fadeInRight");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-38").waypoint(
  function (direction) {
    $(".js--wp-38").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-39").waypoint(
  function (direction) {
    $(".js--wp-39").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-40").waypoint(
  function (direction) {
    $(".js--wp-40").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-41").waypoint(
  function (direction) {
    $(".js--wp-41").addClass("animate__fadeInLeft");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-42").waypoint(
  function (direction) {
    $(".js--wp-42").addClass("animate__fadeInDown");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-43").waypoint(
  function (direction) {
    $(".js--wp-43").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-44").waypoint(
  function (direction) {
    $(".js--wp-44").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-45").waypoint(
  function (direction) {
    $(".js--wp-45").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-46").waypoint(
  function (direction) {
    $(".js--wp-46").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-47").waypoint(
  function (direction) {
    $(".js--wp-47").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-48").waypoint(
  function (direction) {
    $(".js--wp-48").addClass("animate__fadeInUp");
  },
  {
    offset: "100%",
  }
);
$(".js--wp-49").waypoint(
  function (direction) {
    $(".js--wp-49").addClass("animate__pulse");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-50").waypoint(
  function (direction) {
    $(".js--wp-50").addClass("animate__fadeIn");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-51").waypoint(
  function (direction) {
    $(".js--wp-51").addClass("animate__pulse");
  },
  {
    offset: "100%",
  }
);

$(".js--wp-52").waypoint(
  function (direction) {
    $(".js--wp-52").addClass("animate__pulse");
  },
  {
    offset: "100%",
  }
);
