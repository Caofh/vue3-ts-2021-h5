//设置页面rem
function setRem(winWidth?: number, baseVal = 10): void {
  const win = window
  const doc = document

  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
  const recalc = () => {
    const clientWidth = winWidth || docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = clientWidth / baseVal + 'px'
  }
  recalc()
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}

export { setRem }
