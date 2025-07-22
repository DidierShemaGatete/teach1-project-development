
import React, { useRef, useEffect } from 'react';

const OwnerVideoSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play video when in view
            iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          } else {
            // Pause video when out of view
            iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(iframe);

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
            <iframe
              ref={iframeRef}
              className="w-full h-full"
              src="https://www.youtube.com/embed/CBcG9cUx1m8?enablejsapi=1&loop=1&playlist=CBcG9cUx1m8"
              title="Meet Our Founder"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerVideoSection;
