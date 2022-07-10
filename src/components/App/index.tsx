import { h } from "tsx-dom";

import Counter from "../Counter";

const App = () => {
  return (
    <div>
      <h1>Alpine Framework</h1>
      <p>Using Alpine with TSX syntax</p>
      <Counter />
    </div>
  );
};

export default App;
