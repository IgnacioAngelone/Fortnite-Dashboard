/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import TemplateShop from './template-shop';

export const Index = () => {
     return (
         <TemplateShop />
     );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);