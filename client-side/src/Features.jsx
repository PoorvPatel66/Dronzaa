import React from "react";
import Featurep from "./props/featurep";
import Featurep2 from "./props/featurep2";

const Features = () => {
    return (
        <>
            <div className="main-div" id="feture">
                <div className="container">
                    <div className="title">
                        <div className="small-sep">
                            <div className="sep-left">

                            </div>
                            <div className="small-detils">
                                You Will Love It.
                            </div>
                            <div className="sep-left">

                            </div>
                        </div>
                        <h2>
                            How It Works
                        </h2>
                    </div>
                    <div className="main-features">
                        <div className="fline">
                            <Featurep2 img="assets/images/f1.png" title=" Controller" text="Take full control of your drone with an intuitive ontroller designed for precise navigation and ease of use."/>
                            
                            <Featurep2 img="assets/images/f2.png" title=" Fly Drone" text="Experience the thrill of flight with stable and responsive drone technology, perfect for beginners and pros alike."/>
                            
                            <Featurep2 img="assets/images/f3.png" title="Use Controller" text="Easily manage flight patterns and drone behavior with a user-friendly interface and ergonomic design."/>
                        </div>
                        <div className="mline">
                            <div className="how-drone">
                                <div className="how-it">
                                    <div className="drone-media">
                                        <img src="assets/images/drone-2.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fline">
                        
                            <Featurep img="assets/images/f4.png" title=" Use Battery" text="Power your drone with a long-lasting battery system that  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ensures extended flight time and reliability."/>

                            <Featurep img="assets/images/f5.png" title=" Play Video" text="Capture and playback stunning aerial footage from your drone’s. "/>

                            <Featurep img="assets/images/f1.png" title=" Control Camera" text="Adjust angles and zoom on the fly using real-time camera control for  shots from the sky."/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;