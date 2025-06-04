// workout-list.js
function buscarTreinosPorData() {
  const dataSelecionada = document.getElementById("filtroData").value;

  if (!dataSelecionada) {
    alert("Selecione uma data.");
    return;
  }

  // Buscar treinos por data
  fetch(`http://localhost:8080/api/workouts/por-data?data=${dataSelecionada}`)
    .then((res) => res.json())
    .then((treinos) => {
      let html = "<h3>Treinos:</h3><ul>";
      treinos.forEach((t) => {
        html += `<li>${t.nome} - ${t.sets}x${t.reps} com ${t.peso}kg</li>`;
      });
      html += "</ul>";
      document.getElementById("resultadoTreinos").innerHTML = html;
    })
    .catch((err) => {
      console.error("Erro ao buscar treinos:", err);
      document.getElementById("resultadoTreinos").innerHTML = "<p>Erro ao buscar treinos.</p>";
    });

  // Buscar volume do dia
  fetch(`http://localhost:8080/api/workouts/volume?data=${dataSelecionada}`)
    .then((res) => res.text())
    .then((volume) => {
      document.getElementById("resultadoTreinos").innerHTML +=
        `<p><strong>Volume total do dia:</strong> ${volume} kg</p>`;
    })
    .catch((err) => {
      console.error("Erro ao buscar volume:", err);
    });
}
