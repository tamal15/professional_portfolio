import React from 'react';
import './Skill.css'
import image1 from '../../../../images/html.png'

const Skill = () => {
    return (
        <div>

          <div className="skill container"> 
          <h1>My Skill</h1>
              <div className="row">
                  <div className="col-sm-12 col-md-6">
                        <div className="mh-skills-inner">
                               <div className="mh-professional-skill">
                                              <h3>Technical Skill</h3>
                                    <div className="each-skills">
                                      <div className="candidatos">
                                          <div className="parcial">
                                              <div className="info">
                                                  <div className="name">Javascript</div>
                                                  <div className="percentage-num">86%</div>
                                              </div>
                                              <div className="progressBar"> 
                                                <div className="percentagem" style={{width:"86%"}}></div>
                                              </div>
                                          </div>

                                      </div>




                                      <div className="candidatos">
                                          <div className="parcial">
                                              <div className="info">
                                                  <div className="name">Java</div>
                                                  <div className="percentage-num">46%</div>
                                              </div>
                                              <div className="progressBar"> 
                                                <div className="percentagem" style={{width:"86%"}}></div>
                                              </div>
                                          </div>

                                      </div>




                                      <div className="candidatos">
                                          <div className="parcial">
                                              <div className="info">
                                                  <div className="name">Javascript</div>
                                                  <div className="percentage-num">86%</div>
                                              </div>
                                              <div className="progressBar"> 
                                                <div className="percentagem" style={{width:"86%"}}></div>
                                              </div>
                                          </div>

                                      </div>




                                      <div className="candidatos">
                                          <div className="parcial">
                                              <div className="info">
                                                  <div className="name">Javascript</div>
                                                  <div className="percentage-num">86%</div>
                                              </div>
                                              <div className="progressBar"> 
                                                <div className="percentagem" style={{width:"86%"}}></div>
                                              </div>
                                          </div>

                                      </div>





                                      <div className="candidatos">
                                          <div className="parcial">
                                              <div className="info">
                                                  <div className="name">Javascript</div>
                                                  <div className="percentage-num">86%</div>
                                              </div>
                                              <div className="progressBar"> 
                                                <div className="percentagem" style={{width:"86%"}}></div>
                                              </div>
                                          </div>

                                      </div>




                                    </div>
                               </div>
                        </div>
                  </div>




                  {/* professional  */}

                  <div className="col-sm-12 col-md-6">
                 <div className="mh-professional-skills">
                     <h3>Professional Skills</h3>
                     <ul className="mh-professional-progress">
                            <li>
                                <div className="mh-progress mh-progress-circle data-progress"></div>
                                <div className="pr-skill-name">Communication</div>
                            </li>


                            <li>
                                <div className="mh-progress mh-progress-circle data-progress"></div>
                                <div className="pr-skill-name">Communication</div>
                            </li>

                            <li>
                                <div className="mh-progress mh-progress-circle data-progress"></div>
                                <div className="pr-skill-name">Communication</div>
                            </li>


                            <li>
                                <div className="mh-progress mh-progress-circle data-progress"></div>
                                <div className="pr-skill-name">Communication</div>
                            </li>

                            
                     </ul>
                 </div>
              </div>

              

              </div>




          </div>

        </div>
    );
};

export default Skill;