window.SimpleAnime = class {
  constructor() {
    (this.items = document.querySelectorAll("[data-anime]")), this.init();
  }
  animateItems() {
    this.items.forEach((t) => {
      const e = Number(t.getAttribute("data-anime"));
      isNaN(e) ||
        setTimeout(() => {
          t.classList.add("anime");
        }, e);
    });
  }
  handleVisibility() {
    void 0 !== document.visibilityState
      ? "visible" === document.visibilityState && this.animateItems()
      : this.animateItems();
  }
  init() {
    (this.handleVisibility = this.handleVisibility.bind(this)),
      this.handleVisibility(),
      document.addEventListener("visibilitychange", this.handleVisibility);
  }
};

// debounce do lodash
debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
// animacao
const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 200)
  );
}

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);

    Array.from(entries).forEach((entry) => {
      if (entry.intersectionRatio >= 1) {
        entry.target.classList.add("init-hidden-off");
      }
    });
  },
  {
    threshold: [0, 0.5, 1],
  }
);

Array.from(document.querySelectorAll(".init-hidden")).forEach((Element) => {
  observer.observe(Element);
});
