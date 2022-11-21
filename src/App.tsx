import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { useTheme } from './app/hooks';
import router from './app/routes/route.component';

function App() {
   const {theme} = useTheme();
   return (
      <div style={{...theme as React.CSSProperties}}>
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
