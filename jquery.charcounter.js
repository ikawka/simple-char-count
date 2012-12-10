(function( $ ) {
    $.fn.charCounter = function(options) {
        var charHolder = $(this).attr('class') || $(this).attr('id');
        var len = 0;
        var settings = $.extend( {
          'max' : 250
        }, options);

        //make counter holder
        var myCharHolder = $('<span id="'+charHolder+'_char" class="char_count_holder"></span>');
        this.after(myCharHolder);

        this.bind('keyup blur keypress change paste', function(){
            if($(this).val().length > settings.max){
                $(this).val($(this).val().substr(0, settings.max));
                $(this).scrollTop($(this)[0].scrollHeight);
            }
            
            len = $(this).val().length;
            myCharHolder.html( len + '/' + settings.max);
        });

        this.bind('keydown', function(e){    
            if (len >= settings.max && 
                    e.which != 35 && //end
                    e.which != 36 && //home key
                    e.which != 37 && //arrow left
                    e.which != 38 && //arrow up
                    e.which != 39 && //arrow right
                    e.which != 40 && //arrow down
                    e.which != 46 && //delete
                    e.which != 8  && //backspace
                    e.which != 16 && //shift
                    e.which != 17 && //ctrl
                    e.which != 18 && //alt
                    !e.metaKey && //mac command key
                    !e.ctrlKey && //
                    !e.altKey && //
                    !e.shiftKey
                ) {
                e.preventDefault();
            }
        });

        myCharHolder.html( len + '/' + settings.max);
    };
})( jQuery );
