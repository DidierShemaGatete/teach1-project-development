
import React, { useRef, useEffect } from 'react';

const OwnerVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(console.error);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section bg-teach-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-teach-blue mb-4">Meet Our Founder</h2>
          <p className="text-lg text-teach-gray-dark max-w-3xl mx-auto">
            Learn about our mission and approach to empowering families with professional caregiving skills.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-white rounded-lg shadow-xl overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              loop
              playsInline
              muted
              controls
            >
              <source src="/att.Ec1aGWHoNV1i52swG_F8KXJshzLZPg7MjoSf_gOYEmg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerVideoSection;
