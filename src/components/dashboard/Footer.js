import Logo from "../logo/Index"

const links = [
    {
        "destination": "#aboutus",
        "label": "Who We Are"
    },
    {
        "destination": "#corevalues",
        "label": "Core Values"
    },
    {
        "destination": "#speciality",
        "label": "Speciality"
    },
]

function Footer() {
  return (
    <div className="footer bg-secondary p-40px">
        <Logo variant="inverse" />

        <div className="d-flex gap-24px mt-24px">
            <div className="p-24px bg-white meta-content">
                <select name="" id="">
                    <option value="">Technology Department</option>
                    <option value="">Sales Department</option>
                    <option value="">Education Department</option>
                </select>

                <div className="text-large text-primary mt-32px">
                    Jl. Lembong No 8 <br />
                    Kel. Braga Kec. Sumur  <br />
                     Bandung, Kota Bandung, Jawa Barat
                </div>
            </div>

            <div className="d-flex flex-column gap-24px">
                {
                    links.map(({ destination, label }) => (
                        <a href={destination} >{ label }</a>
                    ))
                }
            </div>
        </div>
    </div>
  );
}

export default Footer;
