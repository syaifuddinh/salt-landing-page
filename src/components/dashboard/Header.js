import HeaderImage from "../../assets/images/header/header.svg"
import MetaHeader1 from "../../assets/images/header/metaHeader1.svg"
import MetaHeader2 from "../../assets/images/header/metaHeader2.svg"

function Header() {
  return (
    <div className="header position-relative">
        <div className="meta-image">
            <img src={HeaderImage} className="w-100" />
        </div>    


        <div className="meta-container">
            <div className="position-relative">
                <div className="meta-header1">
                        <img src={MetaHeader2} className="w-100" />
                </div>
                <div className="meta-header1">
                        <img src={MetaHeader1} className="w-100" />
                </div>
                <div className="p-40px meta-content bg-primary  position-relative z-index-10">
                    <div className="text-leading text-white">Discover Your Wonder</div>
                    <div className="text-paragraph text-white text-normal mt-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam.</div>
                </div>
            </div>
        </div> 
    </div>
  );
}

export default Header;
