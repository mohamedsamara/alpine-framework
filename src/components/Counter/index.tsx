import { h } from "tsx-dom";

const Counter = () => {
  return (
    <div x-data="{ count: 0 }">
      <button x-on:click="count++">+</button>
      <span x-text="count"></span>
      <button x-on:click="count--">-</button>
    </div>
  );
};

export default Counter;
