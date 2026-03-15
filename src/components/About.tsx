import { MapPinIcon } from "@/assets/icons/icons";

interface AboutProps {
  stats?: { value: string; label: string }[];
}

export function About({
  stats = [
    { value: "50+", label: "Events Organized" },
    { value: "1000+", label: "Happy Participants" },
    { value: "98%", label: "Satisfaction Rate" },
  ],
}: AboutProps) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900">
              Creating Moments That Matter
            </h2>
            <p className="mt-6 text-lg text-secondary-600 leading-relaxed">
              <strong className="text-secondary-800">Greenwoodhub</strong> is
              your trusted partner for organizing exceptional team building
              activities and outdoor experiences. We believe that great teams
              are built through shared adventures and meaningful connections.
            </p>
            <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
              From exciting team challenges to relaxing getaways, we handle
              every detail so you can focus on what matters most — building
              stronger relationships and creating lasting memories.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <MapPinIcon className="w-32 h-32 text-primary-400" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-secondary-800">
                    Professional Planning
                  </div>
                  <div className="text-sm text-secondary-500">
                    Every detail covered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
