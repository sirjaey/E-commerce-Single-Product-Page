import imagethumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import imagethumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import imagethumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import imagethumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

interface ProductsGalleryProps {
	currentIndex: number;
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
	setLightboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
	images: string[];
}

function ProductsGallery({
	currentIndex,
	setCurrentIndex,
	setLightboxOpen,
	images,
}: ProductsGalleryProps) {
	const thumbnails = [
		imagethumbnail1,
		imagethumbnail2,
		imagethumbnail3,
		imagethumbnail4,
	];

	const openLightbox = (index: number) => {
		setCurrentIndex(index);
		setLightboxOpen(true);
	};

	const changeCarouselImage = (step: number) => {
		setCurrentIndex((prev: number) => {
			let newIndex = prev + step;
			if (newIndex < 0) newIndex = images.length - 1;
			if (newIndex >= images.length) newIndex = 0;
			return newIndex;
		});
	};

	return (
		<section id="images">
			{/* Desktop main image */}
			<div className="main-image" id="main">
				<img
					src={images[currentIndex]}
					alt={`product image ${currentIndex + 1}`}
					onClick={() => openLightbox(currentIndex)}
				/>
			</div>

			{/* Mobile carousel */}
			<div className="mobile-main-image">
				<img
					id="mobile-"
					src={images[currentIndex]}
					alt={`product image ${currentIndex + 1}`}
				/>
				<span className="prev" onClick={() => changeCarouselImage(-1)}>
					&#10094;
				</span>
				<span className="next" onClick={() => changeCarouselImage(1)}>
					&#10095;
				</span>
			</div>

			{/* Thumbnails */}
			<div className="image-thumbnail">
				{thumbnails.map((thumb, index) => (
					<div
						key={index}
						className={index === currentIndex ? "active" : "un-opac"}
						onClick={() => setCurrentIndex(index)}>
						<img
							src={thumb}
							alt={`thumbnail ${index + 1}`}
							className="cursor-pointer"
						/>
					</div>
				))}
			</div>
		</section>
	);
}

export default ProductsGallery;
