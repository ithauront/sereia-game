# Sereia Game
# World / Screen Fundamentals

## Conceitos

### World Space
- Espaço absoluto do mapa
- Todas as entidades usam coordenadas neste espaço
- Ex: { x: 2000, y: 1500 } em um mapa de 5000x3000

### Screen Space
- Área visível na tela
- Determinada pelo viewport / câmera
- Usada apenas para renderizar no DOM ou calcular cliques

## Regras
1. Toda posição de entidade é **world space**
2. Nenhum componente ou hook deve calcular posição diretamente do DOM (exceto input)
3. Conversions:
   - Clique → world: worldX = clickX + cameraX
   - Render → screen: screenX = worldX - cameraX

## Configurações
- Tamanho do mundo: 5000px (largura) x 3000px (altura)
- Velocidade padrão do player: 2px/frame

## Utilitários
- `clamp(value, min, max)` → garante que valores não saiam dos limites do mundo

## Camera
- A câmera opera apenas em world space
- `camera.position` representa o centro da viewport no mundo
- A câmera nunca sai dos limites do world


