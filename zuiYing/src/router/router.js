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
import ActivityStep3 from 'components/activityMovie/activityStep3';
import ActivityStep4 from 'components/activityMovie/activityStep4';
import ActivityStep5 from 'components/activityMovie/activityStep5';
import ActivityStep6 from 'components/activityMovie/activityStep6';
import ActivityStepSucceed from 'components/activityMovie/activityStepSucceed';
import ActivityStepPay from 'components/activityMovie/activityStepPay';

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

import UserSettings from 'components/settings/settings';
import SettingsPersonal from 'components/settings/settingsPersonal';
import SettingsVideo from 'components/settings/settingsVideo';
import SettingsAccount from 'components/settings/settingsAccount';
import SettingsActivityOrder from 'components/settings/settingsActivityOrder';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home
    }, {
      path: '/settings',
      component: UserSettings,
      children: [{
          path: '',
          component: SettingsVideo
        },
        {
          path: 'video',
          component: SettingsVideo
        },
        {
          path: 'personal',
          component: SettingsPersonal
        },
        {
          path: 'account',
          component: SettingsAccount
        },
        {
          path: 'activity-order',
          component: SettingsActivityOrder
        },
      ]
    },
    {
      path: '/video',
      redirect: '/settings/video',
      component: SettingsVideo
    },
    {
      path: '/personal',
      redirect: '/settings/personal',
      component: SettingsPersonal
    },
    {
      path: '/account',
      redirect: '/settings/account',
      component: SettingsAccount
    },
    {
      path: '/activity-order',
      redirect: '/settings/activity-order',
      component: SettingsActivityOrder
    },
    {
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
              path: 'step1',
              component: ActivityStep1
            },{
              path: 'step2',
              component: ActivityStep2
            },{
              path: 'step3',
              component: ActivityStep3
            },{
              path: 'step4',
              component: ActivityStep4
            },{
              path: 'step5',
              component: ActivityStep5
            },{
              path: 'step6',
              component: ActivityStep6
            },{
              path: 'succeed',
              component: ActivityStepSucceed
            },{
              path: 'pay',
              component: ActivityStepPay
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
      path: '/step1',
      redirect: '/activity/activity-step/step1',
      component: ActivityStep1
    },
    {
      path: '/step2',
      redirect: '/activity/activity-step/step2',
      component: ActivityStep2
    },
    {
      path: '/step3',
      redirect: '/activity/activity-step/step3',
      component: ActivityStep3
    },
    {
      path: '/step4',
      redirect: '/activity/activity-step/step4',
      component: ActivityStep4
    },
    {
      path: '/step5',
      redirect: '/activity/activity-step/step5',
      component: ActivityStep5
    },
    {
      path: '/step6',
      redirect: '/activity/activity-step/step6',
      component: ActivityStep6
    },
    {
      path: '/succeed',
      redirect: '/activity/activity-step/succeed',
      component: ActivityStepSucceed
    },
    {
      path: '/pay',
      redirect: '/activity/activity-step/pay',
      component: ActivityStepPay
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
    },
    // {
      // path: '/settings',
      // component: Settings,
      // children: [{
      //     path: '',
      //     component: SettingsVideo
      //   },
      //   {
      //     path: 'video',
      //     component: SettingsVideo
      //   },
      //   {
      //     path: 'personal',
      //     component: SettingsPersonal
      //   },
      //   {
      //     path: 'account',
      //     component: SettingsAccount
      //   }
      // ]
    // },
    // {
    //   path: '/video',
    //   redirect: '/settings/video',
    //   component: SettingsVideo
    // },
    // {
    //   path: '/personal',
    //   redirect: '/settings/personal',
    //   component: SettingsPersonal
    // },
    // {
    //   path: '/account',
    //   redirect: '/settings/account',
    //   component: SettingsAccount
    // }
  ]
});
