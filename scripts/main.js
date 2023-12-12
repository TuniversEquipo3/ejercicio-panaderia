/**
 * @Authors: Laura, Daniel, Ivan, Alejandro, Adrian.
 * @github: https://github.com/TuniversEquipo3/ejercicio-panaderia
 */

window.addEventListener("resize", function () {
  if (document.documentElement.clientWidth <= 430) {
    $(".navbar-brand").html("<img src='https://res.cloudinary.com/dbqqjaqqa/image/upload/v1489761620/logo_mini_pou3vz.png'>");
  } else {
    $(".navbar-brand").html("<img src='https://res.cloudinary.com/dbqqjaqqa/image/upload/v1489836162/smaller_size_logo_wigzr1.png'>");
  }
});

