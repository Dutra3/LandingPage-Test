const answerElement = document.querySelector('#awnser');
const inputQuestion = document.querySelector('#inputQuestion')
const answers = [
    'Certeza',
    'Provavelmente',
    'É decididamente assim.',
    'Não conte com isso.',
    'Sem dúvidas!',
    'Pergunte novamente mais tarde.',
    'Sim, definitivamente!',
    'Minha resposta é não.',
    'Você pode contar com isso.',
    'Melhor não te dizer agora.',
    'A meu ver, sim.',
    'MInhas fontes dizem não.',
    'Provavelmente.',
    'Não é possível prever agora.',
    'Perspectiva boa.',
    'As perspectivas não são tão boas.',
    'Sim.',
    'COncentre-se e pergunte novamente.',
    'Sinais apontam que sim.',
]

function askQuestion() {

    if (inputQuestion.value == '') {
        alert('Digite sua pergunta')
        return
    }

    const question = '<div>' + inputQuestion.value + '</div>';
    
    const totalAnswers = answers.length;
    const numberRandom = Math.floor(Math.random() * totalAnswers);
    answerElement.innerHTML = question + answers[numberRandom];
    
    setTimeout(function() {
        answerElement.innerHTML = '';
    }, 3000)


}


