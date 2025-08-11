import { Play, ExternalLink } from 'lucide-react';

const YouTubeShortsSection = () => {
  // Placeholder video data - replace with actual YouTube Shorts URLs
  const videos = [
    {
      id: 'demo-scan',
      title: 'Live Scanning Demo',
      description: 'See how healthcare providers use Aurevua to scan infants',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      url: 'https://youtube.com/shorts/dQw4w9WgXcQ',
      duration: '0:45'
    },
    {
      id: 'rural-impact',
      title: 'Rural Healthcare Impact',
      description: 'Transforming infant care in remote Indian villages',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      url: 'https://youtube.com/shorts/dQw4w9WgXcQ',
      duration: '1:20'
    }
  ];

  const handleVideoClick = (video: typeof videos[0]) => {
    // Open video in new tab or trigger modal
    window.open(video.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="videos" 
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
      aria-label="Video demonstrations"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 geometric-bg opacity-5" aria-hidden="true" />
      
      <div className="container-aurevua relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary tracking-wide">
              AUREVUA IN ACTION
            </span>
          </div>
          <h2 className="heading-section mb-6">
            See Our Technology
            <span className="block text-primary">in Real-World Action</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto text-lg leading-relaxed">
            Watch how Aurevua is transforming infant healthcare across India, 
            from busy metropolitan hospitals to remote village clinics.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`group cursor-pointer fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleVideoClick(video)}
              role="button"
              tabIndex={0}
              aria-label={`Play video: ${video.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleVideoClick(video);
                }
              }}
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
                {/* Video Thumbnail */}
                <div className="relative aspect-[9/16] bg-gradient-primary overflow-hidden">
                  {/* Placeholder for actual video thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aurevua-dark to-aurevua-accent flex items-center justify-center">
                    <div className="text-center text-aurevua-light">
                      <Play className="w-12 h-12 mx-auto mb-2 opacity-80" aria-hidden="true" />
                      <div className="text-xs font-mono tracking-wide">{video.duration}</div>
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-aurevua-dark/0 group-hover:bg-aurevua-dark/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-aurevua-light/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100 transform">
                      <Play className="w-6 h-6 text-aurevua-light ml-1" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 bg-aurevua-dark/80 backdrop-blur-sm text-aurevua-light px-2 py-1 rounded text-xs font-mono">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                  
                  {/* External Link Indicator */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground font-medium">
                      YouTube Shorts
                    </span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors duration-300" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Want to See Aurevua in Your Clinic?
            </h3>
            <p className="text-body mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo to see how Aurevua can transform 
              your infant screening workflow and improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary focus-visible"
                aria-label="Schedule a personalized demo"
              >
                Schedule Demo
              </button>
              <a
                href="https://youtube.com/@aurevua"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary focus-visible flex items-center space-x-2"
                aria-label="Visit our YouTube channel"
              >
                <span>Visit Channel</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeShortsSection;