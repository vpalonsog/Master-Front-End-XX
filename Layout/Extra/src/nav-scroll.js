const nav = document.querySelector('.hero__nav');
const headerTop = document.querySelector('.header__top');

if (nav && headerTop) {
  const updateNavTopOnScroll = () => {
    const threshold = headerTop.offsetHeight;
    nav.classList.toggle('hero__nav--at-top', window.scrollY > threshold);
  };

  updateNavTopOnScroll();
  window.addEventListener('scroll', updateNavTopOnScroll, { passive: true });
  window.addEventListener('resize', updateNavTopOnScroll);
}
