// Display.jsx
import "./IndexFile.css";

function Display ( {calVal}) {
    return (
        <input type="text" className="display" value = {calVal} readOnly/>
    );
}

export default Display;
