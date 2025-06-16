
// const url = https://emojipedia.org/whatsapp/2.25.9.78/dna
// const url_img = document.querySelector('[loading].w-auto').src
const url_base_image = 'https://emojipedia.org/whatsapp/2.25.9.78/'

function create_square() {
    const div = document.createElement('div')
    div.className = 'square-emoji'
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.border = '1px solid black'
    div.style.position = 'fixed'
    div.style.bottom = '50px'
    div.style.right = '50px'
    div.style.background = 'white'
    div.style.zIndex = 100
    document.body.appendChild(div)
}
create_square()

function render_by_link(url) {
    // fetch('https://emojipedia.org/whatsapp/2.25.9.78/dna')
    fetch(url)
        .then(e => e.text())
        .then(e => {
            const div = document.createElement('div')
            div.innerHTML = e
            const url_img = div.querySelector('[loading].w-auto').src
            const square = document.querySelector('.square-emoji')
            square.innerHTML = `<img src="${url_img}">`
        })
}



let alvo;
// document.body.addEventListener('mousemove', (e) => {
window.onmousemove = (e) => {
    alvo = e.target
}


// document.body.addEventListener('keyup', (e) => {
// document.body.addEventListener('keyup', (e) => {
window.onkeyup = (e) => {
    if (e.key == "'") {
        // render_by_lin    k(alvo.href)
        // console.log(alvo)
        const url_fragment = alvo.href.split("/").at(-1) // /green-book
        render_by_link(url_base_image + url_fragment)
    }
}



