import Image from "next/image";
import {
  FiArrowRight,
  FiClock,
  FiHeart,
  FiMapPin,
  FiStar,
} from "react-icons/fi";

const DestinationCard = ({ dest }) => {
  return (
    <div className="lg:col-span-1 lg:row-span-2">
      <div className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 h-full min-h-100">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

        {/* Top */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span
            className={`${dest.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}
          >
            {dest.tag}
          </span>
          <button className="w-9 h-9 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group/fav">
            <FiHeart className="text-white text-sm group-hover/fav:fill-rose-400 group-hover/fav:text-rose-400 transition-colors" />
          </button>
        </div>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-3xl font-extrabold leading-tight">
            {dest.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-white/70 text-sm py-2.5">
              <FiMapPin className="text-emerald-400 shrink-0" />
              {dest.country}
            </div>
            <div className="flex items-center gap-1 text-white/60 text-sm">
              <FiClock />
              {dest.days} days
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-xs">Starting from</p>
              <p className="text-white font-extrabold text-2xl">
                ${dest.price}
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-white/70 text-xs">
                {dest.reviews.toLocaleString()} reviews
              </span>
              <div className="flex items-center gap-1 bg-yellow-400/90 backdrop-blur-sm text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full">
                <FiStar className="fill-yellow-900 text-yellow-900 text-xs" />
                {dest.rating}
              </div>
            </div>
          </div>
          <div className="overflow-hidden max-h-20 md:max-h-0 group-hover:max-h-20 transition-all duration-400 ease-in-out">
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm py-3 rounded-2xl transition-colors duration-200">
              Explore Now <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
