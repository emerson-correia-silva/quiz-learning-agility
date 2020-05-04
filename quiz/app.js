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
    gameOverHTML += "<h2 id='score'> Você alcançou: " + quiz.score + " pontos</h2> <br> <p><i class='mdi mdi-replay'></i> <a href='index.html'>Refazer o teste</a>.</p> <br><br> <div class='col-lg-12'> <div class='card'> <div class='card-body'> <div class='tab-content' id='v-pills-tabContent'> <div class='tab-pane fade show active' id='v-pills-gen-ques' role='tabpanel' aria-labelledby='v-pills-gen-ques-tab'> <h4 class='card-title mb-5'>Compare com seu Resultado</h4> <div class='faq-box media mb-4'> <div class='faq-icon mr-3'> <i class='bx bx-star font-size-20 text-success'></i> </div> <div class='media-body'> <h5 class='font-size-15'>De 0 a 4 pontos</h5> <p class='text-muted'>Baixo Learning Agility. Você tende a evitar experiências que promovem agilidade de aprendizagem.  Há grande espaço para evoluir nas dimensões de agilidade de aprendizagem, mas é necessário primeiramente desconstruir crenças e ter disposição  e abertura para experimentar o novo. Libere sua mente das coisas que já sabe. Procure aprender ativamente a partir de uma nova experiência, fazendo perguntas, tentando enxergar novas abordagens e  ouvindo com atenção o ponto de vista de outras pessoas. Aproveite oportunidades para aprender coisas novas. Corra atrás proativamente de experiências de aprendizagem. Reflita sobre as situações experimentadas, peça feedback e racionalize sobre as experiências para assimilar as lições aprendidas.</p> </div> </div> <div class='faq-box media mb-4'> <div class='faq-icon mr-3'> <i class='bx bxs-star-half font-size-20 text-success'></i> </div> <div class='media-body'> <h5 class='font-size-15'>De 5 a 7 pontos</h5> <p class='text-muted'> Médio Learning Agility. Você está de acordo com a média das pessoas e está desenvolvendo consciência sobre agilidade de aprendizagem, mas ainda há um bom espaço para desenvolver habilidades que podem contribuir significativamente com sua trajetória  pessoal e profissional. Aventure-se fora da sua zona de conforto. Procure ampliar suas oportunidades de aprendizagem, abrace novos desafios e oportunidades, experimente abordagens diferenciadas. Busque ouvir e encontrar valor na diversidade. Use o aprendizado com propósito em novos desafios.</p> </div> </div> <div class='faq-box media mb-4'> <div class='faq-icon mr-3'> <i class='bx bxs-star-half font-size-20 text-success'></i> </div> <div class='media-body'> <h5 class='font-size-15'>De 8 a 9 pontos</h5> <p class='text-muted'> Alto potencial. Você responde bem às mudanças e demonstra normalmente adaptação e velocidade para tomada de decisões frente a desafios. Tem prontidão para o aprendizado e habilidade de impactar outras pessoas, aproveite seu potencial. Construa um banco de experiências quantitativas, qualitativas e diversificadas. Concentre-se no progresso contínuo  mais do que em atingir metas. Use o aprendizado em novos desafios, de forma consciente.</p> </div> </div> <div class='faq-box media mb-4'> <div class='faq-icon mr-3'> <i class='bx bxs-star font-size-20 text-success'></i> </div> <div class='media-body'> <h5 class='font-size-15'>10 pontos</h5> <p class='text-muted'> Nível de Excelência. Você faz parte de um grupo seleto de pessoas com mindset constante de aprendizado, possui alta habilidade para lidar com complexidade e  criar soluções inovadoras e disruptivas. Mantem o controle emocional diante de desafios, inspira pelo exemplo e não tem medo de desafiar o status quo. Utilize seu potencial para desenvolver outras pessoas e construir ações de impacto social e global.</p> </div> </div> </div> </div> </div> </div> </div>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

};

// create questions
var questions = [
    new Question("Tenho clareza de meu propósito de vida (pessoal e profissional)?", ["Tenho clareza e direcionamento de propósito pessoal e profissional.", "Preciso pensar para formular", "Não vejo razão em formular propósito."], "Tenho clareza e direcionamento de propósito pessoal e profissional."),
    new Question("Conheço meus pontos fortes e limitações?", ["Estou buscando me conhecer, o processo exige disciplina.", "Me conheço bem e busco melhorar sempre.","Tenho coisas mais importantes para me preocupar."], "Me conheço bem e busco melhorar sempre."),
    new Question("Eu aprendo fortemente com meus erros, vendo-os como oportunidade de aprender e crescer?", ["Sim, busco sempre refletir sobre meus erros como oportunidades de aprender e avançar.", "Meus padrões de exigências são altos, não lido bem com o erro.","Não costumo assumir erros e tenho dificuldade de tolerar erros."], "Sim, busco sempre refletir sobre meus erros como oportunidades de aprender e avançar."),
    new Question("As pessoas consideram que eu ouço atentamente e considero ideias e sugestões diferentes na busca de soluções?", ["Sou um bom ouvinte, mas não tenho tempo para falta de objetividade.", "Ouço com interesse e percebo a diversidade como valor.","Não tenho paciência para ouvir e para lidar com opiniões diferentes."], "Ouço com interesse e percebo a diversidade como valor."),
    new Question("Utilizo minhas habilidades interpessoais para conectar pontos de vista diferentes e reduzir tensões e conflitos entre pessoas e grupos.", ["Busco ouvir e compreender, mas não ouso mediar conflitos.", "Deixo o 'circo pegar fogo.'","Uso minhas habilidade de mediação e cocriação."], "Uso minhas habilidade de mediação e cocriação."),
    new Question("Consigo desenvolver rapidamente soluções para problemas novos com base em minha experiência, amplitude de visão e/ou benchmarking?", ["Tenho dificuldade de lidar com problemas novos", "Sigo o flow, deixo a solução emergir","Busco considerar o maior número de variáveis possíveis na busca de soluções."], "Busco considerar o maior número de variáveis possíveis na busca de soluções."),
    new Question("Gosto de experimentar novas técnicas ou maneiras criativas e inovadoras para resolver problemas?", ["Criatividade me representa.", "Ouso, mas com cautela, tenho receio de não dar certo.","Não, prefiro me manter em terreno seguro."], "Criatividade me representa."),
    new Question("Costumo me prontificar a assumir novos projetos ou tarefas?", ["Aguardo ser chamado, prefiro que me indiquem.", "Normalmente me prontifico  para liderar ou crio novos projetos.","Dá muito trabalho, já tenho o suficiente."], "Normalmente me prontifico  para liderar ou crio novos projetos."),
    new Question("Consigo entregar resultados mesmo em contextos de mudanças?", ["Procuro manter o foco, mas tenho dificuldades.", "Me sinto perdido(a) quando a situação muda.","Mantenho o foco mesmo diante de adversidades."], "Mantenho o foco mesmo diante de adversidades."),
    new Question("Inspira pelo exemplo, desenvolvendo e motivando as pessoas para entregar o seu melhor?", ["Sim, minha atitudes falam por mim e fico feliz em ver a superação das pessoas.", "Ainda estou aprendendo a alinhar discurso e ação.","Cada um deveria se preocupar com o seu resultado."], "Sim, minha atitudes falam por mim e fico feliz em ver a superação das pessoas."),

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
