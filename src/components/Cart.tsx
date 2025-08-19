import { useState, useEffect } from "react";
import iconCart from "../assets/svgs/icon-cart.svg";
import cartProductThumbnail from "../assets/images/image-product-1-thumbnail.jpg";

function Cart({
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
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	
	return (
		<div className="cart-icon" onClick={() => setCartVisible(!cartVisible)}>
			<img className="bag-img" src={iconCart} alt="" />
			{cartItem && cartItem.quantity > 0 && (
				<div className="bag-count">{cartItem.quantity}</div>
			)}
			{cartVisible && (
				<div className="cart">
					<div className="cart-header">
						<h3>Cart</h3>
					</div>
					<hr />
					{cartItem ? (
						<div>
							<div
								id="cart-items"
								style={{
									display: "flex",
									alignItems: "center",
									// gap: "10px",
									flexDirection: "row",
								}}>
								<div className="cart-item-icon">
									<img
										className={`${isMobile && "teeho"}`}
										src={`${!isMobile && cartProductThumbnail}`}
										alt="Cart item"
										width={50}
									/>
								</div>
								<div className="descrip-price">
									<p>{cartItem.name}</p>
									<p>
										${cartItem.price.toFixed(2)} x {cartItem.quantity}{" "}
										<b>${(cartItem.price * cartItem.quantity).toFixed(2)}</b>
									</p>
								</div>
								<span className="del-btn" onClick={onRemove}>
									🗑
								</span>
							</div>
							<div className="checkout">
								<button>
									<b>Checkout</b>
								</button>
							</div>
						</div>
					) : (
						<div className="cart-empty">
							<p>Your cart is empty.</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
export default Cart;