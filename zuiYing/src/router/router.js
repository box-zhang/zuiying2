import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/home/home';
import Activity from 'components/activity/activity';
import Propagandize from 'components/propagandize/propagandize';
import Marketing from 'components/marketing/marketing';
import UpLoad from 'components/upLoad/upLoad';
import DownLoad from 'components/downLoad/downLoad';
import LoginMain from 'components/login/loginMain';
import Login from 'components/login/login';
import Signin from 'components/login/signin';
import PasswordRetrieve from 'components/passwordRetrieve/passwordRetrieve';
import About from 'components/about/about';

import Introduce from 'components/introduce/introduce';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },{
      path: '/home',
      component: Home
    },{
      path: '/activity',
      component: Activity
    },{
      path: '/propagandize',
      component: Propagandize
    },{
      path: '/marketing',
      component: Marketing
    },{
      path: '/upload',
      component: UpLoad
    },{
      path: '/download',
      component: DownLoad
    },{
      path: '/login',
      component: LoginMain,
      children: [
        {
          path: '',
          component: Login
        },
        {
          path: '/signin',
          component: Signin
        }
      ]
    },{
      path: '/passwordRetrieve',
      component: PasswordRetrieve
    },{
      path: '/introduce',
      component: Introduce
    },{
      path: '/about',
      component: About
    }
  ]
});
