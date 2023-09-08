import React from 'react';
import ReactDOM from 'react-dom/client';
import MyModal from './modal/MyModal';
import './modal/myModal.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyModal />
  </React.StrictMode>
);
