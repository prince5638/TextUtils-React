import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked with value: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    };

    const handleLoClick = () => {
        // console.log("lowercase was clicked with value: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    };
    
    const handleOnChange = (val) => {
        // console.log("On Change");
        setText(val.target.value);
    };
    
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "warning");
    };
    
    const handleCopyClick = ()=>{
        let copiedText = document.getElementById('myBox'); 
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value);
        props.showAlert("Copied to Clipboard!", "success");
    };
    
    const handelExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed!", "success");
    }; 

    const countWords = (word)=>{
        // Trim leading and trailing whitespaces
        const trimmedString = word.trim();

        // Return 0 if the trimmed string is empty
        if (trimmedString === "") {
            return 0;
        }

        // Split the string into an array of words
        const wordArray = trimmedString.split(/\s+/);
        
        // Return the number of words in the array
        return wordArray.length;
    }

    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the setText
    // setText("New/Updated Text"); // Correct Way to change the setText

    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'? 'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode === 'light'? 'white':'gray', color: props.mode === 'dark'? 'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{countWords(text)} and {text.length} characters</p>
                <p>{0.008 * countWords(text)} Minute read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text: "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}