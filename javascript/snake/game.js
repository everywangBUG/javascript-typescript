class Game {
  constructor(map, food, snake, startGameBtn, pauseGameBtn, stopGameBtn) {
    this.map = map
    this.food = food
    this.snake = snake
    this.timer = null
    this.startGameBtn = document.querySelector(startGameBtn)
    this.pauseGameBtn = document.querySelector(pauseGameBtn)
    this.stopGameBtn = document.querySelector(stopGameBtn)
    this.clickEvent()
  }
  
  startGameInterval() {
    this.timer = setInterval(() => {
      this.snake.move()
      if (this.snake.isEatFood(this.food.x, this.food.y)) {
        this.snake.createSnake()
        this.food.createFood()
      }
      if (this.snake.isDie() || this.snake.isHitSelf()) {
        alert('game over')
        clearInterval(this.timer)
      }
    }, 1000)
  }

  clickEvent() {
    this.startGame()
    this.pauseGame()
    this.stopGame()
  }

  startGame() {
    this.startGameBtn.addEventListener('click', () => {
      this.startGameInterval()
    })
  }

  pauseGame() {
    this.pauseGameBtn.addEventListener('click', () => {
      clearInterval(this.timer)
    })
  }

  stopGame() {
    this.stopGameBtn.addEventListener('click', () => {
      clearInterval(this.timer)
      window.location.reload()
    })
  }

  changeDirection(direction) {
    this.snake.direction = direction
    this.snake.changeDirection(direction)
  }

}