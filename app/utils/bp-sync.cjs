/*
  This script is designed to monitor changes in the 'breakpoints.ts' file and automatically update the corresponding variables
  in the 'breakpoints.css' file. It uses the 'chokidar' library to watch for changes in the 'breakpoints.ts' file
  and the 'fs' module to read and write files. When a change is detected in the 'breakpoints.ts' file, the script updates
  the values of CSS variables in the 'breakpoints.css' file.

  This is useful when there is no ready design mockup for the app and you are 'feeling your way' through it. :)
*/


const fs = require('fs')
const path = require('path')

const chokidar = require('chokidar')


const bpTsPath = path.join(__dirname, '..', 'lib', 'breakpoints.ts')
const bpCssPath = path.join(__dirname, '..', 'styles', 'breakpoints.css')

function updateBpCss() {
  fs.readFile(bpTsPath, 'utf-8', (err, tsData) => {
    if (err) {
      console.error(`Reading '${bpTsPath}' file error:`, err)
      return
    }

    const bp = {}
    const regex = /(\w+):\s*(\d+),?/g

    let match

    while ((match = regex.exec(tsData)) !== null) {
      bp[match[1]] = match[2]
    }

    fs.readFile(bpCssPath, 'utf-8', (err, cssData) => {
      if (err) {
        console.error(`Reading '${bpCssPath}' file error:`, err)
        return
      }

      let updatedCssData = cssData

      for (const [key, value] of Object.entries(bp)) {
        const cssVar = `--${key.toLowerCase()}-bp`
        const cssRegex = new RegExp(`(${cssVar}:\\s*)\\d+px`, 'g')

        updatedCssData = updatedCssData.replace(cssRegex, `$1${value}px`)
      }

      fs.writeFile(bpCssPath, updatedCssData, 'utf-8', (err) => {
        err
          ? console.error(`Updating '${bpCssPath}' file error:`, err)
          : console.log(`'${bpCssPath}' file successfully updated`)
      })
    })
  })
}

const watcher = chokidar.watch(bpTsPath, {
  persistent: true
})

watcher.on('change', (path) => {
  console.log(`'${path}' file was changed. Updating '${bpCssPath}' file...`)
  updateBpCss()
})

console.log(`Monitoring changes in '${bpTsPath}' file...`)
