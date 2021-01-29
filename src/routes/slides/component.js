import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';

import reactLogo from './react-logo.png';
import markErikson from './mark-erikson.png';
import CreateElement from '../create-element';

const Slides = () => {
  useEffect(() => {
    const deck = new Reveal({
      plugins: [Markdown, Highlight],
    });

    deck.initialize();
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        <section>
          <h1>How React Renders</h1>
          <img src={reactLogo} width="200" />
        </section>
        <section>
          <h2>Source of Materials</h2>
          <ul>
            <li>
              <a href="https://blog.isquaredsoftware.com/">Awesome blog of Mark Erikson</a>
            </li>
            <img src={markErikson} width="100" />
          </ul>
        </section>
        <section>
          <h2>Motivation</h2>
          <blockquote cite="https://twitter.com/ag_dubs/status/557581734557282305">
            «Writing is a nature's way of letting you know how sloppy your thinking is»
          </blockquote>
          <p><a href="https://twitter.com/ag_dubs/status/557581734557282305">– Guindon –</a></p>
        </section>
        <section>
          <section>
            <h2>What is rendering?</h2>
          </section>
          <section>
            <h4>What is rendering?</h4>
            <ul>
              <li>
                It is a process when React asks your components to describe what they want to look like.
                <a href="https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#what-is-rendering">*</a>
              </li>
              <li>
                It is a process when react traverse your components tree, starting from the root, and calls render API
                to get «description» of UI they want to represent.
              </li>
            </ul>
          </section>
          <section>
            <h4>What components will be rendered?</h4>
            <ul>
              <li>Initial render: all components.</li>
              <li>Subsequent renders: components marked as needed to be updated.</li>
            </ul>
          </section>
          <section>
            <h4>How to describe UI</h4>
            <ul>
              <li>React.createElement(...)</li>
              <li>JSX</li>
              <ul className="fragment">
                <li>JSX will be transformed to React.createElement(...) calls</li>
                <li>React.createElement(...) returns JS object representing React element</li>
              </ul>
            </ul>
          </section>
          <section>
            <h4>Rendering example</h4>
            <CreateElement />
          </section>
        </section>
      </div>
    </div>
  );
};

export default Slides;
