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
            date: "April, 2026",
            institution: "Université Bretagne Sud, France",
            title: "Analysis of vulnerabilities in communication architectures in systems-on-chip with regard to fault attacks and countermeasure propositions for trusted IoT systems",
            image: "images/speakers/guy.png"
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
            institution: "University in Tartu, Estonia",
            title: "",
            image: "images/speakers/sedat.png"
        },
        {
            name: "Prof. Reiner Creutzburg",
            role: "online",
            date: "April, 2026",
            institution: "SRH Heidelberg University of Applied Sciences, Campus Berlin, Germany",
            title: "Digital Forensics For Cyber-Future: Technics, Challenges, and Emerging Trends",
            image: "images/speakers/reiner.png"
        },
        {
            name: "Prof. Ivan Chorbev",
            role: "online",
            date: "April, 2026",
            institution: "FCSE, Ss. Cyril and Methodius University in Skopje",
            title: "",
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
            date: "April, 2026",
            institution: "Norwegian University of Science and Technology",
            title: "Building an app for doing encryption over LLM chat channels",
            image: "images/speakers/danilo.jpg"
        },
        {
            name: "Prof. Vesna Dimitrova",
            role: "on-site",
            date: "April, 2026",
            institution: "FCSE, Ss. Cyril and Methodius University in Skopje",
            title: "Cyber Future in practice: Challenges and Opportunities in the Era of AI and IoT",
            image: "images/speakers/vesna.png"
        },


    ],
    SCHEDULE: [
        {
            id: 'day1',
            date: '20 April, 2026',
            title: 'Mastering Vulnerability Management',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day2',
            date: '21 April, 2026',
            title: 'Disaster Recovery & Business Continuity',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day3',
            date: '22 April, 2026',
            title: 'Incident Response & Risk Assessment',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day4',
            date: '23 April, 2026',
            title: 'Security Governance & Audit Readiness',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day5',
            date: '24 April, 2026',
            title: 'Final Presentations & Certificates Awarded',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
    ],

        ONLINE: [
        {
            id: 'day1',
            title: 'Vulnerability Analysis and Countermeasures for SoC Communication in Trusted IoT',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'Presentation 2',
            title: 'Blinded Training: ML over Encrypted Data',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day3',
            title: 'From a Security Perspective: RAG and Prompt Engineering',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day4',
            title: 'Digital Forensics For Cyber-Future: Technics, Challenges, and Emerging Trends',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
        {
            id: 'day5',
            title: '',
            sessions: [
                { time: '09:00', task: '[TBA]' },
            ]
        },
                {
            id: 'day6',
            title: '',
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