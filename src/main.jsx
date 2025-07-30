import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './routers/Router';
import MouseBurst from './routers/animation/MouseBurst';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MouseBurst />
   <RouterProvider router={router} />
  </StrictMode>,
)
