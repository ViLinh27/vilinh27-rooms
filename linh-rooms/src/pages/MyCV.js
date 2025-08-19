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
                    {/* <div className="MyCV-Summary">
                        <h3>Summary</h3>
                        <p>
                            Results Driven-
                        </p>
                    </div> */}
                    <div className="MyCV-Skills">
                        <h3>Technical Skills</h3>
                        <table>
                            <tr>
                                <th>Frontend Development</th>
                                <th>Backend Development</th>
                                <th>Design</th>
                                <th>Miscellaneous</th>
                            </tr>
                            <tr>
                                <td>
                                    React JS
                                </td>
                                <td>
                                    C#
                                </td>
                                <td>
                                    Figma
                                </td>
                                <td>
                                    Git
                                </td>
                            </tr>
                            <tr>
                                <td>HTML</td>
                                <td>Java</td>
                                <td>Adobe Illustrator</td>
                                <td>French Fluency</td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td>Python</td>
                                <td>Adobe Photoshop</td>
                                <td>Vietnamese Fluency</td>
                            </tr>
                            <tr>
                                <td>Javascript</td>
                                <td>SQL</td>
                                <td>Axure RP</td>
                                <td>Microsoft Office Suite</td>
                            </tr>
                            <tr>
                                <td>Angular (foundational)</td>
                                <td>Node.js</td>
                                <td>Clip Studio Paint</td>
                                <td>UX Principles</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Swift</td>
                                <td>Adobe Animate</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <div className="MyCV-Experience">
                        <h3>Professional Experience</h3>
                        {/*nopality */}
                        <div className="MyCV-Experience-Job">
                            <h4>Content Writer</h4>
                            <h5>Nopality Magazine</h5>
                            <h6>July 2025 - Present</h6>
                            <ul>
                                <li>
                                    <p>Provide coverage for artistic events and the creative industries involving young Asian American talents in Texas.</p>
                                </li>
                                <li>
                                    <p>Expand content subject coverage to bring in new reader audiences.</p>
                                </li>
                            </ul>
                        </div>
                        {/*Happy Mercs */}
                        <div className="MyCV-Experience-Job">
                            <h4>Animator</h4>
                            <h5>Happy Mercs</h5>
                            <h6>New York City</h6>
                            <h6>Sep 2024 - Oct 2024</h6>
                            <h6>New York City</h6>
                            <h6>Oct 2018 - Jan 2019</h6>
                            <ul>
                                <li>
                                    <p>
                                        Presented constructive feedback on colleagues' assigned animation clips, actively participated in brainstorming sessions to refine pilot project concepts.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Collaborated with on remote team of 8 people to develop cohesive animation sequences that seamlessly integrate with pilot trailer.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Delivered high-quality 2D character animations with a frame rate of 24 fps, ensuring fluid movement by industry standard.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        {/* CIP Chicago */}
                        <div className="MyCV-Experience-Job">
                            <h4>Web Developer | Web Designer</h4>
                            <h5>Council of International Programs Chicago</h5>
                            <h6>Chicago</h6>
                            <h6>Mar 2023 - Jun 2023</h6>
                            <ul>
                                <li>
                                    <p>
                                        Conducted competitive analysis of 6 industry leading websites, indentifying 3 key design trends and best practices directly applicable to organization goals.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Executed a complete overhaul of the organization's website, following new branding guidelines from the supervisor, resulting in a 20% increase in organic website traffic and a 15% boost in conversion rates.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Analyzed and evaluated potential international talent based on supervisor criteria, resulting in a 30% increase in the number of qualified candidates for consideration.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        {/* HUGS Living (formerly HUGS international) */}
                        <div className="MyCV-Experience-Job">
                            <h4>Frontend Web Developer</h4>
                            <h5>HUGS Living (formerly HUGS International)</h5>
                            <h6>San Diego</h6>
                            <h6>Feb 2022 - May 2022</h6>
                            <ul>
                                <li>
                                    <p>
                                        Developed responsive website pages adhering to W3C standards and cross-browser compatibility best practices.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Successfully fixed high severity bugs as needed by the product manager, ensuring more efficient code review.
                                    </p>
                                </li>
                                 <li>
                                    <p>
                                        Integrated frontend with backend ensuring smooth data flow between user interface and server-side logic with guidance from backend team.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        {/*Superworld */}
                        <div className="MyCV-Experience-Job">
                            <h4>SuperWorld</h4>
                            <h5>Frontend Web Developer</h5>
                            <h6>San Francisco</h6>
                            <h6>Jan 2021 - Jun 2021</h6>
                            <ul>
                                <li>
                                    <p>
                                        Troubleshooted React and Javascript errors in organization's website application, leading to a smoother user experience.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Navigated series of iterative design tests on application page sections to meet evolving supervisor requirements, guided closely UX team, resulting in 20% increase in user engagement metrics.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Collaborated with design team to seamlessly integrate new branding elements into web application sections, resulting in a 10% improvement in overall user experience.
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="MyCV-Projects">
                        <h3>Relevant Projects</h3>

                        <h4>Developer & Designer</h4>
                        <h5>Millicent Lost Her Eye - Visual Novel Game</h5>
                        <p>Designed and built over 20 interactive decision paths, applying user-centered design principles to innovate
gameplay flow.</p>
                        <p>Utilized Adobe Creative Suite to create compelling visual assets, prototyping, testing, and iterating for optimal
user experience.</p>

                        <h4>UX Researcher</h4>
                        <h5>PeezyFind - Mobile UX App</h5>
                        <p>Created comprehensive user flows, wireframes, and prototypes; conducted usability tests to refine navigation
and enhance interface clarity, improving user satisfaction.</p>
                        <p>Applied a keen eye for typography and layout to create clear and intuitive designs for a mobile platform.</p>

                        <h4>UX Researcher</h4>
                        <h5>Rouyn Noranda UX Study – (Municipal UX Redesign and Graduate Project)</h5>
                        <p>
                            Conducted in-depth user interviews and heuristic evaluations, delivering actionable redesign recommendations
that improved municipal website usability for thousands of citizens.
                        </p> 
                    </div>
                    <div className="MyCV-Education">
                        <h3>Education</h3>
                        <h4>
                            DePaul University
                        </h4>
                        
                        <p>
                            M.S. - Computer Science, Human Computer Interaction Concentration    
                        </p>
                        <p>
                            Chicago, IL    
                        </p>

                        <h4>
                            Columbia College Chicago
                        </h4>

                        <p>
                            B.A. - Cinema Arts and Sciences, Animation Concentration
                        </p>

                        <p>
                            Chicago, IL
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default MyCV;