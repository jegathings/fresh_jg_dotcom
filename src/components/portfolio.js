import React from 'react';

export default (props) => {
    return (
        <div>
            <div className="styled_border">
                <h2>Broadway Tix</h2>
                <a href="https://quizzical-babbage-7129b3.netlify.app/" target="_blank"><img src="https://cooljg-broadway-tix.s3.amazonaws.com/broadwaytix.png" alt="broadway twx" /></a>
                <p>
                    A serverless crud app.  Serverless API hosted on serverless.com with DynamoDB persistence layer.  React frontend hosted on Netlifly.
                </p>
                <a href="https://github.com/jegathings/BroadwayTix_API" target="_blank">Serverless Code</a><br />
                <a href="https://github.com/jegathings/BroadwayTix_UI" target="_blank">UI Code</a><br />
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
                <h2>Brooklyn Cookin</h2>
                <a href="https://flamboyant-jones-5284c1.netlify.app/" target="_blank"><img src="https://cooljg-brooklyn-cookin.s3.amazonaws.com/brooklyncookin.png" alt="brooklyn cookin" /></a>
                <p>
                    I love to cook!  Helps keep track of my favorite, goto recipes.  Netlifly frontend.  Heroku backend with MongoDB persistence layer.
                </p>
                <a href="https://github.com/jegathings/brooklyncookin_backend" target="_blank">Serverside Code</a><br />
                <a href="https://github.com/jegathings/brooklyncookin_frontend" target="_blank">UI Code</a><br />
            </div>
            {/* <div className="styled_border">
                <h2>Dad Jokes</h2>
                <a href="https://quirky-knuth-bf45cb.netlify.app/" target="_blank"><img src="https://cooljg-dad-jokes.s3.amazonaws.com/dadjokes.png" alt="dad jokes" /></a>
                <p>
                    A zaney team project I did with <a href="https://www.linkedin.com/in/will-padraig-cannon/">Will</a> and <a href="https://www.linkedin.com/in/ian-galleher/">Ian</a>.  Netlifly frontend.  Heroku backend with MongoDB persistence layer.
                </p>
                <a href="https://github.com/jegathings/dadjokes_backend" target="_blank">Serverside Code</a><br />
                <a href="https://github.com/jegathings/dadjokes_frontend" target="_blank">Frontend Code</a><br />
            </div> */}
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