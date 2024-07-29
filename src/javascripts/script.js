document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('about-us-modal');

    window.addEventListener('resize', function() {
        if (modal.style.display === 'block') {
            setModalDimensions();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' ||
            (e.ctrlKey === true && e.shiftKey === true && e.key === 'I' || 'i') ||
            (e.ctrlKey === true && e.key === 'U' || 'u')) {
            e.preventDefault();
        }
    });

    document.addEventListener('mousedown', function(e) {
        if (e.button === 2 && e.buttons === 2) {
            e.preventDefault();
        }
    });

    document.addEventListener('dragstart', function(event) {
        if (event.target.tagName === 'IMG') {
            event.preventDefault();
        }
    });
});
