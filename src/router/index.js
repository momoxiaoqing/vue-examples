import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Preview from '@/views/Preview'
import Swiper from '@/views/SwiperDemo'
import ScrollPage from '@/views/ScrollByMixins'
import StoreTest from '@/views/StoreTest'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/preview',
            name: 'Preview',
            component: Preview
        },
        {
            path: '/swiper',
            name: 'SwiperDemo',
            component: Swiper
        },
        {
            path: '/scrollPage',
            name: 'ScrollPage',
            component: ScrollPage
        },
        {
            path: '/storeTest',
            name: 'StoreTest',
            component: StoreTest
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        alert('scrollBehavior')
        if (savedPosition) {
            alert('savedPosition')
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
