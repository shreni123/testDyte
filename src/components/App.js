import React, { useState, useEffect } from 'react';
import Editor from './Editor'

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')
  const [lang,setLang]=useState('html')

  useEffect(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
  }, [html, css, js,lang])
  function handleChange(event)
  {
    setLang(event.target.value)
  }
  return (
    <>
      <div className="edit top">
    <select className="drop" name="selectList" id="selectList" value={lang}
          onChange = {(val)=>handleChange(val)}>
   <option  
          
          value="html">HTML</option>
            <option  
          value="css">
            CSS</option>
           <option  
          value="js">JAVASCRIPT</option>
</select>
        {lang==='html' ? <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={(val)=>setHtml(val)}
        />:null}
        {lang==='css' && <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={(val)=>setCss(val)}
        />}
        {lang==='js' && <Editor
          language="javascript"
          displayName="JAVASCRIPT"
          value={js}
          onChange={(val)=>setJs(val)}
        />}
</div>
<div className="edit">
        <iframe
         className="frame"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="90%"
          height="90%"
        />
      </div>
    </>
  )
}
export default App;
