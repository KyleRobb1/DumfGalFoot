import Link from 'next/link';

const accommodations = [
  {
    id: 1,
    name: "Cavens Country House",
    type: "Country House Hotel",
    priceRange: "£££",
    rating: 4.9,
    location: "Kirkbean, Dumfries",
    description: "Luxury country house hotel set in beautiful gardens with stunning coastal views.",
    features: [
      "Fine Dining",
      "Garden Views",
      "Coastal Location",
      "Free Parking",
      "Wi-Fi"
    ],
    rooms: "8 luxury rooms",
  },
  {
    id: 2,
    name: "The Selkirk Arms Hotel",
    type: "Historic Hotel",
    priceRange: "££",
    rating: 4.7,
    location: "Kirkcudbright",
    description: "Historic hotel in the heart of the Artists' Town, offering comfortable rooms and excellent dining.",
    features: [
      "Restaurant",
      "Bar",
      "Town Center",
      "Historic Building",
      "Pet Friendly"
    ],
    rooms: "16 rooms",
  },
  {
    id: 3,
    name: "Blackaddie House",
    type: "Country House Hotel",
    priceRange: "£££",
    rating: 4.8,
    location: "Sanquhar",
    description: "Award-winning restaurant with rooms in a picturesque riverside setting.",
    features: [
      "Fine Dining",
      "River Views",
      "Garden",
      "Romantic Setting",
      "Free Parking"
    ],
    rooms: "6 boutique rooms",
  },
  {
    id: 4,
    name: "Trigony House Hotel",
    type: "Country House Hotel",
    priceRange: "££",
    rating: 4.6,
    location: "Thornhill",
    description: "Pet-friendly country house hotel with organic garden and spa facilities.",
    features: [
      "Spa",
      "Restaurant",
      "Garden",
      "Pet Friendly",
      "Organic Food"
    ],
    rooms: "10 rooms",
  },
  {
    id: 5,
    name: "Fernhill Hotel",
    type: "Boutique Hotel",
    priceRange: "££",
    rating: 4.5,
    location: "Portpatrick",
    description: "Coastal hotel with stunning sea views and excellent seafood restaurant.",
    features: [
      "Sea Views",
      "Restaurant",
      "Bar",
      "Coastal Walks",
      "Wedding Venue"
    ],
    rooms: "12 rooms",
  },
];

function PriceRange({ range }: { range: string }) {
  return (
    <span className="text-gray-600">
      {range.split('').map((pound, i) => (
        <span key={i} className={i < range.length ? "text-green-600" : "text-gray-300"}>£</span>
      ))}
    </span>
  );
}

function Rating({ score }: { score: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-5 w-5 ${star <= score ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-gray-600">{score}</span>
    </div>
  );
}

export default function AccommodationPage() {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 bg-green-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Where to Stay
            </h1>
            <p className="text-xl text-green-100 max-w-2xl">
              Find the perfect accommodation for your visit to Dumfries & Galloway
            </p>
          </div>
        </div>
      </div>

      {/* Accommodations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <div 
              key={accommodation.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-green-900">
                <div className="absolute inset-0 flex items-center justify-center text-green-200">
                  [Placeholder Image]
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900">
                    {accommodation.name}
                  </h3>
                  <PriceRange range={accommodation.priceRange} />
                </div>
                <div className="mt-2">
                  <Rating score={accommodation.rating} />
                </div>
                <p className="mt-4 text-gray-600">
                  {accommodation.description}
                </p>
                <div className="mt-4">
                  <span className="text-sm font-medium text-gray-500">
                    {accommodation.type} • {accommodation.rooms}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {accommodation.features.slice(0, 3).map((feature, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center text-sm text-gray-500">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {accommodation.location}
                </div>
                <Link 
                  href={`/accommodation/${accommodation.id}`}
                  className="mt-6 block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 