import React from 'react';

import './component.css';
import CodeEditor from '../../components/code-editor';
import RenderOutput from '../../components/render-output';

const ImmutabilityMatters = () => {
  const funcComponentCode = `
  const App = () => {
    const [data, setData] = React.useState({ counter: 0 });

    const handleMutableClick = React.useCallback(() => {
      data.counter = data.counter + 1;

      setData(data);
    }, [data]);

    const handleImmutableClick = React.useCallback(() => {
      setData({ ...data, counter: data.counter + 1 });
    }, [data]);

    return (
      <>
        <p>Counter: {data.counter}</p>
        <button onClick={handleMutableClick}>Mutable Click</button>
        <button onClick={handleImmutableClick}>Immutable Click</button>
      </>
    );
  };

  ReactDOM.render(<App />, document.getElementById('renderOutputFuncComponent'));
  `;

  const classComponentCode = `
  class App extends React.Component {
    state = {
      data: { counter: 0 },
    };

    handleMutableClick = () => {
      this.state.data.counter = this.state.data.counter + 1;

      this.setState({ data: this.state.data });
    };

    handleImmutableClick = () => {
      this.setState({
        data: {
          counter: this.state.data.counter + 1,
        },
      });
    };

    render() {
      return (
        <>
          <p>Counter: {this.state.data.counter}</p>
          <button onClick={this.handleMutableClick}>Mutable Click</button>
          <button onClick={this.handleImmutableClick}>Immutable Click</button>
        </>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('renderOutputClassComponent'));
  `;

  return (
    <div className="ImmutabilityMatters">
      <h1>Immutability Matters</h1>
      <section className="funcComponent" id="func-component">
        <h2>Func Component</h2>
        <CodeEditor value={funcComponentCode} />
        <RenderOutput title="Render Output" outputWrapperId="renderOutputFuncComponent" />
      </section>
      <section className="classComponent" id="class-component">
        <h2>Class Component</h2>
        <CodeEditor value={classComponentCode} />
        <RenderOutput title="Render Output" outputWrapperId="renderOutputClassComponent" />
      </section>
    </div>
  );
};

export default ImmutabilityMatters;
