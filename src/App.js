import './App.css';
import Main from '../src/Components/Main/Main';
import { ThemeProvider } from "@mui/system";
import muiTheme from "./theme";
import React, { useState, useEffect } from 'react';
import Loader from '../src/Components/Loading/Loading.js';
import useLocalStorage from 'use-local-storage'

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
            <Main />
          )
          }
        </div>
      </MyProvider>
    </ThemeProvider > 

  );
}

export default App;
