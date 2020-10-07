import React, { useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';

import './component.css';
import * as utils from './utils';

window.React = React;
window.ReactDOM = ReactDOM;

const CodeEditor = (props) => {
  const codeMirrorRef = useRef();

  const handleEditorDidMount = useCallback((editor) => {
    codeMirrorRef.current = editor;
  });

  const handleExecute = useCallback(async () => {
    const code = codeMirrorRef.current.getValue();
    const codeParsed = await utils.parseCode(code);
    const execute = new Function(codeParsed);

    execute();
  }, [codeMirrorRef]);

  return (
    <div className="CodeEditor">
      <div className="header">
        <button onClick={handleExecute}>Execute</button>
      </div>
      <CodeMirror
        value={props.value}
        editorDidMount={handleEditorDidMount}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }} />
    </div>
  );
};

CodeEditor.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CodeEditor;
