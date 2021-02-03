console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
const CFonts  = require('cfonts')
CFonts.say('CIEE NYOLONG', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say('\'Instagram:\' ff.kelvin15', {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

function start() {
  let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
    }
  })
  .on('error', e => {
    console.error(e)
    fs.watchFile(args[0], () => {
      start()
      fs.unwatchFile(args[0])
    })
  })
}

start()
