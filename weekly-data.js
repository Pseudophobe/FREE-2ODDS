// weekly-data.js - ONLY FILE YOU EDIT EACH WEEK
// Just change the match details below - nothing else!

const weeklyPicks = {
    weekTitle: "October 17-19, 2025",
    
    accumulator: {
        totalOdds: 2.02,
        recommendedStake: 10000,
        matches: [
            {
                homeTeam: "Nottingham",
                awayTeam: "Chelsea", 
                betSelection: "Draw/away",
                odds: 1.28
            },
            {
                homeTeam: "Fulham",
                awayTeam: "Arsenal",
                betSelection: "Away over 0.5",
                odds: 1.16
            },
            {
                homeTeam: "Getafe", 
                awayTeam: "Madrid",
                betSelection: "Away over 0.5",
                odds: 1.13
            },
            {
                homeTeam: "PSG",
                awayTeam: "Strasbourg",
                betSelection: "Home under 4.5", 
                odds: 1.09
            },
            {
                homeTeam: "Man City",
                awayTeam: "Everton",
                betSelection: "Home over 0.5",
                odds: 1.10
            }
            // Add or remove matches as needed
        ]
    }
};

// Historical Proof Archive
const bettingArchive = [
    // PAST WEEKS GO HERE
    {
        week: "October 10-12, 2025",
        date: "2025-10-10",
        accumulators: [
            {
                name: "Weekly Accumulator",
                result: "W",
                matches: [
                    { game: "Man City vs Chelsea", bet: "Home Win", odds: 1.80, actualResult: "W" },
                    { game: "Arsenal vs Tottenham", bet: "Over 2.5 Goals", odds: 1.90, actualResult: "W" },
                    { game: "Liverpool vs Brighton", bet: "BTTS: Yes", odds: 1.60, actualResult: "L" }
                ]
            }
        ]
    }
    // Add new weeks here as you complete them
];

// Simple results tracker
const previousResults = {
    October2025: [
        { week: "Oct 10-12", result: "W" },
        { week: "Oct 3-5", result: "W" },
        { week: "Sep 26-28", result: "L" }
    ]
};
