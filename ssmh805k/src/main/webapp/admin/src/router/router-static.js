import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import diannaopinpai from '@/views/modules/diannaopinpai/list'
    import diannaoxinxi from '@/views/modules/diannaoxinxi/list'
    import discussdiannaoxinxi from '@/views/modules/discussdiannaoxinxi/list'
    import discussdiannaopingce from '@/views/modules/discussdiannaopingce/list'
    import diannaofenlei from '@/views/modules/diannaofenlei/list'
    import storeup from '@/views/modules/storeup/list'
    import forum from '@/views/modules/forum/list'
    import discussdiannaopinpai from '@/views/modules/discussdiannaopinpai/list'
    import yonghu from '@/views/modules/yonghu/list'
    import diannaopingce from '@/views/modules/diannaopingce/list'
    import config from '@/views/modules/config/list'
    import diannaoleixing from '@/views/modules/diannaoleixing/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '校园资讯',
        component: news
      }
      ,{
	path: '/diannaopinpai',
        name: '电脑品牌',
        component: diannaopinpai
      }
      ,{
	path: '/diannaoxinxi',
        name: '电脑信息',
        component: diannaoxinxi
      }
      ,{
	path: '/discussdiannaoxinxi',
        name: '电脑信息评论',
        component: discussdiannaoxinxi
      }
      ,{
	path: '/discussdiannaopingce',
        name: '电脑评测评论',
        component: discussdiannaopingce
      }
      ,{
	path: '/diannaofenlei',
        name: '电脑分类',
        component: diannaofenlei
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/forum',
        name: '论坛互动',
        component: forum
      }
      ,{
	path: '/discussdiannaopinpai',
        name: '电脑品牌评论',
        component: discussdiannaopinpai
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/diannaopingce',
        name: '电脑评测',
        component: diannaopingce
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/diannaoleixing',
        name: '电脑类型',
        component: diannaoleixing
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
