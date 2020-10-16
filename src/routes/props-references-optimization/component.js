import React from 'react';

import CodeEditor from '../../components/code-editor';
import RenderOutput from '../../components/render-output';

const PropsReferencesOptimization = (props) => {
  const codeNewReferencesDontMatter = `
  const Child = (props) => {
    console.log('Render <Child />');

    return <p>{props.data.text}</p>;
  };

  const Parent = () => {
    const [counter, setCounter] = React.useState(0);
    const handleClick = () => { setCounter(counter + 1); };
    const data = { text: 'Hello World!' };

    console.log('Render <Parent />');

    return (
      <>
        <Child data={data} />
        <button onClick={handleClick}>Counter: {counter}</button>
      </>
    );
  };

  ReactDOM.render(<Parent />, document.getElementById('renderOutputNewReferencesDontMatter'));
  `;

  const codeWhenReferencesMatter = `
  const Child = (props) => {
    console.log('Render <Child />');

    return <p>{props.data.text}</p>;
  };

  const ChildMemoized = React.memo(Child);

  const Parent = () => {
    const [counter, setCounter] = React.useState(0);
    const handleClick = () => { setCounter(counter + 1); };
    const data = { text: 'Hello World!' };

    console.log('Render <Parent />');

    return (
      <>
        <ChildMemoized data={data} />
        <button onClick={handleClick}>Counter: {counter}</button>
      </>
    );
  };

  ReactDOM.render(<Parent />, document.getElementById('renderOutputWhenReferencesMatter'));
  `;

  const codeHostComponents = `
  const App = () => {
    const [counter, setCounter] = React.useState(0);
    const handleClick = () => { setCounter(counter + 1) };

    return <button onClick={handleClick}>Counter: {counter}</button>;
  };

  ReactDOM.render(<App />, document.getElementById('renderOutputHostComponents'));
  `;

  const codePropsWithChildren = `
  const Child = (props) => {
    console.log('Render <Child />');

    return <p>{props.data.text} {props.children}</p>;
  };

  const ChildMemoized = React.memo(Child);

  const Parent = () => {
    const [counter, setCounter] = React.useState(0);
    const handleClick = () => { setCounter(counter + 1); };
    const data = React.useMemo(() => ({ text: 'Hello World!' }), []);

    console.log('Render <Parent />');

    return (
      <>
        <ChildMemoized data={data}>
          <span>Your Children.</span>
        </ChildMemoized>
        <button onClick={handleClick}>Counter: {counter}</button>
      </>
    );
  };

  ReactDOM.render(<Parent />, document.getElementById('renderOutputPropsWithChildren'));
  `;

  return (
    <>
      <h1>Props References Optimization</h1>
      <section id="new-references-dont-matter">
        <h2>New References don't matter</h2>
        <CodeEditor value={codeNewReferencesDontMatter} />
        <RenderOutput title="Render Output" outputWrapperId="renderOutputNewReferencesDontMatter" />
      </section>
      <section id="when-references-matter">
        <h2>When Do References Matter?</h2>
        <CodeEditor value={codeWhenReferencesMatter} />
        <RenderOutput title="Render Output" outputWrapperId="renderOutputWhenReferencesMatter" />
      </section>
      <section id="dont-optimize-host-components">
        <h2>Don't Optimize Host Components!</h2>
        <CodeEditor value={codeHostComponents} />
        <RenderOutput title="Render Output" outputWrapperId="renderOutputHostComponents" />
      </section>
      <section id="props-with-children">
        <h2>Props With Children</h2>
        <CodeEditor value={codePropsWithChildren} />
        <RenderOutput title="Render Output" outputWrapperId="renderOutputPropsWithChildren" />
      </section>
    </>
  );
};

export default PropsReferencesOptimization;
