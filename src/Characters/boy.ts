import boyBack from '../assets/playerTemplates/boyBack.png'
import boyBackLleg from '../assets/playerTemplates/boyBackLleg.png'
import boyBackRleg from '../assets/playerTemplates/boyBackRleg.png'
import boyFront from '../assets/playerTemplates/boyFront.png'
import boyFrontLleg from '../assets/playerTemplates/boyFrontLLeg.png'
import boyFrontRleg from '../assets/playerTemplates/boyFrontRleg.png'
import boyLeft from '../assets/playerTemplates/boyLeft.png'
import boyLeftLleg from '../assets/playerTemplates/boyLeftLleg.png'
import boyLeftRleg from '../assets/playerTemplates/boyLeftRleg.png'
import boyRight from '../assets/playerTemplates/boyRight.png'
import boyRightLleg from '../assets/playerTemplates/boyRightLleg.png'
import boyRightRleg from '../assets/playerTemplates/boyRightRleg.png'
import boyVictory from '../assets/playerTemplates/boyVictory.png'
import boyDefeat from '../assets/playerTemplates/boyDefeat.png'

import type { CharacterDefinition } from '../Contexts/characterContext'

export const boyCharacter: CharacterDefinition = {
  id: 'boy',
  name: 'Boy',
  preview: boyFront,
  sprites: {
    front: [boyFront, boyFrontRleg, boyFrontLleg],
    back: [boyBack, boyBackRleg, boyBackLleg],
    left: [boyLeft, boyLeftRleg, boyLeftLleg],
    right: [boyRight, boyRightRleg, boyRightLleg],
  },
  victory: boyVictory,
  defeat: boyDefeat,
}
