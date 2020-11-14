import {mount, h} from 'redrunner'
import {MainView} from './views'

mount('#main', MainView)

/*
redRunnerError({
  title: 'Error in items',
  info: 'Yolo'
})

redRunnerError({
  title: 'Error in inner',
  info: 'innnnn'
})

function redRunnerError(error) {
  console.log(error)
  const errorDiv = (err) => h('div').inner([
    h('h2').text(err.title),
    h('div').text(err.info)
  ])
  if (!window.redrunner_errors) {
    window.redrunner_errors = []
    document.querySelectorAll('link[rel="stylesheet"]').forEach(el => el.parentNode.removeChild(el));
  }
  window.redrunner_errors.push(error)
  document.body.innerHTML = ''
  const page = h('div').inner(window.redrunner_errors.map(errorDiv))
  document.body.appendChild(page.e)
}
*/