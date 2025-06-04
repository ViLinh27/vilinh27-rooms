import React from 'react';
import '../App.css';
function MyCV(){
    return(
        <>
        <div className="App">
            <div className="MyCV-Container">
                <div className="MyCV">
                    <div className="MyCV-header">
                        <h1>Linh Nguyen</h1>
                        <h2>Web Developer | Illustrator</h2>
                    </div>
                    <div className="MyCV-Summary">
                        <h3>Summary</h3>
                        <p>
                            Results Driven-
                        </p>
                    </div>
                    <div className="MyCV-Skills">
                        <h3>Technical Skills</h3>
                        <table>
                        </table>
                    </div>
                    <div className="MyCV-Experience">
                        <h3>Professional Experience</h3>
                        <div className="MyCV-Experience-Job">
                            <h4>Position</h4>
                            <h5>Org</h5>
                            <h6>Date</h6>
                            <ul>
                                <li>
                                    <p>description point</p>
                                </li>
                                <li>
                                    <p>description point</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="MyCV-Projects">
                        <h3>Relevant Projects</h3>

                    </div>
                    <div className="MyCV-Education">
                        <h3>Education</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default MyCV;