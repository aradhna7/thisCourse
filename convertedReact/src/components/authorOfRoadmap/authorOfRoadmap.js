import React, {Component} from "react"
import "./authorOfRoadmap.css";

class AuthorOfRoadmap extends Component {
    render() {
        return (
            <div className="authorroadmap container col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="customstyle_author">
                <div className="cover-photo"><br/>
                    <img
                        src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                        className="profile"></img>
                </div>
                <div className="profile-name">
                    <strong>Larson Reever</strong>
                </div>
                <p className="about-profile">
                    I am the Vice President @ *** Solutions. | Technology Expert | Author | Speaker
                    | Small &amp; Medium Business IT Support - We founded ***IT Solutions in 2007 to
                    provide IT services
                </p>
                {/* <button className="follownow-btn">Follow</button> */}
                <div className="col-sm-4 col-md-4  col-lg-3 item social">
                                <a href="#" className="fb-col">
                                    <i className="icon ion-social-facebook"></i>
                                </a>
                                <a href="#"className="tw-col">
                                    <i className="icon ion-social-twitter"></i>
                                </a>
                                <a href="#" className="lin-col">
                                    <i className="icon ion-social-linkedin"></i>
                                </a><a href="#" className="ins-col">
                                    <i className="icon ion-social-instagram"></i>
                                </a>
                              
                    </div>
                <p className="heading">WORK</p>
                <p className="answer">Full Stack Devloper at CA</p>
                <p className="heading">LOCATION</p>
                <p className="answer">San Francisco</p>
                <p className="heading">EDUCATION</p>
                <p className="answer">M.Tech</p>
                <p className="heading">JOINED</p>
                <p className="answer">July 12, 2019</p>
                <br /></div></div>
        );
    }
}

export default AuthorOfRoadmap;