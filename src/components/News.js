import React, {useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import '../News.css'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
const News =(props)=>{
  const [articles, setArticles]=useState([])
  const [loading, setLoading]=useState(true)
  const [page, setPage]=useState(1)
  const [pageSize,setPageSize]=useState(10)
  const [totalResults, setTotalResults]=useState(0)
  const [input,setInput]=useState('');

  let allArticles=[];
  
   const capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  const cap=capitalize(props.category);
  document.title=`NewsVilla-${cap}`;
  const updateNews=async()=>{
    props.setProgress(10);
do{
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url); //fetch API returns a promise 83951c0e1b35448c95fd7924393c9e9a
    let parsedData= await data.json();
    allArticles = [...allArticles, ...parsedData.articles];
    setTotalResults(parsedData.totalResults);
    setPage(page+1);
  }while(allArticles.length < 3000 && allArticles.length < totalResults)
    setArticles(allArticles);
    setLoading(false);
    props.setProgress(100);
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
    //     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${pageSize}`;
    //     let data = await fetch(url); //fetch API returns a promise
    //     let parsedData= await data.json();
    //     setArticles(parsedData.articles);
    //     setTotalResults(parsedData.totalResults);
    // };

    const searchTitle=(e)=>{
      setInput(e.target.value);
    }

    const filteredItems = articles && articles.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );

    const displayedContent=filteredItems?filteredItems:articles;

//  states can be changed without reloading the page but props can't be changed
 
    return (
      <div className='newsContainer'>
        <div className='newsBackground'><form action="" className="search-bar" method="get">
        <input type="text" placeholder="Search news..." onChange={searchTitle}/>
      </form>
      <h2 className='text-center' style={{marginTop:'60px' ,color:'white'}}>NewsVilla-{props.category==='general'?'Top Headliners':cap}</h2>
      </div>
      <div className="cardContainer">
        {loading && <Spinner/>}
        <div className="cards">
         {(!(loading) && displayedContent && displayedContent.map((element)=>{
                return <div className="card-design" key={element.id}>
                <Newsitem  title={element.title?element.title.slice(0,50)+"....":""} description={element.description?element.description.slice(0,100)+"....":""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
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
