import React from 'react';

import MyWorker from './MyWorker.worker';

// Example: Using workers natively, e.g. by using "postMessage()"
const myWorkerInstance: Worker = new MyWorker();
console.log('[App] MyWorker instance:', myWorkerInstance);
myWorkerInstance.postMessage('This is a message from the main thread!');

function App() {
  return (
    <div>
      <button onClick={()=>{console.log('test')}}>test that main thread is available</button>
    </div>
  );
}

export default App;
