import { useState } from "react";
import Cart from "./Cart";

import iconMenu from "../assets/svgs/icon-menu.svg";
import logo from "../assets/svgs/logo.svg";
import imageAvatar from "../assets/images/image-avatar.png";

function Nav({
	cartItem,
	onRemove,
	cartVisible,
	setCartVisible,
}: {
	cartItem: { name: string; price: number; quantity: number } | null;
	onRemove: () => void;
	cartVisible: boolean;
	setCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [hoverIndex, setHoverIndex] = useState<number | null>(null);

	const hambug: HTMLElement | null = document.getElementById("menu");
	const hambugBg: HTMLElement | null = document.querySelector(".hamburg-bg");
	function toggleMenu() {
		if (hambug) {
			hambug.classList.toggle("active");
		}
		if (hambugBg) {
			hambugBg.classList.toggle("blur");
		}
	}

	const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

	return (
		<nav>
			<div className="left-nav">
				<div className="hambugger nav-bar hidden">
					<div className="menu-icon" onClick={toggleMenu}>
						<img src={iconMenu} alt="" />
					</div>
					<div className="hamburg-bg">
						<ul className="mob-nav-links" id="menu">
							<span id="close-hamburger" onClick={toggleMenu}>
								&times;
							</span>
							<li>
								<a href="#">Collections</a>
							</li>
							<li>
								<a href="#">Men</a>
							</li>
							<li>
								<a href="#">Women</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="logo">
					<img src={logo} alt="logo" />
				</div>

				{/* ✅ Converted Hoverable Links */}
				<div className="links">
					{navLinks.map((text, index) => (
						<div key={index} className="link-hover">
							<a
								href="#"
								onMouseEnter={() => setHoverIndex(index)}
								onMouseLeave={() => setHoverIndex(null)}>
								{text}
							</a>
							<p className={hoverIndex === index ? "bg-orange" : ""}>
								<span></span>
							</p>
						</div>
					))}
				</div>
			</div>

			<div className="right-nav">
				<Cart
					cartItem={cartItem}
					onRemove={onRemove}
					cartVisible={cartVisible}
					setCartVisible={setCartVisible}
				/>
				<div className="avatar">
					<img src={imageAvatar} alt="" />
				</div>
			</div>
		</nav>
	);
}
export default Nav;
