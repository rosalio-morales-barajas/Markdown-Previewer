import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdownText, setMarkdownText] = useState<string>("");

  return (
    <>
      <div>
        <h1 style={{textAlign: "center"}}>Markdown  Previewer</h1>
        <div className="boxes-container">
          <textarea name="editor" id="editor" value={markdownText} onChange = { (e) => setMarkdownText(e.target.value) } > </textarea>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
