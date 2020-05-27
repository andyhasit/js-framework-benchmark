import {mount} from 'redrunner'
import {Main} from './views'
import {store} from './store'

// Mount returns the view it creates.
// We're simply saving that on the store so we can update() it.
store.mainView = mount('#main', Main)
