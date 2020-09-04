import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';


function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post 
        // key={id}
        profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        message="Wow this works!"
        timestamp="This is a timestamp"
        username="ApolloDJ"
        image="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg" 
      />
      <Post 
        // key={id}
        profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        message="Wow this works!"
        timestamp="This is a timestamp"
        username="ApolloDJ"
        image="" 
      />
    </div>
  );
}

export default Feed;
