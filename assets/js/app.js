import config from './config'


document.getElementById("btn").addEventListener("click", () => {
    import('jquery').then(($) => {
        $('body').css('background-color', 'red')
    })
})

