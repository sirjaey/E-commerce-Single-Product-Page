import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import DescriptionSection from "./components/DescriptionSection";
import Lightbox from "./components/Lightbox";
import Attribution from "./components/Attribution";
import ProductsGallery from "./components/ProductsGallery";

import image0 from "./assets/images/image-product-0.jpg";
import image1 from "./assets/images/image-product-1.jpg";
import image2 from "./assets/images/image-product-2.jpg";
import image3 from "./assets/images/image-product-3.jpg";

export default function Apj() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [cartVisible, setCartVisible] = useState(false);

	// 🆕 Cart state
	const [cartItem, setCartItem] = useState<{
		name: string;
		price: number;
		quantity: number;
	} | null>(null);

	const images = [image0, image1, image2, image3];
	

	const handleAddToCart = (name: string, price: number, quantity: number) => {
		if (quantity === 0) return;
		if (quantity >= 1) {
			setCartVisible(true);
		}
		setCartItem((prev) =>
			prev
				? { ...prev, quantity: prev.quantity + quantity }
				: { name, price, quantity }
		);
		// setCartVisible(true)
	};

	const handleRemoveFromCart = () => {
		setCartItem(null);
	};

	return (
		<>
			<Nav
				cartItem={cartItem}
				onRemove={handleRemoveFromCart}
				cartVisible={cartVisible}
				setCartVisible={setCartVisible}
			/>
			<hr />
			<main>
				<ProductsGallery
					currentIndex={currentIndex}
					setLightboxOpen={setLightboxOpen}
					setCurrentIndex={setCurrentIndex}
					images={images}
				/>

				<DescriptionSection onAddToCart={handleAddToCart} />

				{lightboxOpen && (
					<Lightbox
						images={images}
						initialIndex={currentIndex}
						onClose={() => setLightboxOpen(false)}
					/>
				)}
			</main>
			<Attribution />
		</>
	);
}
