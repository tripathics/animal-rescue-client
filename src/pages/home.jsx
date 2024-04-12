import React, { useState } from 'react';
import Nav from "../component/nav";
import Banner from "../component/banner";
import Post from "../component/post";
import PostDisplay from "../component/postDisplay";

const Home = () => {
    const [locationData, setLocationData] = useState(null);

    const handleLocationData = (locationName, photo) => {
      setLocationData({ locationName, photoUrl: URL.createObjectURL(photo) });
    };
    return (<>
        <Nav />
        <Banner />
        <div className='post'>
            <Post />
            <Post />
            <Post />
        </div>
        <div>
      <Post onLocationSubmit={handleLocationData} />
      {locationData && <PostDisplay {...locationData} />}
    </div>
    </>
    
    )
}

export default Home;
