import './App.css';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import News from './components/News';
 import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
const  App =()=>{
  const pageSize=30;
  const [progress, setProgress]=useState(0)
  const [country,setCountry]=useState('')
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
           <Route exact path='/' element={<News setProgress={setProgress} pageSize={pageSize} />}/>
          <Route exact path='/general' element={<News setProgress={setProgress} pageSize={pageSize} />}/>
           <Route  exact path="/business"  element={<News setProgress={setProgress} pageSize={pageSize}   country="us" key="business" category="business"/>}/>
           <Route  exact path='/entertainment'element={<News setProgress={setProgress} pageSize={pageSize}   country="us" key="entertainment" category="entertainment"/>}/>
           <Route  exact path='/technology'element={<News setProgress={setProgress} pageSize={pageSize}   country="us" key="technology" category="technology"/>}/>
           <Route  exact path='/sports'element={<News setProgress={setProgress} pageSize={pageSize}  country="us" key="sports" category="sports"/>}/>
          <Route  exact path='/health'element={<News setProgress={setProgress} pageSize={pageSize}   country="us" key="health" category="health"/>}/>
         </Routes>
       </BrowserRouter>
      </>

    )
  }

  export default App
