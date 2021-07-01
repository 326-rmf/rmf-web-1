import Vue from 'vue'
import VueRouter from 'vue-router'
import tiaozhuan from '../components/tiaozhuan.vue'
import tiaozhuan_2 from '../components/tiaozhuan_2.vue'
import tiaozhuan_3 from '../components/tiaozhuan_3.vue'
import tiaozhuan_4 from '../components/tiaozhuan_4.vue'
import tiaozhuan_5 from '../components/tiaozhuan_5.vue'
import tiaozhuan_0 from '../components/tiaozhuan_0.vue'

Vue.use(VueRouter)
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [{
		path: '/tiaozhuan',
		name: 'tiaozhuan',
		components: {
			default: tiaozhuan
		}
	},
	{
		path: '/tiaozhuan_2',
		name: 'tiaozhuan_2',
		components: {
			default: tiaozhuan_2
		}
	},
	{
		path: '/tiaozhuan_3',
		name: 'tiaozhuan_3',
		components: {
			default: tiaozhuan_3
		}
	},
	{
		path: '/tiaozhuan_4',
		name: 'tiaozhuan_4',
		components: {
			default: tiaozhuan_4
		}
	},
	{
		path: '/tiaozhuan_5',
		name: 'tiaozhuan_5',
		components: {
			default: tiaozhuan_5
		}
	},
	{
		path: '/tiaozhuan_0',
		name: 'tiaozhuan_0',
		components: {
			default: tiaozhuan_0
		}
	},
	
	


]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
