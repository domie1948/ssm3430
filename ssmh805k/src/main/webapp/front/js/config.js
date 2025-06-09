
var projectName = '电脑测评系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '电脑品牌',
	url: './pages/diannaopinpai/list.html'
}, 
{
	name: '电脑信息',
	url: './pages/diannaoxinxi/list.html'
}, 
{
	name: '电脑评测',
	url: './pages/diannaopingce/list.html'
}, 

{
	name: '论坛互动',
	url: './pages/forum/list.html'
}, 
{
	name: '校园资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssmh805k/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"电脑类型","menuJump":"列表","tableName":"diannaoleixing"}],"menu":"电脑类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"电脑分类","menuJump":"列表","tableName":"diannaofenlei"}],"menu":"电脑分类管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"电脑品牌","menuJump":"列表","tableName":"diannaopinpai"}],"menu":"电脑品牌管理"},{"child":[{"buttons":["新增","查看","修改","删除","测评"],"menu":"电脑信息","menuJump":"列表","tableName":"diannaoxinxi"}],"menu":"电脑信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"电脑评测","menuJump":"列表","tableName":"diannaopingce"}],"menu":"电脑评测管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"论坛互动","tableName":"forum"}],"menu":"论坛互动"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"校园资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"电脑品牌列表","menuJump":"列表","tableName":"diannaopinpai"}],"menu":"电脑品牌模块"},{"child":[{"buttons":["查看"],"menu":"电脑信息列表","menuJump":"列表","tableName":"diannaoxinxi"}],"menu":"电脑信息模块"},{"child":[{"buttons":["查看"],"menu":"电脑评测列表","menuJump":"列表","tableName":"diannaopingce"}],"menu":"电脑评测模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"电脑品牌","menuJump":"列表","tableName":"diannaopinpai"}],"menu":"电脑品牌管理"},{"child":[{"buttons":["查看","查看评论"],"menu":"电脑信息","menuJump":"列表","tableName":"diannaoxinxi"}],"menu":"电脑信息管理"},{"child":[{"buttons":["查看","查看评论"],"menu":"电脑评测","menuJump":"列表","tableName":"diannaopingce"}],"menu":"电脑评测管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看"],"menu":"校园资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"电脑品牌列表","menuJump":"列表","tableName":"diannaopinpai"}],"menu":"电脑品牌模块"},{"child":[{"buttons":["查看"],"menu":"电脑信息列表","menuJump":"列表","tableName":"diannaoxinxi"}],"menu":"电脑信息模块"},{"child":[{"buttons":["查看"],"menu":"电脑评测列表","menuJump":"列表","tableName":"diannaopingce"}],"menu":"电脑评测模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
