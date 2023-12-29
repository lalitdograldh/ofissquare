import React from 'react'

const AboutOperations = () => {
    const itemsData = [
        {
            itemNum: '9',
            itemHeading: 'Years of Operations',
            desc: "We have worked hard to create a refreshing work environment",
        },
        {
            itemNum: '15',
            itemHeading: 'Years of Operations',
            desc: "We have worked hard to create a refreshing work environment",
        },
        {
            itemNum: '4',
            itemHeading: 'Years of Operations',
            desc: "We have worked hard to create a refreshing work environment",
        },
        {
            itemNum: '1,788+',
            itemHeading: 'Years of Operations',
            desc: "We have worked hard to create a refreshing work environment",
        },

    ];
    return (
        <>
            <section class="yyyy">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ul>
                                {
                                    itemsData.map((item, index) => (
                                        <li key={index}>
                                            <div class="box">
                                                <h1 class="orange">{item.itemNum}</h1>
                                                <h6>{item.itemHeading}</h6>
                                                <p>{item.desc}</p>
                                            </div>
                                        </li>

                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutOperations