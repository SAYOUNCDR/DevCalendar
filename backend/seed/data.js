const programs = [
  {
    name: "Google Summer of Code (GSoC)",
    type: "Open Source",
    months: ["March", "April"],
    timeline_details: "Contributor applications: March 16 - March 31, 2026. Org applications: Jan 19 - Feb 3, 2026.",
    description: "Global program focused on bringing new contributors into open source. Stipend is PPP-based. 12+ week programming projects.",
    link: "https://summerofcode.withgoogle.com/"
  },
  {
    name: "LFX Mentorship",
    type: "Open Source",
    months: ["January", "April", "July"],
    timeline_details: "Quarterly cycles. Spring: Jan-Feb, Summer: Apr-May, Fall: July-Aug.",
    description: "Remote learning opportunities for 12-24 weeks working on Linux Kernel, Hyperledger, and Cloud Native projects. Stipend: $3000 - $6000.",
    link: "https://lfx.linuxfoundation.org/mentorship/"
  },
  {
    name: "Smart India Hackathon (SIH)",
    type: "Hackathon",
    months: ["August", "September", "November", "December"],
    timeline_details: "Internal College Hackathons: Aug-Sept. Grand Finale: Nov-Dec.",
    description: "World's largest open innovation model. Problem statements released in late August. Winners get ₹1 Lakh prize money.",
    link: "https://sih.gov.in/"
  },
  {
    name: "Outreachy",
    type: "Open Source",
    months: ["January", "August"],
    timeline_details: "May Cohort apps: Jan-Feb. Dec Cohort apps: Aug-Sept.",
    description: "Paid, remote internships for people subject to systemic bias and underrepresentation in tech. Stipend: $7,000.",
    link: "https://www.outreachy.org/"
  },
  {
    name: "MLH Fellowship",
    type: "Fellowship",
    months: ["January", "May", "August"],
    timeline_details: "Three 12-week batches per year (Spring, Summer, Fall).",
    description: "Remote internship alternative. Tracks: Software Engineering, Open Source, and Web3. Educational stipend provided.",
    link: "https://fellowship.mlh.io/"
  },
  {
    name: "Flipkart GRiD 7.0",
    type: "Hackathon",
    months: ["June", "July"],
    timeline_details: "Registration: June 16 - June 30, 2025. Finale: July/August.",
    description: "Flipkart's flagship engineering campus challenge. Open to all engineering batches (2026-2030). Offers SDE-1 roles (₹32 LPA) and Internships.",
    link: "https://unstop.com/competitions/flipkart-grid"
  },
  {
    name: "Amazon WoW (Women of the World)",
    type: "Hiring Challenge",
    months: ["February", "April"],
    timeline_details: "Applications typically open Feb-April. Interviews happen rolling.",
    description: "Networking and mentorship platform for women in engineering. Primary funnel for Amazon Internships and FTE roles.",
    link: "https://amazonwow.splashthat.com/"
  },
  {
    name: "Google STEP Internships",
    type: "Internship",
    months: ["November", "December"],
    timeline_details: "Applications open Nov/Dec for the following summer.",
    description: "Student Training in Engineering Program. Developmental opportunity specifically for first and second-year undergraduate students.",
    link: "https://buildyourfuture.withgoogle.com/programs/step"
  },
  {
    name: "Microsoft Imagine Cup",
    type: "Competition",
    months: ["January", "February"],
    timeline_details: "Global registration often closes in Jan. Regional finals in Feb.",
    description: "Global student technology competition. Categories: Earth, Education, Health, and Lifestyle. Winners get cash prizes and mentorship.",
    link: "https://imaginecup.microsoft.com/"
  },
  {
    name: "CodeAgon (CodeNation)",
    type: "Hiring Challenge",
    months: ["July", "August"],
    timeline_details: "Registration Deadline: July 31, 2025. Contest: August 21, 2025.",
    description: "Nationwide coding challenge for freshers. Offers CNIL SDE roles (₹30L+ LPA). Heavy focus on DSA.",
    link: "https://codenationinnovationlabs.com/"
  },
  {
    name: "GirlScript Summer of Code",
    type: "Open Source",
    months: ["February", "March"],
    timeline_details: "Participant registration: Feb-Mar. Coding Phase: May-Aug.",
    description: "Beginner-friendly open source program. Good for learning Git/GitHub flow. Unpaid (Swags/Prizes only).",
    link: "https://gssoc.girlscript.tech/"
  },
  {
    name: "Uber HackTag 2.0",
    type: "Hiring Challenge",
    months: ["January", "February"],
    timeline_details: "Registration: Jan - Feb 2025. Coding Round: Feb.",
    description: "Uber's flagship hiring hackathon for engineering students. Direct route to Internship and FTE offers.",
    link: "https://unstop.com/hackathons/uber-hacktag"
  },
  {
    name: "Juspay Hiring Challenge",
    type: "Hiring Challenge",
    months: ["July", "August"],
    timeline_details: "Registration Deadline: July 13, 2025. Coding Round: August.",
    description: "Known for a grueling 2-day coding hackathon (part B). Offers high conversion to FTE (₹21-27 LPA). Target: Pre-final/Final year.",
    link: "https://juspay.io/careers"
  },
  {
    name: "Myntra HackerRamp: WeForShe",
    type: "Hiring Challenge",
    months: ["August", "September", "October"],
    timeline_details: "Registration: Aug 20 - Sept 3, 2025. Finale: October.",
    description: "Diversity hiring hackathon for women. Winners get Pre-Placement Interviews (PPIs) for internships/FTE.",
    link: "https://unstop.com/"
  },
  {
    name: "TCS CodeVita",
    type: "Competition",
    months: ["March", "April"],
    timeline_details: "Season 13 expected Mar/Apr for registration. Global contest.",
    description: "Global coding contest. Top performers get direct interviews for 'Prime' (₹9-11 LPA) and 'Digital' roles. Valid for 2 years.",
    link: "https://codevita.tcsapps.com/"
  },
  {
    name: "Adobe India Hackathon (SheCodes)",
    type: "Hiring Challenge",
    months: ["June", "July"],
    timeline_details: "Registration Deadline: July 10, 2025.",
    description: "For women students graduating in 2027. Offers internships (₹1L/month) and PPOs. Includes coding and prototype rounds.",
    link: "https://www.adobe.com/careers.html"
  },
  {
    name: "Cisco Ideathon",
    type: "Hiring Challenge",
    months: ["June", "July"],
    timeline_details: "Registration: June 2025. Internship starts: Jan 2026.",
    description: "For Networking Academy students and general stream. Focus on Networking, Python, and Security. Offers Internship + FTE.",
    link: "https://www.cisco.com/c/en_in/about/careers.html"
  },
  {
    name: "HackCBS 8.0",
    type: "Hackathon",
    months: ["September", "November"],
    timeline_details: "Registration opens: Sept 21. Event: Nov 8-9, 2025.",
    description: "One of India's largest student-run hackathons held in Delhi. Major networking hub for students and Web3 startups.",
    link: "https://hackcbs.tech/"
  },
  {
    name: "ETHGlobal New Delhi",
    type: "Hackathon",
    months: ["September"],
    timeline_details: "Event Dates: Sept 26 - 28, 2025.",
    description: "Premier Web3 hackathon. Massive prize pools ($100k+). Focus on Ethereum ecosystem.",
    link: "https://ethglobal.com/"
  },
  {
    name: "Samsung PRISM",
    type: "Fellowship",
    months: ["September", "October"],
    timeline_details: "Applications typically open Sept-Oct for the academic year.",
    description: "Student-Industry engagement program. Students work on R&D projects (worklets) with Samsung engineers. Certificates & rewards.",
    link: "https://www.samsungprism.com/"
  }
];

const companies = [
  {
    name: "Goldman Sachs",
    category: "Product",
    hiring_months: ["July", "August", "September"],
    roles: ["Analyst", "Summer Analyst"],
    description: "Hires via 'Engineering Campus Hiring Program' (ECHP). Aptitude + Coding tests. Internship drives often in Aug/Sept for next summer."
  },
  {
    name: "Google",
    category: "Product",
    hiring_months: ["July", "August", "February"],
    roles: ["Software Engineer", "Intern"],
    description: "Girl Hackathon in Feb. University Graduate & Intern apps open July-Sept. Winter intern apps close by Oct."
  },
  {
    name: "Amazon",
    category: "Product",
    hiring_months: ["July", "August", "September", "February", "April"],
    roles: ["SDE Intern", "SDE"],
    description: "Amazon WoW (Women) in Feb-Apr. Mass hiring for 6-month interns peaks in Q3 (July-Sept) for the next Jan start."
  },
  {
    name: "Microsoft",
    category: "Product",
    hiring_months: ["May", "June", "August", "September", "October"],
    roles: ["Software Engineer", "Intern"],
    description: "Engage Program (mentorship) starts May/June. Summer Internship hiring is heavily concentrated in Aug-Oct for the next year."
  },
  {
    name: "TCS (Tata Consultancy Services)",
    category: "Service",
    hiring_months: ["December", "March"],
    roles: ["Ninja", "Digital", "Prime"],
    description: "NQT (National Qualifier Test) occurs quarterly. Dec 25 (Winter) and Mar 15 (Spring) are key dates for 2025/26 batches."
  },
  {
    name: "Infosys",
    category: "Service",
    hiring_months: ["February", "March", "August"],
    roles: ["System Engineer", "Power Programmer"],
    description: "HackWithInfy registration Feb-Mar. Power Programmer roles offered via contest. Mass hiring drives also in Aug."
  },
  {
    name: "Accenture",
    category: "Service",
    hiring_months: ["January", "February", "August", "September"],
    roles: ["Associate Software Engineer"],
    description: "Zone Hiring drives. Phase 1 in Jan/Feb. Phase 2 (larger volume) in Aug-Sept. Known for cognitive/technical assessment."
  },
  {
    name: "Cognizant",
    category: "Service",
    hiring_months: ["July", "August", "September"],
    roles: ["GenC", "GenC Next"],
    description: "Mass hiring peaks in Q3. GenC Next offers higher package (6.75 LPA) requires strong coding skills."
  },
  {
    name: "Atlassian",
    category: "Product",
    hiring_months: ["May", "June", "July"],
    roles: ["Software Engineer", "Intern"],
    description: "'Women in Tech' internship drive often in May/June. Campus visits for FTE occur June-July."
  },
  {
    name: "Flipkart",
    category: "Product",
    hiring_months: ["June", "July"],
    roles: ["SDE-1", "Intern"],
    description: "Hires primarily through 'Flipkart GRiD' challenge (June). Also conducts 'Runway' for women and off-campus drives."
  },
  {
    name: "Salesforce",
    category: "Product",
    hiring_months: ["August", "September"],
    roles: ["MTS", "Intern"],
    description: "Futureforce recruitment peaks in Fall (Aug-Sept). Also has a 'Women in Tech' & 'Return to Work' program."
  },
  {
    name: "Walmart Global Tech",
    category: "Product",
    hiring_months: ["February", "March"],
    roles: ["Software Engineer", "Intern"],
    description: "Hires significantly through 'CodeHers' (Women) in Feb/Mar. General hiring often aligns with college placement season."
  },
  {
    name: "Oracle",
    category: "Product",
    hiring_months: ["August", "September"],
    roles: ["Member of Technical Staff"],
    description: "Heavy campus recruiter in Aug/Sept. Online tests are notoriously difficult (Math/CS fundamentals)."
  },
  {
    name: "Cisco",
    category: "Product",
    hiring_months: ["June", "July"],
    roles: ["Software Engineer", "Intern"],
    description: "Ideathon in June is the main entry. Internship starts in Jan (6-month) or Summer."
  },
  {
    name: "American Express",
    category: "Product",
    hiring_months: ["March", "April", "August"],
    roles: ["Engineer", "Analyst"],
    description: "Hosts 'Makeathon' / 'CodeStreet' in March/April. Diversity drives are common in August."
  },
  {
    name: "Juspay",
    category: "Product",
    hiring_months: ["July", "August"],
    roles: ["SDE", "Intern"],
    description: "Hiring Challenge deadline July 13. Famous for 2-day long coding hackathon part. High conversion rate."
  },
  {
    name: "D. E. Shaw",
    category: "Product",
    hiring_months: ["August"],
    roles: ["Quality & Test Engineering", "Software Engineer"],
    description: "Ascend Program (Women) applications in Aug. Campus hiring for interns is very selective."
  },
  {
    name: "Arcesium",
    category: "Product",
    hiring_months: ["July", "August"],
    roles: ["Software Engineer", "Intern"],
    description: "Often visits top campuses early in the season (July/Aug). Focuses heavily on DSA and Core CS subjects."
  },
  {
    name: "Media.net",
    category: "Product",
    hiring_months: ["October", "November"],
    roles: ["Software Engineer", "Site Reliability Engineer"],
    description: "Conducts off-campus coding drives late in the year (Oct/Nov). Pay is top-tier (30L+)."
  },
  {
    name: "Zoho",
    category: "Product",
    hiring_months: ["January", "October"],
    roles: ["Software Developer"],
    description: "Zoho Schools 'Zestober' challenge in Oct. Examless evaluation/portfolio submission route available."
  }
];

module.exports = { programs, companies };