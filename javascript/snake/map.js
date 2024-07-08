class Map {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.generateMap()
  }

  generateMap() {
    const tableEl = document.querySelector('.map')
    for (let row = 0; row < this.height; row++) {
      const trEl = document.createElement('tr')
      for (let column = 0; column < this.width; column++) {
        const tdEl = document.createElement('td');
        tdEl.classList.add('cell')
        trEl.appendChild(tdEl)
      }
      trEl.classList.add('row')
      tableEl.appendChild(trEl)
    }
  }
}
