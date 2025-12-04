fetch("games.json")
  .then((response) => response.json())
  .then((data) => {
    const gameList = document.querySelector(".game-list");

    data.forEach((jogo) => {
      const li = document.createElement("li");

      li.innerHTML = `
            <h3>${jogo.tittle}</h3>
            <img src="assets/${jogo.img}" alt="imagem do jogo ${jogo.tittle}" />
            <span>Lançamento: ${jogo.year}</span>
            <p>
              ${jogo.description}
            </p>
        `;

      gameList.appendChild(li);
    });
  })
  .catch((error) => console.error("Erro ao carregar JSON:", error));
