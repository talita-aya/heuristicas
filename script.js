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

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });


  const checklistGroups = [
    {
      nome: "Clareza e legibilidade",
      items: [
        {
          id: "item1",
          texto:
            "A linguagem utilizada é simples, direta e sem termos técnicos.",
          valor: 2.86,
        },
        {
          id: "item2",
          texto:
            "A interface não apresenta mais informações do que o necessário para a tarefa.",
          valor: 2.86,
        },
        {
          id: "item3",
          texto:
            "As fontes devem ter no mínimo 16px para corpo de texto e 18-24px para títulos e cabeçalhos.",
          valor: 2.86,
        },
        {
          id: "item4",
          texto:
            "O contraste entre texto e fundo é suficiente para garantir legibilidade em diferentes condições de iluminação.",
          valor: 2.86,
        },
      ],
    },
    {
      nome: "Hierarquia visual e organização",
      items: [
        {
          id: "item5",
          texto:
            "Elementos importantes são destacados através de tamanho, peso ou cor da fonte.",
          valor: 2.86,
        },
        {
          id: "item6",
          texto:
            "O layout é limpo e prioriza foco nas tarefas principais, evitando sobrecarga visual.",
          valor: 2.86,
        },
        {
          id: "item7",
          texto:
            "O conteúdo é apresentado em etapas, permitindo o aprendizado gradual.",
          valor: 2.86,
        },
        {
          id: "item8",
          texto:
            "As cores são usadas de forma consistente para destacar elementos importantes, gerar familiaridade e facilitar a compreensão.",
          valor: 2.86,
        },
      ],
    },
    {
      nome: "Interação e navegação",
      items: [
        {
          id: "item9",
          texto:
            "Botões têm no mínimo 48px de altura, com espaçamento de 8–16px entre si, para evitar cliques acidentais.",
          valor: 2.86,
        },
        {
          id: "item10",
          texto:
            "Botões devem ser posicionados na parte inferior da interface para evitar que a mão do usuário obstrua a tela durante a interação.",
          valor: 2.86,
        },
        {
          id: "item11",
          texto:
            "A interface fornece respostas rápidas e claras para as ações do usuário.",
          valor: 2.86,
        },
        {
          id: "item12",
          texto:
            "A navegação é de único nível, evitando estruturas de menus complexos.",
          valor: 2.86,
        },
        {
          id: "item13",
          texto:
            "A velocidade das animações deve ser reduzida, permitindo que o usuário compreenda claramente a interação e os movimentos na interface.",
          valor: 2.86,
        },
        {
          id: "item14",
          texto:
            "Gestos de toque são simples e previsíveis, evitando interações complexas como duplo toque.",
          valor: 2.86,
        },
      ],
    },
    {
      nome: "Acessibilidade e personalização",
      items: [
        {
          id: "item15",
          texto:
            "A interface permite ajustar tamanho de fonte, cores, níveis de contraste e ativar/desativar animações.",
          valor: 2.86,
        },
        {
          id: "item16",
          texto:
            "A interface respeita e mantém as configurações de acessibilidade nativas do sistema operacional (ex: aumento de fonte do celular, alto contraste, leitor de tela).",
          valor: 2.86,
        },
        {
          id: "item17",
          texto:
            "A interface é acessível a diferentes tipos de usuários, incluindo aqueles com limitações de mobilidade, visão ou audição.",
          valor: 2.86,
        },
        {
          id: "item18",
          texto:
            "O conteúdo e os desafios se adaptam ao progresso e às preferências do usuário.",
          valor: 2.86,
        },
      ],
    },
    {
      nome: "Multimodalidade e reforço de informações",
      items: [
        {
          id: "item19",
          texto:
            "Informações essenciais são apresentadas de diferentes formas (texto, ícones, áudio, etc.).",
          valor: 2.86,
        },
        {
          id: "item20",
          texto:
            "Ícones são usados de forma clara e intuitiva, acompanhados de rótulos textuais ou legendas explicativas para facilitar a compreensão.",
          valor: 2.86,
        },
        {
          id: "item21",
          texto:
            "A interface combina sinais visuais (ícones, cores) e auditivos (sons, alertas) para reforçar mensagens e respostas do sistema.",
          valor: 2.86,
        },
        {
          id: "item22",
          texto:
            "O feedback utiliza mensagens positivas e construtivas, evitando termos negativos ou punitivos.",
          valor: 2.86,
        },
        {
          id: "item23",
          texto: "Há recursos para o usuário revisar o que aprendeu.",
          valor: 2.86,
        },
      ],
    },
    {
      nome: "Progresso e motivação",
      items: [
        {
          id: "item24",
          texto:
            "A interface apresenta elementos visuais (ex: barras de progresso, indicadores ou mensagens) que mostram o avanço do usuário na tarefa.",
          valor: 2.86,
        },
        {
          id: "item25",
          texto:
            "O progresso é informado continuamente, incentivando o usuário a seguir adiante.",
          valor: 2.86,
        },
        {
          id: "item26",
          texto:
            "A interface solicita confirmação em ações irreversíveis, como excluir dados ou finalizar uma atividade, para evitar erros não intencionais.",
          valor: 2.86,
        },
        {
          id: "item27",
          texto: "O usuário recebe feedback que celebra suas conquistas.",
          valor: 2.86,
        },
        {
          id: "item28",
          texto:
            "Quando necessário, a interface sugere melhorias de forma amigável e útil.",
          valor: 2.86,
        },
      ],
    },
    {
      nome: "Exploração e aprofundamento",
      items: [
        {
          id: "item29",
          texto:
            "O usuário pode revisar conteúdos anteriores e acessar materiais complementares conforme seu interesse.",
          valor: 2.86,
        },
        {
          id: "item30",
          texto:
            "Há recursos (ex: glossários, explicações) que ajudam a compreender melhor os textos.",
          valor: 2.86,
        },
        {
          id: "item31",
          texto:
            "A dificuldade das tarefas é visualmente destacada (ex: cores, ícones) para que o usuário entenda claramente o nível do desafio.",
          valor: 2.86,
        },
        {
          id: "item32",
          texto: "O nível de dificuldade é adaptável ao progresso do usuário.",
          valor: 2.86,
        },
        {
          id: "item33",
          texto:
            "O usuário pode selecionar atividades adequadas ao seu nível de habilidade.",
          valor: 2.86,
        },
        {
          id: "item34",
          texto:
            "A interface oferece links ou seções adicionais para conteúdos complementares, permitindo que o usuário explore temas de forma opcional.",
          valor: 2.86,
        },
        {
          id: "item35",
          texto:
            "A interface inclui atividades que desenvolvem as habilidades de leitura e escrita.",
          valor: 2.86,
        },
      ],
    },
  ];

  // Função para criar grupo com dropdown e contador
  function createGroup(group) {
    const groupDiv = document.createElement("div");
    groupDiv.classList.add("checklist-group");

    // Botão de toggle do grupo
    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.classList.add("group-toggle");
    toggleButton.textContent = `${group.nome} — 0 de ${group.items.length}`;
    toggleButton.setAttribute("aria-expanded", "true");

    // Container dos itens do grupo
    const itemsContainer = document.createElement("div");
    itemsContainer.classList.add("group-items");
    itemsContainer.style.display = "block"; // inicialmente escondido

    // Criar os itens checkbox dentro do grupo
    group.items.forEach((item) => {
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
      itemsContainer.appendChild(checklistItem);

      checkbox.addEventListener("change", function () {
        if (this.checked) {
          totalPoints += parseFloat(this.dataset.valor);
        } else {
          totalPoints -= parseFloat(this.dataset.valor);
        }

        totalPoints = Math.max(0, Math.min(totalPoints, maxPoints));
        updatePointsDisplay(totalPoints);

        // Atualizar contador do grupo
        updateGroupCount(groupDiv, group);
      });
    });

    toggleButton.addEventListener("click", () => {
      const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
      toggleButton.setAttribute("aria-expanded", !isExpanded);
      itemsContainer.style.display = isExpanded ? "none" : "block";
    });

    groupDiv.appendChild(toggleButton);
    groupDiv.appendChild(itemsContainer);

    // Inicializa o contador com 0 marcado
    updateGroupCount(groupDiv, group);

    return groupDiv;
  }

  // Função para atualizar a contagem marcada/total do grupo
  function areAllChecked(groupDiv) {
    const checkboxes = groupDiv.querySelectorAll("input[type=checkbox]");
    return Array.from(checkboxes).every((cb) => cb.checked);
  }

  function updateGroupCount(groupDiv, group) {
    const checkboxes = groupDiv.querySelectorAll("input[type=checkbox]");
    let checkedCount = 0;
    checkboxes.forEach((cb) => {
      if (cb.checked) checkedCount++;
    });
    const toggleButton = groupDiv.querySelector(".group-toggle");

    if (areAllChecked(groupDiv)) {
      groupDiv.style.backgroundColor = "#339e2528"
      toggleButton.style.background = "#339e2528"
      toggleButton.style.backgroundColor = "transparent"
      toggleButton.textContent = `${group.nome} — ${checkedCount} de ${group.items.length}`;
    } else {
      groupDiv.style.backgroundColor = ""
      toggleButton.style.background = ""
      toggleButton.textContent = `${group.nome} — ${checkedCount} de ${group.items.length}`;
    }
  }

  // Limpar checklist atual e montar por grupos
  checklistContainer.innerHTML = "";
  checklistGroups.forEach((group) => {
    const groupElement = createGroup(group);
    checklistContainer.appendChild(groupElement);
  });

  // Função updatePointsDisplay do seu código original
  function updatePointsDisplay(points) {
    pointsDisplay.textContent =
      points % 1 === 0 ? points.toFixed(0) : points.toFixed(1);

    if (points == 0) {
      quoteElement.textContent = "Nada por enquanto... Vamos juntos nessa?";
      iconElement.src = "assets/sentiment_very_dissatisfied.svg";
      iconElement.alt = "Ícone de emoção muito insatisfeito";
      document.querySelector(".points").style.backgroundColor = "#ac2e2e";
    } else if (points <= 40) {
      quoteElement.textContent =
        "Começando! Bora trabalhar nos próximos critérios";
      iconElement.src = "assets/sentiment_dissatisfied.svg";
      iconElement.alt = "Ícone de emoção insatisfeito";
      document.querySelector(".points").style.backgroundColor = "#CE4377";
    } else if (points <= 75) {
      quoteElement.textContent =
        "No caminho! Ainda faltam alguns detalhes para ajustar";
      iconElement.src = "assets/sentiment_neutral.svg";
      iconElement.alt = "Ícone de emoção neutro";
      document.querySelector(".points").style.backgroundColor = "#db8803";
    } else if (points <= 99) {
      quoteElement.textContent =
        "Quase lá! Você está fazendo um ótimo trabalho";
      iconElement.src = "assets/sentiment_satisfied.svg";
      iconElement.alt = "Ícone de emoção satisfeito";
      document.querySelector(".points").style.backgroundColor = "#4888B3";
    } else if (points == 100) {
      quoteElement.textContent =
        "Incrível! Você conseguiu atingir todos os critérios";
      iconElement.src = "assets/sentiment_excited.svg";
      iconElement.alt = "Ícone de emoção animado";
      document.querySelector(".points").style.backgroundColor = "#55B348";
    }
  }

  // Atualizar o display inicial dos pontos
  updatePointsDisplay(totalPoints);
});
