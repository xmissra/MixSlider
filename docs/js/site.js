
$(function() {
    //  This is specific to THIS WEBSITE ONLY.
    //  Don't copy this, it won't do anything and might break things!
    var slider = $('main').mixslider({ arrows: false, keys: false });

    //  Click handler to automatically animate to a specific
    //  panel based on ID
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();

        var $me = $(this), href = $me.attr('href');
        var $target = $('.mixslider-wrap ' + href);          

        if($target.length) {
        	slider.mixslider('animate:' + $target.index());
        }
    });

    if(location.hash) {
    	$('a[href^="' + location.hash + '"]').trigger('click');
    }


    //  Add our super-cool scroll effect
    $('.spaced').on('scroll', function() {
    	var $me = $(this);
    	$me[($me.scrollTop() ? 'add' : 'remove') + 'Class']('scrolled');
    });


    //  Auto-add our JS examples
    $('.demo').each(function() {
    	var $me = $(this);
        var $script = $me.find('script');
        var src = $script.html();

        var $output = $('<pre class="demo-usage" />');

        src = src.trim().split(/\s*[\r\n]+\s*/g);

        if(src[1]) {
            src.forEach(function(line, num) {
                if(num === 1 || line.indexOf('/**/') === 0) {
                    src[num] = '<span class="hilite">' + line.replace('/**/', '');
                }

                if(line === '});' || line.indexOf('/*e*/') === 0) {
                    src[num] = '</span>' + line.replace('/*e*/', '');
                }
            });

            src[src.length - 1] = '</span>' + src[src.length - 1];
        }

        src = src.join('\n');

        $script.after($output.html(src));
    });
});