
interface SEOProps {
  title: string
  description: string
  url: string
  type?: 'website' | 'article' | 'service'
  image?: string
  structuredData?: any
}

export default function SEO({ 
  title, 
  description, 
  url, 
  type = 'website',
  image = '/images/safenexo-og-image.jpg',
  structuredData 
}: SEOProps) {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": type === 'service' ? 'Service' : type === 'article' ? 'Article' : 'WebPage',
    "name": title,
    "description": description,
    "url": `https://safenexo.com${url}`,
    "provider": {
      "@type": "Organization",
      "name": "Safenexo",
      "url": "https://safenexo.com"
    }
  }

  const finalStructuredData = structuredData || defaultStructuredData

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={`https://safenexo.com${url}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://safenexo.com${url}`} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`https://safenexo.com${image}`} />
      <meta property="og:site_name" content="Safenexo" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://safenexo.com${image}`} />
      <meta name="twitter:site" content="@safenexo" />
      <meta name="twitter:creator" content="@safenexo" />
    </>
  )
} 