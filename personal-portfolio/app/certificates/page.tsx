'use client'
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const CertificatesShowcase = () => {
  interface Certificate {
    id: number;
    title: string;
    image: string;
    date: string;
  }
  
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  
  const certificates = [
    {
        id: 1,
        title: "The 2022 ICPC Asia Dhaka Regional Contest",
        image: "https://raw.githubusercontent.com/coderskamrul/assets/refs/heads/main/ICPC%202022.jpeg",
        date: "2022"
      },
      {
        id: 2,
        title: "The 2023 ICPC Asia Dhaka Regional Contest",
        image: "https://i.ibb.co.com/PZRwbmSW/icpc-2023.jpg",
        date: "2023"
      },
      {
        id: 3,
        title: "The 2023 ICPC Asia West Continent Final Contest",
        image: "https://i.ibb.co.com/5tn62cN/ICPC-Asia-Wast.png",
        date: "2023"
      },
      {
        id: 4,
        title: "Intra University Programming Contest, Fall - 2022, IUBAT",
        image: "https://i.ibb.co.com/r24ZSFbz/1668746200101-01.jpg",
        date: "2023"
      },
      {
        id: 5,
        title: "Intra University Programming Contest, Summer - 2022, IUBAT",
        image: "https://i.ibb.co.com/8LxcwCDN/1668746618212-01.jpg",
        date: "2023"
      },
      {
        id: 6,
        title: "UITS Collaboration Programming Contest, Fall – 2023, UITS",
        image: "https://i.ibb.co.com/ZpXkGM3V/UITS-Contest-Certificate.jpg",
        date: "2023"
      },
      {
        id: 7,
        title: "IUBAT Collaboration Programming Contest – 2023, IUBAT",
        image: "https://i.ibb.co.com/00LHs0h/Md-Kamrul-Hasan.jpg",
        date: "2023"
      },
      {
        id: 8,
        title: "Academic Mentor Certificates from IUBAT - 2022",
        image: "https://i.ibb.co.com/tPKGzBsn/Mentor-Certificates.jpg",
        date: "2023"
      },
      {
        id: 9,
        title: "Programming Camp Certificate from BUBT - 2023",
        image: "https://i.ibb.co.com/8DyQJ0mJ/programming-camp-BUBT.jpg",
        date: "2023"
      },
      {
        id: 10,
        title: "Competitive Programming Trainer Certificate from Language C - 2022",
        image: "https://i.ibb.co.com/DHbQxyXs/Language-C-Trainer-Certificate.jpg",
        date: "2023"
      },
      {
        id: 11,
        title: "Problem Setter Certificate from Codiction - 2023",
        image: "https://i.ibb.co.com/v4cdPPNq/Md-Kamrul-Hasan-Practice-Contest-for-ICPC-by-Codiction.png",
        date: "2023"
      },
      {
        id: 12,
        title: "Microsoft Student Ambassador Certificate - 2023",
        image: "https://i.ibb.co.com/Pzf4dbn5/Microsoft-Student-Ambassador-Certificate.png",
        date: "2023"
      },
      {
        id: 13,
        title: "Book Reading Certificate from IUBAT - 2020",
        image: "https://i.ibb.co.com/qM01wM9b/1668745747567-01.jpg",
        date: "2023"
      },
      {
        id: 14,
        title: "CSS Certificate from HackerRank - 2022",
        image: "https://i.ibb.co.com/chSJbvcb/CSS-Certificate.png",
        date: "2023"
      },
  ];

  return (
    <section className="w-full">
      {/* Page Header */}
      <div className="relative bg-background border-border">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h1 className="text-center mt-8 text-4xl font-extrabold text-foreground sm:text-5xl sm:tracking-tight lg:text-6xl">
            Certificates
          </h1>
          <p className="mt-5 text-xl text-center text-muted-foreground">
            Recognition of achievements and participations in various competitions and events
          </p>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="group cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedCert(cert)}
            >
              <CardContent className="p-0">
                <div className="relative pt-[75%]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 bg-card text-card-foreground">
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal/Popup */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-3xl w-[90%]">
            {/* Close button positioned outside the modal */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute right-4 -top-8 text-muted-foreground hover:text-foreground z-10 bg-card rounded-full p-2 border border-border shadow-lg transform translate-x-full"
            >
              <X size={24} />
            </button>
            
            <div className="bg-card rounded-lg overflow-hidden shadow-lg max-h-[85vh] overflow-y-auto"
                 onClick={e => e.stopPropagation()}>
              <div className="relative pt-[65%]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              </div>
              {/* <div className="p-4 bg-card text-card-foreground">
                <h3 className="text-xl font-bold mb-2">{selectedCert.title}</h3>
                <p className="text-muted-foreground">{selectedCert.date}</p>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesShowcase;