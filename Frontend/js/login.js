document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const response = await fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    if (response.ok) {
      const user = await response.json();
      console.log('Login realizado com sucesso!', user);

      // Salva os dados do usuário no localStorage (opcional)
      localStorage.setItem('user', JSON.stringify(user));

      // Redireciona para o menu principal
      window.location.href = 'menu.html';
    } else {
      document.getElementById('error-message').style.display = 'block';
    }
  } catch (error) {
    console.error('Erro ao tentar login:', error);
    document.getElementById('error-message').style.display = 'block';
  }
});
