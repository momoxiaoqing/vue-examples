import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Actions from '../../../src/components/Vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Actions.vue', () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            actionClick: jest.fn(),
            actionInput: jest.fn()
        }
        store = new Vuex.Store({
            state: {},
            actions
        })
    })

    it('当输入框的值是“input”且一个“input”事件被触发时会调用“actionInput”的 action', () => {
        const wrapper = shallow(Actions, { store, localVue })
        const input = wrapper.find('input')
        input.element.value = 'input'
        input.trigger('input')
        expect(actions.actionInput).toHaveBeenCalled()
    })

    it('当输入框的值不是“input”但有“input”事件触发时不会掉用“actionInput”的 action', () => {
        const wrapper = shallow(Actions, { store, localVue })
        const input = wrapper.find('input')
        input.element.value = 'not input'
        input.trigger('input')
        expect(actions.actionInput).not.toHaveBeenCalled()
    })

    it('当按钮被点击时候调用“actionClick”的 action', () => {
        const wrapper = shallow(Actions, { store, localVue })
        wrapper.find('button').trigger('click')
        expect(actions.actionClick).toHaveBeenCalled()
    })
})
