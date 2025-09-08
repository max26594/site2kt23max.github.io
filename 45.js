$(document).ready(function(){
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024, // для екранів < 1024px
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // для екранів < 768px
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});




  function matchImageHeight() {
    const img1 = document.querySelector('#thirddiv1 img');
    const div2 = document.getElementById('thirddiv2');

    if (img1.complete) {
      div2.style.height = img1.offsetHeight + 'px';
    } else {
      img1.onload = () => {
        div2.style.height = img1.offsetHeight + 'px';
      };
    }
  }

  window.addEventListener('load', matchImageHeight);
  window.addEventListener('resize', matchImageHeight);
