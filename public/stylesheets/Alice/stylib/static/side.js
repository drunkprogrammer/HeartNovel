define(function(require, exports, module) {

    var $ = require('$');
    var sticky = require('arale/sticky/1.1.0/sticky');
    
    exports.init = function() {
        var titles = $('.content-area > .content > h2, h2.alice-module-title');
        var doc = $(document);
        if (titles.length <= 0) {
            return;
        }

        $(window).scroll(function() {
            var top = doc.scrollTop(), i;
            if (top >= doc.height()- $(window).height() - 20) {
                i = titles.length - 1;
            } else {
                for (i=0; i<titles.length; i++) {
                    if (top < titles.eq(i).offset().top - 100) {  
                        break;
                    }
                }
                i--;
                i = (i<0) ? 0 : i;
            }
            $('.nav-area .nav-highlight').removeClass('nav-highlight');
            $('.nav-area > ul > li:not(.title)').eq(i).addClass('nav-highlight');
        });

        sticky('.nav-area', -1).render();

    };

});
