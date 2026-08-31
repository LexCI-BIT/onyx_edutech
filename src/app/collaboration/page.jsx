"use client"

import Link from "next/link"
import { ExternalLink, MapPin, GraduationCap, Building2, Award, Target } from "lucide-react"

const partners = [
  {
    id: "sreenidhi",
    name: "Sreenidhi Institute of Science and Technology",
    shortName: "SNIST",
    location: "Yamnampet, Ghatkesar, Hyderabad – 501301",
    description:
      "An autonomous institution affiliated to Jawaharlal Nehru Technological University Hyderabad, SNIST is a premier engineering college known for its excellence in technical education, research, and innovation.",
    highlights: ["NAAC Accredited", "NBA Certified Programs", "World-class Infrastructure"],
    initial: "S",
    logo: "/snist-logo-uploaded.jpg",
    website: "https://sreenidhi.edu.in",
  },
  {
    id: "mru",
    name: "Malla Reddy University",
    shortName: "MRU",
    location: "Maisammaguda, Hyderabad, Telangana – 500100 | 100-Acre Campus",
    description:
      "Established in 2020, Malla Reddy University (MRU) is a UGC-recognised private university approved by the Government of Telangana. Spread across a 100-acre campus, it offers B.Tech, M.Tech, BBA, MBA, B.Sc, M.Sc, and Ph.D programmes across Engineering, Sciences, Management, Agriculture, and Allied Health Sciences.",
    highlights: ["UGC Recognised", "Govt. of Telangana Approved", "100-Acre Modern Campus"],
    initial: "M",
    logo: "/mru-logo.png",
    website: "https://mallareddyuniversity.ac.in",
  },
  {
    id: "griet",
    name: "Gokaraju Rangaraju Institute of Engineering and Technology",
    shortName: "GRIET",
    location: "Bachupally, Nizampet, Hyderabad – 500090",
    description:
      "GRIET is an autonomous institution affiliated to JNTUH, accredited with NAAC A++ grade. Renowned for academic excellence, world-class labs, strong placements, and a vibrant research culture across engineering and technology disciplines.",
    highlights: ["NAAC A++ Grade", "NBA Accredited", "Top Placements Record"],
    initial: "G",
    logo: "/griet-logo.jpg",
    website: "https://www.griet.ac.in",
  },
  {
    id: "mrecw",
    name: "Malla Reddy Engineering College for Women",
    shortName: "MRECW",
    location: "Maisammaguda, Dhulapally, Secunderabad – 500100",
    description:
      "An NAAC A+ and NBA accredited autonomous institution affiliated to JNTUH, MRECW is dedicated to empowering women engineers with quality technical education, industry exposure, and holistic development.",
    highlights: ["NAAC A+ Grade", "NBA Accredited", "Women-Focused STEM"],
    initial: "M",
    logo: "/mrecw-logo.jpg",
    website: "https://www.mallareddyecw.com",
  },
  {
    id: "ace",
    name: "ACE Engineering College",
    shortName: "ACE",
    location: "Ankushapur, Ghatkesar, Medchal District, Telangana",
    description:
      "Affiliated to JNTUH and accredited with NAAC 'A' grade, ACE Engineering College is committed to producing competent engineers through industry-relevant curriculum, state-of-the-art facilities, and practical learning.",
    highlights: ["NAAC 'A' Grade", "JNTUH Affiliated", "Industry-Oriented Curriculum"],
    initial: "A",
    logo: "/ace-logo.jpg",
    website: "https://www.aceec.ac.in",
  },
  {
    id: "gnits",
    name: "G. Narayanamma Institute of Technology & Science for Women",
    shortName: "GNITS",
    location: "Shaikpet, Hyderabad – 500008",
    description:
      "GNITS is a premier women's technical institution affiliated to JNTUH, holding NAAC A+ accreditation (CGPA 3.4, valid until 2029). It offers undergraduate and postgraduate engineering and science programmes with strong industry linkages.",
    highlights: ["NAAC A+ Grade", "JNTUH Affiliated", "Women-Centric Tech Education"],
    initial: "G",
    logo: "/gnits-logo.jpg",
    website: "https://gnits.ac.in",
  },
]

export default function CollaborationPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-orange-200 text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            Academic Partnerships
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Our <span className="text-orange-300">Collaborations</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Onyx Edutech is proud to partner with leading educational institutions — bridging the
            gap between academic knowledge and real-world industry skills.
          </p>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Trusted by Premier Institutions
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Through these strategic academic partnerships, Onyx Edutech delivers industry-aligned
            training directly to students across Hyderabad, helping them build the skills that
            today's employers demand.
          </p>
        </div>
      </section>

      {/* Partner Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Our Partner Institutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We collaborate with six outstanding institutions across Hyderabad — empowering thousands of students with industry-ready skills
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <article
                key={partner.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">

                  {/* Logo / Initial */}
                  <div className="flex items-center gap-4 mb-5">
                    {partner.logo ? (
                      <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden shrink-0 p-1">
                        <img
                          src={partner.logo}
                          alt={`${partner.shortName} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-blue-900 flex items-center justify-center text-xl font-black text-white shadow-md shrink-0">
                        {partner.initial}
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                        Partner Institution
                      </p>
                      <span className="text-sm font-bold text-blue-900">
                        {partner.shortName}
                      </span>
                    </div>
                  </div>

                  {/* Full name */}
                  <h3 className="text-base font-bold text-blue-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {partner.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-start gap-1.5 text-gray-500 text-xs mb-3">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>{partner.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                    {partner.description}
                  </p>

                  {/* Highlight badges — uniform blue-50 style matching site */}
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {partner.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border bg-blue-50 text-blue-800 border-blue-200"
                      >
                        <Award className="w-3 h-3" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA — uniform blue-900 matching site buttons */}
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 transition-all duration-300 hover:gap-3 hover:shadow-lg w-fit"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-3xl mx-auto text-center">
          <Building2 className="w-10 h-10 mx-auto mb-4 text-blue-900" />
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">
            Interested in Partnering with Us?
          </h3>
          <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-xl mx-auto">
            We are always open to collaborating with forward-thinking institutions that share our
            passion for quality education and student success.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  )
}
