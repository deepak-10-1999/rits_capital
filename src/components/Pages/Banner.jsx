import React from 'react';
import { Link } from 'react-router-dom';
// import img1 from '/images/b1.jpeg'
// import img2 from '../../assets/images/icon/icon-01.png'
// import img3 from '../../assets/images/layouts/avt-01.png'


function Banner() {
    return (
        <section className="banner">
                <div className="shape right"></div>
                <div className="container big">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="banner__left">
                                <div className="block-text">
                                    <h2 className="heading">Start your MaAvatar
                                    journey by creating
                                    your reslisitc avatar </h2>
                                    {/* <span className="s1 arlo_tm_animation_text_word">NFTs</span> */}
                                    <p className="desc">Using a camera mode will give you more clarity, although you have an option to create from photos too.				
				</p>

                                    <Link to="/contact" className="action-btn"><span>Explore Now</span></Link>
                                    <Link to="/contact" className="action-btn"><span>Create NFT's</span></Link>
                                </div>
                                

                                <div className="pay">
                                    <h6>We are Monteno NFT</h6>

                                    <div className="list">
                                        <p>We accept:</p>

                                        <ul>
                                            <li><Link to="#"><span className="icon-logo-01"></span></Link></li>
                                            <li><Link to="#"><span className="icon-logo-02"></span></Link></li>
                                            <li><Link to="#"><span className="icon-logo-03"></span></Link></li>
                                            <li><Link to="#"><span className="icon-logo-04"></span></Link></li>
                                            <li><Link to="#"><span className="icon-logo-05"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span></Link></li>
                                            <li><Link to="#"><span className="icon-logo-06"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">

                            <div className="banner__right">
                                <div className="image">
                                    <img src="/images/b1.jpeg" alt="cyfonii" />
                                </div>

                                <div className="price">
                                    <div className="icon">
                                        <img src="/images/b1.jpeg" alt="cyfonii" />
                                    </div>
                                    <div className="content">
                                        <p>Current Bid</p>
                                        <h5>2.26 ETH</h5>
                                    </div>
                                </div>

                                <div className="owner">
                                    <div className="image">
                                        <img src="/images/b1.jpeg" alt="cyfonii" />
                                    </div>
                                    <div className="content">
                                        <h5>Leslie Alexander</h5>
                                        <p>@leslie754</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Banner;