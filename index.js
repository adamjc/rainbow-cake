(function () {
  window.rainbowCake = {
    init: function (id, text, font = "64px Arial") {
      const canvas = document.getElementById(id)
      canvas.style.letterSpacing = "20px"
      const ctx = canvas.getContext('2d')
      
      const realText = text.toUpperCase()
      ctx.font = font
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#333"

      const startX = 0
      const startY = 60
      const increment = 7
      const colours = [
        '#d49eae',
        '#a3a3d4',
        '#a6c9e9',
        '#9fbcc3',
        '#a8d2a4',
        '#f9e390',
        '#f5be8b',
        '#ec8b8e'
      ]

      const texts = colours.map((colour, index) => {
        return {
          x: startX + (increment * index),
          y: startY + (increment * index),
          colour: colour
        }
      })

      texts.forEach(text => {
        ctx.strokeText(`${realText}`, text.x, text.y); 
        ctx.fillStyle = text.colour;
        ctx.fillText(`${realText}`, text.x, text.y);
      })
    }
  }
})()