import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactButtons } from "@/components/ContactButtons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    { id: 1, src: "/lovable-uploads/gallery-1.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "/lovable-uploads/gallery-2.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "/lovable-uploads/gallery-3.jpg", alt: "Gallery Image 3" },
    { id: 4, src: "/lovable-uploads/gallery-4.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "/lovable-uploads/gallery-5.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "/lovable-uploads/gallery-6.jpg", alt: "Gallery Image 6" },
    { id: 7, src: "/lovable-uploads/gallery-7.jpg", alt: "Gallery Image 7" },
    { id: 8, src: "/lovable-uploads/gallery-8.jpg", alt: "Gallery Image 8" },
    { id: 9, src: "/lovable-uploads/gallery-9.jpg", alt: "Gallery Image 9" },
    { id: 10, src: "/lovable-uploads/gallery-10.jpg", alt: "Gallery Image 10" },
    { id: 11, src: "/lovable-uploads/gallery-11.jpg", alt: "Gallery Image 11" },
    { id: 12, src: "/lovable-uploads/gallery-12.jpg", alt: "Gallery Image 12" },
    { id: 13, src: "/lovable-uploads/gallery-13.jpg", alt: "Gallery Image 13" },
    { id: 14, src: "/lovable-uploads/gallery-14.jpg", alt: "Gallery Image 14" },
    { id: 15, src: "/lovable-uploads/gallery-15.jpg", alt: "Gallery Image 15" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Gallery</h1>
          <p className="text-xl text-amber-300 max-w-2xl mx-auto">
            Explore moments from Virtuous Law Partners - events, achievements, and our team in action.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {galleryImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="p-1">
                      <div className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden shadow-2xl">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">All Gallery Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ContactButtons />
    </div>
  );
};

export default Gallery;
