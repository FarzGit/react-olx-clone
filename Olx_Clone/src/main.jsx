import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { FirebaseContext } from './firebase/context.jsx';
import Context from './firebase/context.jsx';
// import {Firebase} from './firebase/config'
import PostContextProvider from './firebase/postContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostContextProvider >
      <Context>
      <App />
      </Context>
    </PostContextProvider>
  </React.StrictMode>
);
