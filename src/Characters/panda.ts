import pandaBack from '../assets/playerTemplates/pandaBack.png'
import pandaBackLleg from '../assets/playerTemplates/pandaBackLLeg.png'
import pandaBackRleg from '../assets/playerTemplates/pandaBackRLeg.png'
import pandaFront from '../assets/playerTemplates/pandaFront.png'
import pandaFrontLleg from '../assets/playerTemplates/pandaFrontLLeg.png'
import pandaFrontRleg from '../assets/playerTemplates/pandaFrontRLeg.png'
import pandaLeft from '../assets/playerTemplates/pandaLeft.png'
import pandaLeftLleg from '../assets/playerTemplates/pandaLeftLLeg.png'
import pandaLeftRleg from '../assets/playerTemplates/pandaLeftRLeg.png'
import pandaRight from '../assets/playerTemplates/pandaRight.png'
import pandaRightLleg from '../assets/playerTemplates/pandaRightLLeg.png'
import pandaRightRleg from '../assets/playerTemplates/pandaRightRLeg.png'
import type { CharacterDefinition } from '../Contexts/characterContext'

export const pandaCharacter: CharacterDefinition = {
  id: 'panda',
  name: 'Panda',
  preview: pandaFront,
  sprites: {
    front: [pandaFront, pandaFrontRleg, pandaFrontLleg],
    back: [pandaBack, pandaBackRleg, pandaBackLleg],
    left: [pandaLeft, pandaLeftLleg, pandaLeftRleg],
    right: [pandaRight, pandaRightLleg, pandaRightRleg],
  },
}
