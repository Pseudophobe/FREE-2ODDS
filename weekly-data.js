// weekly-data.js - ONLY FILE YOU EDIT EACH WEEK
// Just change the match details below - nothing else!

const weeklyPicks = {
    weekTitle: "October 24-26, 2025", // CHANGE TO THIS WEEK
    
    accumulator: {
        totalOdds: 2.04,
        recommendedStake: 10000,
        matches: [
            {
                homeTeam: "M'gladbach",
                awayTeam: "Bayern", 
                betSelection: "away",
                odds: 1.24
            },
            {
                homeTeam: "Al-hasm",
                awayTeam: "Al-nassr",
                betSelection: "Away",
                odds: 1.20
            },
            {
                homeTeam: "Brest", 
                awayTeam: "PSG",
                betSelection: "Away over 1.5",
                odds: 1.37
            },
            // Add or remove matches as needed
        ]
    }
};

const bettingArchive = [
    // ADD THIS NEW ENTRY AT THE TOP
    {
        week: "October 17-19, 2025",
        date: "2025-10-17",
        accumulators: [
            {
                name: "Weekly Accumulator",
                result: "W",
                matches: [
                    { game: "Nottingham Forest 0-3 Chelsea", bet: "Draw/away", odds: 1.28, actualResult: "W" },
                    { game: "Fulham 0-1 Arsenal", bet: "Away over 0.5", odds: 1.16, actualResult: "W" },
                    { game: "Getafe 0-1 Madrid", bet: "Away over 0.5", odds: 1.13, actualResult: "W" },
                    { game: "PSG 3-3 Strasbourg", bet: "Home under 4.5", odds: 1.09, actualResult: "W" },
                    { game: "Man City 2-0 Everton", bet: "Home over 0.5", odds: 1.10, actualResult: "W" }
                ]
            }
        ]
    }
    // Add more past weeks here if needed
];

// Simple results tracker
const previousResults = {
    October2025: [
        { week: "Oct 17-19", result: "W" }
    ]
};
