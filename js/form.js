$(document).ready(function () {
	$("form").submit(function () { // Событие отправки с формы
		var form_data = $(this).serialize(); // Собираем данные из полей
		$.ajax({
			type: "POST", // Метод отправки
			url: "sendform.php", // Путь к PHP обработчику sendform.php
			data: form_data,
			success: function () {
				$('.popup_modal').addClass('active');
				$(".popup_modal").click(function () {
					$('.popup_modal').removeClass('active');
				});



			}
		});
		event.preventDefault();
	});
});

