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
            name: "Prof. Guy Gogniat",
            role: "online",
            date: "April, 2026",
            institution: "Université Bretagne Sud, France",
            title: "Analysis of vulnerabilities in communication architectures in systems-on-chip with regard to fault attacks and countermeasure propositions for trusted IoT systems",
            image: "images/speakers/guygogniat.png"
        },
        {
            name: "Prof. Mawloud Omar",
            role: "online",
            date: "April, 2026",
            institution: "Université Bretagne Sud, France",
            title: "Blinded Training: Machine Learning over Encrypted Data",
            image: ""
        },
        {
            name: "Prof. Hasan Dag",
            role: "online",
            date: "April, 2026",
            institution: "Kadir Has University, Turkey",
            title: "From a Security Perspective: RAG and Prompt Engineering",
            image: "images/speakers/hasandag.jpg"
        },
        {
            name: "Prof. Sedat Akleylek",
            role: "online",
            date: "April, 2026",
            institution: "Kadir Has University, Turkey",
            title: "",
            image: "images/speakers/sedat.jpg"
        },
        {
            name: "Prof. Danilo Gligoroski",
            role: "online",
            date: "April, 2026",
            institution: " Norwegian University of Science and Technology",
            title: "",
            image: "images/speakers/danilo.jpg"
        },
        {
            name: "Prof. Reiner Creutzburg",
            role: "online",
            date: "April, 2026",
            institution: "SRH University, Germany",
            title: "Digital Forensics For Cyber-Future: Technics, Challenges, and Emerging Trends",
            image: "images/speakers/reiner.png"
        },
        {
            name: "Bozidar Spirovski",
            role: "on-site",
            date: "Masterclass",
            institution: "Blue dot and Sourcico",
            title: "Cyber Everywhere All at Once – 4-day intensive, scenario-based cybersecurity workshop",
            image: "images/speakers/bozidarspirovski.png"
        }

    ],
    SCHEDULE: [
        {
            id: 'day1',
            date: 'April 20, 2026',
            title: 'Mastering Vulnerability Management',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day2',
            date: 'April 21, 2026',
            title: 'Disaster Recovery & Business Continuity',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day3',
            date: 'April 22, 2026',
            title: 'Incident Response & Risk Assessment',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day4',
            date: 'April 23, 2026',
            title: 'Security Governance & Audit Readiness',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
    ],

        ONLINE: [
        {
            id: 'day1',
            title: 'Opening',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day2',
            title: 'TBA',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day3',
            title: 'TBA',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day4',
            title: 'TBA',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
    ],


    PARTNERS: [
        {
            name: "Kadir Has University",
            logo: "./images/partners/kadir-has.png",
            alt: "Kadir Has University Logo",
            link: "https://www.khas.edu.tr/en/"
        },
        {
            name: "SRH University",
            logo: "./images/partners/srh.png",
            alt: "SRH University Logo",
            link: "https://www.srh-university.de/en/"
        },
        {
            name: "Université Bretagne Sud",
            logo: "./images/partners/ubs.png",
            alt: "Southern Brittany University Logo",
            link: "https://www.univ-ubs.fr/en/"
        },
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
            answer: "The programme is open to <strong>Master's students</strong> from cybersecurity, informatics, engineering, and related fields from partner institutions. The participants should have a strong interest in cybersecurity, AI, programming, and practical skills in cybersecurity contexts."
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