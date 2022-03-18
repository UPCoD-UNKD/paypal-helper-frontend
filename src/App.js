import React, { useState } from "react";
import logo from './assets/images/logo192.png';
import Privacy from "./components/Privacy";
import './App.css';

function App() {

  const [email, setEmail] = useState('')
  const [show, setShow] = useState(true)
  const [showPrivacy, setShowPrivacy] = useState(false)

  const Url = 'https://docs.google.com/forms/d/e/1FAIpQLScPs3GhuqYsix6pGNjf23t_AACFrqjPxn2d3eUqKuJnzLlODg/viewform'

  const formUrl = Url + '?=' + email;


  return (
    <div className="app">
      <header className="header">
        <a href="/" className="logo-content">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="logo-text">Name Here</h1>
        </a>
      </header>
      <section className="content">
        {show &&
          <div>
            <h3 className="title">This is a helper for sending donations to Ukraine</h3>
            <p className="text">Paypal temporarily allowed p2p transfers to help Ukraine, but the donation button does not work.{`\n`}To correct this situation, use this helper that will allow you to correct this shortcoming.{`\n`}Paypal temporarily allowed p2p transfers to help Ukraine, but the donation button does not work.{`\n`}To correct this situation, use this helper that will allow you to correct this shortcoming.</p>
            <form>
              <label className="label">Enter the recipient's email:</label>
              <input
                className="input"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </form>
            <a
              className="link"
              onClick={() => setShow(!show)}
              href={formUrl}>
              send a transfer
            </a>
            <button
              className="text-link"
              onClick={() => {
                setShow(!show)
                setShowPrivacy(!showPrivacy)
              }}
            >
              Privacy Policy
            </button>
          </div>
        }
        {showPrivacy && <Privacy />}
      </section>
    </div>
  );
}

export default App;
