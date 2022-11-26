import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from './Routes/AppRoutes';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <BrowserRouter>
                <Provider store={store}>
                        <AppRoutes />
                        
                </Provider>
        </BrowserRouter>

);
reportWebVitals();
