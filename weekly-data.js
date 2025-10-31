// weekly-data.js - ONLY FILE YOU EDIT EACH WEEK
// Just change the match details below - nothing else!

const weeklyPicks = {
    weekTitle: "October 31- Nov 1, 2025", // CHANGE TO THIS WEEK
    
    accumulator: {
        totalOdds: 2.01,
        recommendedStake: 10000,
        matches: [
            {
                homeTeam: "Burnley",
                awayTeam: "Arsenal", 
                betSelection: "Away",
                odds: 1.31
            },
            {
                homeTeam: "PSV",
                awayTeam: "F.Sittard", 
                betSelection: "Home",
                odds: 1.16
            },
            {
                homeTeam: "C.palace",
                awayTeam: "Brentford",
                betSelection: "Handicap (0:3)",
                odds: 1.11
            },
            {
                homeTeam: "Liverpool", 
                awayTeam: "Aston villa",
                betSelection: "Handicap (0:3)",
                odds: 1.19
            }
            // Add or remove matches as needed
        ]
    }
};

const bettingArchive = [
    // ADD THIS NEW ENTRY AT THE TOP
    {
        week: "October 24-26, 2025",
        date: "2025-10-24",
        accumulators: [
            {
                name: "Weekly Accumulator", 
                result: "W",
                matches: [
                    { game: "M'gladbach vs Bayern", bet: "away", odds: 1.24, actualResult: "W" },
                    { game: "Al-hasm vs Al-nassr", bet: "Away", odds: 1.20, actualResult: "W" },
                    { game: "Brest vs PSG", bet: "Away over 1.5", odds: 1.37, actualResult: "W" }
                ]
            }
        ]
    },
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
        { week: "Oct 24-26", result: "W" },
        { week: "Oct 17-19", result: "W" }
    ]
};
