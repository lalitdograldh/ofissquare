import React from 'react'
import Ellipse1 from "../images/team.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const AboutTrustedCompanies = () => {
    const itemsData = [
        {
            imgsrcEllipse1: Ellipse1,
            desc: "Has a tastefully done interior and is kept delightfully clean",
            name: 'Wade Warren',
            dept: 'Marketing Coordinator',
        },
        {
            imgsrcEllipse1: Ellipse1,
            desc: "Has a tastefully done interior and is kept delightfully clean",
            name: 'Wade Warren',
            dept: 'Marketing Coordinator',
        },
        {
            imgsrcEllipse1: Ellipse1,
            desc: "Has a tastefully done interior and is kept delightfully clean",
            name: 'Wade Warren',
            dept: 'Marketing Coordinator',
        },
        {
            imgsrcEllipse1: Ellipse1,
            desc: "Has a tastefully done interior and is kept delightfully clean",
            name: 'Wade Warren',
            dept: 'Marketing Coordinator',
        },
        {
            imgsrcEllipse1: Ellipse1,
            desc: "Has a tastefully done interior and is kept delightfully clean",
            name: 'Wade Warren',
            dept: 'Marketing Coordinator',
        },
        {
            imgsrcEllipse1: Ellipse1,
            desc: "Has a tastefully done interior and is kept delightfully clean",
            name: 'Wade Warren',
            dept: 'Marketing Coordinator',
        },
        {
            imgsrcEllipse1: Ellipse1,
            desc: "Has a tastefully done interior and is kept delightfully clean",
            name: 'Wade Warren',
            dept: 'Marketing Coordinator',
        },
        {
            imgsrcEllipse1: Ellipse1,
            desc: "Has a tastefully done interior and is kept delightfully clean",
            name: 'Wade Warren',
            dept: 'Marketing Coordinator',
        },
        {
            imgsrcEllipse1: Ellipse1,
            desc: "Has a tastefully done interior and is kept delightfully clean",
            name: 'Wade Warren',
            dept: 'Marketing Coordinator',
        },
    ];
    const options = {
        nav: false,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    };
    return (
        <>
            <section class="leadingcompanies">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h2>Trusted by many of<br /> leading companies</h2>
                            <OwlCarousel className="owl-carousel owl-loaded owl-drag" {...options} autoplay margin={15}>
                                {itemsData.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="box">
                                            <img src={item.imgsrcEllipse1} />
                                            <h6>{item.desc}</h6>
                                            <p>{item.name}</p>
                                            <span>{item.dept}</span>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTrustedCompanies