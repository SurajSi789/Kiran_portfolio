import ibis from "../assets/images/ibis.png";
import taj from "../assets/images/taj.png";
import {
    contact,
    communication,
    linkedin,
    word,
    excel,
    time,
    staff,
    front,
    teamwork,
    sales,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: communication,
        name: "Communication",
        type: "Soft Skill",
    },
    {
        imageUrl: word,
        name: "MS Word",
        type: "Technical Skill",
    },
    {
        imageUrl: excel,
        name: "MS Excel",
        type: "Technical Skill",
    },
    {
        imageUrl: time,
        name: "Time Management",
        type: "Soft Skill",
    },
    {
        imageUrl: staff,
        name: "Front Desk1",
        type: "Soft Skill",
    },
    {
        imageUrl: front,
        name: "Front Desk",
        type: "Soft Skill",
    },
    {
        imageUrl: teamwork,
        name: "Team Work",
        type: "Soft Skill",
    },
    {
        imageUrl: sales,
        name: "Sales",
        type: "Soft Skill",
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kiran-yadav-878616236/',
    }
];

export const experiences = [
    {
        title: "Front Office Associate",
        company_name: "IBIS Hotel, Aerocity",
        icon: ibis,
        iconBg: "#e2ebf1",
        date: "May 2023 - Present",
        points: [
            "Greet guests upon arrival, check them in, and provide information about hotel services and amenities.",
            "Handle guest inquiries, requests, and complaints promptly and professionally to ensure guest satisfaction.",
            "Manage reservations, room assignments, and cancellations using the hotel's property management system.",
            "Coordinate with other hotel departments such as housekeeping and maintenance to ensure smooth operations.",
            "Process guest payments, balance cash and credit transactions at the end of each shift.",
        ],
    },
    {
        title: "Sales Intern",
        company_name: "Taj Banjara, Hyderabad",
        icon: taj,
        iconBg: "#e2ebf1",
        date: "July 2022 - September 2022",
        points: [
            "Works closely with the sales team regarding promotions and sales.",
            "Speak with customer to educate them about the product and services.",
            "Complete call/activity reporting daily as well as suggested order template for each, as call is made.",
            "Participated in sales meetings and contributed ideas to enhance sales strategies and achieve targets.",
        ],
    },
];