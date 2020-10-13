import React from 'react';

import CodeEditor from '../../components/code-editor';

const RenderBatchingPseudocode = () => {
  const code = `
    const internalEventHandler = (event) => {
      const batchedUpdatesQueue = [];
      const userProvidedEventHandler = findUserProvidedEventHandler(event);

      unstable_batchedUpdates(() => {
        // Any updates, queued inside "userProvidedEventHandler",
        // will be pushed into "batchedUpdatesQueue".
        userProvidedEventHandler(event);
      });

      renderWithQueuedStateUpdates(batchedUpdatesQueue);
    };
  `;

  return (
    <>
      <h1>Render Batching: Pseudocode</h1>
      <CodeEditor value={code} executable={false} />
    </>
  );
};

export default RenderBatchingPseudocode;
