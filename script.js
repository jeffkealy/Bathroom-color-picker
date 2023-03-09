$(document).ready(function () {
  Coloris({
    themeMode: "dark",
    focusInput: false,
    onChange: (color) => $(".front").css("background-color", color),
  });
});
