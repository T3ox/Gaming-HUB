import { useEffect, useRef, useState } from "react";

type LazyImageProps = {
    src: string;
    alt: string;
    className?: string;
};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Carica solo una volta
                }
            },
            { threshold: 0.1 }, // Inizia a caricare quando il 10% dell'immagine è visibile
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={imgRef}
            src={isVisible ? src : ""}
            alt={alt}
            className={className}
            style={{ opacity: isVisible ? 1 : 0.5, transition: "opacity 0.3s" }}
        />
    );
};

export default LazyImage;
