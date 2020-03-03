import React from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';



const user = {
  name: 'Chris on Code',
  location: 'Las Vegas',
  foodType: 'Everything',
  age: 28,
  likes: 'Coding into the wee hours of the morning',
  twitterUsername: 'chrisoncode',
  avatar:
    'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
};

const url = `https://twitter.com/${user.twitterUsername}`;

function App() {
  return (
    <div className="App">
      <div className="user-deets">
        <a href={url}><img src={user.avatar} alt={user.name}/></a>
        <h3><a href={url}>{user.name}</a></h3>
        <p>
          <strong>Location</strong> {user.location}
          <strong>Eats</strong> {user.foodType}      
          <strong>Age</strong> {user.age}
          <strong>Likes</strong> {user.likes}
          <strong>Twitter</strong> <a href={url}>@{user.twitterUsername}</a>
        </p>
      </div>
      

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
