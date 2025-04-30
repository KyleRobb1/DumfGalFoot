import Link from 'next/link';

const restaurants = [
  {
    id: 1,
    name: "The Steamboat Inn",
    type: "Restaurant & Pub",
    cuisine: "Scottish",
    priceRange: "££",
    rating: 4.5,
    location: "Carsethorn, Dumfries",
    description: "Historic waterfront inn serving fresh seafood and traditional Scottish dishes.",
    features: ["Waterfront Dining", "Local Produce", "Historic Building"],
  },
  {
    id: 2,
    name: "Cavens Arms",
    type: "Gastropub",
    cuisine: "Modern British",
    priceRange: "££",
    rating: 4.8,
    location: "Dumfries Town Center",
    description: "Award-winning gastropub offering innovative dishes using local ingredients.",
    features: ["Fine Dining", "Local Ales", "Sunday Roast"],
  },
  {
    id: 3,
    name: "The Selkirk Arms",
    type: "Hotel Restaurant",
    cuisine: "Scottish/European",
    priceRange: "£££",
    rating: 4.6,
    location: "Kirkcudbright",
    description: "Elegant dining in a historic hotel, featuring seasonal menus and local specialties.",
    features: ["Fine Dining", "Wine List", "Afternoon Tea"],
  },
  {
    id: 4,
    name: "The Globe Inn",
    type: "Historic Pub",
    cuisine: "Traditional Scottish",
    priceRange: "££",
    rating: 4.4,
    location: "Dumfries",
    description: "Robert Burns' favorite pub, serving hearty Scottish fare in historic surroundings.",
    features: ["Historic Setting", "Traditional Food", "Burns Connection"],
  },
  {
    id: 5,
    name: "Kilnford Farm Shop & Café",
    type: "Café",
    cuisine: "Modern Scottish",
    priceRange: "£",
    rating: 4.7,
    location: "Dumfries",
    description: "Farm-to-table café serving fresh, local produce and homemade treats.",
    features: ["Farm Shop", "Local Produce", "Family Friendly"],
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

export default function DiningPage() {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 bg-green-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Local Dining
            </h1>
            <p className="text-xl text-green-100 max-w-2xl">
              Experience the best restaurants and cafés in Dumfries & Galloway
            </p>
          </div>
        </div>
      </div>

      {/* Restaurants Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900">
                    {restaurant.name}
                  </h3>
                  <PriceRange range={restaurant.priceRange} />
                </div>
                <div className="mt-2">
                  <Rating score={restaurant.rating} />
                </div>
                <p className="mt-4 text-gray-600">
                  {restaurant.description}
                </p>
                <div className="mt-4">
                  <span className="text-sm font-medium text-gray-500">{restaurant.type} • {restaurant.cuisine}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {restaurant.features.map((feature, index) => (
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
                  {restaurant.location}
                </div>
                <Link 
                  href={`/dining/${restaurant.id}`}
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