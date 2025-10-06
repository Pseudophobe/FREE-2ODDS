// auto-loader.js - NEVER EDIT THIS FILE
// This automatically builds your website from weekly-data.js

function loadWeeklyPicks() {
    // Clear existing content
    const container = document.getElementById('current-picks-container');
    container.innerHTML = '';
    
    // Update week title
    document.getElementById('week-title').textContent = weeklyPicks.weekTitle;
    
    // Create Accumulator 1
    const acc1HTML = createAccumulatorHTML('⚡ Accumulator #1', weeklyPicks.accumulator1);
    container.innerHTML += acc1HTML;
    
    // Create Accumulator 2
    const acc2HTML = createAccumulatorHTML('⚡ Accumulator #2', weeklyPicks.accumulator2);
    container.innerHTML += acc2HTML;
}

function createAccumulatorHTML(title, accumulator) {
    let matchesHTML = '';
    
    // Calculate total odds from individual match odds
    let calculatedOdds = 1;
    accumulator.matches.forEach(match => {
        calculatedOdds *= match.odds;
        matchesHTML += `
            <div class="match">
                <div class="match-teams">
                    <span class="team">${match.homeTeam}</span>
                    <span class="vs">vs</span>
                    <span class="team">${match.awayTeam}</span>
                </div>
                <div class="bet-selection">
                    <span class="selection">${match.betSelection}</span>
                    <span class="match-odds">${match.odds}</span>
                </div>
            </div>
        `;
    });
    
    // Format calculated odds to 2 decimal places
    calculatedOdds = calculatedOdds.toFixed(2);
    const potentialReturn = (calculatedOdds * accumulator.recommendedStake).toFixed(2);
    
    return `
        <div class="accumulator-card">
            <div class="acc-header">
                <h3>${title}</h3>
                <div class="total-odds">Total Odds: <span>${calculatedOdds}</span></div>
            </div>
            
            <div class="matches">
                ${matchesHTML}
            </div>
            
            <div class="acc-footer">
                <div class="stake-recommendation">
                    <strong>Recommended Stake:</strong> ${accumulator.recommendedStake} unit${accumulator.recommendedStake > 1 ? 's' : ''}
                </div>
                <div class="potential-return">
                    Potential Return: <span>${potentialReturn} units</span>
                </div>
            </div>
        </div>
    `;
}

// Auto-load when page opens
document.addEventListener('DOMContentLoaded', loadWeeklyPicks);

// ADD THIS TO YOUR EXISTING auto-loader.js FILE - PASTE AT THE BOTTOM

function loadPreviousResults() {
    const archiveSection = document.querySelector('.archive .container');
    
    let resultsHTML = '<div class="results-tracker">';
    
    // Loop through each month
    for (const [month, weeks] of Object.entries(previousResults)) {
        resultsHTML += `
            <div class="month-section">
                <h3>${month.charAt(0).toUpperCase() + month.slice(1)}</h3>
                <div class="weeks-grid">
        `;
        
        // Loop through each week in the month
        weeks.forEach(weekResult => {
            resultsHTML += `
                <div class="week-result">
                    <div class="week-date">${weekResult.week}</div>
                    <div class="acc-results">
                        <span class="result-box ${weekResult.acc1 === 'W' ? 'win' : 'loss'}">${weekResult.acc1}</span>
                        <span class="result-box ${weekResult.acc2 === 'W' ? 'win' : 'loss'}">${weekResult.acc2}</span>
                    </div>
                </div>
            `;
        });
        
        resultsHTML += `
                </div>
            </div>
        `;
    }
    
    resultsHTML += '</div>';
    archiveSection.innerHTML = '<h2>Previous Weeks Results</h2>' + resultsHTML;
}

// Update the auto-load function to also load results
document.addEventListener('DOMContentLoaded', function() {
    loadWeeklyPicks();
    loadPreviousResults();
});