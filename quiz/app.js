function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Questão " + currentQuestionNumber + " de " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Resultado</h1>";
    gameOverHTML += "<h2 id='score'> Você alcançou: " + quiz.score + " pontos</h2> <br> <p><i class='mdi mdi-replay'></i> <a href='quiz01.html'>Refazer o teste</a>.</p> <br><br> <div class='col-lg-12'> <div class='card'> <div class='card-body'> <div class='tab-content' id='v-pills-tabContent'> <div class='tab-pane fade show active' id='v-pills-gen-ques' role='tabpanel' aria-labelledby='v-pills-gen-ques-tab'> <h4 class='card-title mb-5'>Compare com seu Resultado</h4> <div class='faq-box media mb-4'> <div class='faq-icon mr-3'> <i class='bx bx-star font-size-20 text-success'></i> </div> <div class='media-body'> <h5 class='font-size-15'>De 0 a 4 pontos</h5> <p class='text-muted'>Baixo Learning Agility. Há grande espaço para evoluir em todas dimensões.</p> </div> </div> <div class='faq-box media mb-4'> <div class='faq-icon mr-3'> <i class='bx bxs-star-half font-size-20 text-success'></i> </div> <div class='media-body'> <h5 class='font-size-15'>De 5 a 7 pontos</h5> <p class='text-muted'>Médio Learning Agility. Você está de acordo com a média das pessoas. <br>E já tem consciência sobre agilidade, mas ainda <br>precisa desenvolver mais suas capacidades.</p> </div> </div> <div class='faq-box media mb-4'> <div class='faq-icon mr-3'> <i class='bx bxs-star-half font-size-20 text-success'></i> </div> <div class='media-body'> <h5 class='font-size-15'>De 8 a 9 pontos</h5> <p class='text-muted'>Alto potencial. Você responde bem às mudanças e <br>costuma agir rápido quando necessário. <br>Tem um grande potencial para evoluir.</p> </div> </div> <div class='faq-box media mb-4'> <div class='faq-icon mr-3'> <i class='bx bxs-star font-size-20 text-success'></i> </div> <div class='media-body'> <h5 class='font-size-15'>10 pontos</h5> <p class='text-muted'>Nível de Excelência, você está em grupo de 2% das pessoas de mais resultado. <br>É capaz de responder bem e tem potencial para motivar, liderar e inspirar outras pessoas.</p> </div> </div> </div> </div> </div> </div> </div>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

};

// create questions
var questions = [
    new Question("Tenho clareza de meu propósito de vida (pessoal e profissional)?", ["Sim, sei o que estou fazendo.", "Não tenho a mínima ideia.","Preciso de tempo para pensar."], "Sim, sei o que estou fazendo."),
    new Question("Eu aprendo fortemente com meus erros, vendo-os como oportunidade de aprender e crescer?", ["Não gosto de errar e não aceito erro dos outros também.", "Concordo, meus erros são oportunidades de melhorar.","Meus padrões são altos, não aceito erros."], "Concordo, meus erros são oportunidades de melhorar."),
    new Question("As pessoas consideram que eu ouço atentamente e considero ideias, sugestões e opiniões mesmo que sejam diferentes das minhas?", ["Não, não tenho tempo para ouvir problemas dos outros.", "Me considero bom ouvinte, meus amigos não.","Sou bom ouvinte e entendo as diferenças."], "Sou bom ouvinte e entendo as diferenças."),
    new Question("Tenho facilidade em adaptar a minha comunicação a diferentes pessoas e situações?", ["Sim, na maioria das vezes.", "Não, minha palavra é uma só.","Não me preocupo com isso."], "Sim, na maioria das vezes."),
    new Question("Consigo desenvolver rapidamente soluções para problemas novos com base em minha experiência anterior?", ["Nunca parei para pensar sobre isso.", "Sinceramente, esta é minha técnica para evoluir.","Sigo o no flow, não me preocupo com o passado."], "Sinceramente, esta é minha técnica para evoluir."),
    new Question("Gosto de tentar novas técnicas ou diferentes maneiras de resolver problemas?", ["Não mexo no que está dando certo.", "Prefiro jogar com segurança. Prefiro não inventar.","Criatividade é meu nome. Adoro muito isso."], "Criatividade é meu nome. Adoro muito isso."),
    new Question("Proponho soluções que outros consideram inovadoras?", ["Isso é visível em mim, todo mundo comenta.", "Ninguém percebe, mas gostaria muito de inovar.","Inovar é meu ponto fraco, mas isso não me preocupa."], "Isso é visível em mim, todo mundo comenta."),
    new Question("Costumo me prontificar a assumir novos projetos ou tarefas?", ["Nunca.", "Sempre.","Fico na minha."], "Sempre."),
    new Question("Em momentos de pressão mantenho o foco no objetivo?", ["Sim", "Não","Não sei"], "Sim"),
    new Question("Entrego resultados contratados no prazo e com qualidade?", ["Procrastino um pouco, mas entrego.", "Sempre, sou muito focado em prazo e qualidade.","Na maioria das vezes faço meu melhor."], "Sempre, sou muito focado em prazo e qualidade."),
];

function onLoad(){
   var node = document.getElementsByTagName('div');
   var divLength=node.length;
   alert("There are "+divLength+" div tags in the html code");
   var randomDiv=Math.random()*divLength;
}

// create quiz
var quiz = new Quiz(questions);


// display quiz
populate();
