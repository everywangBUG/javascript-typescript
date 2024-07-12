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
      if (this.snake.isEatFood(this.food.foodPos.x * 20, this.food.foodPos.y * 20)) {
        this.snake.createSnakeHead()
        this.food.generateFood()
      }
      if (this.snake.isDie()) {
        alert('game over')
        clearInterval(this.timer)
      }
    }, 1000)
  }

  clickEvent() {
    this.startGameBtn.addEventListener('click', () => {
      this.startGame()
    })
    this.pauseGameBtn.addEventListener('click', () => {
      this.pauseGame()
    })
    this.stopGameBtn.addEventListener('click', () => {
      this.stopGame()
    })
  }

  startGame() {
      this.startGameInterval()
  }

  pauseGame() {
      clearInterval(this.timer)
  }

  stopGame() {
      clearInterval(this.timer)
      window.location.reload()
  }

  changeDirection(direction) {
    this.snake.direction = direction
    this.snake.changeDirection(direction)
  }

}