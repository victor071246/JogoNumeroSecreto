//o window aqui na frente, permite que o programa já inicie com o recurso funcionando

const elementoChute = document.getElementById('chute')

window.SpeechRecognition =
window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    chute = chute.replace(".", "")
    exibeChuteNaTela(chute)
    verificaChuteValorValido(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())        