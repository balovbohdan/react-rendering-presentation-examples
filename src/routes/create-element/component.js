import React, { createElement } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';

const SomeWrapper = (props) => (
  <div>{props.children}</div>
);

const CreateElement = () => {
  // const jsxOutput = <SomeWrapper><p>JSX output</p></SomeWrapper>;
  // const createElementOutput = createElement(SomeWrapper, null, [
  //   createElement('p', null, 'createElement(...) output')
  // ]);

  return (
    <CodeMirror
      value='<h1>I react-codemirror2</h1>'
      options={{
        mode: 'xml',
        theme: 'material',
        lineNumbers: true
      }}
      onChange={(editor, data, value) => {
      }}
    />
  );
};

export default CreateElement;
