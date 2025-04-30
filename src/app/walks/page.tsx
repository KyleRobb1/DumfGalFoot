import Image from 'next/image';
import Link from 'next/link';

const walks = [
  {
    id: 1,
    title: "Galloway Forest Park Trail",
    description: "A scenic walk through Britain's largest forest park, featuring diverse wildlife and stunning landscapes.",
    difficulty: "Moderate",
    duration: "3 hours",
    distance: "8 km",
    image: "/walks/galloway-forest.jpg",
  },
  {
    id: 2,
    title: "Caerlaverock Castle Walk",
    description: "Explore the unique triangular moated castle and its surrounding nature reserve.",
    difficulty: "Easy",
    duration: "1.5 hours",
    distance: "4 km",
    image: "/walks/caerlaverock.jpg",
  },
  {
    id: 3,
    title: "Moffat Hills Circuit",
    description: "A challenging hill walk offering panoramic views of the Southern Uplands.",
    difficulty: "Hard",
    duration: "6 hours",
    distance: "14 km",
    image: "/walks/moffat-hills.jpg",
  },
  {
    id: 4,
    title: "Threave Castle Trail",
    description: "A peaceful riverside walk to a historic island castle, home to diverse wildlife.",
    difficulty: "Easy",
    duration: "2 hours",
    distance: "5 km",
    image: "/walks/threave-castle.jpg",
  },
  {
    id: 5,
    title: "Grey Mare's Tail Nature Trail",
    description: "A dramatic waterfall walk with rare alpine plants and spectacular views.",
    difficulty: "Moderate",
    duration: "4 hours",
    distance: "10 km",
    image: "/walks/grey-mares-tail.jpg",
  },
  {
    id: 6,
    title: "Drumlanrig Castle Gardens",
    description: "A gentle stroll through beautiful formal gardens and woodland trails.",
    difficulty: "Easy",
    duration: "1 hour",
    distance: "3 km",
    image: "/walks/drumlanrig.jpg",
  },
];

export default function WalksPage() {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 bg-green-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Walking Trails
            </h1>
            <p className="text-xl text-green-100 max-w-2xl">
              Discover the most beautiful walking trails in Dumfries & Galloway
            </p>
          </div>
        </div>
      </div>

      {/* Walks Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {walks.map((walk) => (
            <div 
              key={walk.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-green-900">
                  <div className="flex items-center justify-center h-full text-green-200">
                    [Placeholder Image]
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {walk.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {walk.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {walk.duration}
                  </span>
                  <span className="flex items-center">
                    <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {walk.distance}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    walk.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    walk.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {walk.difficulty}
                  </span>
                </div>
                <Link 
                  href={`/walks/${walk.id}`}
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
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