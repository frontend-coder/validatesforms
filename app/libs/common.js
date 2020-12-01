// $(document).ready(function(){
$(document).ready(() => {
  $(".header__menu-btn").on("click", () => {
    $(".header__menu > ul").toggleClass("active");
    $('.hamburger').toggleClass('is-active');
  });

  $(".header__drop-down.drop-down a").on("click", () => {
    $(".header__drop-down> a").toggleClass("arrows_top");
    $(".drop-down__list").toggleClass("visible");
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

  $('#form-one').validate({
    rules: {
      myname: {
        required: true,
        minlength: 3,
      },
      myemail: {
        required: true,
        email: true,
      },
      myphone: {
        required: true,
        minlength: 16,
      },
    },
    messages: {
      myname: {
        required: 'Введите нормальное имя',
        minlength: jQuery.validator.format('Ваше имя не должно быть короче {0} символов!'),
      },
      myemail: {
        required: 'Нам нужен ваш адрес электронной почты, чтобы связаться с вами',
        email: 'Ваш адрес электронной почты должен быть в формате name@domain.com',
      },
      myphone: {
        required: 'Нам нужен ваш номер телефона, чтобы связаться с вами',
        minlength: jQuery.validator.format('Номер телефона не короче {0} символов!'),
      },
    },
    validClass: 'help-inline filds-success',
    errorClass: 'help-inline text-danger',
    errorElement: 'span',
    validElement: 'span',
    highlight(element) {
      $(element).parents('.form-group').addClass('has-error');
    },
    unhighlight(element) {
      $(element).parents('.form-group').removeClass('has-error');
      $(element).parents('.form-group').addClass('has-success');
    },
    submitHandler(form, e) {
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        dataType: 'html',
        data: $('#form-one').serialize(),
        success(result) {
          $('.message').html('<span class="valide">Сообщение получено</span>');
          console.info(result);
          $('#form-one').trigger('reset').delay(2000);

          setTimeout(() => {
            $('#form-one .message').html('');
            $('input.input_ferst').css('border', '3px solid transparent');
          }, 2000);
        },
        error(error) {
          console.info(error);
          $('#form-one .message').html('<span class="novalide">Ошибка при отправке сообщения</span>');
        },
      });
      return false;
    },
  });

  $('#forming__two').validate({
    rules: {
      myname: {
        required: true,
        minlength: 3,
      },
      myemail: {
        required: true,
        email: true,
      },
      myphone: {
        required: true,
        minlength: 16,
      },
    },
    messages: {
      myname: {
        required: 'Введите нормальное имя',
        minlength: jQuery.validator.format('Ваше имя не должно быть короче {0} символов!'),
      },
      myemail: {
        required: 'Нам нужен ваш адрес электронной почты, чтобы связаться с вами',
        email: 'Ваш адрес электронной почты должен быть в формате name@domain.com',
      },
      myphone: {
        required: 'Нам нужен ваш номер телефона, чтобы связаться с вами',
        minlength: jQuery.validator.format('Номер телефона не короче {0} символов!'),
      },
    },
    validClass: 'help-inline filds-success',
    errorClass: 'help-inline text-danger',
    errorElement: 'span',
    validElement: 'span',
    highlight(element) {
      $(element).parents('.form-group').addClass('has-error');
    },
    unhighlight(element) {
      $(element).parents('.form-group').removeClass('has-error');
      $(element).parents('.form-group').addClass('has-success');
    },
    submitHandler(form, e) {
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        dataType: 'html',
        data: $('#forming__two').serialize(),
        success(result) {
          $('#forming__two .message').html('<span class="valide">Сообщение получено</span>');
          console.info(result);
          $('#forming__two').trigger('reset').delay(2000);

          setTimeout(() => {
            $('#forming__two .message').html('');
          }, 2000);
        },
        error(error) {
          console.info(error);
          $('#forming__two .message').html('<span class="novalide">Ошибка при отправке сообщения</span>');
        },
      });
      return false;
    },
  });

  // the end two
  $('#forming__telgram').validate({
    rules: {
      myname: {
        required: true,
        minlength: 3,
      },
      myemail: {
        required: true,
        email: true,
      },
      myphone: {
        required: true,
        minlength: 16,
      },
    },
    messages: {
      myname: {
        required: 'Введите нормальное имя',
        minlength: jQuery.validator.format('Ваше имя не должно быть короче {0} символов!'),
      },
      myemail: {
        required: 'Нам нужен ваш адрес электронной почты, чтобы связаться с вами',
        email: 'Ваш адрес электронной почты должен быть в формате name@domain.com',
      },
      myphone: {
        required: 'Нам нужен ваш номер телефона, чтобы связаться с вами',
        minlength: jQuery.validator.format('Номер телефона не короче {0} символов!'),
      },
    },
    validClass: 'help-inline filds-success',
    errorClass: 'help-inline text-danger',
    errorElement: 'span',
    validElement: 'span',
    highlight(element) {
      $(element).parents('.form-group').addClass('has-error');
    },
    unhighlight(element) {
      $(element).parents('.form-group').removeClass('has-error');
      $(element).parents('.form-group').addClass('has-success');
    },
    submitHandler(form, e) {
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'telegram-mail.php',
        dataType: 'html',
        data: $('#forming__telgram').serialize(),
        success(result) {
          $('#forming__telgram .message').html('<span class="valide">Сообщение получено</span>');
          console.info(result);
          $('#forming__telgram').trigger('reset').delay(2000);

          setTimeout(() => {
            $('#forming__telgram .message').html('');
          }, 2000);
        },
        error(error) {
          console.info(error);
          $('#forming__telgram .message').html('<span class="novalide">Ошибка при отправке сообщения</span>');
        },
      });
      return false;
    },
  });

  // the end three
});
