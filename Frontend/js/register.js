function registrarUsuario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha })
  })
  .then(res => {
    if (!res.ok) throw new Error("Erro ao registrar");
    alert("Usuário registrado com sucesso!");
    window.location.href = "login.html";
  })
  .catch(err => alert("Erro: " + err.message));
}
