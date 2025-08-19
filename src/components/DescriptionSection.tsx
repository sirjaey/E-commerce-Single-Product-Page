import { useState, useEffect } from "react";
import cartIcon from "../assets/svgs/icon-cart.svg";

function DescriptionSection({
	onAddToCart, count, setCount
}: {
        onAddToCart: (name: string, price: number, quantity: number) => void;
        count: number;
        setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
	
	const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 800);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const increase = () => setCount((prev) => prev + 1);
	const decrease = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

	const productName = "Fall Limited Edition Sneakers";
	const price = 125;

	return (
		<section id="description">
			<div className="description-container">
				<p>SNEAKER COMPANY</p>
				<h1>Fall Limited Edition Sneakers</h1>
				<p className="decrip">
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they’ll withstand everything
					the weather can offer.
				</p>

				{/* Desktop Price */}
				<div className="desk-price">
					<h1 id="price" className="price">
						$125.00 <span>50%</span>
					</h1>
					<del>$250.00</del>
				</div>

				{/* Mobile Price */}
				<div className="mob-price hidden">
					<h1 id="price" className="price">
						$125.00 <span>50%</span>
					</h1>
					<div>
						<del>$250.00</del>
					</div>
				</div>
				<div className="btn">
					<div className={`buttons ${isMobile ? "mob-btns" : "desk-btns"}`}>
						<button>
							<span className="increase" onClick={increase}>
								+
							</span>
							<span className="value">{count}</span>
							<span className="decrease" onClick={decrease}>
								&#8722;
							</span>
						</button>
					</div>
					<button
						className="add-to-cart"
						onClick={() => onAddToCart(productName, price, count)}>
						<img src={cartIcon} alt="Cart" width="15" height="15" /> Add to cart
					</button>
				</div>
			</div>
		</section>
	);
}

export default DescriptionSection;