import { Play, ExternalLink } from 'lucide-react';

const YouTubeShortsSection = () => {
  const video = {
    id: 'cuuEGIO3akA',
    title: 'Craniora Technology Demo',
    description: 'See how Craniora technology transforms infant healthcare screening',
    url: 'https://www.youtube.com/watch?v=cuuEGIO3akA',
    duration: '3:25'
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

        {/* Video Display */}
        <div className="max-w-4xl mx-auto">
          <div className="group fade-in">
            <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300">
              {/* Embedded YouTube Video */}
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  {video.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
                
                {/* Video Meta */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground font-medium">
                    YouTube Video
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {video.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeShortsSection;