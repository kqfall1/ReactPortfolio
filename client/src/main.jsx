<!-- Quinn Keenan, 301504914, COMP229-006 Assingment 1 --> 

import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client'; 
import './styles/index.css'; 
import App from './components/orchestration/App.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)