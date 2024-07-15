class Game {
  constructor(map, food, snake, startGameBtn, pauseGameBtn, stopGameBtn, scoreGame) {
    this.map = map
    this.food = food
    this.snake = snake
    this.timer = null
    this.score = 0
    this.startGameBtn = document.querySelector(startGameBtn)
    this.pauseGameBtn = document.querySelector(pauseGameBtn)
    this.stopGameBtn = document.querySelector(stopGameBtn)
    this.scoreGame = document.querySelector(scoreGame)
    this.startGameBtn.addEventListener('click', this.throttle(() => {
      this.startGame()
    }, 1000))
    this.pauseGameBtn.addEventListener('click', this.throttle(() => {
      this.pauseGame()
    }, 1000))
    this.stopGameBtn.addEventListener('click', this.throttle(() => {
      this.stopGame()
    }, 1000))
  }
  
  startGameInterval() {
    this.timer = setInterval(() => {
      this.snake.move()
      if (this.snake.isEatFood(this.food.foodPos.x * 20, this.food.foodPos.y * 20)) {
        this.snake.createSnakeHead()
        this.food.generateFood()
        this.scoreChange()
      }
      if (this.snake.isDie()) {
        window.confirm('game over')
        this.stopGame()
        clearInterval(this.timer)
        return
      }
    }, 100)
  }

  throttle(fn, delay) {
    let timer = null
    return (...args) => {
      if(timer) return
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
      console.log(timer, 'timer')
    }
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

  scoreChange() {
    this.score++
    this.scoreGame.innerHTML = `积分版：${this.score}`
  }

}