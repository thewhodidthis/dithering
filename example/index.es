import * as matrix from '../matrix.mjs'

const images = document.querySelectorAll('canvas img')
const boards = document.querySelectorAll('canvas')

if (window !== window.top) {
  document.documentElement.classList.add('is-iframe')
}

const params = [
  {
    nature: 'ordered',
    lookup: Array(4).fill(2)
  },
  {
    nature: 'ordered',
    lookup: [0, 2, 3, 1]
  },
  {
    nature: 'ordered',
    lookup: matrix.bayer16
  },
  {
    nature: 'spatial',
    lookup: matrix.atkinson
  },
  {
    nature: 'spatial',
    lookup: matrix.stucki
  }
]

Array.from(images).map(img => img.alt).forEach((src, i) => {
  const config = params[i]
  const canvas = boards[i]
  const target = canvas.getContext('2d')

  const { width: w, height: h } = canvas

  const worker = new Worker('worker.js')

  worker.addEventListener('message', (e) => {
    target.putImageData(e.data.result, 0, 0)
  })

  const master = document.createElement('img')

  master.addEventListener('load', () => {
    target.drawImage(master, 0, 0)

    const source = target.getImageData(0, 0, w, h)

    worker.postMessage({ config, source })
  })

  master.setAttribute('src', src)
})
