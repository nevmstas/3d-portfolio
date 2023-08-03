import web from "../assets/web.png";
import web3 from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import skiwo from '../assets/company/skiwo.jpeg'
import varteq from '../assets/company/varteq.jpeg'
import snotor from '../assets/company/snotor.jpeg'
import spalmalo from '../assets/company/spalmalo.jpeg'
import finance from '../assets/company/finance.jpeg'

export const services = [
    {
        title: "Frontend Engineer",
        icon: web,
    },
    {
        title: "Web3 Engineer",
        icon: web3,
    },
    {
        title: "Backend Engineer",
        icon: backend,
    },
    {
        title: "Artist",
        icon: creator,
    },
];

export const experiences = [
    {
        title: "Senior Frontend Engineer",
        companyName: "Skiwo",
        icon: skiwo,
        iconBg: "#0a0201",
        date: "Oct 2022 - Present",
        points: [
            "Built a web ecosystem using React, Typescript, Tailwind, GraphQL, and Docker for businesses and freelancers.",
            "Created user-friendly interface for managing freelance and business accounts",
            "Implemented secure identity verification system using ID cards",
            "Developed e-signature and invoicing features for secure document management.",
            "Collaborated with team to ensure seamless user experience",
            "Optimized performance and maintained code quality through regular reviews",
            "Improved application based on user feedback and design/functionality enhancements",
        ],
    },
    {
        title: "Frontend Engineer",
        companyName: "Varteq",
        icon: varteq,
        iconBg: "#fff",
        date: "Nov 2021 - Oct 2022",
        points: [
            "Created and extended complex architecture features to generate the UI based on the backend",
            "Created user-friendly interface with advanced drag-and-drop features using React-DND.",
            "Improved reusability with extended custom UI library using Storybook",
            "Automated testing with Cypress, unit tests, and snapshot tests",
            "Collaborated with up to 10 front-end devs, effectively communicating ideas for project success",
        ],
    },
    {
        title: "Frontend Engineer",
        companyName: "Snotor",
        icon: snotor,
        iconBg: "#D40C28",
        date: "Jun 2021 - Nov 2021",
        points: [
            "Developed a web3 NFT card game with Ethereum tech stack.",
            "Created smart contract features and events. Implemented GraphQL for efficient backend data retrieval.",
            "Designed smart contract interaction architecture on the frontend.",
            "Utilized CSS animations for visually stunning UI and engaging gameplay",
        ],
    },
    {
        title: "Frontend Engineer",
        companyName: "Spalmalo",
        icon: spalmalo,
        iconBg: "#fff",
        date: "Sep 2020 - May 2021",
        points: [
            "Developed fintech web apps with React, Typescript, and Redux",
            "Maintained high-quality code and performance with functional components and custom hooks",
            "Improved reusability with UI component library built with Storybook and Rollup.",
            "Customized Material-UI components to fit project needs and design",
            "Ensured high code coverage with 90% snapshot and unit test coverage using Enzyme and Jest"
        ],
    },
    {
        title: "Fullstack Engineer",
        companyName: "FinanceSoft",
        icon: finance,
        iconBg: "#fff",
        date: "Sep 2019 - Sep 2020",
        points: [
            "Built Frontend using Angular",
            "Experienced in developing APIs using C# for seamless communication between the client and server",
            "Skilled in working with databases and data manipulation using SQL",
            "Adept at writing unit tests to ensure code quality and prevent bugs",
            "Supervised and trained interns in preparing and executing test plans for OnlineBank application"
        ],
    },
];