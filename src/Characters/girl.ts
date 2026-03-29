import girlBack from '../assets/playerTemplates/girlBack.png'
import girlBackLleg from '../assets/playerTemplates/girlBackLLeg.png'
import girlBackRleg from '../assets/playerTemplates/girlBackRLeg.png'
import girlFront from '../assets/playerTemplates/girlFront.png'
import girlFrontLleg from '../assets/playerTemplates/girlFrontLLeg.png'
import girlFrontRleg from '../assets/playerTemplates/girlFrontRLeg.png'
import girlLeft from '../assets/playerTemplates/girlLeft.png'
import girlLeftLleg from '../assets/playerTemplates/girlLeftLLeg.png'
import girlLeftRleg from '../assets/playerTemplates/girlLeftRLeg.png'
import girlRight from '../assets/playerTemplates/girlRight.png'
import girlRightLleg from '../assets/playerTemplates/girlRightLLeg.png'
import girlRightRleg from '../assets/playerTemplates/girlRightRLeg.png'
import girlVictory from '../assets/playerTemplates/girlVictory.png'
import girlDefeat from '../assets/playerTemplates/girlDefeat.png'

import type { CharacterDefinition } from '../Contexts/characterContext'

export const girlCharacter: CharacterDefinition = {
  id: 'girl',
  name: 'Girl',
  preview: girlFront,
  sprites: {
    front: [girlFront, girlFrontRleg, girlFrontLleg],
    back: [girlBack, girlBackRleg, girlBackLleg],
    left: [girlLeft, girlLeftRleg, girlLeftLleg],
    right: [girlRight, girlRightRleg, girlRightLleg],
  },
  victory: girlVictory,
  defeat: girlDefeat,
}
