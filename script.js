const button = document.querySelector('button')
const msgVazia = document.querySelector('.msg')


function criptografar() {
    const textarea = document.querySelector('textarea')
        msgVazia.innerHTML = ''

        const frase = textarea.value;
        const newFraseE = frase.replaceAll('e', 'enter' );
        const newFraseI = newFraseE.replaceAll('i', 'imes');
        const newFrseO = newFraseI.replaceAll('o', 'ober');
        const newFraseU = newFrseO.replaceAll('u', 'ufat');
        const newFraseA = newFraseU.replaceAll('a', 'ai')

        localStorage.setItem('resp', newFraseA)

        msgVazia.append(textoCriptografado(newFraseA))
    

}

button.addEventListener('click', ()=> criptografar())


function textoCriptografado(resp) {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')

    div.classList.add('texto')
    h3.classList.add('resposta')

    h3.id = 'resp'
    h3.innerText = resp

    div.append(h3)

    return div
}


function descriptografar(msg) {

    const resp = localStorage.getItem('resp')

    const newFraseA = resp.replaceAll('ai', 'a')

    const newFraseE = newFraseA.replaceAll('enter', 'e')

    const newFraseI = newFraseE.replaceAll('imes', 'i')

    const newFraseO = newFraseI.replaceAll('ober', 'o')

    const newFraseU = newFraseO.replaceAll('ufat', 'u')

    return newFraseU
    
}

descriptografar()


const btDescriptografar = document.querySelector('.Descriptografar')

btDescriptografar.addEventListener('click', ()=> {
    msgVazia.innerHTML = ''
    msgVazia.append(textoCriptografado(descriptografar()))

    
})

