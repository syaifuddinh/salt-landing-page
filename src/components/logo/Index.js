import PrimaryLogo from "../../assets/images/logo/primaryLogo.svg"

function Logo({ variant = "default" }) {
  return (
    <div className={`cursor-pointer ${variant === "inverse" ? "filter-white" : ""}`}>
        <img src={PrimaryLogo} />
    </div>
  );
}

export default Logo;
