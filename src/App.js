import {marked} from 'marked';
import Prism from 'prismjs';
import React, {useState} from 'react';
import './App.css';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href,title,text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextChange }) => <textarea id="editor" value={content} onChange={handleTextChange} />
 
const Preview = ({content}) => <div id ="preview" dangerouslySetInnerHTML={{__html: marked(content, {renderer:renderer})}} />


function App() {
  const [content, setContent] = useState(defaultContent)
  function handleTextChange(e) {
      setContent(e.target.value)
  }

  return (
    <div className="App">
      <header className="title">Markdown Preview App</header>
      <div className="container">
      <Editor content={content} handleTextChange={handleTextChange}/>
      <Preview content={content} renderer={renderer}/>        
      </div>

    </div>
  );
}

export default App;

const defaultContent = 
`# My Markdown Previewer!
## Made with React
### What I learned during the making of this project:
- Reviewed how to execute \`{useState}\` 
  
\`\`\`
const [content, setContent] = useState(defaultContent)
function handleTextChange(e) {
setContent(e.target.value)
}
\`\`\`
- Understood how to use the **marked library**:
\`\`\`
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }});
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return "<a target="_blank" href="${'href'}">${'text'}</a>";
};
\`\`\`
This website was made to pass the freeCodeCamp <br> [challenge](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
> 
`;

