function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  })
  .then(res => {
    if (!res.ok) throw new Error("Login inválido");
    window.location.href = "workout-form.html";
  })
  .catch(err => alert("Erro no login: " + err.message));
}
