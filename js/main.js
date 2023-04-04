// Mobile menu burger
function burgerMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
          menu.classList.add('active');
          burger.classList.add('active');
          body.classList.add('locked');
      } else {
          menu.classList.remove('active');
          burger.classList.remove('active');
          body.classList.remove('locked');
      }
  });

  window.addEventListener('resize', () => {
      if (window.innerWidth > 960) {
          menu.classList.remove('active');
          burger.classList.remove('active');
          body.classList.remove('locked');
      }
  });
}

burgerMenu();

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

if (window.matchMedia("(min-width: 1201px)").matches) {
  tl.fromTo(
    '.hero__subtitle', 
    {
      x: -100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 1
    },
    1
  )
  .fromTo(
    '.hero__title', 
    {
      y: 50,
      opacity: 0
    }, 
    {
      y: 0,
      opacity: 1,
      duration: 1
    },
    0.4
  )
  .fromTo(
    '.hero__text',
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1
    },
    0.6
  )
  .fromTo(
    '.hero__btn-1', 
    {
      y: 20,
      opacity: 0
    }, 
    {
      y: 0,
      opacity: 1,
      duration: 1
    },
    1.2
  )
  .fromTo(
    '.hero__btn-2', 
    {
      y: 20,
      opacity: 0
    }, 
    {
      y: 0,
      opacity: 1,
      duration: 1
    },
    1.6
  )
  .fromTo(
    '.logo', 
    {
      y: -50,
      opacity: 0,
    }, 
    {
      y: 0,
      opacity: 1,
      duration: 1
    },
    3
  )
  .fromTo(
    '.menu li', 
    {
      y: -50,
      opacity: 0,
    }, 
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15
    },
    3
  )
  .fromTo(
    '.star', 
    {
      scale: 0,
      opacity: 0,
    }, 
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.2
    },
    3
  )
  // .fromTo(
  //   '.hero__img', 
  //   {
  //     scale: 0.5,
  //     opacity: 0.5,
  //     y: 100
  //   }, 
  //   {
  //     scale: 1,
  //     opacity: 1,
  //     duration: 1,
  //     y: 0
  //   },
  //   3
  // )
  
  // Hero scroll animations
  gsap.to('.hero', {
    scrollTrigger: {
      trigger: '.header',
      start: 'top top',
      scrub: true
    },
    yPercent: 80,
    scale: 0.5,
    xPercent: -80,
    opacity: 0
  })
  
  gsap.to('.hero__bg', {
    scrollTrigger: {
      trigger: '.header',
      start: 'top top',
      scrub: true
    },
    scale: 1.2
  })
  
  gsap.to('.hero__img', {
    scrollTrigger: {
      trigger: '.header',
      start: 'top top',
      scrub: true
    },
    scale: 2
  })
  
  // Stars animation
  gsap.to('[data-speed]', {
    y: (i, el) => -(1 - parseFloat(el.getAttribute('data-speed'))) * ScrollTrigger.maxScroll(window),
    scrollTrigger: {
      scrub: 0
    }
  })
  
  // Regions Animation
  gsap.from('.regions__img', {
    scrollTrigger: {
      trigger: '.section__regions',
      start: '-30% center',
      end: '+=300px',
      scrub: true
    },
    scale: 0,
    transformOrigin: 'left center',
    ease: 'none',
    stagger: 1,
    duration: 1
  })
  
  gsap.from('.regions__title', {
    scrollTrigger: {
      trigger: '.section__regions',
      start: '-30% center',
      end: '+=300px',
      scrub: true
    },
    scale: 0,
    transformOrigin: 'top center',
    ease: 'none',
    stagger: 1,
    duration: 1
  })
  
  // Info animations
  gsap.to('.left__item', {
    scrollTrigger: {
      trigger: '.section__info',
      scrub: true
    },
    yPercent: -40,
  })
  
  gsap.to('.right__item', {
    scrollTrigger: {
      trigger: '.section__info',
      scrub: true
    },
    yPercent: 30,
  })
  
  // Featured animations
  gsap.from('.featured__title', {
    scrollTrigger: {
      trigger: '.section__featured',
      start: '-30% bottom',
      end: '+=650',
      scrub: true
    },
    scale: 0,
    transformOrigin: 'left center'
  })
  
  const items = gsap.utils.toArray('.featured__item');
  
  gsap.to(items, {
    scrollTrigger: {
      trigger: '.section__featured',
      start: '-30% center',
      scrub: true
    },
    xPercent: -100 * (items.length - 1)
  })
}