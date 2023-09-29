function calcularMediaDuracaoEpisodios(temporadaFriends) {
  let somaDuracaoTotalEpisodios = 0; 
  let numeroEpisodios = 0;

  for (let i = 0; i < temporadaFriends.length; i++) {
    const episodio = temporadaFriends[i];
    somaDuracaoTotalEpisodios += episodio.duracao; 
    numeroEpisodios++; 
  }

  const mediaDuracaoEpisodios = somaDuracaoTotalEpisodios / numeroEpisodios; 
  return mediaDuracaoEpisodios; 

}