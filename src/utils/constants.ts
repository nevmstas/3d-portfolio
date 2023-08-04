import web from "../assets/web.png";
import web3 from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import skiwo from '../assets/company/skiwo.jpeg'
import varteq from '../assets/company/varteq.jpeg'
import snotor from '../assets/company/snotor.jpeg'
import spalmalo from '../assets/company/spalmalo.jpeg'
import finance from '../assets/company/finance.jpeg'
import education from '../assets/education.png'

import docker from '../assets/tech/docker.png'
import react from '../assets/tech/reactjs.png'
import tailwind from '../assets/tech/tailwind.png'
import redux from '../assets/tech/redux.png'
import threejs from '../assets/tech/threejs.svg'
import typescript from '../assets/tech/typescript.png'
import aws from '../assets/tech/aws.png'
import rtl from '../assets/tech/rtl.png'
import jest from '../assets/tech/jest.png'
import solidity from '../assets/tech/solidity.png'
import graphql from '../assets/tech/graphql.png'
import storybook from '../assets/tech/storybook.png'
import web3logo from '../assets/tech/web3.png'
import js from '../assets/tech/javascript.png'
import hardhat from '../assets/tech/hardhat.png'

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

// const skills = [
// { title: 'React', bgColor: 'bg-[#61dafb]' },
// { title: 'AWS', bgColor: 'bg-[#ff9d00]' },
// { title: 'Storybook', bgColor: 'bg-[#ff4785]' },
// { title: 'Typescript', bgColor: 'bg-[#3178c6]' },
// { title: 'Javascript', bgColor: 'bg-[#f7df1e]' },
// { title: 'Tailwindcss', bgColor: 'bg-[#38bef8]' },
// { title: 'Redux', bgColor: 'bg-[#764abc]' },
// { title: 'Graphql', bgColor: 'bg-[#e10098]' },
// { title: 'Jest', bgColor: 'bg-[#15c213]' },
// { title: 'React-testing-library', bgColor: 'bg-[#3578e5]' },
// { title: 'Docker', bgColor: 'bg-[#007bff]' },
// { title: 'Solidity', bgColor: 'bg-[#5554D9]' },
// { title: 'Web3js', bgColor: 'bg-[#F16822]' },
// { title: 'Ethers', bgColor: 'bg-[#444]' },
// { title: 'Hardhat', bgColor: 'bg-[#CCB200]' },
// ]

export const technologies = [
    { title: 'React', icon: react },
    { title: 'AWS', icon: aws },
    { title: 'Storybook', icon: storybook },
    { title: 'Typescript', icon: typescript },
    { title: 'Javascript', icon: js },
    { title: 'Tailwindcss', icon: tailwind },
    { title: 'Redux', icon: redux },
    { title: 'Graphql', icon: graphql },
    { title: 'Jest', icon: jest },
    { title: 'React-testing-library', icon: rtl },
    { title: 'Docker', icon: docker },
    { title: 'Solidity', icon: solidity },
    { title: 'Web3js', icon: web3logo },
    // { title: 'Ethers', icon: ethe },
    { title: 'Hardhat', icon: hardhat },
    { title: 'Threejs', icon: threejs },
]

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
        location: {
            icon: '🌍',
            name: 'Oslo, Norway · Remote'
        },
        skills: [
            { title: 'React', bgColor: 'bg-[#61dafb]' },
            { title: 'Typescript', bgColor: 'bg-[#3178c6]' },
            { title: 'Tailwindcss', bgColor: 'bg-[#38bef8]' },
            { title: 'Graphql', bgColor: 'bg-[#e10098]' },
            { title: 'Docker', bgColor: 'bg-[#007bff]' },
            { title: 'Lerna', bgColor: 'bg-[#c084fc]' },
            { title: 'AWS', bgColor: 'bg-[#ff9d00]' },
            { title: 'React-testing-library', bgColor: 'bg-[#3578e5]' }
        ]
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
        location: {
            icon: '🌍',
            name: 'Chicago, Illinois, United States · Remote'
        },
        skills: [
            { title: 'React', bgColor: 'bg-[#61dafb]' },
            { title: 'Typescript', bgColor: 'bg-[#3178c6]' },
            { title: 'Redux', bgColor: 'bg-[#764abc]' },
            { title: 'Storybook', bgColor: 'bg-[#ff4785]' },
            { title: 'AWS', bgColor: 'bg-[#ff9d00]' },
            { title: 'RestApi', bgColor: 'bg-[#4b08cc]' },
            { title: 'Jest', bgColor: 'bg-[#15c213]' },
            { title: 'React-testing-library', bgColor: 'bg-[#3578e5]' }
        ]
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
        location: {
            icon: '🌍',
            name: 'Riga, Latvia · Remote'
        },
        skills: [
            { title: 'React', bgColor: 'bg-[#61dafb]' },
            { title: 'Typescript', bgColor: 'bg-[#3178c6]' },
            { title: 'Graphql', bgColor: 'bg-[#e10098]' },
            { title: 'Solidity', bgColor: 'bg-[#5554D9]' },
            { title: 'Web3js', bgColor: 'bg-[#F16822]' },
            { title: 'Ethers', bgColor: 'bg-[#444]' },
            { title: 'Hardhat', bgColor: 'bg-[#CCB200]' },
        ]
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
        location: {
            icon: '🇰🇬',
            name: 'Kyrgyzstan, Bishkek'
        },
        skills: [
            { title: 'React', bgColor: 'bg-[#61dafb]' },
            { title: 'Typescript', bgColor: 'bg-[#3178c6]' },
            { title: 'Redux', bgColor: 'bg-[#764abc]' },
            { title: 'Storybook', bgColor: 'bg-[#ff4785]' },
            { title: 'RestApi', bgColor: 'bg-[#4b08cc]' },
            { title: 'Docker', bgColor: 'bg-[#007bff]' },
            { title: 'MaterialUI', bgColor: 'bg-[#007FFF]' },
        ]
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
        location: {
            icon: '🇰🇬',
            name: 'Kyrgyzstan, Bishkek'
        },
        skills: [
            { title: 'Angular', bgColor: 'bg-[#dd1b16]' },
            { title: 'Typescript', bgColor: 'bg-[#3178c6]' },
            { title: 'RestApi', bgColor: 'bg-[#4b08cc]' },
            { title: 'C#', bgColor: 'bg-[#9b4993]' },
            { title: 'ASP.NET', bgColor: 'bg-[#9780e5]' },
        ]
    },
    {
        title: "Bachelor's degree",
        companyName: `Kyrgyz-Russian Slavic University, Computer Science`,
        icon: education,
        iconBg: "#fd5da8",
        date: "Sep 2015 - Sep 2019",
        points: [
            "Studied algorithms, data structures, linear algebra, OOP, and databases",
            "Developed problem-solving, data manipulation, mathematical modeling, software engineering, and database design skills",
        ],
        location: {
            icon: '🇰🇬',
            name: 'Kyrgyzstan, Bishkek'
        },
        skills: [
            { title: 'C#', bgColor: 'bg-[#9b4993]' },
            { title: 'C++', bgColor: 'bg-[#73c2fb]' },
            { title: 'ASP.NET', bgColor: 'bg-[#9780e5]' },
            { title: 'Git', bgColor: 'bg-[#f14e32]' },
            { title: 'HTML', bgColor: 'bg-[#f06529]' },
            { title: 'CSS', bgColor: 'bg-[#2965f1]' },
        ]
    },
];