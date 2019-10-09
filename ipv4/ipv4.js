const isIPV4 = ip => {
  if(typeof ip !== 'string' || !ip.match(/^(\d{1,3}\.){3}\d{1,3}$/))
    return false

  for (const i of ip.split('.'))
    if(parseInt(i) > 255)
      return false

  return true
}

let test = [
  ["192.168.1.1", true],
  ["192.168.1.1.0", false],
  ["0.0.0.1", true],
  ["192.-12.88.76", false],
  ["192.12.88.7600", false],
  ["127.1.1.44", true],
  ["355.355.1.44", false],
  [123, false]
]

for(let i=0; i< test.length; i++){
  console.log(`${test[i][0]} - ${test[i][1]} VS ${isIPV4(test[i][0])}`)
}