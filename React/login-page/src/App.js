import './App.css';

export default function AppLogin() {
  // Login page
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login");
  }

  // Light/Dark mode
  const chk = document.getElementById('chk');
  chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  });
  return (
    <div className="App">
      <div className="light-dark-toggle">
        <input type="checkbox" className="checkbox" id="chk" />
        <label className="label" htmlFor="chk">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <div className="ball"></div>
        </label>
      </div>
      <div className="glass-container">
        <div className="glass">
          <div className="glass-content">
            <h1 className="glass-title">Login</h1>
            <form className="glass-form" onSubmit={handleLogin}>
              <input type="text" placeholder="Username" className="glass-input" />
              <input type="password" placeholder="Password" className="glass-input" />
              <button className="glass-button" type='submit' onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}