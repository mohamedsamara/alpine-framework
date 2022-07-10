import { h } from "tsx-dom";

const Counter = () => {
  return (
    <div
      class="flex flex-row justify-center items-center"
      x-data="{ count: 0 }"
    >
      <button
        class="bg-gray-200 hover:bg-gray-300 w-12 p-2 rounded-sm transition-all	duration-300"
        x-on:click="count++"
      >
        +
      </button>
      <span
        class="text-center min-w-fit w-12 mx-4 text-2xl font-medium"
        x-text="count"
      ></span>
      <button
        class="bg-gray-200 hover:bg-gray-300 w-12 p-2 rounded-sm transition-all	duration-300"
        x-on:click="count--"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
