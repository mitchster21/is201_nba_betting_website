// ============================================
// nba-data.js — 2026 NBA Playoff Data
// Updated: April 2026 | First Round
// Sources: NBA.com, CBS Sports, Wikipedia
// ============================================

const NBA = {

  SEASON: '2025-26',
  ROUND: 'First Round',

  // ---- 2026 FIRST ROUND MATCHUPS ----
  MATCHUPS: [
    { id: 'e1', home: 'Detroit Pistons',    away: 'TBD (E8)',              homeAbbr: 'DET', awayAbbr: 'E8',  conf: 'east', seed: '1v8', series: '0-0', date: 'Apr 18' },
    { id: 'e2', home: 'Boston Celtics',     away: 'TBD (E7)',              homeAbbr: 'BOS', awayAbbr: 'E7',  conf: 'east', seed: '2v7', series: '0-0', date: 'Apr 19' },
    { id: 'e3', home: 'New York Knicks',    away: 'Atlanta Hawks',         homeAbbr: 'NYK', awayAbbr: 'ATL', conf: 'east', seed: '3v6', series: '0-0', date: 'Apr 19' },
    { id: 'e4', home: 'Cleveland Cavaliers',away: 'Toronto Raptors',       homeAbbr: 'CLE', awayAbbr: 'TOR', conf: 'east', seed: '4v5', series: '0-0', date: 'Apr 18' },
    { id: 'w1', home: 'OKC Thunder',        away: 'TBD (W8)',              homeAbbr: 'OKC', awayAbbr: 'W8',  conf: 'west', seed: '1v8', series: '0-0', date: 'Apr 19' },
    { id: 'w2', home: 'San Antonio Spurs',  away: 'TBD (W7)',              homeAbbr: 'SAS', awayAbbr: 'W7',  conf: 'west', seed: '2v7', series: '0-0', date: 'Apr 19' },
    { id: 'w3', home: 'Denver Nuggets',     away: 'Minnesota Timberwolves',homeAbbr: 'DEN', awayAbbr: 'MIN', conf: 'west', seed: '3v6', series: '0-0', date: 'Apr 18' },
    { id: 'w4', home: 'Los Angeles Lakers', away: 'Houston Rockets',       homeAbbr: 'LAL', awayAbbr: 'HOU', conf: 'west', seed: '4v5', series: '0-0', date: 'Apr 18' },
  ],

  // ---- ALL 2026 PLAYOFF TEAMS ----
  PLAYOFF_TEAMS: [
    { seed:1, name:'Detroit Pistons',        abbr:'DET', conf:'east', wins:56, losses:26, odds:'+400'  },
    { seed:2, name:'Boston Celtics',          abbr:'BOS', conf:'east', wins:55, losses:27, odds:'+280'  },
    { seed:3, name:'New York Knicks',         abbr:'NYK', conf:'east', wins:53, losses:29, odds:'+1100' },
    { seed:4, name:'Cleveland Cavaliers',     abbr:'CLE', conf:'east', wins:52, losses:30, odds:'+1400' },
    { seed:5, name:'Toronto Raptors',         abbr:'TOR', conf:'east', wins:46, losses:36, odds:'+3000' },
    { seed:6, name:'Atlanta Hawks',           abbr:'ATL', conf:'east', wins:46, losses:36, odds:'+3500' },
    { seed:7, name:'TBD (Play-In)',           abbr:'E7',  conf:'east', wins:null, losses:null, odds:'+6000' },
    { seed:8, name:'TBD (Play-In)',           abbr:'E8',  conf:'east', wins:null, losses:null, odds:'+8000' },
    { seed:1, name:'OKC Thunder',             abbr:'OKC', conf:'west', wins:64, losses:18, odds:'-150'  },
    { seed:2, name:'San Antonio Spurs',       abbr:'SAS', conf:'west', wins:61, losses:21, odds:'+500'  },
    { seed:3, name:'Denver Nuggets',          abbr:'DEN', conf:'west', wins:54, losses:28, odds:'+900'  },
    { seed:4, name:'Los Angeles Lakers',      abbr:'LAL', conf:'west', wins:53, losses:29, odds:'+1200' },
    { seed:5, name:'Houston Rockets',         abbr:'HOU', conf:'west', wins:52, losses:30, odds:'+1500' },
    { seed:6, name:'Minnesota Timberwolves',  abbr:'MIN', conf:'west', wins:49, losses:33, odds:'+2200' },
    { seed:7, name:'TBD (Play-In)',           abbr:'W7',  conf:'west', wins:null, losses:null, odds:'+6000' },
    { seed:8, name:'TBD (Play-In)',           abbr:'W8',  conf:'west', wins:null, losses:null, odds:'+8000' },
  ],

  // ---- PLAYER ROSTER + PROP LINES PER TEAM ----
  PLAYOFF_PLAYERS: {
    'OKC Thunder': [
      { name:'Shai Gilgeous-Alexander', pos:'G',   pts:31.6, reb:4.4,  ast:6.5,  propLines:{pts:30.5, reb:4.5, ast:6.5, pra:41.5} },
      { name:'Chet Holmgren',           pos:'F/C', pts:18.2, reb:8.1,  ast:2.4,  propLines:{pts:17.5, reb:7.5, ast:2.5, pra:27.5} },
      { name:'Cason Wallace',           pos:'G',   pts:14.1, reb:3.2,  ast:3.8,  propLines:{pts:13.5, reb:3.5, ast:3.5, pra:20.5} },
      { name:'Isaiah Hartenstein',      pos:'C',   pts:11.3, reb:10.2, ast:3.1,  propLines:{pts:10.5, reb:9.5, ast:2.5, pra:23.5} },
    ],
    'San Antonio Spurs': [
      { name:'Victor Wembanyama',       pos:'F/C', pts:25.0, reb:11.5, ast:3.1,  propLines:{pts:24.5, reb:10.5,ast:3.5, pra:38.5} },
      { name:'Stephon Castle',          pos:'G',   pts:16.8, reb:4.1,  ast:5.2,  propLines:{pts:16.5, reb:4.5, ast:5.5, pra:25.5} },
      { name:'Harrison Barnes',         pos:'F',   pts:14.3, reb:5.2,  ast:1.8,  propLines:{pts:13.5, reb:5.5, ast:1.5, pra:20.5} },
      { name:'Chris Paul',              pos:'G',   pts:9.2,  reb:3.8,  ast:8.4,  propLines:{pts:8.5,  reb:3.5, ast:7.5, pra:21.5} },
    ],
    'Denver Nuggets': [
      { name:'Nikola Jokic',            pos:'C',   pts:27.7, reb:12.9, ast:10.7, propLines:{pts:27.5, reb:12.5,ast:10.5,pra:51.5} },
      { name:'Jamal Murray',            pos:'G',   pts:25.4, reb:4.4,  ast:7.1,  propLines:{pts:24.5, reb:4.5, ast:6.5, pra:35.5} },
      { name:'Michael Porter Jr.',      pos:'F',   pts:18.6, reb:7.8,  ast:1.9,  propLines:{pts:17.5, reb:7.5, ast:2.5, pra:27.5} },
      { name:'Aaron Gordon',            pos:'F',   pts:14.2, reb:6.9,  ast:3.1,  propLines:{pts:13.5, reb:6.5, ast:3.5, pra:23.5} },
    ],
    'Los Angeles Lakers': [
      { name:'Luka Doncic',             pos:'G/F', pts:29.8, reb:8.4,  ast:8.7,  propLines:{pts:29.5, reb:8.5, ast:8.5, pra:46.5} },
      { name:'LeBron James',            pos:'F',   pts:23.1, reb:8.1,  ast:7.8,  propLines:{pts:22.5, reb:8.5, ast:7.5, pra:39.5} },
      { name:'Austin Reaves',           pos:'G',   pts:19.4, reb:4.2,  ast:6.3,  propLines:{pts:18.5, reb:4.5, ast:6.5, pra:29.5} },
      { name:'Rui Hachimura',           pos:'F',   pts:13.2, reb:5.4,  ast:1.3,  propLines:{pts:12.5, reb:5.5, ast:1.5, pra:19.5} },
    ],
    'Houston Rockets': [
      { name:'Kevin Durant',            pos:'F',   pts:27.6, reb:7.2,  ast:4.1,  propLines:{pts:27.5, reb:7.5, ast:4.5, pra:38.5} },
      { name:'Alperen Sengun',          pos:'C',   pts:22.3, reb:9.8,  ast:4.7,  propLines:{pts:21.5, reb:9.5, ast:4.5, pra:35.5} },
      { name:'Jalen Green',             pos:'G',   pts:21.4, reb:3.8,  ast:4.3,  propLines:{pts:20.5, reb:3.5, ast:4.5, pra:28.5} },
      { name:'Amen Thompson',           pos:'G/F', pts:16.9, reb:7.8,  ast:4.2,  propLines:{pts:16.5, reb:7.5, ast:4.5, pra:28.5} },
    ],
    'Minnesota Timberwolves': [
      { name:'Anthony Edwards',         pos:'G',   pts:28.3, reb:5.4,  ast:5.1,  propLines:{pts:27.5, reb:5.5, ast:5.5, pra:38.5} },
      { name:'Julius Randle',           pos:'F',   pts:22.1, reb:8.4,  ast:3.9,  propLines:{pts:21.5, reb:8.5, ast:3.5, pra:33.5} },
      { name:'Rudy Gobert',             pos:'C',   pts:13.4, reb:13.6, ast:1.8,  propLines:{pts:12.5, reb:13.5,ast:2.5, pra:27.5} },
      { name:'Mike Conley',             pos:'G',   pts:11.2, reb:2.9,  ast:6.1,  propLines:{pts:10.5, reb:2.5, ast:5.5, pra:19.5} },
    ],
    'Detroit Pistons': [
      { name:'Cade Cunningham',         pos:'G',   pts:28.4, reb:6.1,  ast:8.7,  propLines:{pts:27.5, reb:5.5, ast:8.5, pra:42.5} },
      { name:'Jalen Duren',             pos:'C',   pts:18.6, reb:12.3, ast:2.4,  propLines:{pts:17.5, reb:11.5,ast:2.5, pra:32.5} },
      { name:'Tobias Harris',           pos:'F',   pts:17.4, reb:6.2,  ast:2.8,  propLines:{pts:16.5, reb:5.5, ast:2.5, pra:25.5} },
      { name:'Duncan Robinson',         pos:'G/F', pts:14.8, reb:3.1,  ast:2.2,  propLines:{pts:14.5, reb:3.5, ast:2.5, pra:19.5} },
    ],
    'Boston Celtics': [
      { name:'Jaylen Brown',            pos:'G/F', pts:26.8, reb:6.1,  ast:4.3,  propLines:{pts:26.5, reb:5.5, ast:4.5, pra:37.5} },
      { name:'Jayson Tatum',            pos:'F',   pts:24.3, reb:8.7,  ast:5.1,  propLines:{pts:23.5, reb:8.5, ast:5.5, pra:38.5} },
      { name:'Jrue Holiday',            pos:'G',   pts:13.8, reb:4.6,  ast:5.7,  propLines:{pts:13.5, reb:4.5, ast:5.5, pra:23.5} },
      { name:'Al Horford',              pos:'F/C', pts:10.2, reb:7.4,  ast:2.9,  propLines:{pts:9.5,  reb:7.5, ast:2.5, pra:19.5} },
    ],
    'New York Knicks': [
      { name:'Jalen Brunson',           pos:'G',   pts:27.1, reb:3.5,  ast:7.6,  propLines:{pts:26.5, reb:3.5, ast:7.5, pra:38.5} },
      { name:'Karl-Anthony Towns',      pos:'F/C', pts:23.4, reb:10.2, ast:3.7,  propLines:{pts:22.5, reb:9.5, ast:3.5, pra:35.5} },
      { name:'OG Anunoby',              pos:'F',   pts:18.9, reb:5.8,  ast:2.4,  propLines:{pts:18.5, reb:5.5, ast:2.5, pra:26.5} },
      { name:'Josh Hart',               pos:'G/F', pts:12.6, reb:8.3,  ast:4.1,  propLines:{pts:12.5, reb:8.5, ast:4.5, pra:25.5} },
    ],
    'Atlanta Hawks': [
      { name:'Trae Young',              pos:'G',   pts:24.6, reb:3.9,  ast:9.4,  propLines:{pts:24.5, reb:3.5, ast:9.5, pra:38.5} },
      { name:'Jalen Johnson',           pos:'F',   pts:21.3, reb:7.8,  ast:4.6,  propLines:{pts:20.5, reb:7.5, ast:4.5, pra:32.5} },
      { name:'Dyson Daniels',           pos:'G',   pts:19.8, reb:5.4,  ast:4.7,  propLines:{pts:19.5, reb:5.5, ast:4.5, pra:29.5} },
      { name:'Onyeka Okongwu',          pos:'F/C', pts:16.2, reb:9.4,  ast:2.1,  propLines:{pts:15.5, reb:8.5, ast:1.5, pra:25.5} },
    ],
    'Cleveland Cavaliers': [
      { name:'Donovan Mitchell',        pos:'G',   pts:26.8, reb:4.8,  ast:5.1,  propLines:{pts:26.5, reb:4.5, ast:5.5, pra:36.5} },
      { name:'Darius Garland',          pos:'G',   pts:21.4, reb:3.1,  ast:8.2,  propLines:{pts:20.5, reb:3.5, ast:7.5, pra:32.5} },
      { name:'Evan Mobley',             pos:'F/C', pts:19.8, reb:9.7,  ast:3.4,  propLines:{pts:18.5, reb:9.5, ast:3.5, pra:31.5} },
      { name:'Jarrett Allen',           pos:'C',   pts:14.1, reb:10.8, ast:1.9,  propLines:{pts:13.5, reb:10.5,ast:1.5, pra:25.5} },
    ],
    'Toronto Raptors': [
      { name:'Scottie Barnes',          pos:'F',   pts:22.4, reb:9.1,  ast:6.3,  propLines:{pts:21.5, reb:8.5, ast:6.5, pra:37.5} },
      { name:'RJ Barrett',              pos:'G/F', pts:21.8, reb:5.2,  ast:4.8,  propLines:{pts:21.5, reb:5.5, ast:4.5, pra:31.5} },
      { name:'Immanuel Quickley',       pos:'G',   pts:17.6, reb:4.2,  ast:6.9,  propLines:{pts:17.5, reb:4.5, ast:6.5, pra:28.5} },
      { name:'Jakob Poeltl',            pos:'C',   pts:13.8, reb:11.2, ast:2.6,  propLines:{pts:12.5, reb:10.5,ast:2.5, pra:25.5} },
    ],
  },

  TICKER_ITEMS: [
    { home:'DET', away:'E8 TBD', homeScore:0, awayScore:0, status:'Apr 18 · G1' },
    { home:'CLE', away:'TOR',    homeScore:0, awayScore:0, status:'Apr 18 · G1' },
    { home:'DEN', away:'MIN',    homeScore:0, awayScore:0, status:'Apr 18 · G1' },
    { home:'LAL', away:'HOU',    homeScore:0, awayScore:0, status:'Apr 18 · G1' },
    { home:'BOS', away:'E7 TBD', homeScore:0, awayScore:0, status:'Apr 19 · G1' },
    { home:'NYK', away:'ATL',    homeScore:0, awayScore:0, status:'Apr 19 · G1' },
    { home:'OKC', away:'W8 TBD', homeScore:0, awayScore:0, status:'Apr 19 · G1' },
    { home:'SAS', away:'W7 TBD', homeScore:0, awayScore:0, status:'Apr 19 · G1' },
  ],

  PLAYOFF_LEADERS: [
    { name:'Shai Gilgeous-Alexander', team:'OKC', pts:31.6, reb:4.4,  ast:6.5,  initials:'SGA' },
    { name:'Nikola Jokic',            team:'DEN', pts:27.7, reb:12.9, ast:10.7, initials:'NJ'  },
    { name:'Luka Doncic',             team:'LAL', pts:29.8, reb:8.4,  ast:8.7,  initials:'LD'  },
    { name:'Victor Wembanyama',       team:'SAS', pts:25.0, reb:11.5, ast:3.1,  initials:'VW'  },
    { name:'Cade Cunningham',         team:'DET', pts:28.4, reb:6.1,  ast:8.7,  initials:'CC'  },
    { name:'Jaylen Brown',            team:'BOS', pts:26.8, reb:6.1,  ast:4.3,  initials:'JB'  },
  ],

  renderStandings(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;
    container.innerHTML = '';
    container.classList.add('fade-in-group');
    this.PLAYOFF_TEAMS.forEach(team => {
      const card = document.createElement('div');
      card.className = 'stat-card';
      const record = team.wins != null ? `${team.wins}–${team.losses}` : 'Play-In';
      card.innerHTML = `
        <div class="seed">${team.conf.toUpperCase()} · #${team.seed}</div>
        <div class="team-name">${team.abbr}</div>
        <div style="font-size:0.9rem;color:var(--text-primary);font-weight:500;margin-bottom:0.25rem;">${team.name}</div>
        <div class="record">${record}</div>
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
        <div class="player-stat"><span class="label">PTS</span><span class="value">${player.pts}</span></div>
        <div class="player-stat"><span class="label">REB</span><span class="value">${player.reb}</span></div>
        <div class="player-stat"><span class="label">AST</span><span class="value">${player.ast}</span></div>
      `;
      container.appendChild(card);
    });
  },

  renderTicker(targetId) {
    const track = document.getElementById(targetId);
    if (!track) return;
    const all = [...this.TICKER_ITEMS, ...this.TICKER_ITEMS];
    track.innerHTML = all.map(g => {
      const isLive = g.homeScore > 0 || g.awayScore > 0;
      const score = isLive
        ? `<span class="score">${g.away} ${g.awayScore} – ${g.homeScore} ${g.home}</span>`
        : `<span class="score">${g.away} @ ${g.home}</span>`;
      return `<span class="ticker-item">${score} <span class="status">${g.status}</span></span>`;
    }).join('');
  },

  getAllPlayers() {
    const out = [];
    for (const [team, players] of Object.entries(this.PLAYOFF_PLAYERS)) {
      players.forEach(p => out.push({ ...p, team }));
    }
    return out;
  },

  getMatchupStrings() {
    return this.MATCHUPS.map(m => `${m.away} @ ${m.home}`);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('standingsCards')) NBA.renderStandings('standingsCards');
  if (document.getElementById('playersGrid'))    NBA.renderPlayers('playersGrid');
  if (document.getElementById('tickerTrack'))    NBA.renderTicker('tickerTrack');
});
