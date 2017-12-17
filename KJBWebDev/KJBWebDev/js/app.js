let row = $('.section');

// set height of each section to 100% off the window size
row.height($(window).height());

// if window is resized, resize section height
$(window).resize( () => {
  row.height($(window).height());
  console.log("done");
});
