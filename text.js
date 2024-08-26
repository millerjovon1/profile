// Split text into individual span elements for animation
$('.text-fader .text-content .colour').each(function() {
  var textSplit = $(this).text().split('');
  var returnHTML = '';
  $.each(textSplit, function(intIndex, objValue) {
    returnHTML += '<span class="letter">' + objValue + '</span>';
  });
  $(this).html(returnHTML);
});

// Add 'in' class to the first text-content element
$(".text-fader .text-content:first-child").addClass("in");

var textFaderDelay = 6000;
var textFaderAnimationSpeed = 1000;
var colourChangeDelay = 2000;

function nextText($current) {
  var hasNext = $current.next(".text-fader .text-content").length > 0;

  setTimeout(function() {
    $current.find('.colour').addClass('go');
  }, colourChangeDelay);

  setTimeout(function() {
    $current.removeClass("in").addClass("out");
    setTimeout(function() {
      $current.find('.colour').removeClass('go');
      $current.removeClass("out");
      if (hasNext) {
        $current.next(".text-fader .text-content").addClass("in");
      } else {
        $(".text-fader .text-content:first-child").addClass("in");
      }
      nextText($(".text-fader .text-content.in"));
    }, textFaderAnimationSpeed);
  }, textFaderDelay);
}
nextText($(".text-fader .text-content.in"));

// Scroll behavior for revealing sections
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');

  function revealSection() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;

      // Add 'visible' class when the section comes into view
      if (sectionTop < triggerPoint) {
        section.classList.add('visible');
      }
    });
  }

  // Listen for scroll events
  window.addEventListener('scroll', revealSection);

  // Initial check in case sections are already in view
  revealSection();
});
