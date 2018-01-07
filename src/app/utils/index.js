export const truncate = (text, length = 30, clamp = '...') => {
  if (text.length <= length) return text

  let tcText = text.slice(0, length - clamp.length)
  let last = tcText.length - 1

  while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) last -= 1

  last = last || length - clamp.length

  tcText = tcText.slice(0, last)

  return tcText + clamp
}

export const dateDiff = (a, b) => {
  const msPerDay = 1000 * 60 * 60 * 24
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())

  return Math.floor((utc2 - utc1) / msPerDay)
}

const getErrors = ({ errorMsg = `This field is required.` }) => errorMsg

const validate = (fn, data) => {
  return fn(data)
    ? null
    : getErrors(data)
}

export const simpleValidate = rule => field => validate(rule, field)
