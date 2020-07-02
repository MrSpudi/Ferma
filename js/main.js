// Адаптивное меню
$(document).ready(function () {
  var $win_n = $(window).width();
  $('.ham').on('click', function () {
    var $btn = $(this);
    if (!$btn.hasClass('opened')) {
      $('.nav-header').addClass('active');
      $('body').addClass('no_scroll');
      $('.ham').removeClass('closed');
      $('.ham').addClass('opened');
    } else {
      $('.nav-header').removeClass('active');
      $('body').removeClass('no_scroll');
      $('.ham').addClass('closed');
      $('.ham').removeClass('opened');
    }
  });
  if ($win_n <= 900) {
    $('.parent_link a').click(function () {
      if ($(this).parent().children('.child').css("display") == "none") {
        $('.child').hide('normal');
        $(this).parent().children('.child').show('normal');
        $('.parent_link').removeClass('active');
        $(this).parent().addClass('active');
      } else {
        $('.child').hide('normal');
        $('.parent_link').removeClass('active');
      }
    })
  } else {

    $('.parent_link').mouseenter(function () {
      $(this).children('.child').stop().fadeIn(500);
      $(this).addClass('active');
    });
    $('.parent_link').mouseleave(function () {
      $('.child').stop().fadeOut(500);
      $('.parent_link').removeClass('active');
    });
  }
});
// -----/Адаптивное меню-----

// Поиск на сайте
$(document).ready(function () {
  $(".input-search").click(function () {
    $(".header-top-left__search-box, .input").toggleClass("active");
    $("input[type='text']").focus();
  });
});
// -----/Поиск на сайте-----

// -----Баннер-----
$(document).ready(function () {
  $(".banner-slider").slick({

    dots: true,
    arrows: true,
    autoplay: true,
    speed: 300,
    responsive: [{
      breakpoint: 600,
      settings: {
        arrows: false,
      }
    }]
  });
});
// -----/Баннер-----


// -----Лучшие предложения-----
$(document).ready(function () {
  $('.bestdeal__items').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1000,
        settings: {
          arrows: true,
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '10px',
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: true,

          slidesToShow: 1
        }
      }
    ]
  });
});
// -----/Лучшие предложения-----

// Вопрос-ответ
$(document).ready(function () {
  $(function () {
    $('.questionts-body').hide(300);
    $(document).on('click', '.questionts-head', function (e) {
      e.preventDefault()
      $(this).parents('.questionts-wrap').toggleClass("active").find('.questionts-body').slideToggle();
    })
  })
});
// -----/Вопрос-ответ-----

// Бонусы
$(document).ready(function () {
  $(".bonus__inner").slick({

    dots: false,
    arrows: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    // prevArrow: '<img src="img/bestDeal-left.png" alt="">',
    // nextArrow: '<img src="img/bestDeal-right.png" alt="">',
    responsive: [{
        breakpoint: 915,
        settings: {
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 690,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 370,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
    ]
  });
});

// -----/Бонусы-----

// Поиск на сайте в адаптивном меню
// $(".input-searches").click(function () {
//   $(".mobile__search-box, .inputka").toggleClass("active");
//   $("input[type='text']").focus();
// });
//-----/Поиск на сайте в адаптивном меню-----

$(document).ready(function () {
  var $win_width = $(window).width();
  if ($win_width >= 900) {
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
          $('.header__menu').addClass('stickytop');
          $('.logo').css('display','none');
          $('.logo-fixed').css('display','block');
          $('.menu-logo-fixed').css('display','block');
          
        } else {
          $('.header__menu').removeClass('stickytop');
          $('.logo').css('display','block');
          $('.logo-fixed').css('display','none');
          $('.menu-logo-fixed').css('display','none');
      
        }
      })
    })
  }
});

$(document).ready(function () {

const buyBtn = document.querySelectorAll('.product__buy');

buyBtn.forEach(btn => {
  btn.addEventListener('click', showCounter)
});

function showCounter() {
  const counter = this.nextElementSibling;
  this.style.display = 'none';
  counter.style.display = 'flex';
}


const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');
  const inputs = document.querySelectorAll('.counter__value');

  btns.forEach(btn => {
    btn.addEventListener('click', counterState);
    btn.addEventListener('click', countPrice);
  });

  inputs.forEach(input => {
    input.addEventListener('keyup', countPrice)
  });

  function counterState() {
    const dir = this.dataset.direction;
    const inputEl = this.parentElement.querySelector('.counter__value');
    let currentValue = inputEl.value;

    dir === 'plus' ? counterPlus(inputEl, currentValue) : counterMinus(inputEl, currentValue)
  }

  const counterPlus = (el, val) => {
    el.value = +val + 1
  };

  const counterMinus = (el, val) => {
    if (+val - 1) el.value = +val - 1;
  };

  function countPrice() {
    const totalPrice = this.parentElement.nextElementSibling;
    const currentPriceValue = this.closest('.product').querySelector('.product__price').innerText;
    const inputEl = this.parentElement.querySelector('.counter__value');
    let currentValue = inputEl.value;
    let totalPriceNumber;
    if (currentValue > 1) {
      totalPriceNumber = +currentPriceValue * +currentValue;
      totalPrice.textContent = `Итого ${totalPriceNumber}`
    } else {
      totalPrice.textContent = '';
    }
  }

};

counter();
});