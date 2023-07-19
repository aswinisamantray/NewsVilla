import './App.css';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import News from './components/News';
 import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
const  App =()=>{
  const pageSize=10;
  const apikey="83951c0e1b35448c95fd7924393c9e9a";
  // 11af2377a2834cb0915b6669c7e6d6eb
  const [progress, setProgress]=useState(0)
  
  const setProg=(progress)=>{
    setProgress(progress);
  }
  
    
    return (
      <>

     <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='green'
        progress={progress}
      />
        <Routes>
            <Route exact path='/general' element={<News setProgress={setProgress} pageSize={pageSize} apikey={apikey}/>}/>
           <Route  exact path="/business"  element={<News setProgress={setProgress} pageSize={pageSize}  apikey={apikey} country="us" key="business" category="business"/>}/>
           <Route  exact path='/entertainment'element={<News setProgress={setProgress} pageSize={pageSize}  apikey={apikey} country="us" key="entertainment" category="entertainment"/>}/>
           <Route  exact path='/technology'element={<News setProgress={setProgress} pageSize={pageSize}  apikey={apikey} country="us" key="technology" category="technology"/>}/>
           <Route  exact path='/sports'element={<News setProgress={setProgress} pageSize={pageSize}  apikey={apikey}country="us" key="sports" category="sports"/>}/>
          <Route  exact path='/health'element={<News setProgress={setProgress} pageSize={pageSize}  apikey={apikey} country="us" key="health" category="health"/>}/>
         </Routes>
       </BrowserRouter>
      </>

    )
  }

  export default App
