// weekly-data.js - ONLY FILE YOU EDIT EACH WEEK
// Just change the match details below - nothing else!

const weeklyPicks = {
    weekTitle: "January 20-21, 2024",
    
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
    january2024: [
        { week: "Jan 13-14", acc1: "W", acc2: "W" },
        { week: "Jan 6-7", acc1: "W", acc2: "W" },
        { week: "Dec 30-31", acc1: "W", acc2: "W" }
    ],
    december2023: [
        { week: "Dec 23-24", acc1: "W", acc2: "W" },
        { week: "Dec 16-17", acc1: "W", acc2: "W" },
        { week: "Dec 9-10", acc1: "W", acc2: "W" }
    ]
    // ADD NEW MONTHS HERE AS YOU GO
};