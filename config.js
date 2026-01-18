export const CONFIG = {
    EVENT: {
        NAME: "Cyber-future",
        EDITION: "BIP 2026",
        FULL_DATE: "20-24 April 2026",
        START_DATE_ISO: "April 20, 2026 09:00:00",
        LOCATION_NAME: "FINKI, Skopje",
        HOST: "Faculty of Computer Science and Engineering",
        UNIVERSITY: "Ss. Cyril and Methodius University in Skopje",
        ADDRESS: "Rugjer Boshkovikj 16, Skopje 1000, North Macedonia",
        MAP_URL: "https://goo.gl/maps/example"
    },
    CONTACT: {
        EMAIL: "bip@finki.ukim.mk",
        HOURS: "Open 9:00 – 17:00, week days",
        SOCIALS: {
            LINKEDIN: "#",
            FACEBOOK: "#",
            INSTAGRAM: "#"
        }
    },
    NAV_ITEMS: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Partners', href: '#partners' },
        { name: 'Venue', href: '#venue' },
        { name: 'Speakers', href: '#speakers' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'FAQ', href: '#faq' }
    ],
    SPEAKERS: [
        {
            name: "Dr. Researcher Name",
            role: "Keynote Speaker",
            institution: "FINKI, UKIM",
            bio: "Expert in state-of-the-art cyber-defense and VR laboratory applications.",
            image: "https://placehold.co/600x600/e2e8f0/1e293b?text=Expert+1"
        },
        {
            name: "Prof. Partner Name",
            role: "Partner Expert",
            institution: "Partner University",
            bio: "Specializing in virtual learning models and international collaboration.",
            image: "https://placehold.co/600x600/e2e8f0/1e293b?text=Expert+2"
        },
  {
            name: "Prof. Partner Name",
            role: "Partner Expert",
            institution: "Partner University",
            bio: "Specializing in virtual learning models and international collaboration.",
            image: "https://placehold.co/600x600/e2e8f0/1e293b?text=Expert+2"
        },
    ],
    SCHEDULE: [
        {
            id: 'day1',
            title: 'Mastering Vulnerability Management',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day2',
            title: 'Incident Response & Risk Assessment',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day3',
            title: 'Security Governance & AI Integration',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day4',
            title: 'IoT Security Challenges',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
    ],
    PARTNERS: [
        {
            name: "Faculty of Computer Science and Engineering",
            logo: "/images/partners/finki.png",
            alt: "FCSE FINKI Logo",
            link: "https://finki.ukim.mk"
        },
        {
            name: "Ss. Cyril and Methodius University",
            logo: "/images/partners/ukim logo.png",
            alt: "UKIM Logo",
            link: "https://ukim.edu.mk"
        },
        {
            name: "BIP Programme",
            logo: "/images/partners/erasmus.png",
            alt: "Erasmus+ Logo",
            link: "https://erasmusbip.org/"
        },
        {
            name: "Kadir Has University",
            logo: "/images/partners/kadir has.png",
            alt: "Kadir Has University Logo",
            link: "https://www.khas.edu.tr/en/"
        },
        {
            name: "SRH University",
            logo: "/images/partners/srh.png",
            alt: "SRH University Logo",
            link: "https://www.srh-university.de/en/"
        }
    ],

    FAQ: [
        {
            id: 1,
            question: "What exactly is a Blended Intensive Programme (BIP)?",
            answer: "A BIP is an Erasmus+ initiative that combines short-term physical mobility with a virtual component. In this programme, you will participate in online lectures from February to April before joining us for a 5-day intensive training in Skopje."
        },
        {
            id: 2,
            question: "Who is eligible to participate?",
            answer: "The programme is open to Master's students from cybersecurity, informatics, engineering, and related fields from partner institutions. The participants should have a strong interest in cybersecurity, AI, programming, and practical skills in cybersecurity contexts."
        },
        {
            id: 3,
            question: "What cybersecurity topics are covered?",
            answer: "The curriculum focuses on turning state-of-the-art research in <strong>IoT, AI, and cryptology</strong> into practical cyber-training scenarios. This includes vulnerability management, incident response, and security governance."
        },
        {
            id: 4,
            question: "Where exactly will the training be held?",
            answer: "The physical week takes place at the <strong>Faculty of Computer Science and Engineering (FINKI)</strong>, located at Rugjer Boshkovikj 16, Skopje 1000, North Macedonia."
        },
        {
            id: 5,
            question: "What do the students receive?",
            answer: "Students receive <strong>3 ECTS credits</strong> for the physical week and the online components, as well as a <strong>certificate of participation</strong> upon successful completion."
        }
    ],
};