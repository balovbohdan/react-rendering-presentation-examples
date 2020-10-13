import React from 'react';

import CodeEditor from '../../components/code-editor';
import RenderOutput from '../../components/render-output';

const RenderBatchingExample = () => {
  const code = `
    const App = () => {
      const [counter, setCounter] = React.useState(0);
      const fetchData = async () => ({ data: 'Data from BE.' });

      console.log('Render! Counter: ', counter);

      const handleButtonClick = React.useCallback(async () => {
        setCounter(1);
        setCounter(2);

        const data = await fetchData();

        setCounter(3);
        setCounter(4);
      }, [counter]);

      return <button onClick={handleButtonClick}>Click me!</button>;
    };

    ReactDOM.render(<App />, document.getElementById('renderOutput'));
  `;

  return (
    <>
      <h1>Render Batching: Real World Example</h1>
      <CodeEditor value={code} />
      <RenderOutput title="Render Output" outputWrapperId="renderOutput" />
    </>
  );
};

export default RenderBatchingExample;
