import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/home/home';

import ActivityMovie from 'components/activityMovie/activityMovie';
import ActivityIntroduce from 'components/activityMovie/activityIntroduce';

import Propagandize from 'components/propagandize/propagandize';
import Marketing from 'components/marketing/marketing';
import UpLoad from 'components/upLoad/upLoad';
import DownLoad from 'components/downLoad/downLoad';
import LoginMain from 'components/login/loginMain';
import Login from 'components/login/login';
import Signin from 'components/login/signin';
import PasswordRetrieve from 'components/passwordRetrieve/passwordRetrieve';
import About from 'components/about/about';

import ShowMain from 'components/showAll/index';
import ShowAll from 'components/showAll/showAll';
import ShowVideoMore from 'components/showAll/showVideoMore';
import ShowVideoMain from 'components/showAll/showVideoMain';
import ShowUserMore from 'components/showAll/showUserMore';
import ShowUserMain from 'components/showAll/showUserMain';

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
      component: ActivityMovie,
      children: [
        {
          path: '',
          component: ActivityMovie
        },
        {
          path: '/activity/introduce',
          component: ActivityIntroduce
        }
      ]
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
    },{
      path: '/show',
      component: ShowMain,
      children: [
        {
          path: '',
          component: ShowAll
        },{
          path: '/show/video-more',
          alias: '/video-more',
          component: ShowVideoMore
        },{
          path: '/show/user-more',
          alias: '/user-more',
          component: ShowUserMore
        },{
          path: '/show/user',
          component: ShowUserMain
        },{
          path: '/show/video',
          component: ShowVideoMain
        }
      ]
    }
  ]
});
