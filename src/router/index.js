import Vue from 'vue'
import Router from 'vue-router'
import Home from 'src/pages/Home'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: view('About')
    }
  ]
})

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
function view (name) {
  return function (resolve) {
    require(['../pages/' + name + '.vue'], resolve)
  }
}

window.activeCollabRouter = router

export default router
