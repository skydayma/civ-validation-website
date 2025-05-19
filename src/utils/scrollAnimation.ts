
export const setupScrollAnimation = () => {
  // Enhanced intersection observer with better threshold and margins
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a small delay for a cascading effect
          setTimeout(() => {
            entry.target.classList.add('active');
          }, 100);
          
          // Add section highlight class if it's a section container
          if (entry.target.classList.contains('section-container')) {
            entry.target.classList.add('section-active');
          }
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  );
  
  // Target all elements with animation classes
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((el, index) => {
    // Add staggered animation delay based on element index within its parent
    const parentIndex = Array.from(el.parentElement?.children || []).indexOf(el as Element);
    el.setAttribute('style', `--delay: ${parentIndex * 0.1}s`);
    observer.observe(el);
  });
  
  // Target section containers for special highlighting
  const sections = document.querySelectorAll('.section-container');
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  // Enhanced scroll animations for specific elements
  document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.setAttribute('style', `transition-delay: ${index * 100}ms;`);
  });
  
  return () => {
    elements.forEach((el) => observer.unobserve(el));
    sections.forEach((section) => observer.unobserve(section));
  };
};
