import { useState } from "react"
import MutedLeftArrow from "../../assets/images/icons/mutedLeftArrow.svg"
import WhiteRightArrow from "../../assets/images/icons/whiteRightArrow.svg"

const keyResults = [
    {
        key: 1,
        title: "Who we are",
        subtitle: "Technology Company",
        description: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
        key: 2,
        title: "What we do",
        subtitle: "Professional Brand Management",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        key: 3,
        title: "How we do",
        subtitle: "Strategize, Design, Collaborate",
        description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur."
    },
]

function AboutUs() {
    const [activePage, setActivePage] = useState(1);

    const onSlideRight = () => {

        if(activePage === 3) return;

        setActivePage(prevState => {
            let result = prevState + 1

            if(prevState === 3){ 
                result = 1;
            }

            onSlide("right", result);
            return result
        });
    }

    const onSlide = (arrow = "left", page) => {
        const slides = document.querySelectorAll(".meta-slider");
        slides.forEach(slide => {
            const left = slide.offsetLeft;
            const width = slide.offsetWidth;
            const futureLeft = left - width;

            // if(arrow === "left") 
            //     slide.style.left = `${(page - 1) * (1 * (width + 20))}px`;
            // else if(arrow === "right") 
            slide.style.left = `${(page - 1) * (-1 * (width + 20))}px`;
        })
    }

    const onSlideLeft = () => {
        if(activePage === 1) return;

        setActivePage(prevState => {
            let result = prevState - 1

            if(prevState === 1){ 
                result = 3;
            }

            onSlide("left", result);
            return result
        });
    }

  return (
    <div id="aboutus" className="about-us">

        <div className="p-40px gap-16px d-none d-md-flex">
            { keyResults.map(({ title, subtitle, description }) => (
                <div key={title}>
                    <div className="text-leading">
                        { title }
                    </div>
                    <div className="mt-12px text-large">
                        { subtitle }
                    </div>
                    <div className="mt-12px text-small text-paragraph">
                        { description }
                    </div>
                </div>
                ))
            }
        </div>
    
        <div className="d-md-none d-block">
            <div className="px-40px pt-40px gap-16px d-flex position-relative  overflow-hidden">
                { keyResults.map(({ key, title, subtitle, description }) => (
                    <div key={title} className={`meta-slider meta-slider${key} min-w-110 max-w-110 transition-left`}>
                        <div className="text-leading">
                            { title }
                        </div>
                        <div className="mt-12px text-large">
                            { subtitle }
                        </div>
                        <div className="mt-12px text-small text-paragraph w-80">
                            { description }
                        </div>
                    </div>
                    ))
                }
            </div>

            <div className="d-flex px-40px pb-40px mt-16px align-items-center justify-content-between">
                <div className="d-flex gap-8px align-items-end">
                    <div className="meta-current-page">
                        { activePage }
                    </div>
                    <div className="meta-divider-page text-muted">
                        /
                    </div>
                    <div className="meta-page text-muted">
                        03
                    </div>
                </div>

                <div className="d-flex">
                    <div className={`meta-navigation ${activePage === 1 ? "bg-gray" : "bg-primary"}`} onClick={onSlideLeft} >
                        <img src={MutedLeftArrow} className={`${activePage > 1 ? "filter-white" : ""}`} />
                    </div>
                    <div className={`meta-navigation ${activePage === 3 ? "bg-gray" : "bg-primary"}`}  onClick={onSlideRight}>
                        <img src={MutedLeftArrow} className={`rotate-180 ${activePage < 3 ? "filter-white" : ""}`} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutUs;
