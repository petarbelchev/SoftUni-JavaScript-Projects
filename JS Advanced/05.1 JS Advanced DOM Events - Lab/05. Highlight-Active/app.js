function focused() {
    Array.from(document.querySelectorAll('input')).forEach(i => {
        i.addEventListener('focus', focus);
        i.addEventListener('blur', blur);
    });

    function focus(e) {
        e.target.parentElement.classList.add('focused');
    }

    function blur(e) {
        e.target.parentElement.classList.remove('focused');
    }
}