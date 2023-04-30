import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () =>{



    return (
        <div className='home'>
   <Carousel>
<img className='slides' src="https://plus.unsplash.com/premium_photo-1661884973994-d7625e52631a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" alt="" />

<img src="https://plus.unsplash.com/premium_photo-1663011056778-2b987e47434a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className="slides" />
<img src="https://plus.unsplash.com/premium_photo-1663013675008-bd5a7898ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className="slides" />
<img src="https://plus.unsplash.com/premium_photo-1664301132849-f52af765df79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className="slides" />
<img src="https://plus.unsplash.com/premium_photo-1663013668741-5d280c6b801b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className="slides" />
	</Carousel>       
        </div>
    )
}

export default Home;