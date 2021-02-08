import React from "react";
import "./ThemeMode.css";
const ThemeMode = ({ onChange, darkMode }) => (
  <div className="toggle-container">
    <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
    <span className="toggle">
      <input
        checked={darkMode}
        onChange={onChange}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" />
      <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾ </span>
    </span>
  </div>
);
export default ThemeMode;
