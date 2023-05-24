import CoreValuesImage from "../../assets/images/corevalues/corevalues.svg"

const keyResults = [
    {
        key: 1,
        title: "Dedication",
        description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
    },
    {
        key: 2,
        title: "Intellectual Honestly",
        description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse."
    },
    {
        key: 3,
        title: "Curiosity",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
    },
]

function CoreValues() {
  return (
    <div id="corevalues" className="core-values p-40px">
        <div className="text-leading text-center">
            Our Core Values
        </div>

        <div className="text-normal text-muted mt-24px text-paragraph">
            Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.

In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
        </div>

        <div className="mt-24px d-flex flex-column flex-md-row gap-16px justify-content-center">
            { 
                keyResults.map(({ title, subtitle, description }) => (
                <div key={title}>
                    <div className="d-flex gap-16px align-items-center">
                        <div className="divider d-block d-md-none"></div>

                        <div className="text-extra-large">
                            { title }
                        </div>
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

        <div className="mt-24px d-flex justify-content-center">
            <div className="w-60">
                <img  src={CoreValuesImage} className="w-100" />
            </div>
        </div>
    </div>
  );
}

export default CoreValues;
