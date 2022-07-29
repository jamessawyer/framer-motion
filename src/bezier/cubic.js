// 贝塞尔曲线
const cubic = (P0, P1, P2, P3) => {
  const { x: x0, y: y0 } = P0
  const { x: x1, y: y1 } = P1
  const { x: x2, y: y2 } = P2
  const { x: x3, y: y3 } = P3

  const y = t => 
    Math.pow(1 - t, 3) * y0 
    + 3 * Math.pow(1 - t, 2) * t * y1 
    + 3 * (1 -t) * Math.pow(t, 2) * y2 + Math.pow(t, 3) * y3
  
  const x = (t) =>
    Math.pow(1 - t, 3) * x0 +
    3 * Math.pow(1 - t, 2) * t * x1 +
    3 * (1 - t) * Math.pow(t, 2) * x2 +
    Math.pow(t, 3) * x3

  const res = []

  for (let t = 0; t <= 1; t = t + 1 / 60) {
    const valX = x(t)
    const valY = y(t)
    res.push({ x: valX, y: valY })
  }
  res.push({ x: 1, y: 0 })

  return res
}