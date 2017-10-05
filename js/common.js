$(function () {

});
var Menu = {
  
  el: {
    ham: $('#btnMnu'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
  }
};

Menu.init();
(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass(inEffect).css("opacity", "1");
				};
			}, {
				offset: "90%"
			});

		});
	};
})(jQuery);
jQuery(document).ready(function () {
    
        jQuery('#btnMnu').click(function () {
           jQuery(".navBar").slideToggle("slow");

    });
    
     $("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "../mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Thanks!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
        jQuery("section").animated("fadeInLeft");
});