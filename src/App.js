import logo from './assets/images/logo192.png';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="logo-text">Name Here</h1>
      </header>
      <section className="content">
        <p className="desc">Text Here</p>
        <a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLScPs3GhuqYsix6pGNjf23t_AACFrqjPxn2d3eUqKuJnzLlODg/viewform">Link To Form</a>
        <a className="link button" href="https://reactjs.org">Send to Friends</a>
      </section>
    </div>
  );
}

export default App;
