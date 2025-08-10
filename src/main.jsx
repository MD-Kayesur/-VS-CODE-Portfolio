import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './routers/Router';
import MouseBurst from './routers/animation/MouseBurst';
import FluidCursor from './routers/animation/FluidCursor';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MouseBurst />
    <FluidCursor>

   <RouterProvider router={router} />
    </FluidCursor>
  </StrictMode>,
)
