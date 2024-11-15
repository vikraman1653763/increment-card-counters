import React, { useEffect } from 'react';
const Section5 = () => {
    useEffect(() => {
        const startCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const interval = setInterval(() => {
                count += 1;
                counter.innerText = count;
                if (count === target) clearInterval(interval);
            }, 10);
        };

        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const handleScroll = () => {
            const counters = document.querySelectorAll('.zz-sec-6-counter');
            counters.forEach(counter => {
                if (isInViewport(counter) && !counter.classList.contains('counting')) {
                    startCounter(counter);
                    counter.classList.add('counting');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cardData = [
        { target: 100, title: 'Company growth', description: 'Lorem ipsum dolor sit amet consectetur adipiscin.' },
        { target: 200, title: 'Projects Completed', description: 'Lorem ipsum dolor sit amet consectetur adipiscin.' },
        { target: 150, title: 'Clients Served', description: 'Lorem ipsum dolor sit amet consectetur adipiscin.' },
        { target: 300, title: 'Awards Won', description: 'Lorem ipsum dolor sit amet consectetur adipiscin.' },
        { target: 250, title: 'Innovations', description: 'Lorem ipsum dolor sit amet consectetur adipiscin.' },
    ];

    return (
        <section id="zz-sec-6">
            <h3>Our result<span> in numbers</span></h3>
            <div className="zz-sec-6-card-collection">
                {cardData.map((card, index) => (
                    <div className="zz-sec-6-card-bg" key={index}>
                        <span></span>
                        <span></span>
                        <div className="zz-sec-6-card">
                                <div className="zz-sec-6-count">
                                    <div className="zz-sec-6-counter" data-target={card.target}>0</div>
                                    <p> +</p>
                                </div>
                                <div className="zz-sec-6-content-div">
                                    <h4>{card.title}</h4>
                                    <p>{card.description}</p>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section5;


/* SECTION-5 */




// #zz-sec-6 {
//   height: fit-content;
//   background-image: url('/assets/trainingBg.webp');
//   background-repeat: no-repeat;
//   background-position-y: center;
//   background-size: contain;
//   height: 100vh;
// }

// #zz-sec-6 h3 {
//   color: white;
//   text-align: center;
//   font-size: var(--fs-xxl);
//   text-transform: uppercase;
//   margin-top: 36px;
//   font-weight: 800;
// }

// #zz-sec-6 h3 span {
//   color: #A1ED20;
// }

// .zz-sec-6-card-collection {
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   padding: 1rem 13rem;
// }

// .zz-sec-6-count {
//   display: flex;
//   flex-flow: row nowrap;
//   gap: 2px;
//   font-size: var(--fs-xl);
//   font-weight: 500;
//   color: #A1ED20;
// }

// .zz-sec-6-count p {
//   color: #A1ED20;
// }

// .zz-sec-6-card-bg {
//   width: 400px;
//   position: relative;
//   border-radius: 24px;
//   margin: 24px;
//   overflow: hidden;
//   transition: all .3s ease-in-out;
// }
// .zz-sec-6-card-bg:hover{
//   border: 1px solid rgb(48, 48, 48);
//   transition: all .3s ease-in-out;
// }




// .zz-sec-6-card {
//   border-radius: 24px;
//   padding: 44px 36px;
//   background: rgba(0, 0, 0, 0.233);
// }

// .zz-sec-6-content-div h4 {
//   font-weight: 500;
//   font-size: var(--fs-m);
//   color: #EFEFEF;
//   margin-bottom: 15px;
// }

// .zz-sec-6-content-div p {
//   color: #C6C6C6;
//   font-size: var(--fs-s);
//   line-height: 24px;
// }

