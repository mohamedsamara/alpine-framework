import { h } from "tsx-dom";

import Counter from "../Counter";

const App = () => {
  return (
    <div class="flex flex-col justify-center items-center h-screen">
      <h1 class="text-2xl font-semibold text-center">Alpine Framework</h1>
      <p class="text-lg text-gray-500 mt-2 mb-6 text-center">
        Using Alpine with TSX syntax
      </p>
      <Counter />
    </div>
  );
};

export default App;
