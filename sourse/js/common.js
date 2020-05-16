const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {

				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});
				_this.menuMobile.classList.toggle("active");
				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},

	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();
		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);
				_this.closeMenu();

			});
		})
		document.addEventListener('mouseup', function (event) {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			if (!container) {
				_this.closeMenu();

			}
		});
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');
		});
	},
	// /табы
	//taken from good planet
	customRange() {
		$(".range-wrap").each(function () {
			let _this = $(this);
			let self = this;
			var $d3 = _this.find(".slider-js");

			var slider = $d3.ionRangeSlider({
				skin: "round",
				type: "double",
				grid: false,
				grid_snap: false,
				hide_min_max: true,
				hide_from_to: true,
				onStart: function (data) {
					self.closest('.range-inp-cont').querySelector('.lower-num').innerHTML = data.from;
					self.closest('.range-inp-cont').querySelector('.upper-num').innerHTML = data.to;

					self.closest('.range-inp-cont').querySelector('.from-inp').value = data.from;
					self.closest('.range-inp-cont').querySelector('.to-inp').value = data.to;
					//_this.find('.minus').val(data.from);
					//_this.find('.plus').val(data.to);
				},
				onChange: function (data) {
					self.closest('.range-inp-cont').querySelector('.lower-num').innerHTML = data.from;
					self.closest('.range-inp-cont').querySelector('.upper-num').innerHTML = data.to;

					self.closest('.range-inp-cont').querySelector('.from-inp').value = data.from;
					self.closest('.range-inp-cont').querySelector('.to-inp').value = data.to;
				},
				onFinish: function (data) {
					self.closest('.range-inp-cont').querySelector('.lower-num').innerHTML = data.from;
					self.closest('.range-inp-cont').querySelector('.upper-num').innerHTML = data.to;

					self.closest('.range-inp-cont').querySelector('.from-inp').value = data.from;
					self.closest('.range-inp-cont').querySelector('.to-inp').value = data.to;
				},
				onUpdate: function (data) {
					self.closest('.range-inp-cont').querySelector('.lower-num').innerHTML = data.from;
					self.closest('.range-inp-cont').querySelector('.upper-num').innerHTML = data.to;

					self.closest('.range-inp-cont').querySelector('.from-inp').value = data.from;
					self.closest('.range-inp-cont').querySelector('.to-inp').value = data.to;
				}
			});
			var $d3_instance = slider.data("ionRangeSlider");
			$(this).closest('.range-inp-cont').on('change  input  cut  copy  paste', '.from-inp', function () {
				var th = $(this);
				var data = th.val();
				var min = +data;

				if (data == ''){
					return undefined
				}

				$d3_instance.update({
					from: min,
				})
			});

			$(this).closest('.range-inp-cont').on('change  input  cut  copy  paste', '.to-inp', function () {
				var th = $(this);
				var data = th.val();
				var max = +data;
				if (data == ''){
					return undefined
				}

				//max => new val of max inp
				//min => value of the min inp

				//let min = Number(document.querySelector('.range-result.range-result--minus.minus').value);
				let min = Number(this.closest('.range-inp-cont').querySelector('.from-inp').value);
				if (min >= max) {
					min = 0;
				}
				$d3_instance.update({
					from: min,
					to: max,
				});
			});
		})
	},
	//taken from good planet


	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.customRange();

	//JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	//$(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/02-catalog.jpg);"></div>')
	// /добавляет подложку для pixel perfect



	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 

	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		//heightses();

	});

	//heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	let defaultSl = {

	}
	const swiper4 = new Swiper('.color-slider', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 0,
		freeMode: true,
		watchOverflow: true,
		slidesPerGroup: 3,

		// centeredSlides: true,
		loop: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
	// modal window

	var gets = (function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}
		return b;
	})();
	// form


	var gets = (function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}
		return b;
	})();
	// form
	$("form").submit(function (e) {
		e.preventDefault();
		const th = $(this);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data,
		}).done(function (data) {

			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			});
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		}).fail(function () { });

	});
	//my custom code
	//custom mnu js
	$('.header__burger-cont').click(function () {
		$('.header__burger-cont').toggleClass('collapsed');
		$('.mob-menu-cont').toggleClass('collapsed');
		$('body').toggleClass('fixed-on-filter-js');
	});

	$(window).resize(function () {
		if (window.matchMedia("(min-width: 992px)").matches) {
			$('.header__burger-cont').removeClass('collapsed');
			$('.mob-menu-cont').removeClass('collapsed');
		}
	});


	//selects
	$('.custom-select2').select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: "drop-down-full-grey",
	});
	$('.custom-select2-catalog-headline').select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: "drop-down-catalog-header",
	});

	function allWaysShowPlaceholder() {
		let allSelects = document.querySelectorAll('.select2-container');
		for (let select of allSelects){
			if (!select.parentElement.querySelector('select').classList.contains('discard-always-show-PH')){
				let placeholder = select.querySelector('.select2-selection__placeholder');
				select.CustomPropPlaceholder = placeholder;
				select.addEventListener('click', putPlaceholderBack);
			}
		}
	}
	function putPlaceholderBack(){
		let placeholderPresent =  this.querySelector('.select2-selection__placeholder');
		if (!placeholderPresent){
			let renderedBlock = this.querySelector('.select2-selection__rendered');
			this.CustomPropPrevValue = renderedBlock.innerHTML;
			renderedBlock.innerHTML = '';
			renderedBlock.appendChild(this.CustomPropPlaceholder);
			//console.log(this.CustomPropPrevValue);

			//
			let putOptionBack = function () {
				document.body.removeEventListener('click', putOptionBack);
				let itemHasPH = this.querySelector('.select2-selection__rendered .select2-selection__placeholder');
				if (itemHasPH){
					let parent = itemHasPH.parentElement;
					parent.removeChild(itemHasPH);
					parent.innerHTML = this.CustomPropPrevValue;
				}
			};
			putOptionBack = putOptionBack.bind(this);
			window.setTimeout(function () {
				document.body.addEventListener('click', putOptionBack);
			}, 100);
			//
		}
	}
	allWaysShowPlaceholder();


	//for mob filter
	$('.filters-block__filter-mob-bar').click(function () {
		$('body').addClass('fixed-on-filter-js');
		$('.filters-block__filter-box-container').addClass('active');
	});
	$('.form-wrap__cross-icon-cont').click(function () {
		$('body').removeClass('fixed-on-filter-js');
		$('.filters-block__filter-box-container').removeClass('active');
	})
	//breadcrumbs
	var breadSl = new Swiper('.breadcrumb-slider-js-prod-card03', {
		slidesPerView: 'auto',
		// spaceBetween: 30,
		freeMode: true,
		freeModeMomentum: true,
		// spaceBetween: 30,
		watchOverflow: true,
	});
	//03 slider
	let bigSliderThumb = new Swiper('.big-slider-thumb-js', {
		slidesPerView: '5',
		spaceBetween: 10,
		loop: true,
	});

	let bigSlider = new Swiper('.big-slider-js', {
		slidesPerView: '1',
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: '.big-slider-next',
			prevEl: '.big-slider-prev',
		},
		thumbs: {
			swiper: bigSliderThumb
		},
		lazy: {
			loadPrevNext: true,
		},
		on : {
			init : function () {
				let getMomentSliderCreated = window.setInterval(function () {
					if (bigSlider){
						// here we recive bigSlider, dont need interval anymore
						window.clearInterval(getMomentSliderCreated);
						//ater mounted callback
						let amountOfSlides = document.querySelector('.big-slider-js-pugin').children.length;
						let BigSliderFractPugMax = document.querySelector('.big-slider-js-custom-fractional-pugin .max');
						BigSliderFractPugMax.innerHTML = addZero(amountOfSlides);
					}
				},100);
			},
			slideChange: function () {
				if (bigSlider){
					//index of curr slide start from 0
					let BigSliderFractPugCurrent = document.querySelector('.big-slider-js-custom-fractional-pugin .current');
					BigSliderFractPugCurrent.innerHTML = addZero(bigSlider.realIndex + 1);
				}
			},
		},
		//pagination
		pagination: {
			el: $(this).find('.big-slider-js-pugin'),
			clickable: true,
		},
	});

	function addZero(num) {
		num = Number(num);
		if (num >= 0 && num <=9) {
			num = "0" + num;
		}
		return num
	}
	//main page
	let mainSlider = new Swiper('.main-slider-js', {
		slidesPerView: '1',
		loop: true,
		navigation: {
			nextEl: '.main-slider-next',
			prevEl: '.main-slider-prev',
		},
		lazy: {
			loadPrevNext: true,
		},
		on : {
			init : function () {
				let getMomentSliderCreated = window.setInterval(function () {
					if (mainSlider){
						// here we recive bigSlider, dont need interval anymore
						window.clearInterval(getMomentSliderCreated);
						//ater mounted callback
						let amountOfSlides = document.querySelector('.main-slider-js-pugin').children.length;
						let SliderFractPugMax = document.querySelector('.main-slider-js-custom-fractional-pugin .max');
						SliderFractPugMax.innerHTML = addZero(amountOfSlides);
					}
				},100);
			},
			slideChange: function () {
				if (mainSlider){
					//index of curr slide start from 0
					let BigSliderFractPugCurrent = document.querySelector('.main-slider-js-custom-fractional-pugin .current');
					BigSliderFractPugCurrent.innerHTML = addZero(mainSlider.realIndex + 1);
				}
			},
		},
		//pagination
		pagination: {
			el: $(this).find('.main-slider-js-pugin'),
			clickable: true,
		},
	});
	//last project slider
	let lastProjectSlider = new Swiper('.last-project-js', {
		slidesPerView: '1',
		spaceBetween: 10,
		loop: true,
		//pagination
		pagination: {
			el: $(this).find('.last-project-slider-js-pugin'),
			clickable: true,
		},
	});
	//
	$(window).resize(function(){
		if ($(window).width() < 578) {
			lastProjectSlider.detachEvents();
			lastProjectSlider.attachEvents();
		}
		else {
			lastProjectSlider.detachEvents();
		}
	});
	//
	//async map load
	window.setTimeout(function () {
		document.querySelector('.pageYandexMap').setAttribute('src', 'https://yandex.ua/map-widget/v1/?um=constructor%3A6b422557a0b84a1e0b7d340c6e499a6a26494033f9d4972298751878ff8da093&amp;source=constructor');
	}, 3000);

	//estimate js
	$('.sEstimateDiscount__img-container').click(function () {
		//this.siblings()
		this.parentElement.querySelector('a, button').click();
	});
	//agreementAndFee js
	function makeItemEqHeight(querySelector) {
		let items = document.querySelectorAll(querySelector);
		let maxHeight = 0;
		for (let item of items){
			item.style.minHeight = 0;
			let itemHeight = $(item).height();
			if (maxHeight < itemHeight){
				maxHeight = itemHeight;
			}
		}
		for (let item of items){
			item.style.minHeight = maxHeight + "px";
		}
	}
	//makeItemEqHeight('.sAgreementAndFee__content-tabs-content-item');
	window.addEventListener('resize',makeItemEqHeight.bind(null, '.sAgreementAndFee__content-tabs-content-item'), { passive: true });
	//problems slider

	let problemsSlider = new Swiper('.problems-slider-js', {
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			576: {
				slidesPerView: 'auto',
				spaceBetween: 15,
			}
		},
		//loop: true,
		navigation: {
			nextEl: '.problem-slider-next',
			prevEl: '.problem-slider-prev',
		},
		//pagination
		pagination: {
			el: $(this).find('.problem-slider-js-pugin'),
			clickable: true,
		},
	});
	//feedbackSlider
	let feedbackSlider = new Swiper('.feedback-slider-js', {
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			576: {
				slidesPerView: 'auto',
				spaceBetween: 15,
			}
		},
		//loop: true,
		navigation: {
			nextEl: '.feedback-slider-next',
			prevEl: '.feedback-slider-prev',
		},
		//pagination
		pagination: {
			el: $(this).find('.feedback-slider-js-pugin'),
			clickable: true,
		},
	});
	//calcStep9
	$('.step9-chosenMaterialPill__headline').click(function () {
		this.classList.toggle('active');
		$(this.parentElement.querySelector('.step9-chosenMaterialPill__content-conateiner')).slideToggle(function () {
			this.classList.toggle('active');
		});

	})

	//
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

		}

		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	};
	if (document.readyState !== 'loading') {
		eventHandler();
	} else {
		document.addEventListener('DOMContentLoaded', eventHandler);
	}
