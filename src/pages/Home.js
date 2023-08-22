import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export function Home() {
    return (
        <div className="homepage-wrapper">
            <div className="left-home">
                
                <div className="left-img">
                    <img src="Moon-wolf.jpg" alt=""/>
                    <h1>Welcome To FangList!</h1>
                </div>
                
            </div>

            <div className="right-home">
                <div className="media-points">
                    <h1>Follow Me on My Socials!</h1>

                    <div className="media-page">
                        <div className="icon">
                            <GitHubIcon />
                        </div>
                        <div className="text">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/CodeScribe92">Click to view my Github</a>
                        </div>
                    </div>

                    <div className="media-page">
                        <div className="icon">
                            <YouTubeIcon />
                        </div>
                        <div className="text">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCEa3KowX4mkAUWtA4CUgoYA">Click to view my Youtube</a>
                        </div>
                    </div>

                    <div className="media-page">
                        <div className="icon">
                            <LinkedInIcon />
                        </div>
                        <div className="text">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zachary-white-426828119/">Click to view my LinkedIn</a>
                        </div>
                    </div>

                    <div className="media-page">
                        <div className="icon">
                            <LiveTvIcon />
                        </div>
                        <div className="text">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/fndz2gaming">Click to view my Twitch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}