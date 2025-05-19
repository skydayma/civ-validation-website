
export const setupScrollAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Add a small delay for a cascading effect
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, 100);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((el, index) => {
    // Add staggered animation delay based on element index
    el.setAttribute('style', `--delay: ${index * 0.1}s`);
    observer.observe(el);
  });
  
  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
};
