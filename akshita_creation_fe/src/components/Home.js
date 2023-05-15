import React from 'react';

// function Home(){
//     return <h1>Welcome to Akshita Creations</h1>
// }

const Home = (props)=> 
{
    console.log("props---",props);
return (
    <div>
<h1>Welcome to {props.title}</h1>
{props.children}
</div>
);
}
export default Home;