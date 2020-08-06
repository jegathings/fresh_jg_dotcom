import React from 'react';

export default (props) => {
    return (
        <div>
            <p className="styled_border">
                Developing React-Express-NOSQL apps is a fun way to learn new stuff and make good use of free time.  Here are a few fun projects I am currently working on.
            </p>
            <div className="styled_border">
                <h2>Brooklyn Cookin</h2>
                <a href="https://master.d1xe2ybhvvvdvj.amplifyapp.com/" target="_blank"><img src="https://cooljg-dotcom.s3.amazonaws.com/WhatsCookin.png" alt="brooklyn cookin" /></a>
                <p>
                    I love to cook!  Helps keep track of my favorite, goto recipes.  React-Amplify frontend.  Lambda-DynamoDB backend.  
                </p>
                <p>
                    Test user/password is superfreshwhatscookin@gmail.com/Superfresh.
                </p>
                <a href="https://github.com/jegathings/whatscookin_api" target="_blank">Serverside Code</a><br />
                <a href="https://github.com/jegathings/whatscookin_ui" target="_blank">UI Code</a><br />
            </div>
            <div className="styled_border">
                <h2>Bookmark'd</h2>
                <a href="https://cranky-shirley-dab4d5.netlify.app/" target="_blank"><img src="https://cooljg-bookmarkd.s3.amazonaws.com/bookmarkd.png" alt="bookmard" /></a>
                <p>
                    A collaboration with <a href="https://www.linkedin.com/in/philipmayojr/">Phil</a>.  Keeps track of those pesky bookmarks.  Netlifly frontend.  Heroku backend with MongoDB persistence layer.
                </p>
                <a href="https://github.com/jegathings/bookmarkd_backend" target="_blank">Serverless code</a><br />
                <a href="https://github.com/jegathings/bookmarkd_frontend" target="_blank">UI Code</a><br />
            </div>
            <div className="styled_border">
                <h2>Cool JG Dot Com</h2>
                <a href="https://flamboyant-brahmagupta-cc4096.netlify.app/" target="_blank"><img src="https://cooljg-dotcom.s3.amazonaws.com/cooljgdotcom.png" alt="dad jokes" /></a>
                <p>
                    My personal website.  React frontend.
                </p>
                <a href="https://github.com/jegathings/cool-jg-dotcom" target="_blank">Code</a> 
            </div>
        </div>
    );
};