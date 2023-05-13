import { useState } from "react";
import "./Input.css";

function Input(props) {
    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(e.target.value);
    }

    const { error, disabled, helperText, value, size, fullWidth, multiline, rows, label } = props;

    let className = "input-base";
    let labelClass = "label";
    let helperTextClass = "helper-text"
    let isMultiline = false;

    if (disabled) {
        className += " disabled";
    }
    
    if (error) {
        className += " error";
        labelClass += " error";
        helperTextClass += " error";
    }

    if (size === "sm") {
        className += " sm";
    } else {
        className += " md";
    }

    if (fullWidth) {
        className += " full-width";
    }

    if (multiline) {
        className += " multiline";
        isMultiline = true;
    }

    return (
        <div className={className}>
            <label className={labelClass}>{label}</label>
            {isMultiline ? <textarea rows={rows} value={value} placeholder="Placeholder" disabled={disabled} onChange={handleChange}></textarea> : 
            <input type="text" value={value} placeholder="Placeholder" disabled={disabled} onChange={handleChange} />}
            <p className={helperTextClass}>{helperText}</p>
        </div>
    )
}

export default Input;
