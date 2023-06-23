import '../../styles/galery.css';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import photo1 from '../../images/photo1.jpg';
import photo2 from '../../images/photo2.jpg';
import photo3 from '../../images/photo3.jpg';
import photo4 from '../../images/photo4.jpg';
import photo5 from '../../images/photo5.jpg';
import photo6 from '../../images/photo6.jpg';
import photo7 from '../../images/photo7.jpg';
import photo8 from '../../images/photo8.jpg';
import photo9 from '../../images/photo9.jpg';
import photo10 from '../../images/photo10.jpg';
import photo11 from '../../images/photo11.jpg';
import photo12 from '../../images/photo12.jpg';
const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
];

function Habilites() {
    const carousel = useRef();
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    return (
        <div className="Container">
            <div className="Galery" id="galery">
                <motion.div
                    ref={carousel}
                    className="Carousel"
                    whileTap={{ cursor: 'grabbing' }}
                >
                    <motion.div
                        className="Inner"
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {photos.map((photo) => (
                            <motion.div className="Item" key={photo}>
                                <img src={photo} alt="Texto alt" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Habilites;
