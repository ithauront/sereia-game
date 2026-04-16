import Barra from '../assets/barra.png'
import Aeroporto from '../assets/aeroporto.png'
import Bonfim from '../assets/bonfim.png'
import Itapua from '../assets/itapua.png'
import Pelourinho from '../assets/pelourinho.png'
import RioVermelho from '../assets/rio-vermelho.jpg'
import Tororo from '../assets/tororo.png'
import Gordinhas from '../assets/gordinhas.jpg'
import Pituacu from '../assets/pituacu.png'

export interface CutsceneZone {
  id: string
  x: number
  y: number
  radius: number
}
//TODO: talvez em uma aleatoriedade bem rara fazer uma cutscene direcionar para um desconto.
export const cutsceneZones: CutsceneZone[] = [
  {
    id: 'bonfim',
    x: 394,
    y: 191,
    radius: 20,
  },
  {
    id: 'pelourinho',
    x: 390,
    y: 506,
    radius: 40,
  },
  {
    id: 'barra',
    x: 321,
    y: 689,
    radius: 30,
  },
  {
    id: 'tororo',
    x: 641,
    y: 330,
    radius: 50,
  },
  {
    id: 'aeroporto',
    x: 1267,
    y: 86,
    radius: 30,
  },
  {
    id: 'pituacu',
    x: 1025,
    y: 362,
    radius: 20,
  },
  {
    id: 'itapua',
    x: 1284,
    y: 362,
    radius: 20,
  },
  {
    id: 'rioVermelho',
    x: 1022,
    y: 576,
    radius: 20,
  },
  {
    id: 'gordinhas',
    x: 613,
    y: 799,
    radius: 30,
  },
]
//TODO: verificar os radius
export const cutscenesData = {
  pelourinho: {
    place: Pelourinho,
    text: 'Ah, o Pelô! Onde cultura, história e religião se misturam. Você ainda não encontrou o Sereia Tattoo Studio, mas, já que está por aqui, entre na roda, jogue uma capoeira com a gente e depois continue sua busca!',
  },
  barra: {
    place: Barra,
    text: 'O farol mais antigo da América ainda em funcionamento! Você sabia que ele já funcionou com óleo de baleia? Você ainda não encontrou o Sereia Tattoo Studio. Use a luz do farol para te guiar! Dê um mergulho na praia e continue a procura!',
  },
  aeroporto: {
    place: Aeroporto,
    text: 'O primeiro e último cartão-postal que os turistas veem quando chegam à cidade! Parece até um portal que atravessamos para entrar no mundo mágico de Salvador! Você ainda não encontrou o Sereia Tattoo Studio, mas pelo menos está na cidade certa! Vem dar um passeio de avião comigo, talvez lá de cima você consiga avistar seu destino.',
  },
  bonfim: {
    place: Bonfim,
    text: 'Aqui é palco de uma das festas religiosas mais bonitas do mundo! Olha que linda essa grade toda colorida com as fitas do Senhor do Bonfim! Amarre essa fitinha no braço e faça seus três desejos. Deixa eu adivinhar: uma tattoo, um piercing e encontrar o Sereia Tattoo Studio?',
  },
  itapua: {
    place: Itapua,
    text: 'Itapuã… suas praias, dunas, Lagoa do Abaeté… Esse lugar já foi morada e inspiração de músicos, escritores e artistas de todos os tipos, que andavam por essas ruas lado a lado com pescadores. Você ainda não encontrou o Sereia Tattoo Studio. Venha comer um peixe com a gente, depois você continua sua busca de barriga cheia!',
  },
  rioVermelho: {
    place: RioVermelho,
    text: 'Agora você está pertinho! Todo mundo aqui no Rio Vermelho conhece o Sereia Tattoo Studio! O mesmo mar que deu origem à Festa de Iemanjá também inspirou o estúdio de tattoo!Você está na parte mais boêmia da cidade. Mas ainda não é aqui… Festeje um pouco com a gente e depois continue sua busca. Daqui já dá para ir a pé!',
  },
  tororo: {
    place: Tororo,
    text: 'O Dique do Tororó é o ponto de encontro de toda a cidade. Todas as ruas parecem levar até aqui! Os orixás sobre essas águas viraram um dos grandes símbolos de Salvador. E a cidade toda desce para ver os jogos na Fonte Nova. Hoje tem Ba-Vi! Vem assistir ao jogo com a gente e depois continue sua procura!',
  },
  gordinhas: {
    place: Gordinhas,
    text: 'Parabéns! Você encontrou o Sereia Tattoo Studio! Ele fica em frente às Gordinhas de Ondina, no edifício The Plaza. Agora entre e faça sua tattoo!',
  },
  pituacu: {
    place: Pituacu,
    text: 'Dar uma volta pela ciclovia, fazer esportes, observar as esculturas de Mário Cravo… Ou apenas admirar a natureza. Você está no Parque de Pituaçu! Quer minha bike emprestada para continuar sua busca?',
  },
}
