document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');

  // Callback function to handle intersection events
  const revealSection = function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        // Remove the class when the section leaves the viewport
        entry.target.classList.remove('visible');
      }
    });
  };

  // Create an IntersectionObserver instance
  const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.1  // Trigger when 10% of the section is visible
  });

  // Observe each section
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});
