import Script from 'next/script';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Powered by Love",
    "description": "Software engineering management consultancy offering fractional CTO services, technical team optimization, and strategic tech planning.",
    "url": "https://powered-by.love/",
    "serviceType": ["Software Consulting", "CTO Services", "Tech Team Optimization"],
    "areaServed": "Worldwide",
    "priceRange": "$$"
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
