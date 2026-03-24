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
        EMAIL: "bip.finki@finki.ukim.mk",
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
        { name: 'Venue', href: '#venue' },
        { name: 'Speakers', href: '#speakers' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Partners', href: '#partners' }
    ],
    SPEAKERS: [
        {
            name: "Prof. Guy Gogniat",
            role: "online",
            date: "02 April, 2026",
            institution: "Université Bretagne Sud, France",
            title: "Analysis of vulnerabilities in communication architectures in systems-on-chip with regard to fault attacks and countermeasure propositions for trusted IoT systems",
            image: "images/speakers/guy.png"
        },
        {
            name: "Prof. Mawloud Omar",
            role: "online",
            date: "17 April, 2026",
            institution: "IRISA Laboratory, Université Bretagne Sud, France",
            title: "Blinded Training: Machine Learning over Encrypted Data",
            image: "images/speakers/omar.png"
        },
        {
            name: "Prof. Hasan Dag",
            role: "online",
            date: "17 April, 2026",
            institution: "Kadir Has University, Turkey",
            title: "From a Security Perspective: RAG and Prompt Engineering",
            image: "images/speakers/hasandag.jpg"
        },
        {
            name: "Prof. Sedat Akleylek",
            role: "online",
            date: "02 April, 2026",
            institution: "University in Tartu, Estonia",
            title: "Lattice-based cryptographic schemes",
            image: "images/speakers/sedat.png"
        },
        {
            name: "Prof. Reiner Creutzburg",
            role: "online",
            date: "09 April, 2026",
            institution: "SRH Heidelberg University of Applied Sciences, Campus Berlin, Germany",
            title: "Digital Forensics For Cyber-Future: Technics, Challenges, and Emerging Trends",
            image: "images/speakers/reiner.png"
        },
        {
            name: "Prof. Ivan Chorbev",
            role: "online",
            date: "09 April, 2026",
            institution: "FCSE, Ss. Cyril and Methodius University in Skopje",
            title: "AI strengthening Cybersecurity, AI abused for Cyberattacks, and AI threatened by Cyberattacks",
            image: "images/speakers/ivan.png"
        },
        {
            name: "Bozidar Spirovski",
            role: "on-site",
            date: "Masterclass",
            institution: "Blue dot and Sourcico",
            title: "Cyber Everywhere All at Once – 4-day intensive, scenario-based cybersecurity workshop",
            image: "images/speakers/bozidarspirovski.jpg"
        },
        {
            name: "Prof. Danilo Gligoroski",
            role: "on-site",
            date: "24 April, 2026",
            institution: "Norwegian University of Science and Technology",
            title: "Building an app for doing encryption over LLM chat channels",
            image: "images/speakers/danilo.jpg"
        },
        {
            name: "Prof. Vesna Dimitrova",
            role: "on-site",
            date: "02 April & 24 April, 2026",
            institution: "FCSE, Ss. Cyril and Methodius University in Skopje",
            title: "Cyber Future in practice: Challenges and Opportunities in the Era of AI and IoT",
            image: "images/speakers/vesna.png"
        },
        {
            name: "Ognen Plavevski",
            role: "on-site",
            date: "24 April, 2026",
            institution: "HTEC",
            title: "Identity as Infrastructure: The Self-Sovereign Identity Shift",
            image: "images/speakers/ognen.png"
        },
        {
            name: "Nadica Naumova",
            role: "on-site",
            date: "24 April, 2026",
            institution: "HTEC",
            title: "Cybersecurity: Beyond Compliance, Toward Resilience",
            image: "images/speakers/nadica.png"
        },
        {
            name: "Romana Stojceska",
            role: "on-site",
            date: "Masterclass",
            institution: "BeyondMachines",
            title: "Cyber Everywhere All at Once – 4-day intensive, scenario-based cybersecurity workshop",
            image: "images/speakers/romana.png"
        }
    ],
    SCHEDULE: [
        {
            id: 'day1',
            date: '20 April, 2026',
            title: 'Mastering Vulnerability Management',
            sessions: [
                { time: '09:00', task: 'Opening ', speaker: 'Prof. Vesna Dimitrova, Rector, Dean' },
                { time: '09:30', task: 'Coffee Break', speaker: null },
                { time: '10:00', task: 'Cyber Future ', speaker: 'Prof. Vesna Dimitrova' },
                { time: '10:30', task: 'Masterclass ', speaker: 'Bozidar Spirovski' },
                { time: '12:00', task: 'Lunch Break', speaker: null },
                { time: '13:00', task: 'Masterclass ', speaker: 'Bozidar Spirovski' },
            ]
        },
        {
            id: 'day2',
            date: '21 April, 2026',
            title: 'Disaster Recovery & Business Continuity',
            sessions: [
                { time: '09:00', task: 'Masterclass ', speaker: 'Bozidar Spirovski' },
                { time: '12:00', task: 'Lunch Break', speaker: null },
                { time: '13:00', task: 'Masterclass ', speaker: 'Bozidar Spirovski' },
                { time: '15:00', task: 'Coffee Break', speaker: null },
                { time: '15:30', task: 'Working in teams', speaker: 'Prof. Guy Gogniat, Prof. Reiner Creutzburg' },
            ]
        },
        {
            id: 'day3',
            date: '22 April, 2026',
            title: 'Incident Response & Risk Assessment',
            sessions: [
                { time: '09:00', task: 'Masterclass ', speaker: 'Bozidar Spirovski' },
                { time: '12:00', task: 'Lunch Break', speaker: null },
                { time: '13:00', task: 'Masterclass ', speaker: 'Bozidar Spirovski' },
                { time: '15:00', task: 'Coffee Break', speaker: null },
                { time: '15:30', task: 'Working in teams', speaker: 'Prof. Hasan Dag, Prof. Reiner Creutzburg' },
                { time: '20:00', task: 'Social Event at Netaville', speaker: null },
            ]
        },
        {
            id: 'day4',
            date: '23 April, 2026',
            title: 'Security Governance & Audit Readiness',
            sessions: [
                { time: '09:00', task: 'Masterclass ', speaker: 'Bozidar Spirovski' },
                { time: '12:00', task: 'Lunch Break', speaker: null },
                { time: '13:00', task: 'Masterclass ', speaker: 'Bozidar Spirovski' },
                { time: '15:00', task: 'Coffee Break', speaker: null },
                { time: '15:30', task: 'Working in teams', speaker: 'Prof. Guy Gogniat, Prof. Hasan Dag' },
            ]
        },
        {
            id: 'day5',
            date: '24 April, 2026',
            title: 'Final Presentations & Certificates Awarded',
            sessions: [
                { time: '09:00', task: 'Building an app for doing encryption over LLM chat channels ', speaker: 'Prof. Danilo Gligoroski' },
                { time: '10:30', task: 'Coffee Break', speaker: null },
                { time: '11:00', task: 'Identity as Infrastructure: The Self-Sovereign Identity Shift', speaker: 'Ognen Plavevski' },
                { time: '12:00', task: 'Cybersecurity: Beyond Compliance, Toward Resilience', speaker: 'Nadica Naumova' },
                { time: '12:30', task: 'Closing ceremony / certificates ', speaker: null },
                { time: '13:00', task: 'Lunch + Skopje Sightseeing Tour', speaker: null },                
            ]
        },
    ],

        ONLINE: [
        {
            date: '02 April, 2026',
            title: 'Fault-Tolerant IoT and Lattice Cryptography',
            sessions: [
                { time: '15:00', task: 'Opening ', speaker: 'Prof. Vesna Dimitrova' },
                { time: '15:30', task: 'Analysis of vulnerabilities in communication architectures in systems-on-chip with regard to fault attacks and countermeasure propositions for trusted IoT systems ', speaker: 'Prof. Guy Gogniat' },
                { time: '17:00', task: 'Break' },
                { time: '17:30', task: 'Lattice-based cryptographic schemes ', speaker: 'Prof. Sedat Akleylek' },
            ]
        },
        {
            date: '09 April, 2026',
            title: 'AI Cybersecurity and Digital Forensics',
            sessions: [
                { time: '15:00', task: 'AI strengthening Cybersecurity, AI abused for Cyberattacks, and AI threatened by Cyberattacks ', speaker: 'Prof. Ivan Chorbev' },
                { time: '16:30', task: 'Break' },
                { time: '17:00', task: 'Digital Forensics For Cyber-Future: Technics, Challenges, and Emerging Trends ', speaker: 'Prof. Reiner Creutzburg' },
            ]
        },
        {
            date: '17 April, 2026',
            title: 'Smart Encryption and Prompt Engineering',
            sessions: [
                { time: '15:00', task: 'Blinded Training: Machine Learning over Encrypted Data', speaker: 'Prof. Mawloud Omar' },
                { time: '16:30', task: 'Break' },
                { time: '17:00', task: 'From a Security Perspective: RAG and Prompt Engineering ', speaker: 'Prof. Hasan Dag' },
                { time: '18:30', task: 'Closing of Online Sessions' },
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