import './app.css';
import App from './App.svelte';
import './web-components/lit-items-renderer';

const app = new App({
  target: document.getElementById('app'),
})

export default app;
