$(document).ready(function () {
  Coloris.setInstance(".both-input", {
    themeMode: "dark",
    focusInput: false,
    onChange: (color) => {
      console.log("both");
      $(".front.vanity").css("background-color", color);
      $(".front.bath").css("background-color", color);
    },
  });
  Coloris.setInstance(".bath-input", {
    themeMode: "dark",
    focusInput: false,
    onChange: (color) => {
      console.log("bath");
      $(".front.bath").css("background-color", color);
    },
  });
  Coloris.setInstance(".vanity-input", {
    themeMode: "dark",
    focusInput: false,
    onChange: (color) => {
      console.log("bath");
      $(".front.vanity").css("background-color", color);
    },
  });

  //set both brightness
  $(".both .brightness-slider input").on("input", function (event, ui) {
    let b = $(this).val();

    $(".wall.vanity, .wall.bath").css("filter", `brightness(${b}%)`);
    $(".vanity .brightness-slider input, .bath .brightness-slider input").val(b);
    $(".vanity .brightness-slider span, .bath .brightness-slider span").text(b);
  });
  //set bath wall brightness
  $(".bath .brightness-slider input").on("input", function (event, ui) {
    let b = $(this).val();

    $(".wall.bath").css("filter", `brightness(${b}%)`);
    $(".bath .brightness-slider span").text(b);
  });
  //set vanity wall brightness
  $(".vanity .brightness-slider input").on("input", function (event, ui) {
    let b = $(this).val();

    $(".wall.vanity").css("filter", `brightness(${b}%)`);
    $(".vanity .brightness-slider span").text(b);
  });
});
