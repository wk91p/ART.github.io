document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('about-us-modal');


    window.addEventListener('resize', function() {
        if (modal.style.display === 'block') {
            setModalDimensions();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
        }
    });

    document.addEventListener('mousedown', function(e) {
        if (e.button === 2) {
            e.preventDefault();
        }
    });

    document.addEventListener('dragstart', function(event) {
        if (event.target.tagName === 'IMG') {
            event.preventDefault();
        }
    });
});
