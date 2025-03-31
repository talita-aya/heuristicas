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
    { id: "item1", texto: "Clareza e concisão", valor: 10 },
    { id: "item2", texto: "Reforço e redundância estratégica", valor: 15 },
    { id: "item3", texto: "Progresso gradual e confortável", valor: 12 },
    { id: "item4", texto: "Compreensão e adaptação ao usuário", valor: 8 },
    { id: "item5", texto: "Visibilidade do progresso", valor: 10 },
    { id: "item6", texto: "Adaptação e personalização", valor: 15 },
    { id: "item7", texto: "Feedback claro e motivador", valor: 10 },
    { id: "item8", texto: "Aprofundamento e exploração", valor: 10 },
    { id: "item9", texto: "Desafios adaptativos", valor: 5 },
    { id: "item10", texto: "Apoio ao desenvolvimento linguístico", valor: 5 },
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
