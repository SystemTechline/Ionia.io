const levels = [1, 30, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500];

export default function getBorder(summonerLevel) {
  let border;

  for(let i = 0; i <= levels.length; i++) {
    if(summonerLevel >= levels[i]) {
      border = `lvl${levels[i]}`
    }
  }

  return border;
}