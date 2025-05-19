
export const setupScrollAnimation = () => {
  // Enhanced intersection observer with better threshold and margins - tighter detection
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a smaller delay for a cascading effect
          setTimeout(() => {
            entry.target.classList.add('active');
          }, 80);
          
          // Add section highlight class if it's a section container
          if (entry.target.classList.contains('section-container')) {
            entry.target.classList.add('section-active');
          }
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
  );
  
  // Target all elements with animation classes
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((el, index) => {
    // Add staggered animation delay based on element index within its parent
    const parentIndex = Array.from(el.parentElement?.children || []).indexOf(el as Element);
    el.setAttribute('style', `--delay: ${parentIndex * 0.08}s`);
    observer.observe(el);
  });
  
  // Target section containers for special highlighting
  const sections = document.querySelectorAll('.section-container');
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  // Enhanced scroll animations for specific elements
  document.querySelectorAll('.feature-card, .hover-lift').forEach((card, index) => {
    card.setAttribute('style', `transition-delay: ${index * 80}ms;`);
  });
  
  // Add parallax effect to background elements
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('.bg-gradient-to-br, .bg-gradient-to-tr').forEach((gradient) => {
      (gradient as HTMLElement).style.backgroundPosition = `center ${scrollY * 0.04}px`;
    });
  });
  
  return () => {
    elements.forEach((el) => observer.unobserve(el));
    sections.forEach((section) => observer.unobserve(section));
    window.removeEventListener('scroll', () => {});
  };
};
