import { useState } from "react";
import Image1 from "../../assets/images/speciality/1.svg"
import Image2 from "../../assets/images/speciality/2.svg"
import Image3 from "../../assets/images/speciality/3.svg"

const keyResults = [
    {
        key: 1,
        title: "Result Oriented",
        image: "1.svg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam."
    },
    {
        key: 2,
        title: "Quick Development",
        image: "2.svg",
        description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
    },
    {
        key: 3,
        title: "Embrace Innovation",
        image: "3.svg",
        description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse."
    },
]

function Speciality() {
    const [activeData, setActiveData] = useState(keyResults[1])

  return (
    <div id="speciality" className="specialty bg-primary p-24px">
        <div className="bg-white p-40px">
            <div className="text-leading">
                OUR SPECIALTY
            </div>

            <div className="mt-24px text-small text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
            </div>

            <div className="gap-16px mt-48px d-none d-md-flex justify-content-center">
                { keyResults.map(({ title, image, description }) => (
                    <div key={title} className="w-30">
                        <div className="d-flex justify-content-center">
                            { image === "1.svg" ? <img src={Image1} />  : ""}
                            { image === "2.svg" ? <img src={Image2} />  : ""}
                            { image === "3.svg" ? <img src={Image3} />  : ""}
                        </div>
                        <div className="text-normal text-center font-weight-600 mt-24px">
                            { title }
                        </div>
                        <div className="mt-12px text-small text-paragraph">
                            { description }
                        </div>
                    </div>
                    ))
                }
            </div>

            <div className="mt-48px d-block d-md-none">
                <div className="d-flex gap-16px overflow-hidden justify-content-center">
                    { keyResults.map(({ title, image, description }) => (
                        <div key={title} className="min-w-50 w-50">
                            <div className="d-flex justify-content-center">
                                { image === "1.svg" ? <img src={Image1} />  : ""}
                                { image === "2.svg" ? <img src={Image2} />  : ""}
                                { image === "3.svg" ? <img src={Image3} />  : ""}
                            </div>
                            <div className="text-normal text-center font-weight-600 mt-24px">
                                { title }
                            </div>
                        </div>
                        ))
                    }
                </div>

                <div className="text-small mt-24px text-center text-muted">
                    { activeData.description }
                </div>

                <div className="d-flex">
                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default Speciality;
