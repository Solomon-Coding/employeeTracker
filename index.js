const Menu = require('./lib/Menu');

const menu = new Menu()

function init(){
  menu.inquirerMenu()
  // menu.inquirerFunction(menu.menuQuestions)
}

init()