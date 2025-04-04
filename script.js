document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("mode");
  const body = document.body;
  const checklistContainer = document.querySelector(".checklist");
  const pointsDisplay = document.querySelector(".points .number");
  const quoteElement = document.querySelector(".points .quote"); 
  const iconElement = document.querySelector(".points .icon"); 

  let totalPoints = 0;
  const maxPoints = 100;

  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.innerHTML =
      '<span class="material-symbols-outlined">moon_stars</span>';
  }

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      toggleButton.innerHTML =
        '<span class="material-symbols-outlined">moon_stars</span>';
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleButton.innerHTML =
        '<span class="material-symbols-outlined">wb_sunny</span>';
    }
  });

  const checklistItems = [
    { id: "item1", texto: "O texto é direto e fácil de entender, sem o uso de termos técnicos.", valor: 10 },
    { id: "item2", texto: "A interface não apresenta mais informações do que o necessário para a tarefa.", valor: 12 },
    { id: "item4", texto: "As fontes devem ter no mínimo 16px para corpo de texto e 18-24px para títulos e cabeçalhos.", valor: 10 },
    { id: "item5", texto: "Elementos importantes são destacados através de tamanho, peso ou cor da fonte.", valor: 14 },
    { id: "item6", texto: "Botões e toques interativos devem ter no mínimo 48px de altura.", valor: 12 },
    { id: "item7", texto: "Botões devem ser posicionados na parte inferior da interface para evitar que a mão do usuário obstrua a tela durante a interação.", valor: 10 },
    { id: "item8", texto: "Garanta que haja um espaçamento de 8px a 16px entre os botões para evitar cliques acidentais.", valor: 11 },
    { id: "item9", texto: "Informações essenciais são apresentadas de diferentes formas (texto, ícones, áudio, etc.).", valor: 13 },
    { id: "item11", texto: "Ícones são usados de forma clara e intuitiva, ajudando a ilustrar a informação sem confundir.", valor: 12 },
    { id: "item12", texto: "As cores são usadas de forma consistente para destacar elementos importantes, gerar familiaridade e facilitar a compreensão.", valor: 15 },
    { id: "item13", texto: "O conteúdo é apresentado em etapas, permitindo o aprendizado gradual.", valor: 14 },
    { id: "item14", texto: "O usuário é informado sobre seu avanço de maneira clara.", valor: 12 },
    { id: "item15", texto: "O design é limpo, evitando sobrecarga visual e permitindo foco nas tarefas principais.", valor: 15 },
    { id: "item16", texto: "O usuário recebe respostas e orientações durante a navegação.", valor: 10 },
    { id: "item17", texto: "A interface se ajusta com base no nível do usuário, oferecendo desafios apropriados.", valor: 13 },
    { id: "item18", texto: "A interface oferece conteúdos e dicas que se adaptam às preferências e necessidades do usuário.", valor: 14 },
    { id: "item19", texto: "O contraste entre texto e fundo é suficiente para garantir legibilidade em diferentes condições de iluminação.", valor: 16 },
    { id: "item20", texto: "A interface adota navegação de único nível para evitar estruturas de menus complexos.", valor: 12 },
    { id: "item22", texto: "O progresso é informado continuamente, incentivando o usuário a seguir adiante.", valor: 16 },
    { id: "item23", texto: "O usuário sabe exatamente o que precisa fazer para continuar avançando.", valor: 14 },
    { id: "item25", texto: "A velocidade das animações deve ser reduzida, permitindo que o usuário compreenda claramente a interação e os movimentos na interface.", valor: 12 },
    { id: "item27", texto: "Quando necessário, a interface sugere melhorias de forma amigável e útil.", valor: 14 },
    { id: "item28", texto: "O feedback é focado no encorajamento, não na crítica.", valor: 13 },
    { id: "item29", texto: "O feedback é fornecido através de elementos visuais (ex: ícones, cores) e sonoros (ex: notificações, alertas) de forma integrada.", valor: 15 },
    { id: "item30", texto: "Funções críticas exigem uma confirmação adicional para evitar erros do usuário.", valor: 12 },
    { id: "item32", texto: "Há recursos para o usuário revisar o que aprendeu.", valor: 14 },
    { id: "item33", texto: "O usuário pode escolher aprofundar-se em tópicos de seu interesse ou necessidade.", valor: 15 },
    { id: "item35", texto: "O usuário pode selecionar atividades adequadas ao seu nível de habilidade.", valor: 13 },
    { id: "item36", texto: "A dificuldade das tarefas é visualmente destacada (ex: cores, ícones) para que o usuário entenda claramente o nível do desafio.", valor: 14 },
    { id: "item37", texto: "A interface inclui atividades que desenvolvem as habilidades de leitura e escrita.", valor: 12 },
    { id: "item38", texto: "Há recursos (ex: glossários, explicações) que ajudam a compreender melhor os textos.", valor: 15 },
  ];
  

  checklistItems.forEach((item) => {
    const checklistItem = document.createElement("div");
    checklistItem.classList.add("checklist-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item.id;
    checkbox.dataset.valor = item.valor;

    const label = document.createElement("label");
    label.htmlFor = item.id;
    label.textContent = item.texto;

    checklistItem.appendChild(checkbox);
    checklistItem.appendChild(label);
    checklistContainer.appendChild(checklistItem);

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        totalPoints += parseInt(this.dataset.valor);
      } else {
        totalPoints -= parseInt(this.dataset.valor);
      }

      totalPoints = Math.max(0, Math.min(totalPoints, maxPoints));

      pointsDisplay.textContent = totalPoints;

      updatePointsDisplay(totalPoints);
    });
  });

  function updatePointsDisplay(points) {
    pointsDisplay.textContent = points;

    if (points == 0) {
      quoteElement.textContent = "Nada por enquanto... Vamos juntos nessa?";
      iconElement.src = "assets/sentiment_very_dissatisfied.svg"; 
      iconElement.alt = "Ícone de emoção muito insatisfeito";
      document.querySelector(".points").style.backgroundColor = "#ac2e2e"; 
    } 
    
    else if (points <= 40) {
      quoteElement.textContent = "Começando! Bora trabalhar nos próximos critérios";
      iconElement.src = "assets/sentiment_dissatisfied.svg"; 
      iconElement.alt = "Ícone de emoção insatisfeito";
      document.querySelector(".points").style.backgroundColor = "#CE4377"; 
    } 
    
    else if (points <= 75) {
      quoteElement.textContent = "No caminho! Ainda tem alguns detalhes para ajustar";
      iconElement.src = "assets/sentiment_neutral.svg";
      iconElement.alt = "Ícone de emoção neutro";
      document.querySelector(".points").style.backgroundColor = "#db8803";
    } 

    else if (points <= 99) {
      quoteElement.textContent = "Quase lá! Você está fazendo um ótimo trabalho";
      iconElement.src = "assets/sentiment_satisfied.svg";
      iconElement.alt = "Ícone de emoção satisfeito";
      document.querySelector(".points").style.backgroundColor = "#4888B3";
    } 
    
    else if (points == 100) {
      quoteElement.textContent = "Incrível! Você conseguiu atingir todos os critérios";
      iconElement.src = "assets/sentiment_excited.svg"; 
      iconElement.alt = "Ícone de emoção animado";
      document.querySelector(".points").style.backgroundColor = "#55B348";
    }
  }
});

const checklist = document.querySelector('.checklist');
const wrapper = document.querySelector('.checklist-wrapper');

function toggleGradients() {
  const scrollTop = checklist.scrollTop;
  const scrollHeight = checklist.scrollHeight;
  const clientHeight = checklist.clientHeight;

  wrapper.classList.toggle('at-top', scrollTop === 0);
  wrapper.classList.toggle('at-bottom', scrollTop + clientHeight >= scrollHeight);
}

checklist.addEventListener('scroll', toggleGradients);
window.addEventListener('load', toggleGradients);
