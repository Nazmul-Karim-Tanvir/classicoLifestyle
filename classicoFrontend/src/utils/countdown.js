import { useEffect, useState } from "react";

function getTimeLeft(targetDate) {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now

    if (difference <= 0) {
        return {
            total: 0,
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
        };
    }

    return {
        total: difference,
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };

}


// Custom hook for live countDown

export function useCountdown(targetDate) {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft(targetDate))
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);
    return timeLeft;
}
