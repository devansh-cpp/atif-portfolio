import React from "react";
import { motion } from "framer-motion";

type MasonryGridProps = {
  images: string[];
};

const MasonryGrid: React.FC<MasonryGridProps> = ({ images }) => {
  // Split the images into 4 columns for the masonry layout
  const columns = [[], [], [], []] as string[][];
  images.forEach((image, index) => {
    columns[index % 4].push(image); // Distribute images into columns
  });

  // Framer Motion animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="grid gap-4">
          {column.map((image, imageIndex) => (
            <motion.div
              key={imageIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the image is visible
              transition={{ duration: 0.5, delay: imageIndex * 0.1 }} // Staggered animation
              variants={imageVariants}
            >
              <img
                className="h-auto sm:max-w-[20rem] rounded-lg"
                src={image}
                alt={`Image ${imageIndex}`}
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
