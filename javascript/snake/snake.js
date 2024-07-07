class Snake {
    constructor(map, food, selector) {
      this.map = map
      this.food = food
      this.mapEl = document.querySelector(selector)
      this.direction = 'right'
      this.snake = []
      this.createSnakeHead()
    }

    createSnakeHead() {
      const x = Math.floor(Math.random() * this.map.width)
      const y = Math.floor(Math.random() * this.map.height)
      const { foodX, foodY } = this.food.foodPos
      if (foodX !== x && foodY !== y) {
        const snakeHead = document.createElement('div')
        snakeHead.classList.add('snake_head')
        snakeHead.style.left = `${x * 20}px`
        snakeHead.style.top = `${y * 20}px`
        this.mapEl.appendChild(snakeHead)
        this.snake.unshift(snakeHead)
      }
    }
}