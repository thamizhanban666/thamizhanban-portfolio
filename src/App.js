import './App.css';
import Main from '../src/Components/Main/Main';
import MyProjectPage from '../src/Components/Projects/AllProjects/MyprojectPage';
import { ThemeProvider } from "@mui/system";
import muiTheme from "./theme";
import React, { useState, useEffect } from 'react';
import Loader from '../src/Components/Loading/Loading.js';
import useLocalStorage from 'use-local-storage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const MyContext = React.createContext();
const MyProvider = MyContext.Provider;

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useLocalStorage('theme'?'dark':'light')

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <MyProvider value={{theme,setTheme}}>
        <div className='bg' data-theme={theme}>
          {loading === true ? (
            <Loader />
          ) : (
                <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/projects' element={<MyProjectPage />} />
                </Routes>
          )
          }
        </div>
      </MyProvider>
    </ThemeProvider > 

  );
}

export default App;
