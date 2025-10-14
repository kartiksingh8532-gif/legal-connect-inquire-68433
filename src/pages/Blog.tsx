
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactButtons } from "@/components/ContactButtons";
import { Link } from "react-router-dom";
import blogsData from "@/data/blogs.json";

// Import blog images
import blogUmarKhalid from "@/assets/blog-uapa-bail-rights.jpg";
import blogStrayDogs from "@/assets/blog-abc-rules-animal-welfare.jpg";
import blogConsumerProtection from "@/assets/blog-consumer-protection.jpg";
import blogPropertyDisputes from "@/assets/blog-property-disputes.jpg";
import blogRtiAct from "@/assets/blog-rti-act.jpg";
import blogPoshAct from "@/assets/blog-posh-act.jpg";
import blogGstLaw from "@/assets/blog-gst-law.jpg";
import blogCyberLaw from "@/assets/blog-cyber-law.jpg";
import blogEnvironmentalLaw from "@/assets/blog-environmental-law.jpg";
import blogLabourLaw from "@/assets/blog-labour-law.jpg";
import blogBankingLaw from "@/assets/blog-banking-law.jpg";
import blogConstitutionalRemedies from "@/assets/blog-constitutional-remedies.jpg";

const Blog = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const getBlogImage = (id: string) => {
    const imageMap: { [key: string]: string } = {
      '1': blogUmarKhalid,
      '2': blogStrayDogs,
      '3': blogConsumerProtection,
      '4': blogPropertyDisputes,
      'umar-khalid-uapa': blogUmarKhalid,
      'delhi-stray-dogs': blogStrayDogs,
      'consumer-protection-act': blogConsumerProtection,
      'property-disputes-india': blogPropertyDisputes,
      'rti-act-guide': blogRtiAct,
      'posh-act-compliance': blogPoshAct,
      'gst-law-basics': blogGstLaw,
      'cyber-law-india': blogCyberLaw,
      'environmental-law': blogEnvironmentalLaw,
      'labour-law-rights': blogLabourLaw,
      'banking-law': blogBankingLaw,
      'constitutional-remedies': blogConstitutionalRemedies,
    };
    return imageMap[id] || blogUmarKhalid;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Legal Insights & Blog</h1>
          <p className="text-xl text-amber-300 max-w-2xl mx-auto">
            Stay informed with the latest legal updates, insights, and expert analysis from Virtuous Law Partners.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 hover:border-amber-600 transition-colors">
                <img 
                  src={getBlogImage(blog.id)} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                      {blog.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-3">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800 hover:text-amber-600 transition-colors">
                    <Link to={`/blog/${blog.id}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {blog.author}</span>
                    <Link 
                      to={`/blog/${blog.id}`}
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
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

export default Blog;
