const nav = document.querySelector('nav');
const logo_title = document.querySelector('.logo-title');
const nav_li = document.querySelectorAll('nav > ul > li > a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
    nav.style.backgroundColor = mainColor;
    logo_title.style.color = 'var(--black)';
    nav_li.forEach(li => {
      li.style.color = 'var(--black)';
    });

    nav.style.transition = 'background-color .4s ease-in-out';

  } else {
    nav.style.backgroundColor = 'hsl(0, 0%, 0%, 0.6)';
    logo_title.style.color = 'var(--white)';
    nav_li.forEach(li => {
      li.style.color = 'var(--white)';
    });

    nav.style.transition = 'background-color .4s ease-in-out';
  }
});


