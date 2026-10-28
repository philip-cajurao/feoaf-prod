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
    registrationUrl: string;
}

export const UPCOMING_EVENTS: EventData[] = [
    {
        id: "holiday-party",
        title: "Holiday Party",
        date: "TBA",
        month: "TBA",
        year: "2026",
        time: "TBA",
        location: "TBA",
        description: "Join us for our year-end Holiday Party celebration where we recognize the accomplishments of our young entrepreneurs, enjoy festive activities, and celebrate a wonderful year of growth and community impact.\n\nStay tuned—full event details and registration will be announced soon!",
        flyerUrl: "/events/holiday/IMG_4627.jpg",
        registrationUrl: ""
    }
];
