let welcomeContainer = $('#welcome_container');
let sectionOne = $('#about_me');
let sectionTwo = $('#languages');
let sectionThree = $('#experience');


welcomeContainer.height($(window).height());
sectionOne.height($(window).height());
sectionTwo.height($(window).height());
sectionThree.height($(window).height());

$(window).resize( () => {
  welcomeContainer.height($(window).height());
  sectionOne.height($(window).height());
  sectionTwo.height($(window).height());
  sectionThree.height($(window).height());
  console.log("done");
});
