function lockedProfile() {
    let buttons = [...document.getElementsByTagName('button')];
    buttons.forEach(btn => btn.addEventListener('click', checkChecks))


    function checkChecks(e) {
        let parent = e.target.parentElement;

        if (parent.getElementsByTagName('input')[0].checked == false) {
            if (parent.getElementsByTagName('button')[0].textContent == 'Show more') {
                show(parent);
            } else {
                hide(parent);
            }
        }
    }

    function show(parent) {
        parent.getElementsByTagName('div')[0].style.display = 'block';
        parent.getElementsByTagName('button')[0].textContent = 'Hide it';
    }

    function hide(parent) {
        parent.getElementsByTagName('div')[0].style.display = 'none';
        parent.getElementsByTagName('button')[0].textContent = 'Show more';
    }
}