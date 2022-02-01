const login = () => {
    let data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    console.log(data);
    localStorage.setItem('username', data.username);
    window.location.href="dashboard"
}