import "./index.scss"
import Image from "next/image"

export default function NavBar() {
    return (
        <div className="main-nav-bar">
            <div className="image-and-name">
                <Image src={"/person_icon.svg"} alt="teste" width={50} height={50} />
                <span> Gustavo Blasius </span>
            </div>

            <div className="search-div">
                <Image src={"/search-icon.svg"} alt="teste" width={40} height={40} />
                <div className="search-type-text">  </div>
            </div>

            <div className="exit-div">
                <div> exit </div>
            </div>
        </div>
    )
}