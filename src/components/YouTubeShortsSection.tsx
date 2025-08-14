import { Play, ExternalLink } from 'lucide-react';

const YouTubeShortsSection = () => {
  // Placeholder video data - replace with actual YouTube Shorts URLs
  const videos = [
    {
      id: 'demo-scan',
      title: 'Live Scanning Demo',
      description: 'See how foreign companies use their technology to scan infants',
      thumbnail: 'public/youtube1.png',
      url: 'https://youtube.com/shorts/O10E0zE9CQY?si=FBPGWIF8d-NV02VY',
      duration: '0:45'
    },
    {
      id: 'rural-impact',
      title: '3D Face Scan',
      description: 'See how foreign companies use their technology to scan infants',
      thumbnail: 'public/youtube1.png',
      url: 'https://www.youtube.com/shorts/Rp-QULygjOo?feature=share',
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
              Reference Videos
            </span>
          </div>
          <h2 className="heading-section mb-6">
            See the Technology
            <span className="block text-primary">in Real-World Action</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto text-lg leading-relaxed">
            Watch how Foreign Companies transform infant healthcare, 
            from busy metropolitan hospitals to remote village clinics.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`group fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300">
                {/* Embedded YouTube Video */}
                <div className="relative aspect-[9/16] overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id === 'demo-scan' ? 'O10E0zE9CQY' : 'Rp-QULygjOo'}`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  />
                </div>

                {/* Video Info */}
                <div className="p-3">
                  <h3 className="font-semibold text-foreground mb-1 text-sm">
                    {video.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                  
                  {/* YouTube Shorts Indicator */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
                    <span className="text-xs text-muted-foreground font-medium">
                      YouTube Shorts
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeShortsSection;