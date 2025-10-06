// weekly-data.js - ONLY FILE YOU EDIT EACH WEEK
// Just change the match details below - nothing else!

const weeklyPicks = {
    weekTitle: "October 25-26, 2024",
    
    accumulator1: {
        totalOdds: 4.50,
        recommendedStake: 1,
        matches: [
            {
                homeTeam: "Man City",
                awayTeam: "Chelsea", 
                betSelection: "Man City to Win",
                odds: 1.80
            },
            {
                homeTeam: "Arsenal",
                awayTeam: "Tottenham",
                betSelection: "Over 2.5 Goals", 
                odds: 1.90
            },
            {
                homeTeam: "Liverpool",
                awayTeam: "Brighton",
                betSelection: "BTTS: Yes",
                odds: 1.60
            }
        ]
    },
    
    accumulator2: {
        totalOdds: 3.20,
        recommendedStake: 2,
        matches: [
            {
                homeTeam: "Barcelona",
                awayTeam: "Real Madrid",
                betSelection: "Over 1.5 Goals",
                odds: 1.40
            },
            {
                homeTeam: "Bayern Munich",
                awayTeam: "Dortmund", 
                betSelection: "Bayern to Win",
                odds: 1.70
            },
            {
                homeTeam: "PSG",
                awayTeam: "Marseille",
                betSelection: "PSG -1.5",
                odds: 2.10
            }
        ]
    }
};

// ADD THIS TO YOUR EXISTING weekly-data.js FILE - PASTE AT THE BOTTOM

const previousResults = {
    October2025: [
        { week: " Week 3", acc1: "W", acc2: "W" },
        { week: " Week 4", acc1: "W", acc2: "W" },
        { week: " Week 5", acc1: "W", acc2: "W" }
    ],
    // ADD NEW MONTHS HERE AS YOU GO
};

// ADD THIS TO YOUR weekly-data.js - PASTE AT THE BOTTOM

// Historical Proof Archive - This will grow automatically each week
const bettingArchive = [
    // Example past week (you'll add real data as you go)
    {
        week: "October 25-26, 2025",
        accumulators: [
            {
                name: "Accumulator #1",
                result: "W",
                matches: [
                    { game: "Man City vs Chelsea", bet: "Home Win", odds: 1.80, actualResult: "W" },
                    { game: "Arsenal vs Tottenham", bet: "Over 2.5 Goals", odds: 1.90, actualResult: "W" },
                    { game: "Liverpool vs Brighton", bet: "BTTS: Yes", odds: 1.60, actualResult: "L" }
                ]
            },
            {
                name: "Accumulator #2",
                result: "L", 
                matches: [
                    { game: "Barcelona vs Real Madrid", bet: "Over 1.5 Goals", odds: 1.40, actualResult: "W" },
                    { game: "Bayern vs Dortmund", bet: "Home Win", odds: 1.70, actualResult: "L" }
                ]
            }
        ]
    }
    // Add new weeks here as you complete them
];