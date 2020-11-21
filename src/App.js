import React from 'react';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
// import Loader from './components/spinner';


function App() {
    return (
      <div className= "App loader">
     <Wrapper>
       <Header />
       <Main />
     </Wrapper>
      </div>
    );
}

export default App;
