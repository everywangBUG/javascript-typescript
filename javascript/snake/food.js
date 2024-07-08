class Food {
  constructor(map, selector) {
      this.map = map
      this.mapEl = document.querySelector(selector)
      this.foodPos = null
      this.generateFood()
    }
    
    generateFood() {
      const x = Math.floor(Math.random() * this.map.width)
      const y = Math.floor(Math.random() * this.map.height)
      const foodEl = document.createElement('div')
      this.mapEl.appendChild(foodEl)
      this.foodPos = { x, y }
      foodEl.classList.add('food')
      foodEl.style.left = `${x * 20}px`
      foodEl.style.top = `${y * 20}px`
  }
}
