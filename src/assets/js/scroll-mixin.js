import VueBetterScroll from 'vue2-better-scroll'
// 定义一个混入对象
export default {
    name: 'Scroll',
    data () {
        return {
            component: '',
            list: [],
            count: 0,
            scrollbarObj: {
                fade: true
            },
            // 这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
            pullDownRefreshObj: {
                threshold: 90,
                stop: 40
            },
            // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
            pullUpLoadObj: {
                threshold: 0,
                txt: {
                    more: '加载更多',
                    noMore: '没有更多数据了'
                }
            },
            startY: 0, // 纵轴方向初始化位置
            scrollToX: 0,
            scrollToY: 0,
            scrollToTime: 700
        }
    },
    created () {
        this.onPullingDown()
    },
    methods: {
        // 滚动到页面顶部
        scrollTo () {
            this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime)
        },
        // 模拟数据请求
        getData () {
            return new Promise(resolve => {
                setTimeout(() => {
                    const arr = []
                    for (let i = 0; i < 20; i++) {
                        arr.push(this.count++)
                    }
                    resolve(arr)
                }, 1000)
            })
        },
        onPullingDown () {
            // 模拟下拉刷新
            this.count = 0
            this.getData().then(res => {
                this.list = res
                this.$refs.scroll.forceUpdate(true)
            })
        },
        onPullingUp () {
            // 模拟上拉 加载更多数据
            this.getData().then(res => {
                this.list = this.list.concat(res)
                if (this.count < 50) {
                    this.$refs.scroll.forceUpdate(true)
                } else {
                    this.$refs.scroll.forceUpdate(false)
                }
            })
        }
    },
    components: {
        VueBetterScroll
    }
}
