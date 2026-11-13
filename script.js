let nome = document.querySelector('.nome')
let personagem = document.querySelector('.image-1')


function cliquei(nomePersonagem, avatar, cor) {
    nome.innerHTML = nomePersonagem
    personagem.src = avatar
    nome.style.color = cor
}

function lerFoto(foto) {

    let leitor = new FileReader()
    leitor.readAsDataURL(foto.files[0])
    leitor.onload = async function(){
        let desenho = await puter.ai.txt2img("Transforme a pessoa desta foto em um personagem de videogame: contorno preto grosso, cores vivas, meio corpo, mantendo o rosto parecido. Fundo totalmente transparente: sem cenário, sem chão e sem sombras.", {
            model: 'gpt-image-2.6-flare',
            provider: 'openai',
            input_image: leitor.result,
            quality: 'medium'
        })
        cliquei('Você', desenho, '#b9b604')
    }
}