export function sliderForItems(classNameItems) {
  let slideIndex = 1;

  function plusSlide() {
    showSlides(slideIndex += 1);
  }

  function minusSlide() {
    showSlides(slideIndex -= 1);
  }

  const slides = document.getElementsByClassName(`${classNameItems}`);
  const counter = document.querySelector('.features__var');

  if (slides.length === 3) {
    const nextButton = document.querySelector('.features__arrow-next');
    const prevButton = document.querySelector('.features__arrow-prev');

    nextButton.addEventListener('click', () => {
      for (let i = 0; i < nextButton.children.length; i++) {
        nextButton.children[i].setAttribute('fill', '#333');
        prevButton.children[i].setAttribute('fill', '#bdbdbd');
      }
      plusSlide();
      counter.innerHTML = `0${slideIndex}`;
    });

    prevButton.addEventListener('click', () => {
      for (let i = 0; i < prevButton.children.length; i++) {
        nextButton.children[i].setAttribute('fill', '#bdbdbd');
        prevButton.children[i].setAttribute('fill', '#333');
      }
      minusSlide();
      counter.innerHTML = `0${slideIndex}`;
    });
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', () => {
      plusSlide();

      if (slides.length === 3) {
        counter.innerHTML = `0${slideIndex}`;
      }
    });
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n === 0) {
      slideIndex = slides.length;
    }

    if (window.visualViewport.width < 768) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      slides[slideIndex - 1].style.display = 'block';
    } else {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'block';
      }
    }
  }

  showSlides(slideIndex);
}
