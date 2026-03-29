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
    text: 'Ah o Pelô! Onde cultura, historia e religião se misturam. Você ainda não encontrou o Sereia Tattoo Studio, mas ja que esta por aqui entre na roda, jogue uma capoeira com a gente e depois continue sua busca!',
  },
  barra: {
    place: Barra,
    text: 'O farol mais antigo da America ainda em funcionamento! Você sabia que ele ja funcionou com oleo de baleia? Você ainda não encontrou o Sereia Tattoo Studio, use a luz do farol para te guiar! Dê um mergulho na praia e continue a procura!',
  },
  aeroporto: {
    place: Aeroporto,
    text: 'O primeiro e ultimo cartão postal que os turistas veem quando chegam na cidade! Parece até um portal que atravessamos para entrar no mundo magico de Salvador! Você ainda não encontrou o Sereia Tattoo Studio, mas pelo menos esta na cidade certa! Vem dar um passeio de avião comigo, talvez la de cima você consiga avistar seu destino.',
  },
  bonfim: {
    place: Bonfim,
    text: 'Aqui é palco de uma das festas religiosas mais bonitas do mundo! Olha que linda essa grade toda colorida com as fitas do Senhor do Bonfim! Você ainda não encontrou o Sereia Tattoo Studio. Amarre essa fitinha no braço e faça seus três desejos. Deixa eu adivinhar: uma tattoo, um piercing e achar o Sereia Tattoo Studio?',
  },
  itapua: {
    place: Itapua,
    text: 'Itapuã suas praias, dunas, lagoa do Abaete... Esse lugar ja foi morada e inspiração de musicos, escritores... Artistas de todos os tipos andavam essas ruas lado a lado com pescadores. Você ainda não encontrou o Sereia Tattoo Studio. Venha comer um peixe com a gente, depois você continua sua busca de barriga cheia!',
  },
  rioVermelho: {
    place: RioVermelho,
    text: 'Agora você esta pertinho! Todo mundo aqui no Rio Vermelho conhece o Sereia Tattoo Studio! O mesmo mar que deu origem à Festa de Iemanja deu origem ao estudio de tattoo! Mas ainda não é aqui, você esta na parte mais bôemia da cidade, festeja um pouco com a gente, e depois continue sua busca, daqui ja da pra ir a pé!',
  },
  tororo: {
    place: Tororo,
    text: 'Dique do tororo é o encontro de toda a cidade, todas as ruas dão aqui! Os orixas em pé sobre essas aguas viraram um dos grandes simbolos de Salvador. E a cidade toda desce pra ver os jogos na fonte nova. Você ainda não encontrou o Sereia Tattoo Studio. Mas hoje tem BA-VI, vem assistir o jogo com a gente e depois continue sua procura!',
  },
  gordinhas: {
    place: Gordinhas,
    text: 'Parabens! Voce encontrou o Sereia Tattoo Studio! Ele fica em frente as Gordinhas de Ondina, no edificio The Plaza. Agora entre e faça sua tattoo',
  },
  pituacu: {
    place: Pituacu,
    text: 'Dar uma volta pela ciclovia fazer esportes... Observar as esculturas de Mario Cravo... Ou apenas admirar a natureza. Você esta no Parque de Pituaçu!  Você ainda não encontrou o Sereia Tattoo Studio. Quer minha bike emprestada para continuar sua busca?',
  },
}
