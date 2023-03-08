$(document).ready(function () {
  Coloris({
    themeMode: "dark",
    onChange: (color) => $(".front").css("background-color", color),
  });
});
