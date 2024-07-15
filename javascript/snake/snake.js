class Snake {
    constructor(map, food, selector) {
      this.map = map
      this.food = food
      this.mapEl = document.querySelector(selector)
      this.direction = 'right'
      this.snake = []
      this.createSnake()
      this.move()
    }

    createSnakeHead() {
      const head = this.snake[0]
      const pos = { x: 0, y: 0 }

      if (head) {
        switch(this.direction) {
          case 'right':
            pos.x = head.offsetLeft + 20
            pos.y = head.offsetTop
            break
          case 'left':
            pos.x = head.offsetLeft - 20
            pos.y = head.offsetTop
            break
          case 'up':
            pos.x = head.offsetLeft
            pos.y = head.offsetTop - 20
            break
          case 'down':
            pos.x = head.offsetLeft
            pos.y = head.offsetTop + 20
            break
        }
        head.className = 'snake_body'
      }
      
      const snakeHead = document.createElement('div')
      snakeHead.classList.add('snake_head')
      snakeHead.style.left = `${pos.x}px`
      snakeHead.style.top = `${pos.y}px`
      this.mapEl.appendChild(snakeHead)
      this.snake.unshift(snakeHead)
    }

    createSnake() {
      for(let i = 0; i <= 4; i++) {
          this.createSnakeHead()
      }
    }

    move() {
      const body = this.snake.pop()
      body.remove()
      this.createSnakeHead()
    }

    changeDirection() {
      switch(this.direction) {
        case 'right':
          this.direction = 'right'
          break
        case 'down':
          this.direction = 'down'
          break
        case 'left':
          this.direction = 'left'
          break
        case 'up':
          this.direction = 'up'
          break
      }
    }

    isEatFood(foodX, foodY) {
      const head = this.snake[0]
      if (head.offsetLeft === foodX && head.offsetTop === foodY) {
        return true
      }
      return false
    }

    isDie() {
      const head = this.snake[0]
      if (head.offsetLeft < 0 || head.offsetTop < 0 || head.offsetLeft > this.map.width * 20 || head.offsetTop > this.map.height * 20) {
        return true
      }
      return false
    }

    isHitSelf() {
      const head = this.snake[0]
      for(let i = 1; i < this.snake.length; i++) {
        if (head.offsetLeft === this.snake[i].offsetLeft && head.offsetTop === this.snake[i].offsetTop) {
          return true
        }
      }
      return false
    }
}