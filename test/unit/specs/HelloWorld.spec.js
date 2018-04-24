import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import HelloWorld from '@/views/HelloWorld'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()

describe('HelloWorld.vue', () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            changeCount: jest.fn()
        }
        store = new Vuex.Store({
            state: {},
            actions
        })
    })

    it('created时调用change()', () => {
        const wrapper = shallow(HelloWorld, {store, localVue, router})
        expect(wrapper.exists()).toBe(true)
        expect(actions.changeCount).toHaveBeenCalled()
    })
})
