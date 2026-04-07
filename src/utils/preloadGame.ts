import { preloadImages } from '../utils/preloadImages'

import aeroporto from '../assets/aeroporto.png'
import barra from '../assets/barra.png'
import bonfim from '../assets/bonfim.png'
import ending from '../assets/ending.jpg'
import gordinhas from '../assets/gordinhas.jpg'
import itapua from '../assets/itapua.png'
import mermaid from '../assets/mermaid.png'
import pelourinho from '../assets/pelourinho.png'
import pituacu from '../assets/pituacu.png'
import rioVermelho from '../assets/rio-vermelho.jpg'
import tororo from '../assets/tororo.png'

const base = import.meta.env.BASE_URL

const images = [
  `${base}/select-screen-bg.jpg`,
  `${base}/city_map.jpg`,
  `${base}/city_map_walkable.jpg`,
  `${base}/water.jpg`,
  aeroporto,
  barra,
  bonfim,
  ending,
  gordinhas,
  itapua,
  mermaid,
  pelourinho,
  pituacu,
  rioVermelho,
  tororo,
]

let isGamePreloaded = false

export async function preloadGame() {
  if (isGamePreloaded) return

  await preloadImages(images)
  isGamePreloaded = true
}
