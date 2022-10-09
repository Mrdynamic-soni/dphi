import React from 'react';
import icon1 from '../assests/icon1.svg';
import icon3 from '../assests/icon3.svg';
import icon4 from '../assests/icon4.svg';
import Robot from '../assests/Robot.svg';
const Whyparticipate = () => {
    return (
        <>
            <div className='px-3 mx-5'>
                <h1 style={{ fontWeight: "650" }} className='text text-center py-5'> Why participate in <span style={{ color: "green", fontWeight: "650" }}>AI Challenges?</span></h1>
                <div>
                    <div className="row">
                        <div className="col py-5">
                            <div style={{backgroundColor: "#F8F9FD",  width:"35rem"}} className="card mx-5 px-2 py-5 rounded-4">
                                <img height ={50} width={70} src={icon1} className="img" alt="icon1"/>
                                    <div className="card-body">
                                        <h5 className="skills">Prove Your Skills</h5>
                                        <p className="skilldetail">Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col py-5">
                        <div style={{backgroundColor: "#F8F9FD",  width:"35rem"}} className="card mx-5 px-2 py-5 rounded-4">
                                <img height ={35} width={80} src={icon4} className="img" alt="icon1"/>
                                    <div className="card-body">
                                        <h5 className="skills">Learn from community</h5>
                                        <p className="skilldetail">One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</p>
                                        
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col py-5">
                            <div style={{backgroundColor: "#F8F9FD",  width:"35rem"}} className="card mx-5 px-2 py-5 rounded-4">
                                <img height ={50} width={70} src={Robot} className="img" alt="icon1"/>
                                    <div className="card-body">
                                        <h5 className="skills">Challenge Yourself</h5>
                                        <p className="skilldetail">There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>
                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col py-5">
                        <div style={{backgroundColor: "#F8F9FD",  width:"35rem"}} className="card mx-5 px-2 py-5 rounded-4">
                                <img height ={50} width={70} src={icon3} className="img" alt="icon1"/>
                                    <div className="card-body">
                                        <h5 className="skills">Earn recongnition</h5>
                                        <p className="skilldetail">You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>
                                        
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whyparticipate