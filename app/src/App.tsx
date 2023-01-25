import type { Component } from "solid-js";
import { type test } from "@elysia-test/server";

const App: Component = () => {
  const l: test = 5;

  return (
    <>
      <h1>Hello world! {l}</h1>
    </>
  );
};

export default App;
