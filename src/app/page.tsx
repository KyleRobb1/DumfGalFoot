import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <Image
            src="/hero-bg.jpg"
            alt="Dumfries & Galloway Nature"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Dumfries & Galloway Footprints
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover the hidden gems of Scotland's enchanting southwest
          </p>
          <Link 
            href="/explore"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 inline-block"
          >
            Start Exploring
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 bg-green-800 bg-opacity-90">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Local Walks</h3>
            <p className="text-green-100">
              Explore curated walking trails through stunning landscapes and historic sites.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Events</h3>
            <p className="text-green-100">
              Stay updated with local events, festivals, and community gatherings.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Local Dining</h3>
            <p className="text-green-100">
              Discover the best local restaurants and cafes in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-green-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-green-100 mb-8">
            Join our community and start exploring the beautiful Dumfries & Galloway region today.
          </p>
          <Link 
            href="/signup"
            className="bg-white text-green-900 hover:bg-green-100 font-bold py-3 px-8 rounded-full transition-all duration-300 inline-block"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </main>
  );
}
