import {shallow} from '@vue/test-utils'
import Foo from '@/components/Axios'

// jest.mock('mock/axios')

describe('Foo', () => {
    it('fetches async when a button is clicked', (done) => {
        const wrapper = shallow(Foo)
        wrapper.find('button').trigger('click')
        wrapper.vm.$nextTick(() => {
            console.log(wrapper.vm.value)
            expect(wrapper.vm.value).toBe('value')
            done()
        })
    })
})
