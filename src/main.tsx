import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SWRConfig } from 'swr';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SWRConfig 
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        onError: (error) => {
          console.error('SWR Global Error:', error);
        }
      }}
    >
      <App />
    </SWRConfig>
  </StrictMode>
);