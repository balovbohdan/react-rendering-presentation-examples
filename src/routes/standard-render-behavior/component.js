import React from 'react';

import CodeEditor from '../../components/code-editor';
import RenderOutput from '../../components/render-output';

const StandardRenderBehavior = () => {
  const code = `
  const D = () => {
    console.log('D');

    return <p>Hello from D!</p>;
  };

  const C = (props) => {
    console.log('C');

    return <D />;
  };

  const B = (props) => {
    const [counter, setCounter] = React.useState(0);

    const handleIncrementCounter = React.useCallback(() => {
      setCounter(counter + 1);
    }, [counter]);

    console.log('B');

    return (
      <>
        <p>Counter in B: {counter}</p>
        <button onClick={handleIncrementCounter}>Increment Counter</button>
        <C />
      </>
    );
  };

  const A = (props) => {
    console.log('A');

    return <B />;
  };

  ReactDOM.render(<A />, document.getElementById('renderOutput'));
  `;

  return (
    <>
      <h1>Standard Render Behavior</h1>
      <CodeEditor value={code} />
      <RenderOutput title="Render Output" outputWrapperId="renderOutput" />
    </>
  );
};

export default StandardRenderBehavior;
