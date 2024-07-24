



//  import { useEffect, useState } from "react";
//  import Newsitems from "./Newsitems";

//  const Newsboard = () => {
//      const [articles, setArticles] = useState([]);

//      useEffect(() => {
//        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`;
//  fetch(url) .then((response) => response.json()) .then((data) =>{ console.log(data); setArticles(data.articles)});
//      }, []);


//      return (
//          <div>
//              <h2 className="text-center">
//                  Latest <span className="badge bg-danger">News</span>
//              </h2>
//              <div className="d-flex flex-wrap justify-content-center">
//                  {articles.map((news, index) => {
//                      return (
//                          <Newsitems
//                              key={index}
//                              title={news.title}
//                              description={news.description}
//                              src={news.urlToImage}
//                              url={news.url}
//                          />
//                      );
//                  })}
//              </div>
//          </div>
//      );
//  };

// export default Newsboard;




import { useEffect, useState } from "react";
import Newsitems from "./Newsitems";

const Newsboard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setArticles(data.articles);
            });
    }, [category]);

    return (
        <div>
            <h2 className="text-center"> Latest <span className="badge bg-danger">News</span>
            </h2>
            <div className="d-flex flex-wrap justify-content-center">
                {articles.map((news, index) => {
                    return (
                        <Newsitems
                            key={index}
                            title={news.title}
                            description={news.description}
                            src={news.urlToImage}
                            url={news.url}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Newsboard;
