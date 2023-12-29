import React from 'react'
import AboutImg from "../images/about.png";
import Icon from "../images/Icon.png";
const AboutWorkspaces = () => {
    const itemsData = [
        {
            icon: Icon,
            heading: 'Space',
            desc: "We have worked hard to create a refreshing work environment",
            image: AboutImg,
        },
        {
            icon: Icon,
            heading: 'Services',
            desc: "We have worked hard to create a refreshing work environment",
            image: AboutImg,
        },
        {
            icon: Icon,
            heading: 'Community',
            desc: "We have worked hard to create a refreshing work environment",
            image: AboutImg,
        },
    ];
    return (
        <>
            <section class="bepower">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h2>We believe in the power of<br /> great workspaces</h2>
                        </div>
                        {
                            itemsData.map((item, index) => (
                                <div class="col-md-4 mt-4">
                                    <div class="box text-center" key={index}>
                                        <span><img src={item.icon} /></span>
                                        <h5>{item.heading}</h5>
                                        <p>{item.desc}</p>
                                        <img src={item.image} />
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutWorkspaces