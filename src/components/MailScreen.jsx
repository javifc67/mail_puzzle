import "./../assets/scss/MailScreen.scss";

import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./GlobalContext.jsx";

export default function MailScreen({ solvePuzzle, solved, solvedTrigger }) {
  const { appSettings: config, I18n } = useContext(GlobalContext);

  const [showHint, setShowHint] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [solutionSubmitted, setSolutionSubmitted] = useState(false);
  const [fail, setFail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const sendSolution = (e) => {
    if (e) e.preventDefault();
    setSolutionSubmitted(true);
    const parsedSolution = `${email};${password}`;
    solvePuzzle(parsedSolution);
  };

  useEffect(() => {
    if (!solutionSubmitted) return;
    if (!solved) {
      setEmail("");
      setPassword("");
      setFail(true);
    }
  }, [solved, solvedTrigger]);

  return (
    <div className="mailScreen">
      <div className="login-card">
        <div className="avatar-section">
          {fail ? (
            <div className="error-icon">⚠️</div>
          ) : (
            <div className="imgAvatar" style={{ backgroundImage: `url(/images/email.png)` }}></div>
          )}
        </div>

        {!fail ? (
          <form className="login-form" onSubmit={sendSolution}>

            <div className="input-group">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                type="text"
                value={email}
                placeholder={I18n.getTrans("i.email")}
              />
            </div>


            <div className="input-group">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="input-field password-input"
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder={I18n.getTrans("i.password")}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                )}
              </button>
            </div>

            <div className="actions">
              <button className="submit-btn" type="submit">
                {I18n.getTrans("i.next")}
              </button>
            </div>

            {config.hint && (
              <div className="hint-section">
                <button type="button" onClick={() => setShowHint(!showHint)} className="forgotPIN">
                  {I18n.getTrans("i.pass")}
                </button>
                <div className={`hint-text ${showHint ? 'visible' : ''}`}>
                  {config.hint}
                </div>
              </div>
            )}
          </form>
        ) : (
          <>
            <p className="wrongPassFeedback">
              {config.errorMessage || I18n.getTrans("i.errorMessage")}
            </p>
            <button className="try-again-btn" onClick={() => setFail(false)}>
              {I18n.getTrans("i.tryAgain") || "Try Again"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
