"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div id="bussiness" className="py-2 bg-black  w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-[#d8ab6f] ">
          Business Over{" "}
          <span className="text-neutral-400">
            {"World".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
        Manage and grow your multiple businesses across the globe effortlessly.  
        Stay connected, expand opportunities, and lead with innovation on a global scale.  .
        </p>
      </div>
      <div className="">
      <WorldMap
        dots={[
          // USA to UK
          { start: { lat: 37.7749, lng: -122.4194, label: "USA" }, end: { lat: 51.5074, lng: -0.1278, label: "UK" } },
          // UK to UAE
          { start: { lat: 51.5074, lng: -0.1278, label: "UK" }, end: { lat: 25.276987, lng: 55.296249, label: "UAE" } },
          // UAE to India
          { start: { lat: 25.276987, lng: 55.296249, label: "UAE" }, end: { lat: 28.6139, lng: 77.209, label: "India" } },
          // India to Sri Lanka
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 6.9271, lng: 79.8612, label: "Sri Lanka" } },
          // India to Saudi Arabia
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 24.774265, lng: 46.738586, label: "Saudi Arabia" } },
          // India to Kuwait
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 29.3759, lng: 47.9774, label: "Kuwait" } },
          // India to Qatar
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 25.276987, lng: 51.520008, label: "Qatar" } },
          // India to Abu Dhabi
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 24.4539, lng: 54.3773, label: "Abu Dhabi" } },
          // India to Japan
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 35.6895, lng: 139.6917, label: "Japan" } },
          // India to China
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 39.9042, lng: 116.4074, label: "China" } },
          // India to Mauritius
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: -20.3484, lng: 57.5522, label: "Mauritius" } },
          // India to Maldives
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 3.2028, lng: 73.2207, label: "Maldives" } },
          // India to Thailand
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 13.7563, lng: 100.5018, label: "Thailand" } },
          // India to Afghanistan
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 34.5553, lng: 69.2075, label: "Afghanistan" } },
          // India to South Korea
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 37.5665, lng: 126.978, label: "South Korea" } },
          // India to Canada
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 45.4215, lng: -75.6972, label: "Canada" } },
          // India to Portugal
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 38.7223, lng: -9.1393, label: "Portugal" } },
          // India to Spain
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 40.4168, lng: -3.7038, label: "Spain" } },
          // India to Germany
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 52.52, lng: 13.405, label: "Germany" } },
          // India to Italy
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 41.9028, lng: 12.4964, label: "Italy" } },
          // India to France
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: 48.8566, lng: 2.3522, label: "France" } },
          // India to South Africa
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: -33.9249, lng: 18.4241, label: "South Africa" } },
          // India to Australia
          { start: { lat: 28.6139, lng: 77.209, label: "India" }, end: { lat: -33.8688, lng: 151.2093, label: "Australia" } },
        ]}
      />
      </div>
    </div>
  );
}
