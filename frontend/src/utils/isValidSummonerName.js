export default function isValidSummonerName(summoner_name) {
  const formattedSummonerName = summoner_name.trim().toLowerCase();

  const containsRiotKeyword = /riot/i.test(formattedSummonerName);

  return formattedSummonerName.length >= 3
    && formattedSummonerName.length <= 16
    && containsRiotKeyword === false;
}
