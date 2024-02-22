document.addEventListener('DOMContentLoaded', function () {
    // slick-carousel script
    $('.scrolling-images').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        speed: 10000,
        pauseOnHover: false,
    });

    // NAVBAR
    var navbarButton = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.getElementById('navbarNav');

    navbarButton.addEventListener('click', function () {
        var expanded = navbarButton.getAttribute('aria-expanded') === 'true';
        navbarButton.setAttribute('aria-expanded', String(!expanded));
        navbarCollapse.classList.toggle('show', !expanded);
    });

    // LOADING SPINNER
    var submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function () {
            document.getElementById('loading-spinner').style.display = 'block';
        });
    }

    // Function to manually trigger the click event
    function triggerSubmitBtnClick() {
        if (submitBtn) {
            submitBtn.click();
        }
    }

    // Manually trigger the click event after a short delay (adjust as needed)
    setTimeout(triggerSubmitBtnClick, 1000);
});
