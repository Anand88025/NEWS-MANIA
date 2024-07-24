
// //  const Newsitems = ({title,description,src,url}) => {
// //    return (
// //      <div>
// //        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{maxWidth:"345px"}}>
// //    <img src={src} className="card-img-top" alt="..."/>
// //    <div className="card-body">
// //      <h5 className="card-title">{title}</h5>
// //      <p className="card-text">{description}</p>
// //      <a href={url} className="btn btn-primary">read More</a>
// //    </div> 
// //  </div>
// //      </div>
// //    )
// //  }

// //  export default Newsitems;




// // const defaultImage = "";
// //  const Newsitems = ({ title, description, src, url }) => {
// //      return (
// //        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
// //          <img src={src || defaultImage} className="card-img-top" alt={title || "News image"} />
// //          <div className="card-body">
// //            <h5 className="card-title">{title}</h5>
// //            <p className="card-text">{description}</p>
// //            <a href={url} className="btn btn-primary">Read More</a>
// //          </div>
// //        </div>
// //      );
// //    };
// //    export default Newsitems;
  


// import { useState, useEffect } from 'react';

// const Newsitems = ({ title, description, src, url }) => {
//     const [image, setImage] = useState(src);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         if (!src) {
//             setLoading(true);
//             fetch('http://localhost:5173/generate-image', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ headline: title }),
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     setImage(data.imageUrl);
//                     setLoading(false);
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching image:', error);
//                     setLoading(false);
//                 });
//         }
//     }, [src, title]);

//     return (
//         <div className="card bg-dark text-light mb-3" style={{ maxWidth: '345px' }}>
//             <img
//                 src={loading ? 'https://yourdomain.com/path/to/spinner.gif' : image}
//                 className="card-img-top"
//                 alt={title || 'News image'}
//             />
//             <div className="card-body">
//                 <h5 className="card-title">{title}</h5>
//                 <p className="card-text">{description}</p>
//                 <a href={url} className="btn btn-primary">
//                     Read More
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Newsitems;




// import news from '../assets/news.jpg';
import image from '../assets/news3.jpg';
const Newsitems = ({ title, description, src, url }) => {
    console.log(src); // Add this line to check the src prop

    return (
        <div className="card bg-dark text-light mb-3 mx-3 my-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            {/* <img src={src || loadingSpinner} className="card-img-top" alt={title || "News image"} /> */}
            <img src={src || image} className="card-img-top"  alt={title || "News image"}  />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,100)}</h5>
                <p className="card-text">{description?description.slice(0,90):"Read More"} </p>
            
    <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
};

export default Newsitems;
