window.onload = function () {
  let names = document.getElementById("names");
  document.getElementById("btn").addEventListener("click", function () {
    names.innerHTML = "NAMES";
  });

  document.getElementById("names").addEventListener("mouseenter", function () {
    names.innerHTML = "Mouse Enter Done";
  });

  document.getElementById("names").addEventListener("mouseleave", function () {
    names.innerHTML = "Mouse Leave Done";
  });
};
