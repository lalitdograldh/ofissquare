import React from 'react'
import Team from "../images/team.png";
const AboutWorkEnvironments = () => {
    const itemsData = [
        {
            image: Team,
            heading: 'Cody Fisher',
            desc: "Co-Founder & CEO",
        },
        {
            image: Team,
            heading: 'Cody Fisher',
            desc: "Co-Founder & CEO",
        },
        {
            image: Team,
            heading: 'Cody Fisher',
            desc: "Co-Founder & CEO",
        },
        {
            image: Team,
            heading: 'Cody Fisher',
            desc: "Co-Founder & CEO",
        },
        {
            image: Team,
            heading: 'Cody Fisher',
            desc: "Co-Founder & CEO",
        },

    ];
    return (
        <>
            <div class="environments">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h2>We create powerful work<br /> environments</h2>
                            <ul>
                                {
                                    itemsData.map((item, index) => (
                                        <li key={index}>
                                            <div class="box">
                                                <img src={item.image} />
                                                <p class="mb-0"><b>{item.heading}</b></p>
                                                <span>{item.desc}</span>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutWorkEnvironments