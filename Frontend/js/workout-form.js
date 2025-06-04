// workout-form.js
document.getElementById("workoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const treino = {
    nome: document.getElementById("nome").value,
    reps: parseInt(document.getElementById("reps").value),
    sets: parseInt(document.getElementById("sets").value),
    peso: parseFloat(document.getElementById("peso").value),
    data: document.getElementById("data").value, // formato yyyy-MM-dd
  };

  fetch("http://localhost:8080/api/workouts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(treino),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Erro ao salvar treino");
      return res.json();
    })
    .then(() => {
      alert("Treino cadastrado com sucesso!");
      document.getElementById("workoutForm").reset();
    })
    .catch((err) => {
      console.error("Erro ao cadastrar treino:", err);
      alert("Erro ao cadastrar treino.");
    });
});
