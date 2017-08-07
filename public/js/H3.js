
  var $root = $('html, body');
    $('a').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 25
        }, 500);
        return false;
    });	

    
  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


window.sr = ScrollReveal();

sr.reveal('#primaryNav', { 
    duration: 1500,
    origin:'top',
    distance: '200px',
});

sr.reveal('.aboutLeft', { 
    duration: 1500,
    origin:'right',
    distance: '200px',
});
sr.reveal('.aboutRight', { 
    duration: 1500,
    origin:'right',
    distance: '200px',
});
sr.reveal('.topService', { 
    duration: 1500,
    origin:'top',
    distance: '400px',
});
sr.reveal('.midService', { 
    duration: 1500,
    origin:'right',
    distance: '400px',
});
sr.reveal('.bottomService', { 
    duration: 1500,
    origin:'bottom',
    distance: '300px',
});
	
	
	
	