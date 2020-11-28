// $(document).ready(function(){

$(document).ready(() => {
  $('.menu-item-has-children > a').append('<i class="plus"></i>');
  $('#fist__three').mask('+7(000)000-00-00', {
    selectOnFocus: true,
    placeholder: '+7(___)___-__-__',
    clearIfNotMatch: !0,
  });
});

$(document).ready(() => {
  $('.form__basic').validate({
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
        data: $('.form__basic').serialize(),
        success(result) {
          $('.message').html('<span class="valide">Сообщение получено</span>');

          $('.form__basic').trigger('reset').delay(2000);

          setTimeout(() => {
            $('.message').html('');
          }, 2000);
        },
        error(error) {
          $('.message').html('<span class="novalide">Ошибка при отправке сообщения</span>');
        },
      });
      return false;
    },
  });
});
