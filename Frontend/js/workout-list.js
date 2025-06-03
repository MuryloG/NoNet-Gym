window.onload = listarTreinos;

function listarTreinos() {
  fetch('http://localhost:8080/api/workouts')
    .then(res => res.json())
    .then(data => exibirTreinos(data))
    .catch(err => alert("Erro ao carregar treinos: " + err.message));
}

function exibirTreinos(treinos) {
  const lista = document.getElementById('lista-treinos');
  lista.innerHTML = ''; // Limpa lista anterior

  treinos.forEach(treino => {
    const item = document.createElement('div');
    item.innerHTML = `
      <p><strong>${treino.nome}</strong></p>
      <p>Reps: ${treino.reps}, Sets: ${treino.sets}, Peso: ${treino.peso}kg</p>
      <p>Data: ${treino.data}</p>
      <hr/>
    `;
    lista.appendChild(item);
  });
}

function filtrarPorData() {
  const dataSelecionada = document.getElementById('filtroData').value;

  if (!dataSelecionada) {
    alert("Selecione uma data para filtrar.");
    return;
  }

  fetch('http://localhost:8080/api/workouts')
    .then(res => res.json())
    .then(treinos => {
      const filtrados = treinos.filter(treino => treino.data === dataSelecionada);
      exibirTreinos(filtrados);
    })
    .catch(err => alert("Erro ao filtrar: " + err.message));
}
