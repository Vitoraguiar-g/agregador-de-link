const btnModo = document.getElementById('trocaTema')
const btnIcone = document.querySelector('i')
const salvaTema = localStorage.getItem('tema')

if (salvaTema === "light") {
    document.body.classList.add('light')
    btnIcone.classList.replace('ph-moon', 'ph-sun')
}

btnModo.addEventListener('click', () => {
    document.body.classList.toggle('light')
    if (document.body.classList.contains('light')) {
        btnIcone.classList.replace('ph-moon', 'ph-sun')
        localStorage.setItem('tema', 'light')
    } else {
        btnIcone.classList.replace('ph-sun', 'ph-moon')
        localStorage.setItem('tema', 'dark')
    }

})