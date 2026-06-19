// 1. Import the image at the top
import galaImage from "@/app/assets/events/GALA.jpg";
import summerBootCamp from "@/app/assets/events/summerBootCamp.png";

export interface EventData {
    id: string;
    title: string;
    date: string;
    month: string;
    year: string;
    time: string;
    location: string;
    description: string;
    flyerUrl: string; 
    registrationUrl: string; // <-- Added this property
}

export const UPCOMING_EVENTS: EventData[] = [
    // { 
    //     id: "pickleball-tournament",
    //     title: "Dink For a Cause - Pickleball Tournament", 
    //     date: "18", 
    //     month: "April",
    //     year: "2026",
    //     time: "2PM - 6PM",
    //     location: "Dill Dinkers in Manassas Mall, 9071 Center St, #53, Manassas, VA 20110",
    //     description: "Together we can play, have fun, and create opportunities for the next generation.",
    //     flyerUrl: pickleball.src,
    //     registrationUrl: "https://givebutter.com/c/Feoaf" 
    // },
    { 
        id: "summer-bootcamp",
        title: "Entrepreneurship Summer Bootcamp", 
        date: "15-19", 
        month: "June",
        year: "2026",
        time: "9AM - 2PM",
        location: "The Waverly Club, 15401 Fog Mountain Cir, Haymarket, VA 20169",
        description: "The FEOAF Summer Bootcamp is a fun, hands-on program where youth learn entrepreneurship, financial literacy, and leadership skills. Participants will develop business ideas, learn marketing and money management, and present their ideas in a Kid's Shark Tank showcase.\n\n• FEOAF Summer Initiative: Advanced Skills Bootcamp: June 15, 16 and 19 @ 9am-2pm\n• FEOAF Foundations: Summer Beginner Bootcamp: June 17, 18 and 19 @ 9am-2pm",
        flyerUrl: summerBootCamp.src,
        registrationUrl: "https://givebutter.com/summer-bootcamp-beginners-class-o6stme" 
    },
    { 
        id: "annual-gala",
        title: "The FEOAF Gala", 
        date: "17", 
        month: "Oct",
        year: "2026",
        time: "6:30PM - 11PM",
        location: "Heritage Hunt Country Club, 6901 Arthur Hills Drive, Gainesville, VA 20155",
        description: "The FEOAF Gala is our premier annual fundraising event that supports programs designed to nurture young entrepreneurs. Funds raised will directly support youth entrepreneurship bootcamps, scholarships, mentorship programs, and educational initiatives that help young people turn ideas into opportunities.\n\nYour participation helps create opportunities for youth to learn leadership, financial literacy, innovation, and real-world business skills.",
        flyerUrl: galaImage.src,
        registrationUrl: "https://givebutter.com/c/X0GXZ6?source=qr&version=1" 
    }
];