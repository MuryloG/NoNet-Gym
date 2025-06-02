function salvarTreino() {
  const nome = document.getElementById('nome').value;
  const reps = document.getElementById('reps').value;
  const sets = document.getElementById('sets').value;
  const peso = document.getElementById('peso').value;
  const data = document.getElementById('data').value;

  fetch('http://localhost:8080/api/workouts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, reps, sets, peso, data })
  })
    .then(res => {
      if (!res.ok) throw new Error("Erro ao salvar treino");
      alert("Treino salvo com sucesso!");
      window.location.href = "workout-list.html";
    })
    .catch(err => alert("Erro: " + err.message));
}
