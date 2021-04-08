import React from 'react';
import { ThemeProvider, loadTheme, createTheme } from '@fluentui/react';
import './App.css';
import Navigation from './nav';
import CardsSection from './card';
import Table from './table';


const myTheme = createTheme({
  palette: {
    themePrimary: '#f3050d',
    themeLighterAlt: '#fef5f5',
    themeLighter: '#fdd5d7',
    themeLight: '#fbb1b4',
    themeTertiary: '#f7666b',
    themeSecondary: '#f42229',
    themeDarkAlt: '#da040b',
    themeDark: '#b8040a',
    themeDarker: '#880307',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#8d86c8',
    neutralSecondary: '#6f67b7',
    neutralPrimaryAlt: '#544ba5',
    neutralPrimary: '#0c035e',
    neutralDark: '#292082',
    black: '#190f70',
    white: '#ffffff',
  }});
  
loadTheme(myTheme);

function App() {
  return (
      <ThemeProvider theme={myTheme}>
       <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm2 ms-xl2 p-0">
          
              <Navigation />
              
            </div>
            <div className="main-element ms-Grid-col ms-sm10 ms-xl10">
              <div>
                  <CardsSection />
              </div>
              <div className="ms-Grid-row">
                <Table />
              </div>
            </div>
          </div>
        </div>
     </ThemeProvider>
  );
}

export default App;