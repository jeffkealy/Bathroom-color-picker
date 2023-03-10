$(document).ready(function () {
  Coloris({
    themeMode: "dark",
    focusInput: false,
    onChange: (color) => $(".front").css("background-color", color),
  });
  $("#brightnessSlider input").change(function () {
    b = $(this).val();
    $(".wall").css("filter", `brightness(${b}%)`);
    $("#brightnessSlider span").text(b);
  });
});
