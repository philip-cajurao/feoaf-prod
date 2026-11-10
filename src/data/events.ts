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
        date: "6",
        month: "Dec",
        year: "2026",
        time: "1:00 PM - 4:00 PM",
        location: "Springhill Suites, 7921 Gateway Promenade Pl, Gainesville, VA 20155",
        description: "",
        flyerUrl: "/events/holiday/IMG_4627.jpg",
        registrationUrl: "https://www.zeffy.com/en-US/ticketing/future-entrepreneurs-holiday-party--2026"
    }
];
