import {
  FiArrowRight
} from "react-icons/fi";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    rating: 4.9,
    reviews: 2341,
    price: 1299,
    days: 7,
    tag: "Trending",
    tagColor: "bg-orange-500",
    featured: true,
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    rating: 4.8,
    reviews: 3102,
    price: 899,
    days: 10,
    tag: "Best Seller",
    tagColor: "bg-emerald-500",
    featured: false,
  },
  {
    id: 3,
    name: "Machu Picchu",
    country: "Peru",
    image:
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
    rating: 4.9,
    reviews: 1876,
    price: 1599,
    days: 12,
    tag: "Adventure",
    tagColor: "bg-blue-500",
    featured: false,
  },
  {
    id: 4,
    name: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    rating: 4.7,
    reviews: 2654,
    price: 1199,
    days: 8,
    tag: "Cultural",
    tagColor: "bg-purple-500",
    featured: false,
  },
  {
    id: 5,
    name: "Amalfi Coast",
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80",
    rating: 4.8,
    reviews: 1987,
    price: 1499,
    days: 9,
    tag: "Luxury",
    tagColor: "bg-yellow-500",
    featured: false,
  },
  {
    id: 6,
    name: "Cape Town",
    country: "South Africa",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    rating: 4.7,
    reviews: 1432,
    price: 1099,
    days: 6,
    tag: "New",
    tagColor: "bg-rose-500",
    featured: false,
  },
];

const FeaturedDestinations = () => {
  const [featured, ...rest] = destinations;

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-flex items-center gap-2 text-emerald-600 text-sm font-bold uppercase tracking-widest mb-2">
              <span className="w-6 h-0.5 bg-emerald-500 rounded-full" />
              Explore the World
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Featured Destinations
            </h2>
            <p className="text-gray-400 mt-2 max-w-lg text-sm">
              Hand-curated destinations loved by thousands of travelers
              worldwide.
            </p>
          </div>
          <a
            href="/destinations"
            className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-sm px-5 py-2.5 rounded-full transition-colors shrink-0 group"
          >
            View all
            <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured large 1st card — spans 2 rows */}
            {rest.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
