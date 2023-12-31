// @ts-nocheck
import Aos from "aos"
import Parallax from "parallax-js";
import Shuffle from "shufflejs";
import SmoothScroll from "smooth-scroll";
import imagesLoaded from "imagesloaded";
import Swiper from "swiper";

function closeAllModals() {
  const clb = document.getElementById('closePanel');
  if (clb) { clb?.click(); }
}

function initSwiper() {
  const forEach = (array, callback, scope) => {
    for (let i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  // Carousel initialisation
  const carousels = document.querySelectorAll('.swiper');
  forEach(carousels, (index, value) => {
    let options;
    if (value.dataset.swiperOptions != undefined) options = JSON.parse(value.dataset.swiperOptions);

    // Thumbnails
    if (options.thumbnails) {
      let images = options.thumbnails.images;
      options = Object.assign({}, options, {
        pagination: {
          el: options.thumbnails.el,
          clickable: true,
          bulletActiveClass: 'active',
          renderBullet: (index, className) => {
            return `<li class='swiper-thumbnail ${className}'>
            <img src='${images[index]}' alt='Thumbnail'>
          </li>`;
          }
        }
      });
    }
    const swiper = new Swiper(value, options); // eslint-disable-line no-undef

    // Controlled slider
    if (options.controlledSlider) {
      const controlledSlider = document.querySelector(options.controlledSlider);
      let controlledSliderOptions;
      if (controlledSlider.dataset.swiperOptions != undefined) controlledSliderOptions = JSON.parse(controlledSlider.dataset.swiperOptions);
      /* eslint-disable no-undef */
      const swiperControlled = new Swiper(controlledSlider, controlledSliderOptions);
      /* eslint-enable no-undef */
      swiper.controller.control = swiperControlled;
    }

    // Binded content
    if (options.bindedContent) {
      swiper.on('activeIndexChange', e => {
        const targetItem = document.querySelector(e.slides[e.activeIndex].dataset.swiperBinded);
        const previousItem = document.querySelector(e.slides[e.previousIndex].dataset.swiperBinded);
        previousItem.classList.remove('active');
        targetItem.classList.add('active');
      });
    }
  });
}

function initShuffle() {
  const grid = document.querySelectorAll('.masonry-grid');
  let masonry: Shuffle;
  if (grid === null) return;
  for (let i = 0; i < grid.length; i++) {
    /* eslint-disable no-undef */
    masonry = new Shuffle(grid[i], {
      itemSelector: '.masonry-grid-item',
      sizer: '.masonry-grid-item'
    });
    imagesLoaded(grid[i]).on('progress', () => {
      masonry.layout();
    });
    /* eslint-enable no-undef */

    // Filtering
    const filtersWrap = grid[i].closest('.masonry-filterable');
    if (filtersWrap === null) return;
    const filters = filtersWrap.querySelectorAll('.masonry-filters [data-group]');
    for (let n = 0; n < filters.length; n++) {
      filters[n].addEventListener('click', function (e) {
        const current = filtersWrap.querySelector('.masonry-filters .active');
        const target = this.dataset.group;
        if (current !== null) {
          current.classList.remove('active');
        }
        this.classList.add('active');
        masonry.filter(target);
        e.preventDefault();
      });
    }
  }
}

function acToast(type: string, message: string) {

  let toastContainer = document.getElementById('toast-container');

  // Create a new toast element using the DOM API
  const toastElement = document.createElement('div');
  toastElement.classList.add('toast');
  toastElement.setAttribute('role', 'alert');
  toastElement.setAttribute('autohide', 'false');
  toastElement.setAttribute('aria-live', 'assertive');
  toastElement.setAttribute('aria-atomic', 'true');

  // Create toast header
  const toastHeader = document.createElement('div');
  toastHeader.classList.add('toast-header', 'bg-primary', 'text-white');

  //const i = document.createElement('i');
  //i.classList.add('ai-bell', 'fs-lg me-2');
  //toastHeader.appendChild(i);

  const strong = document.createElement('strong');
  strong.classList.add('mr-auto');
  strong.textContent = type;
  toastHeader.appendChild(strong);

  // Close button with data-bs-dismiss attribute
  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.classList.add('btn-close', 'btn-close-white', 'ms-auto');
  closeBtn.setAttribute('data-dismiss', 'toast');
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.setAttribute('data-bs-dismiss', 'toast'); // This line closes modals
  // closeBtn.innerHTML = '<span aria-hidden="true">&times;</span>';
  toastHeader.appendChild(closeBtn);
  // Create toast body
  const toastBody = document.createElement('div');
  toastBody.classList.add('toast-body');
  toastBody.textContent = message;

  // Append header and body to the toast element
  toastElement.appendChild(toastHeader);
  toastElement.appendChild(toastBody);

  // Append the toast element to the body
  // document.body.appendChild(toastElement);
  toastContainer!.appendChild(toastElement);
  //console.log(toastElement);
  const toast = new bootstrap.Toast(toastElement);
  toast.show();

  // toastElement.addEventListener('hidden.bs.toast', function () {
  //   toastContainer!.removeChild(toastElement);
  // });
}

function initscrollToTop() {
  const button = document.querySelector('.btn-scroll-top')
  const scrollOffset = 0

  if (button == null) return

  const offsetFromTop = parseInt(scrollOffset, 10)
  const progress = button.querySelector('svg circle')
  const length = progress.getTotalLength()

  progress.style.strokeDasharray = length
  progress.style.strokeDashoffset = length

  const showProgress = () => {
    const scrollPercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)
    const draw = length * scrollPercent
    progress.style.strokeDashoffset = length - draw
  }

  window.addEventListener('scroll', (e) => {
    if (e.currentTarget.pageYOffset > offsetFromTop) {
      button.classList.add('show')
    } else {
      button.classList.remove('show')
    }
    showProgress()
  })
}

function initParallax() {
  const element = document.querySelectorAll('.parallax')
  /* eslint-disable no-unused-vars, no-undef */
  for (let i = 0; i < element.length; i++) {
    //@ts-ignore
    const parallaxInstance = new Parallax(element[i])
  }
}

function themeSwitcher() {
  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = (theme: string) => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }
    return 'dark'
  }

  const setTheme = (theme: string) => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme: string) => {
    const themeSwitcher = document.querySelector('[data-bs-toggle="mode"]')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherCheck = themeSwitcher.querySelector('input[type="checkbox"]')

    if (theme === 'dark') {
      // @ts-ignore
      themeSwitcherCheck.checked = 'checked'
    } else {
      // @ts-ignore
      themeSwitcherCheck.checked = false
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-toggle="mode"]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          // @ts-ignore
          const theme = toggle.querySelector('input[type="checkbox"]').checked === true ? 'dark' : 'light'
          setStoredTheme(theme)
          setTheme(theme)
          // @ts-ignore
          showActiveTheme(theme, true)
        })
      })
  })
}



function initAos() {
  const animationToggle = document.querySelector('[data-aos]')
  if (animationToggle === null) return
  Aos.init() // eslint-disable-line no-undef
}

function initSmoothScroll() {
  /* eslint-disable no-unused-vars, no-undef */
  const selector = '[data-scroll]',
    fixedHeader = '[data-scroll-header]',
    scroll = new SmoothScroll(selector, {
      speed: 800,
      speedAsDuration: true,
      offset: (anchor, toggle) => {
        //@ts-ignore
        return toggle!.dataset!.scrollOffset || 20
      },
      header: fixedHeader,
      updateURL: false,
    })
  /* eslint-enable no-unused-vars, no-undef */
}


function initLightGallery() {
  const gallery = document.querySelectorAll('.gallery');
    if (gallery.length) {
      for (let i = 0; i < gallery.length; i++) {
        /* eslint-disable no-undef */
        const thumbnails = gallery[i].dataset.thumbnails ? true : false,
          video = gallery[i].dataset.video ? true : false,
          defaultPlugins = [lgZoom, lgFullscreen],
          videoPlugin = video ? [lgVideo] : [],
          thumbnailPlugin = thumbnails ? [lgThumbnail] : [],
          plugins = [...defaultPlugins, ...videoPlugin, ...thumbnailPlugin];
        lightGallery(gallery[i], {
          selector: '.gallery-item',
          plugins: plugins,
          licenseKey: 'D4194FDD-48924833-A54AECA3-D6F8E646',
          download: false,
          autoplayVideoOnSlide: true,
          zoomFromOrigin: false,
          youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0
          },
          vimeoPlayerParams: {
            byline: 0,
            portrait: 0,
            color: '6366f1'
          }
        });
        /* eslint-enable no-undef */
      }
    }
}

export {
  //invoke 3rd party functions
  initAos,
  initSmoothScroll,
  initParallax,
  initscrollToTop,
  
  //vendor function
  themeSwitcher,
  initSwiper,
  initLightGallery,
  acToast,
  closeAllModals,
  initShuffle
}
