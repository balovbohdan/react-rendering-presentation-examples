import React, { createElement } from 'react';

import CodeEditor from '../../components/code-editor';
import RenderOutput from '../../components/render-output';

import './component.css';

const CreateElement = () => {
  const code = `
    const SomeWrapper = (props) => <div>{props.children}</div>;

    const jsxOutput = <SomeWrapper><p>JSX output</p></SomeWrapper>;

    const createElementOutput = React.createElement(SomeWrapper, null, [
      React.createElement('p', null, 'createElement(...) output')
    ]);

    console.log('JSX output', jsxOutput);
    console.log('React.createElement output', createElementOutput);

    ReactDOM.render(
      <>
        {jsxOutput}
        {createElementOutput}
      </>,
      document.getElementById('renderOutput'),
    );
  `;

  return (
    <>
      <CodeEditor value={code} />
      <RenderOutput title="Render Output" outputWrapperId="renderOutput" />
    </>
  );
};

export default CreateElement;
