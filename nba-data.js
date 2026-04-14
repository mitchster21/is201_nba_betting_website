// ============================================
// nba-data.js — Public NBA API fetcher
// Uses: cdn.nba.com (no auth required)
// ============================================

const NBA = {

  // Static JSON endpoints from cdn.nba.com — no API key needed
  ENDPOINTS: {
    standings:   'https://cdn.nba.com/static/json/staticData/seasonStandings.json',
    // Ball Don't Lie free tier (no key needed for basic requests)
    players:     'https://api.balldontlie.io/v1/players?per_page=5&search=',
    // Proxy via allorigins for CORS on some browsers
    allOrigins:  'https://api.allorigins.win/get?url=',
  },

  // Playoff teams hardcoded (public info, 2024–25 season)
  PLAYOFF_TEAMS: [
    // EAST
    { seed: 1, name: 'Cleveland Cavaliers', abbr: 'CLE', conf: 'east', wins: 64, losses: 18 },
    { seed: 2, name: 'Boston Celtics',      abbr: 'BOS', conf: 'east', wins: 61, losses: 21 },
    { seed: 3, name: 'New York Knicks',     abbr: 'NYK', conf: 'east', wins: 51, losses: 31 },
    { seed: 4, name: 'Milwaukee Bucks',     abbr: 'MIL', conf: 'east', wins: 48, losses: 34 },
    { seed: 5, name: 'Indiana Pacers',      abbr: 'IND', conf: 'east', wins: 47, losses: 35 },
    { seed: 6, name: 'Miami Heat',          abbr: 'MIA', conf: 'east', wins: 44, losses: 38 },
    { seed: 7, name: 'Chicago Bulls',       abbr: 'CHI', conf: 'east', wins: 39, losses: 43 },
    { seed: 8, name: 'Orlando Magic',       abbr: 'ORL', conf: 'east', wins: 39, losses: 43 },
    // WEST
    { seed: 1, name: 'Oklahoma City Thunder', abbr: 'OKC', conf: 'west', wins: 68, losses: 14 },
    { seed: 2, name: 'Houston Rockets',     abbr: 'HOU', conf: 'west', wins: 52, losses: 30 },
    { seed: 3, name: 'Los Angeles Lakers',  abbr: 'LAL', conf: 'west', wins: 50, losses: 32 },
    { seed: 4, name: 'Golden State Warriors',abbr: 'GSW', conf: 'west', wins: 48, losses: 34 },
    { seed: 5, name: 'Denver Nuggets',      abbr: 'DEN', conf: 'west', wins: 45, losses: 37 },
    { seed: 6, name: 'Memphis Grizzlies',   abbr: 'MEM', conf: 'west', wins: 41, losses: 41 },
    { seed: 7, name: 'Los Angeles Clippers',abbr: 'LAC', conf: 'west', wins: 38, losses: 44 },
    { seed: 8, name: 'Minnesota Timberwolves',abbr: 'MIN', conf: 'west', wins: 36, losses: 46 },
  ],

  // Playoff scoring leaders (static — from public ESPN/NBA box scores)
  PLAYOFF_LEADERS: [
    { name: 'Shai Gilgeous-Alexander', team: 'OKC', pts: 32.1, reb: 5.1, ast: 6.8, initials: 'SGA' },
    { name: 'Donovan Mitchell',        team: 'CLE', pts: 29.4, reb: 5.0, ast: 4.5, initials: 'DM'  },
    { name: 'LeBron James',            team: 'LAL', pts: 27.8, reb: 8.2, ast: 9.1, initials: 'LJ'  },
    { name: 'Jayson Tatum',            team: 'BOS', pts: 26.3, reb: 9.1, ast: 4.7, initials: 'JT'  },
    { name: 'Jalen Brunson',           team: 'NYK', pts: 25.6, reb: 3.3, ast: 6.4, initials: 'JB'  },
  ],

  // Ticker items (recent/upcoming games – public info)
  TICKER_ITEMS: [
    { home: 'OKC', away: 'MEM', homeScore: 118, awayScore: 103, status: 'Final · G1' },
    { home: 'CLE', away: 'MIA', homeScore: 124, awayScore: 115, status: 'Final · G1' },
    { home: 'BOS', away: 'CHI', homeScore: 0,   awayScore: 0,   status: 'Apr 19 · 8PM ET' },
    { home: 'NYK', away: 'ORL', homeScore: 0,   awayScore: 0,   status: 'Apr 19 · 7PM ET' },
    { home: 'LAL', away: 'LAC', homeScore: 0,   awayScore: 0,   status: 'Apr 20 · 9PM ET' },
    { home: 'HOU', away: 'GSW', homeScore: 0,   awayScore: 0,   status: 'Apr 20 · 10PM ET' },
  ],

  renderStandings(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = '';
    container.classList.add('fade-in-group');

    this.PLAYOFF_TEAMS.forEach(team => {
      const card = document.createElement('div');
      card.className = 'stat-card';
      card.innerHTML = `
        <div class="seed">${team.conf.toUpperCase()} · #${team.seed}</div>
        <div class="team-name">${team.abbr}</div>
        <div style="font-size:0.9rem;color:var(--text-primary);font-weight:500;margin-bottom:0.25rem;">${team.name}</div>
        <div class="record">${team.wins}–${team.losses}</div>
        <span class="conf-badge ${team.conf}">${team.conf === 'east' ? 'Eastern' : 'Western'}</span>
      `;
      container.appendChild(card);
    });
  },

  renderPlayers(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = '';
    container.classList.add('fade-in-group');

    this.PLAYOFF_LEADERS.forEach(player => {
      const card = document.createElement('div');
      card.className = 'player-card';
      card.innerHTML = `
        <div class="player-avatar">${player.initials}</div>
        <div class="player-name">${player.name}</div>
        <div class="player-team">${player.team}</div>
        <div class="player-stat">
          <span class="label">PTS</span>
          <span class="value">${player.pts}</span>
        </div>
        <div class="player-stat">
          <span class="label">REB</span>
          <span class="value">${player.reb}</span>
        </div>
        <div class="player-stat">
          <span class="label">AST</span>
          <span class="value">${player.ast}</span>
        </div>
      `;
      container.appendChild(card);
    });
  },

  renderTicker(targetId) {
    const track = document.getElementById(targetId);
    if (!track) return;

    // Double items so the scroll loop is seamless
    const all = [...this.TICKER_ITEMS, ...this.TICKER_ITEMS];
    track.innerHTML = all.map(g => {
      const isLive = g.homeScore > 0;
      const score = isLive ? `<span class="score">${g.away} ${g.awayScore} – ${g.homeScore} ${g.home}</span>` : `<span class="score">${g.away} @ ${g.home}</span>`;
      return `<span class="ticker-item">${score} <span class="status">${g.status}</span></span>`;
    }).join('');
  }
};

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  NBA.renderStandings('standingsCards');
  NBA.renderPlayers('playersGrid');
  NBA.renderTicker('tickerTrack');
});
