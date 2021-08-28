const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const body = document.querySelector('body');
const switcher = document.querySelector('.theme-switch__toggle');


body.classList.add('light-theme');

const savedTheme = localStorage.getItem('Theme')


function setSavedTheme () {
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme')
        switcher.setAttribute('checked', true)
    }
}
setSavedTheme();

function setDarkTheme() {
    body.classList.add('dark-theme') || body.classList.remove('light-theme')
    localStorage.setItem('Theme', 'dark')
}
function setLightTheme() {
    body.classList.add('light-theme') || body.classList.remove('dark-theme')
    localStorage.setItem('Theme', 'light')
}

function onChangeCheckBox(e) {
    setDarkTheme()
    if (!e.target.checked) {
        setLightTheme()
    }
}

switcher.addEventListener('change', onChangeCheckBox)




