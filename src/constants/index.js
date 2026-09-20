const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Safari", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        title: "HCL GUVI Certification",
        date: "Issued Sep 2026",
        image: "/images/guvi-cert.jpg",
        link: "https://www.guvi.in/share-certificate/3q7yp017v4E5089z37",
    },
    {
        id: 2,
        title: "IBM AICTE",
        date: "Issued Jun 2026",
        image: "/images/ibm-cert.png",
        link: "https://skills.yourlearning.ibm.com/certificate/share/7491975012ewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICI3OTgzMDU4UkVHIiwKICAib2JqZWN0SWQiIDogIlBMQU4tOUYxNDNFNkQyNDBDIgp9e77f342025-10",
    },
    {
        id: 3,
        title: "Make Agentic AI Work for You",
        date: "Issued Jun 2026",
        image: "/images/credly-cert.png",
        link: "https://www.credly.com/badges/6d50aae3-faf5-4214-b889-ff6a4304b073/linked_in_profile",
    },
    {
        id: 4,
        title: "Agentic AI - Skill Up",
        date: "Issued Jan 2026",
        image: "/images/gfg-cert.jpg",
        link: "https://www.geeksforgeeks.org/certificate/d4f31a051f055979cb1769c7579bfecc?utm_source=socials&utm_medium=cc_link",
    },

];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "HTML"],
    },
    {
        category: "AI and CV",
        items: ["PyTorch", "Tensorflow", "Numpy", "Pygame"],
    },
    {
        category: "Programming Lang.",
        items: ["Python", "JavaScript"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express"],
    },
    {
        category: "Database",
        items: ["MongoDB"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Leaflet", "HTML5", ],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/HarshitSRIVASTAVA00",
    },

    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/harshitsrivastava0/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1: Aero Health
        {
            id: 5,
            name: "Aero Health",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[5vh] left-5",
            children: [
                {
                    id: 1,
                    name: "Aero Health Info.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Aero Health is an AI-assisted real-time air quality monitoring web dashboard.",
                        "It features a hero video, smooth overlay text, and a discovery section powered by the NASA API.",
                        "Built with a map-centric geospatial data visualization approach to generate automated health reports."
                    ],
                },
                {
                    id: 2,
                    name: "github-repo",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/HarshitSRIVASTAVA00/AeroHEALTH",
                    position: "top-10 right-20",
                },
                {
                    id: 3,
                    name: "aerohealth.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-40",
                    imageUrl: "/images/aerohealth-preview.png", // Add screenshot to public/images
                },
            ],
        },

        // ▶ Project 2: CHESS-ENGINE
        {
            id: 6,
            name: "CHESS-ENGINE",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Chess Engine Info.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "A custom-built AI Chess Engine designed to play directly against human opponents.",
                        "It evaluates board positions, calculates optimal moves, and provides a challenging gameplay experience."
                    ],
                },
                {
                    id: 2,
                    name: "github-repo",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/HarshitSRIVASTAVA00/CHESS-ENGINE.git",
                    position: "top-20 left-20",
                },
            ],
        },

        // ▶ Project 3: TRACKER
        {
            id: 7,
            name: "Real-time Tracker",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Tracker Info.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A high-performance real-time device tracker application.",
                        "Designed to precisely monitor and update device locations dynamically on the map."
                    ],
                },
                {
                    id: 2,
                    name: "github-repo",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/HarshitSRIVASTAVA00/TRACKER",
                    position: "top-10 right-20",
                },
            ],
        },

        // ▶ Project 4: Dogstudio Clone
        {
            id: 8,
            name: "Dogstudio Clone",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 left-20",
            windowPosition: "top-[15vh] right-10",
            children: [
                {
                    id: 1,
                    name: "Dogstudio Info.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A high-fidelity clone of the award-winning website dogstudio.co.",
                        "Focuses on heavy front-end animations, 3D elements, and smooth scrolling experiences."
                    ],
                },
                {
                    id: 2,
                    name: "github-repo",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/HarshitSRIVASTAVA00/DOGSTUDIO-CLONE.git",
                    position: "top-10 right-20",
                },
            ],
        },

        // ▶ Project 5: Tribute Webpage
        {
            id: 9,
            name: "Dr. Kalam Tribute",
            icon: "/images/folder.png",
            kind: "folder",
            position: "bottom-20 right-40",
            windowPosition: "top-[40vh] left-20",
            children: [
                {
                    id: 1,
                    name: "Tribute Info.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "An interactive and animated tribute webpage dedicated to Dr. A.P.J. Abdul Kalam.",
                        "Features a beautifully animated quote slider and an interactive timeline of his life achievements."
                    ],
                },
                {
                    id: 2,
                    name: "github-repo",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/HarshitSRIVASTAVA00/tribute-webpage",
                    position: "top-10 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "harshit-profile.jpeg",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/harshit-profile.jpeg", // Add a nice headshot here
        },
        {
            id: 2,
            name: "marathon-run.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/running.jpg", // A photo of your 21km run if you have one!
        },
        {
            id: 3,
            name: "about-harshit.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet Harshit Srivastava",
            image: "/images/harshit-profile.jpeg",
            description: [
                "Hey! I’m Harshit 👋, a Computer Science and Engineering undergrad at Rajarshi Rananjay Sinh Institute of Management and Technology.",
                "I specialize in full-stack web development, Artificial Intelligence, and IoT. I love bridging the gap between software and the real world, whether that is building geospatial dashboards or wiring up ESP32 microcontrollers for gesture-controlled rovers.",
                "When I'm not deep into React, building computer vision models with MediaPipe, or preparing for GATE, I like to stay active.",
                "You can usually find me training for my next 21km half-marathon, or tuning up my HP Victus to drop into a game of Call of Duty, Outlast Trials, or Hogwarts Legacy."
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };