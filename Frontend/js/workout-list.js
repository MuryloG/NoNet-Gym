window.onload = function () {
  fetch('http://localhost:8080/api/workouts')
    .then(res => res.json())
    .then(data => {
      const lista = document.getElementById('lista-treinos');
      data.forEach(treino => {
        const item = document.createElement('div');
        item.innerHTML = `
          <p><strong>${treino.nome}</strong></p>
          <p>Reps: ${treino.reps}, Sets: ${treino.sets}, Peso: ${treino.peso}kg</p>
          <p>Data: ${treino.data}</p>
          <hr/>
        `;
        lista.appendChild(item);
      });
    });
};
