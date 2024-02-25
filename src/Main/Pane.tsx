import React from "react";
import "./panel.css";

interface PanelProps {
  isOpen: boolean;
  onClose: () => void;
  onButtonClick: (buttonType: string) => void;
}

const Panel: React.FC<PanelProps> = ({ isOpen, onClose, onButtonClick }) => {
  return (
    <div className={`panel ${isOpen ? "open" : ""}`}>
      <div className="panel-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        <button className="login-btn" onClick={() => onButtonClick("login")}>Login</button>
        <button className="signup-btn" onClick={() => onButtonClick("signup")}>Sign Up</button>
      </div>
    </div>
  );
};

export default Panel;
