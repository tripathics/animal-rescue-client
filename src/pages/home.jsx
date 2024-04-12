import React from "react";
import Nav from "../component/nav";
import Banner from "../component/banner";
import Post from "../component/post";

const Home = () => {
    return (<>
        <Nav />
        <Banner />
        <div className='post'>
            <Post />
            <Post />
            <Post />

        </div>
    </>
    )
}

export default Home;
