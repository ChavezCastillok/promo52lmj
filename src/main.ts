import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    school: "Liceo Militar Jauregui",
  },
});

export default app;
