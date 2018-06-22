import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/home/home';

import ActivityMovieIndex from 'components/activityMovie/activityMovieIndex';
import ActivityMovie from 'components/activityMovie/activityMovie';
import ActivityIntroduce from 'components/activityMovie/activityIntroduce';
import ActivityTreaty from 'components/treaty/treatyActivity';
import ActivitySignUp from 'components/activityMovie/activitySignUp';

import ActivityStep from 'components/activityMovie/activityStep';
import ActivityStep1 from 'components/activityMovie/activityStep1';
import ActivityStep2 from 'components/activityMovie/activityStep2';

import Propagandize from 'components/propagandize/propagandize';
import Marketing from 'components/marketing/marketing';
import UpLoad from 'components/upLoad/upLoad';
import DownLoad from 'components/downLoad/downLoad';
import LoginMain from 'components/login/loginMain';
import Login from 'components/login/login';
import Signin from 'components/login/signin';
import PasswordRetrieve from 'components/passwordRetrieve/passwordRetrieve';
import About from 'components/about/about';

import ShowIndex from 'components/showAll/index';
import ShowAll from 'components/showAll/showAll';
import ShowVideoMore from 'components/showAll/showVideoMore';
import ShowUserMore from 'components/showAll/showUserMore';

import ShowVideoIndex from 'components/showVideo/showVideoIndex';

import ShowUserIndex from 'components/showUser/showUserIndex';
import ShowUserWorks from 'components/showUser/showUserWorks';
import ShowUserWorksCollection from 'components/showUser/showUserWorksCollection';
import ShowUserIntroduce from 'components/showUser/showUserIntroduce';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home
    }, {
      path: '/activity',
      component: ActivityMovieIndex,
      children: [{
          path: '',
          component: ActivityMovie
        },
        {
          path: 'introduce',
          component: ActivityIntroduce
        },
        {
          path: 'activity-sign',
          component: ActivitySignUp
        },
        {
          path: 'activity-step',
          component: ActivityStep,
          children: [{
              path: '',
              component: ActivityStep1
            },{
              path: 'step2',
              component: ActivityStep2
            }
          ]
        },
        {
          path: 'activity-treaty',
          component: ActivityTreaty
        }
      ]
    },
    {
      path: '/introduce',
      redirect: '/activity/introduce',
      component: ActivityIntroduce
    },
    {
      path: '/activity-sign',
      redirect: '/activity/activity-sign',
      component: ActivitySignUp
    },
    {
      path: '/activity-step',
      redirect: '/activity/activity-step',
      component: ActivityStep
    },
    {
      path: '/activity-treaty',
      redirect: '/activity/activity-treaty',
      component: ActivityTreaty
    }, {
      path: '/propagandize',
      component: Propagandize
    }, {
      path: '/marketing',
      component: Marketing
    }, {
      path: '/upload',
      component: UpLoad
    }, {
      path: '/download',
      component: DownLoad
    }, {
      path: '/login',
      component: LoginMain,
      children: [{
          path: '',
          component: Login
        },
        {
          path: 'signin',
          component: Signin
        }
      ]
    }, {
      path: '/passwordRetrieve',
      component: PasswordRetrieve
    }, {
      path: '/about',
      component: About
    }, {
      path: '/show',
      component: ShowIndex,
      children: [{
          path: '',
          component: ShowAll
        }, {
          path: 'videos',
          component: ShowVideoMore
        }, {
          path: 'users',
          component: ShowUserMore
        }, {
          path: 'userID',
          component: ShowUserIndex,
          children: [{
            path: '',
            component: ShowUserWorks
          }, {
            path: 'works',
            component: ShowUserWorks
          }, {
            path: 'collections',
            component: ShowUserWorksCollection
          }, {
            path: 'introduce',
            component: ShowUserIntroduce
          }]
        },
        {
          path: 'videoID',
          component: ShowVideoIndex
        }
      ]
    },
    {
      path: '/videos',
      redirect: '/show/videos',
      component: ShowUserIndex
    },
    {
      path: '/users',
      redirect: '/show/users',
      component: ShowUserIndex
    },
    {
      path: '/works',
      redirect: '/show/userID/works',
      component: ShowUserIndex
    },
    {
      path: '/videoID',
      redirect: '/show/videoID',
      component: ShowVideoIndex
    }
  ]
});
