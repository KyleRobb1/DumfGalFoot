import Link from 'next/link';

const events = [
  {
    id: 1,
    title: "Spring Food Festival",
    date: "2024-05-15",
    time: "10:00 AM - 6:00 PM",
    location: "Dock Park, Dumfries",
    description: "Celebrate local produce with food stalls, cooking demonstrations, and live music.",
    category: "Food & Drink",
  },
  {
    id: 2,
    title: "Galloway Hills Trail Run",
    date: "2024-06-02",
    time: "8:00 AM",
    location: "Galloway Forest Park",
    description: "Annual trail running event through the stunning Galloway Forest Park.",
    category: "Sports",
  },
  {
    id: 3,
    title: "Castle Heritage Day",
    date: "2024-06-18",
    time: "11:00 AM - 4:00 PM",
    location: "Caerlaverock Castle",
    description: "Historical reenactments, guided tours, and medieval crafts demonstrations.",
    category: "Heritage",
  },
  {
    id: 4,
    title: "Summer Music Festival",
    date: "2024-07-08",
    time: "2:00 PM - 11:00 PM",
    location: "The Crichton, Dumfries",
    description: "A day of live music featuring local bands and international artists.",
    category: "Music",
  },
  {
    id: 5,
    title: "Wildlife Photography Workshop",
    date: "2024-07-22",
    time: "9:00 AM - 3:00 PM",
    location: "WWT Caerlaverock",
    description: "Learn wildlife photography techniques from expert photographers.",
    category: "Workshop",
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export default function EventsPage() {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 bg-green-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Local Events
            </h1>
            <p className="text-xl text-green-100 max-w-2xl">
              Discover what's happening in Dumfries & Galloway
            </p>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 sm:flex sm:items-start sm:justify-between">
                <div className="sm:flex-1">
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold text-gray-900">
                      {event.title}
                    </h3>
                    <span className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${
                      event.category === 'Food & Drink' ? 'bg-orange-100 text-orange-800' :
                      event.category === 'Sports' ? 'bg-blue-100 text-blue-800' :
                      event.category === 'Heritage' ? 'bg-purple-100 text-purple-800' :
                      event.category === 'Music' ? 'bg-pink-100 text-pink-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    {event.description}
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6">
                  <Link 
                    href={`/events/${event.id}`}
                    className="block text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 