import React from "react";

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';

export function Contact() {
    return (
        <div className="content-page-wrapper">
            <div className="left-side">
                <div className="img-wrapper">
                    <img src="./rose-wolf.jpg" alt="" />
                </div>
            </div>

            <div className="right-side">
                <div className="contact-bullet-hits">
                    <h1>Contact Me!😁</h1>

                    <div className="bullet-section">
                        <div className="icon">
                            <PhoneIcon />
                        </div>
                        <div className="text">
                            904-445-1364
                        </div>
                    </div>

                    <div className="bullet-section">
                        <div className="icon">
                            <EmailIcon />
                        </div>
                        <div className="text">
                            zach.white.1992@gmail.com
                        </div>
                    </div>

                    <div className="bullet-section">
                        <div className="icon">
                            <MapIcon />
                        </div>
                        <div className="text">
                            Jacksonville, FL
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}