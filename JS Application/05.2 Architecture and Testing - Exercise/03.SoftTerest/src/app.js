import { setHomeView } from './views/home.js'
import { setNavPanel } from './nav.js'


const main = document.querySelector('main')

setNavPanel()

setHomeView(main)