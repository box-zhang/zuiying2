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
import LoginIndex from 'components/login/loginIndex';
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
import SettingsHomepage from 'components/settings/settingsHomepage';
import SettingsPersonal from 'components/settings/settingsPersonal';
import SettingsVideo from 'components/settings/settingsVideo';
import SettingsAccount from 'components/settings/settingsAccount';
import SettingsActivityOrder from 'components/settings/settingsActivityOrder';
import SettingsActivityOrderPaid from 'components/settings/settingsActivityOrderPaid';
import SettingsActivityOrderNoPaid from 'components/settings/settingsActivityOrderNoPaid';
import SettingsPassword from 'components/settings/settingsPassword';

import SettingsCollectionsIndex from 'components/settings/settingsVideoCollectionsIndex';
import SettingsCollections from 'components/settings/settingsVideoCollections';
import SettingsVideoUpload from 'components/settings/settingsVideoUpload';
import SettingsVideoCollectionItems from 'components/settings/settingsVideoCollectionItems';
import SettingsVideoEdit from 'components/settings/settingsVideoEdit';
import SettingsVideoAdd from 'components/settings/settingsVideoAdd';

Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [{
      path: '',
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
          path: '/settings/video-set',
          component: SettingsVideo,
          children: [{
              path: '',
              redirect: '/settings/video-set/video-edit',
              component: SettingsVideoEdit
            },
            {
              path: '/settings/video-set/video-edit',
              component: SettingsVideoEdit
            }, {
              path: '/settings/video-set/collections',
              component: SettingsCollectionsIndex,
              children: [
                {
                  path: '',
                  // redirect: '/settings/video-set/collections/v-cs',
                  component: SettingsCollections
                },
                {
                  path: '/settings/video-set/collections/v-items',
                  component: SettingsVideoCollectionItems
                },{
                  path: '/settings/video-set/collections/v-upload',
                  component: SettingsVideoUpload
                },{
                  path: '/settings/video-set/collections/v-add',
                  component: SettingsVideoAdd
                }
              ]
            },
          ]
        },
        {
          path: '/settings/personal',
          component: SettingsPersonal
        },
        {
          path: '/settings/homepage',
          component: SettingsHomepage
        },
        {
          path: '/settings/account',
          component: SettingsAccount
        },
        {
          path: '/settings/activity-order',
          component: SettingsActivityOrder,
          children: [{
            path: '',
            redirect: '/settings/activity-order/no-paid',
            component: SettingsActivityOrderPaid
          },{
            path: '/settings/activity-order/no-paid',
            component: SettingsActivityOrderNoPaid
          },{
            path: '/settings/activity-order/paid',
            component: SettingsActivityOrderPaid
          }]
        },
        {
          path: '/settings/password',
          component: SettingsPassword
        },
      ]
    },
    {
      path: '/activity',
      component: ActivityMovieIndex,
      children: [{
          path: '',
          component: ActivityMovie
        },
        {
          path: '/activity/introduce',
          component: ActivityIntroduce
        },
        {
          path: '/activity/activity-sign',
          component: ActivitySignUp
        },
        {
          path: '/activity/activity-step',
          component: ActivityStep,
          children: [{
            path: '',
            redirect: '/activity/activity-step/step1',
            component: ActivityStep1
          }, {
            path: '/activity/activity-step/step0',
            redirect: '/activity/activity-step/step1',
          }, {
            path: '/activity/activity-step/step1',
            component: ActivityStep1
          }, {
            path: '/activity/activity-step/step2',
            component: ActivityStep2
          }, {
            path: '/activity/activity-step/step3',
            component: ActivityStep3
          }, {
            path: '/activity/activity-step/step4',
            component: ActivityStep4
          }, {
            path: '/activity/activity-step/step5',
            component: ActivityStep5
          }, {
            path: '/activity/activity-step/step6',
            component: ActivityStep6
          }, {
            path: '/activity/activity-step/succeed',
            component: ActivityStepSucceed
          }, {
            path: '/activity/activity-step/pay',
            component: ActivityStepPay
          }]
        },
        {
          path: '/activity/activity-treaty',
          component: ActivityTreaty
        }
      ]
    },
    {
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
      component: LoginIndex,
      children: [{
        path: '',
        component: Login
      }, {
        path: '/login/Signin',
        component: Signin
      }, {
        path: '/login/password-retrieve',
        component: PasswordRetrieve
      }]
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
          path: '/show/videos',
          component: ShowVideoMore
        }, {
          path: '/show/users',
          component: ShowUserMore
        },
        {
          path: '/show/videoID',
          component: ShowVideoIndex
        }, {
          path: '/show/userID',
          component: ShowUserIndex,
          children: [{
            path: '',
            component: ShowUserWorks
          }, {
            path: '/show/userID/works',
            component: ShowUserWorks
          }, {
            path: '/show/userID/collections',
            component: ShowUserWorksCollection
          }, {
            path: '/show/userID/introduce',
            component: ShowUserIntroduce
          }]
        }
      ]
    }
  ]
});