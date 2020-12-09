// $(document).ready(function(){
$(document).ready(() => {
  $('.header__menu-btn').on('click', () => {
    $('.header__menu > ul').toggleClass('active');
    $('.hamburger').toggleClass('is-active');
  });

  $('.header__drop-down.drop-down a').on('click', () => {
    $('.header__drop-down> a').toggleClass('arrows_top');
    $('.drop-down__list').toggleClass('visible');
  });
  // is - active;
  $('#fist__three').mask('+7(000)000-00-00', {
    selectOnFocus: true,
    placeholder: '+7(___)___-__-__',
    clearIfNotMatch: !0,
  });

  $('#fist__three__s').mask('+7(000)000-00-00', {
    selectOnFocus: true,
    placeholder: '+7(___)___-__-__',
    clearIfNotMatch: !0,
  });

  $('#fist__three__st').mask('+7(000)000-00-00', {
    selectOnFocus: true,
    placeholder: '+7(___)___-__-__',
    clearIfNotMatch: !0,
  });

  $('#fist__two__st').mask('nickname@gmail.com', {
    selectOnFocus: true,
    placeholder: 'nickname@gmail.com',
    clearIfNotMatch: !0,
  });

  // the end three
});

$(document).ready(() => {
  $('[data-submit]').on('click', function (e) {
    e.preventDefault();
    $(this).parent('form').submit();
  });
  $.validator.addMethod(
    'regex',
    function (value, element, regexp) {
      const re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    'Please check your input.',
  );

  // Функция валидации и вывода сообщений
  function valEl(el) {
    el.validate({
      rules: {
        // tel: {
        //     required: true,
        //     regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
        // },
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        // tel: {
        //     required: 'Поле обязательно для заполнения',
        //     regex: 'Телефон может содержать символы + - ()'
        // },
        name: {
          required: 'Поле обязательно для заполнения',
        },
        email: {
          required: 'Поле обязательно для заполнения',
          email: 'Неверный формат E-mail',
        },
      },

      // Начинаем проверку id="" формы
      submitHandler(form) {
        $('#loader').fadeIn();
        const $form = $(form);
        const $formId = $(form).attr('id');
        switch ($formId) {
        // Если у формы id="goToNewPage" - делаем:
        case 'goToNewPage':
          $.ajax({
            type: 'POST',
            url: 'mail.php',
            // url: $form.attr('action'),
            data: $form.serialize(),
          }).always((response) => {
            // ссылка на страницу "спасибо" - редирект
            // location.href = 'https://';
            document.getElementById('formPreview').innerHTML = 'Письмо отправлено ';
            // отправка целей в Я.Метрику и Google Analytics
            ga('send', 'event', 'masterklass7', 'register');
            yaCounter27714603.reachGoal('lm17lead');
          });
          break;
          // Если у формы id="popupResult" - делаем:
        case 'popupResult':
          $.ajax({
            type: 'POST',
            url: 'mail.php',
            //     url: $form.attr('action'),
            data: $form.serialize(),
          }).always((response) => {
            setTimeout(() => {
              $('#loader').fadeOut();
            }, 800);
            setTimeout(() => {
              $('#overlay').fadeIn();
              $form.trigger('reset');
              $('input, textarea').removeClass('error, valid');
              // строки для остлеживания целей в Я.Метрике и Google Analytics
            }, 1100);
            $('#overlay').on('click', function (e) {
              $(this).fadeOut();
            });
          });
          if ($('*').is('#myModal')) {
            $('#myModal').arcticmodal('close');
          }
          break;
        }
        return false;
      },
    });
  }

  // Запускаем механизм валидации форм, если у них есть класс .js-form
  $('.form__basic').each(function () {
    valEl($(this));
  });
});
