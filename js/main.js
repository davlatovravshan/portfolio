var menu = $('.mobile-menu')
var backdrop = $('#backdrop')
var closeBtn = $('.close-menu')
var openBtn = $('.burger')

var body = $('body')

openBtn.on('click', function() {
	menu.addClass('active')
	backdrop.attr('class', 'backdropShow')
	body.addClass('no-scroll')
})

backdrop.on('click', function() {
	closeBtn.click()
})

closeBtn.on('click', function() {
	menu.removeClass('active')
	backdrop.attr('class', 'backdropHide')
	body.removeClass('no-scroll')
})