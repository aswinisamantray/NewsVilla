import React, {useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import '../News.css'
import PropTypes from 'prop-types'

const News =(props)=>{

  const apikey=process.env.REACT_APP_API_KEY;
  // const apikey='11af2377a2834cb0915b6669c7e6d6eb';
  const [articles, setArticles]=useState([])
  const [loading, setLoading]=useState(true)
  const [page, setPage]=useState(1)
  const [pageSize,setPageSize]=useState(10)
  const [totalResults, setTotalResults]=useState(0)
  const [input,setInput]=useState('');

  let allArticles=[];
  const newsMap=new Map();
   const capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  const cap=capitalize(props.category);
  document.title=`NewsVilla-${cap}`;
  const updateNews=async()=>{
    props.setProgress(10);
    do{
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}&sortBy=popularity`;
      let data = await fetch(url);
      let parsedData= await data.json();
      allArticles = [...allArticles,...parsedData.articles];
      setArticles(allArticles);
      setTotalResults(parsedData.totalResults);
      setPage(page+1);
      setPageSize(pageSize+1);
    }
    while(allArticles.length < 3000 && allArticles.length < totalResults)
      setArticles(allArticles);
      props.setProgress(100);
      setLoading(false);
  }
  // eslint-disable-next-line
  useEffect(()=>{
    updateNews();
    const handleKeyPress=(event)=>{
      if(event.key === 'Escape'){
        window.history.back();
      }
    }
    window.addEventListener('keydown', handleKeyPress);
   },[])
   
    // const handlePrevclick= async()=>{
    //   setPage(page-1);
    //     updateNews();
    //  }
      
  
    //  const handleNextclick= async()=>{
    //   setPage(page+1);
    //     updateNews();
    // }
    // const fetchMoreData = async() => {
    //     console.log("cdm")
    //     setPage(page+1);
    //     setPageSize(pageSize+5);
    //     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apikey}&page=${page+1}&pageSize=${pageSize}`;
    //     let data = await fetch(url); //fetch API returns a promise
    //     let parsedData= await data.json();
    //     setArticles(parsedData.articles);
    //     setTotalResults(parsedData.totalResults);
    // };

    const filteredItems = articles && articles.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );

    const displayedContent=filteredItems?filteredItems:articles;
 
    return (
      <div className='newsContainer'>
        <div className='newsBackground'>
      </div>
      <form action="" className='search-bar' method='get'>
            <input type="text" placeholder="Search news..." value={input} name="q" onChange={(e)=>{setInput(e.target.value);}}/>
          </form>
        <h2 className='text-center' style={{marginTop:'60px' ,color:'white'}}>NewsVilla-{props.category==='general'?'Top Headliners':cap}</h2>
      <div className="cardContainer">
        {loading && <Spinner/>}
        <div className="cards">
         {(!(loading) && displayedContent && displayedContent.map((element)=>{
            if(newsMap[element.description]!==true){
              newsMap[element.description]=true;
              return <div className="card-design" key={element.id}>
              <Newsitem  title={element.title?element.title.slice(0,50)+"....":""} description={element.description?element.description.slice(0,100)+"....":""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            }
            else if(newsMap[element.description]===true){
              console.log('Element is visited');
            }

        }))} 
        </div>
        </div>       
      </div>
    )

  }

  News.defaultProps={
    country: "in",
    pageSize: 10,
    category: 'general'
  }
  News.propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

export default News
