import { createRoot } from 'react-dom/client';
import { App } from '@/App';
import '@assets/main.css';

createRoot(document.querySelector('#app') as HTMLElement).render(<App />);
