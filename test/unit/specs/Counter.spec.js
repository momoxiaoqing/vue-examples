import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter.vue', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = mount(Counter)
    it('渲染正确的标记', () => {
        expect(wrapper.html()).toContain('<span class="count">0</span>')
    })
// 也便于检查已存在的元素
    it('是一个按钮', () => {
        expect(wrapper.contains('button')).toBe(true)
    })
})
