// 二次贝塞尔曲线
const quadratic = (P0, P1, P2) => {
  const { x: x0, y: y0 } = P0
  const { x: x1, y: y1 } = P1
  const { x: x2, y: y2 } = P2

  const x = t => Math.pow(1 - t, 2) * x0 + 2 * (1 - t) * t * x1 + Math.pow(t, 2) * x2
  const y = t => Math.pow(1 - t, 2) * y0 + 2 * (1 - t) * t * y1 + Math.pow(t, 2) * y2

  const res = []

  for (let t = 0; t <= 1; t = t + 1/60) {
    const valX = x(t)
    const valY = y(t)

    res.push({x: valX, y: valY})
  }
  res.push({x: 1, y: 0})
  return res
}