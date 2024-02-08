const perguntas = [
    {
      pergunta: "Qual é o nome completo do personagem principal da saga?",
      respostas: [
        "Harry James Potter",
        "Harry William Potter",
        "Harry John Potter"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a casa em que Harry é selecionado ao chegar em Hogwarts?",
      respostas: [
        "Casa dos Lobos",
        "Casa das Águias",
        "Casa dos Leões"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o diretor de Hogwarts durante a maior parte da série?",
      respostas: [
        "Severo Snape",
        "Alvo Dumbledore",
        "Minerva McGonagall"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a coruja de estimação de Harry?",
      respostas: [
        "Edwiges",
        "Bicuço",
        "Fawkes"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do melhor amigo de Harry?",
      respostas: [
        "Draco Malfoy",
        "Rony Weasley",
        "Hermione Granger"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a disciplina ensinada por Severo Snape em Hogwarts?",
      respostas: [
        "Transfiguração",
        "Poções",
        "Defesa Contra as Artes das Trevas"
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o vilão principal da saga Harry Potter?",
      respostas: [
        "Lorde Voldemort",
        "Belatriz Lestrange",
        "Fenrir Greyback"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome da escola de magia frequentada por Harry e seus amigos?",
      respostas: [
        "Escola de Magia e Bruxaria de Londres",
        "Escola de Magia e Feitiçaria de Hogwarts",
        "Escola de Magia e Feitiços de Londres"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a posição de quadribol que Harry joga?",
      respostas: [
        "Artilheiro",
        "Apanhador",
        "Goleiro"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do vilão que assassina os pais de Harry?",
      respostas: [
        "Lorde das Trevas",
        "Lorde Voldemort",
        "Lorde das Sombras"
      ],
      correta: 1
    }
  ];
  
  const quiz =  document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let respostas of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = respostas
      dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item)) 
      dt.querySelector('input').value = item.respostas.indexOf(respostas)
  
      dt.querySelector('input').onchange = (event) => {
        const estacorreta = event.target.value == item.correta
        corretas.delete(item)
        if (estacorreta) {
          corretas.add(item)
       }
  
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }