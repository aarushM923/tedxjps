const faders = document.querySelectorAll('section, .info-box, h2, h3, p, ul');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (!entry.isIntersecting) return;

    // Add the base appear class
    entry.target.classList.add("appear");

    // Add a staggered delay effect (e.g. 0.1s * index)
    entry.target.style.transitionDelay = `${index * 0.1}s`;

    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(el => appearOnScroll.observe(el));
