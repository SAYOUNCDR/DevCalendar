const programs = [
  {
    name: "Google Summer of Code (GSoC)",
    type: "Open Source",
    months: ["March", "April"],
    description: "Global program focused on bringing new contributors into open source software development.",
    link: "https://summerofcode.withgoogle.com/"
  },
  {
    name: "Smart India Hackathon (SIH)",
    type: "Hackathon",
    months: ["August", "September"],
    description: "Nationwide initiative to provide students a platform to solve some of the pressing problems we face in our daily lives.",
    link: "https://sih.gov.in/"
  },
  {
    name: "Outreachy",
    type: "Open Source",
    months: ["February", "August"],
    description: "Internships for people subject to systemic bias and impacted by underrepresentation in the technical industry.",
    link: "https://www.outreachy.org/"
  },
  {
    name: "MLH Fellowship",
    type: "Fellowship",
    months: ["January", "May", "August"],
    description: "12-week internship alternative for aspiring software engineers. Batches start in Spring, Summer, and Fall.",
    link: "https://fellowship.mlh.io/"
  },
  {
    name: "Flipkart GRID",
    type: "Hackathon",
    months: ["June"],
    description: "Flipkart's Flagship Engineering Campus Challenge. Offers internships and full-time roles.",
    link: "https://unstop.com/"
  },
  {
    name: "Amazon WOW",
    type: "Hiring Challenge",
    months: ["April"],
    description: "Networking and mentorship platform for women in engineering, often leading to internships and FTE roles.",
    link: "https://amazonwow.splashthat.com/"
  },
  {
    name: "Google STEP Internships",
    type: "Internship",
    months: ["November", "December"],
    description: "Developmental opportunity for first and second-year undergraduate students.",
    link: "https://buildyourfuture.withgoogle.com/programs/step"
  },
  {
    name: "Microsoft Imagine Cup",
    type: "Competition",
    months: ["January", "February"],
    description: "Global student technology competition. Build something that matters.",
    link: "https://imaginecup.microsoft.com/"
  },
  {
    name: "Code Agon (CodeNation)",
    type: "Hiring Challenge",
    months: ["September", "October"],
    description: "CodeNation's nationwide coding challenge for hiring.",
    link: "https://codenationinnovationlabs.com/"
  },
  {
    name: "GirlScript Summer of Code",
    type: "Open Source",
    months: ["March", "April"],
    description: "A month-long open source development program run by the GirlScript Foundation.",
    link: "https://gssoc.girlscript.tech/"
  }
];

const companies = [
  {
    name: "Goldman Sachs",
    category: "Product",
    hiring_months: ["August", "September", "March"],
    roles: ["Summer Analyst (Intern)", "New Analyst (FTE)"],
    description: "Hires via ECHP (Engineering Campus Hiring Program). Interns in Aug/Sept, FTE in March."
  },
  {
    name: "Google",
    category: "Product",
    hiring_months: ["November", "December", "July"],
    roles: ["Winter Intern", "Summer Intern", "FTE"],
    description: "STEP Internships in Nov/Dec. FTE hiring often rolling or via Kick Start/Code Jam legacy timelines."
  },
  {
    name: "Amazon",
    category: "Product",
    hiring_months: ["April", "August", "December"],
    roles: ["SDE Intern", "FTE"],
    description: "Amazon WOW in April. 6-month intern hiring often peak in Dec/Jan."
  },
  {
    name: "Microsoft",
    category: "Product",
    hiring_months: ["November", "December"],
    roles: ["Intern", "FTE"],
    description: "Engage program and on-campus often align with late year. Off-campus 6-month intern drives in Winter."
  },
  {
    name: "TCS (Tata Consultancy Services)",
    category: "Service",
    hiring_months: ["June", "July", "January"],
    roles: ["Ninja", "Digital", "Prime"],
    description: "Mass hiring via NQT (National Qualifier Test). Campus season peaks June-July."
  },
  {
    name: "Infosys",
    category: "Service",
    hiring_months: ["February", "May", "September"],
    roles: ["Systems Engineer", "Power Programmer"],
    description: "HackWithInfy and InfyTQ are major entry points involved in early year."
  },
  {
    name: "Accenture",
    category: "Service",
    hiring_months: ["August", "September", "February"],
    roles: ["ASE", "FSE"],
    description: "Active off-campus drives frequently seen in Aug-Sept and early year."
  },
  {
    name: "Cognizant",
    category: "Service",
    hiring_months: ["August", "September"],
    roles: ["GenC", "GenC Next"],
    description: "Major mass hiring drives in the Q3 period."
  },
  {
    name: "Atlassian",
    category: "Product",
    hiring_months: ["June", "July"],
    roles: ["Intern", "FTE"],
    description: "Often visits top campuses in the standard internship window."
  },
  {
    name: "Uber",
    category: "Product",
    hiring_months: ["July", "August"],
    roles: ["Intern", "FTE"],
    description: "Uber HackTag and campus visits usually early in academic year."
  }
];

module.exports = { programs, companies };
