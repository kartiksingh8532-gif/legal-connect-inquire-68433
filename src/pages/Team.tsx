
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactButtons } from "@/components/ContactButtons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    {
      name: "Adv. Vijay Chauhan",
      image: "/lovable-uploads/vijay-chauhan.jpg",
      description: "Adv. Vijay Chauhan is a distinguished partner at our firm, bringing a wealth of experience across Civil, Commercial, Arbitration, and Criminal disputes. Throughout his career, he has adeptly represented clients in India's highest courts and consistently secured favorable settlements, demonstrating his sharp strategic acumen. Beyond litigation, Vijay's expertise extends to serving as an independent arbitrator, highlighting his comprehensive understanding of dispute resolution. He is highly skilled in drafting a wide array of critical legal documents—including petitions, motions, written statements, and legal notices—and is renowned for providing insightful advice and robust representation to our diverse clientele. Furthermore, Vijay has been instrumental in assisting companies with the unique legal challenges faced by startups and in navigating complex money recovery issues. His profound legal knowledge and exemplary leadership have been a significant driving force behind our firm's consistent growth and unwavering commitment to excellence."
    },
    {
      name: "Adv. Shweta Upadhyay",
      image: "/lovable-uploads/shweta-upadhyay.png",
      description: "Adv. Shweta Upadhyay stands out as a highly accomplished legal professional, distinguished by her specialized expertise in three critical areas of law: Matrimonial Law, Real Estate, and Banking Law. What truly sets her apart is her remarkable ability to combine a deeply compassionate approach with a sharp, incisive legal acumen, a quality that has consistently earned her the unwavering trust of both her diverse clientele and her professional peers. She possesses an exceptional talent for expertly navigating the complexities of a wide array of legal challenges, ranging from the sensitive and often emotionally charged nuances of family disputes to the intricate regulatory frameworks of real estate matters and the detailed intricacies of banking laws. In every case she undertakes, Adv. Upadhyay is committed to providing comprehensive support and robust representation, meticulously safeguarding her clients' interests and guiding them through their legal journeys. Beyond her individual case successes, her profound contributions have been instrumental in cultivating a distinctly client-centric and collaborative culture within her firm, fostering an environment where teamwork thrives and a deep, unwavering commitment to addressing and fulfilling client needs is paramount."
    },
    {
      name: "Adv. Abhijeet Singh Yadav",
      image: "/lovable-uploads/abhijeet-singh-yadav.png",
      description: "Adv. Abhijeet Singh Yadav is a highly distinguished legal professional whose practice is singularly focused on the intricate domains of Cyber Crime and Criminal Law. He brings to his work not only extensive experience but also a profound and nuanced understanding of cyber law, which is crucial in navigating the rapidly evolving digital landscape. This specialized knowledge allows him to expertly advise clients on a wide array of complex cybercrime issues, from data breaches and online fraud to digital harassment and cyber-enabled financial crimes. His success and strong reputation stem directly from his unwavering dedication to protecting clients' rights. Whether it's defending individuals accused of cyber offenses or representing them in broader criminal matters, Adv. Abhijeet combines his deep legal expertise with a strategic approach to advocacy. This potent combination has cemented his excellent standing in the field, earning him the respect of his peers and the trust of those he represents. Furthermore, Adv. Abhijeet is steadfast in his commitment to the highest standards of integrity and professionalism. This ensures that every client receives not just legal counsel, but top-notch representation characterized by ethical conduct, meticulous attention to detail, and a resolute pursuit of justice."
    }
  ];

  const teamMembers = [
    {
      name: "Adv. Vishisht Singh",
      image: "/lovable-uploads/vishisht-singh.png",
      description: "Adv. Vishisht Singh, an Associate, has been practicing law since 2018, initially at a PAN India law firm. He honed his skills across various matters, specializing in Civil Suits, VLPs, and Arbitration. After graduating from Government Law College, Mumbai, and joining the UP Bar in 2021, he now actively appears before the Supreme Court and Delhi High Court."
    },
    {
      name: "Adv. Oorja Jain",
      image: "/lovable-uploads/oorja-jain.png",
      description: "Adv Oorja Jain is a dedicated Indian Real Estate Lawyer with 5 years of experience successfully navigating property law complexities across Uttar Pradesh and Delhi. She has a high success rate at RERA and RERAT, representing numerous individual clients and builders. From seamless transactions to intricate disputes, she provides clear, practical guidance, committed to safeguarding your real estate investments with expert and timely legal support."
    },
    {
      name: "Adv. Paras Goel",
      image: "/lovable-uploads/paras-goel.png",
      description: "Advocate Paras Goel is an experienced legal professional with a strong background in advising multinational corporations and high-net-worth individuals. He specializes in corporate advisory, real estate, intellectual property, and employment law, including drafting and compliance. His expertise extends to corporate transactions and commercial contracts, and he's also a Trademark Attorney."
    },
    {
      name: "Adv. Vansh Kalra",
      image: "/lovable-uploads/vansh-kalra.jpg",
      description: "Adv Vansh Kalra excels in District Court, demonstrating a keen strategic acumen across sensitive matrimonial disputes and complex money recovery suits. Drawing from extensive experience, they consistently secure favorable settlements and judgments, adeptly drafting crucial legal documents. Their insightful advice and robust representation ensure clients' interests are paramount, whether navigating divorce proceedings or reclaiming significant funds. A formidable advocate, Adv Vansh's profound legal knowledge drives consistent success and client satisfaction."
    },
    {
      name: "Adv. Ved Kohli",
      image: "/lovable-uploads/ved-kohli.jpg",
      description: "Adv Ved Kohli is a highly skilled legal professional, specializing in Criminal Law and MACT Matters. With a sharp strategic acumen, they adeptly navigate the complexities of criminal defense, consistently securing justice for their clients. In MACT cases, they passionately represent victims of motor accidents, ensuring rightful compensation and comprehensive support. Adv. Ved Kohli's profound legal knowledge and unwavering commitment make them a formidable advocate in these specialized domains."
    },
    {
      name: "Adv. Pankaj Sharma",
      image: "/lovable-uploads/pankaj-sharma.png",
      description: "Adv. Pankaj Sharma is a dedicated advocate with our esteemed firm, bringing extensive experience in criminal, matrimonial, banking, and civil litigation. He has successfully navigated the complexities of the judicial system across various district courts, securing favourable outcomes for our clients. From securing acquittals and bail in serious criminal cases to resolving intricate matrimonial disputes and civil property matters, he provides clear, strategic guidance. Committed to upholding justice, he is a vital part of our team's mission to provide expert and diligent legal representation, safeguarding your rights and interests."
    },
    {
      name: "Adv. Abhay Aggarwal",
      image: "/lovable-uploads/b88e726b-a736-44e8-ab19-4abfbc86e18e.png",
      description: "Adv. Abhay Aggarwal is a distinguished legal professional renowned for his specialized expertise in Consumer Law and Insolvency Laws. He has worked meticulously with esteemed institutions such as the Insolvency and Bankruptcy Board of India (IBBI) and the National Company Law Appellate Tribunal (NCLAT). One of his defining strengths lies in his exemplary research capabilities—known for his methodical legal research, driven by deep intellectual curiosity and a commitment to justice. He brings to every case a meticulously researched foundation, enabling him to craft well-informed strategies tailored to each client. A collaborative team player, he fosters innovation and ethical integrity. In every role, Adv. Abhay Aggarwal stands as a thoughtful strategist, thorough researcher, and persuasive legal writer in India's evolving legal landscape."
    }
  ];


  const truncateText = (text: string, wordLimit: number = 20) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const TeamSection = ({ title, members, showReadMore = true }: { title: string; members: any[]; showReadMore?: boolean }) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div key={index} className="text-center bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 hover:border-amber-600 transition-colors">
            <div className="w-32 h-40 mx-auto mb-6 rounded-lg overflow-hidden border-4 border-slate-200 shadow-lg">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800">{member.name}</h3>
            {showReadMore && member.description && (
              <>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {truncateText(member.description)}
                </p>
                <Button
                  onClick={() => setSelectedMember(member)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2"
                >
                  Read More
                </Button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Team VLP</h1>
          <p className="text-xl text-amber-300 max-w-2xl mx-auto">
            Meet our experienced team of legal professionals dedicated to providing exceptional legal services.
          </p>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <TeamSection title="PARTNERS" members={partners} />
          <TeamSection title="TEAM" members={teamMembers} />
        </div>
      </section>

      {/* Member Detail Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-4">
                  {selectedMember.name}
                </DialogTitle>
              </DialogHeader>
              <div className="text-center">
                <div className="w-32 h-40 mx-auto mb-6 rounded-lg overflow-hidden border-4 border-slate-200 shadow-lg">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  {selectedMember.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <ContactButtons />
    </div>
  );
};

export default Team;
