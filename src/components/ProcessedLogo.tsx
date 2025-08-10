import React, { useState, useEffect } from 'react';
import { processLogoImage } from '@/utils/backgroundRemoval';

interface ProcessedLogoProps {
  src: string;
  alt: string;
  className?: string;
}

const ProcessedLogo: React.FC<ProcessedLogoProps> = ({ src, alt, className }) => {
  const [processedSrc, setProcessedSrc] = useState(src);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      setIsProcessing(true);
      try {
        const processed = await processLogoImage(src);
        setProcessedSrc(processed);
      } catch (error) {
        console.error('Failed to process logo:', error);
        setProcessedSrc(src); // Use original if processing fails
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [src]);

  return (
    <img 
      src={processedSrc}
      alt={alt}
      className={className}
      style={{
        opacity: isProcessing ? 0.7 : 1,
        transition: 'opacity 0.3s ease'
      }}
    />
  );
};

export default ProcessedLogo;