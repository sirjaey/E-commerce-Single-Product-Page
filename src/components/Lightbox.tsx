import { useState } from "react";

interface LightboxProps {
	images: string[];
	initialIndex?: number;
	onClose: () => void;
}

function Lightbox({ images, initialIndex = 0, onClose }: LightboxProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

    const changeImage = (direction: number) => {
        setCurrentIndex(
            (prev) => (prev + direction + images.length) % images.length
        );
    };

    return (
        <div className="lightbox" id="lightbox">
            {/* Close button */}
            <span className="close" onClick={onClose}>
                &times;
            </span>

            {/* Prev button */}
            <span className="prev" onClick={() => changeImage(-1)}>
                &#10094;
            </span>

            {/* Current Image */}
            <img id="lightboxImg" src={images[currentIndex]} alt="Product" />

            {/* Next button */}
            <span className="next" onClick={() => changeImage(1)}>
                &#10095;
            </span>

            {/* Thumbnails */}
            <div className="thumbnails" id="thumbnails">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index}`}
                        className={index === currentIndex ? "active" : ""}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Lightbox;