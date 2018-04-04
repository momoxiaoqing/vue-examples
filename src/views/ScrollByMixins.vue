<template>
    <div>
        <div style="width:100%; height: 88px;background-color: aquamarine">test</div>
        <vue-better-scroll
                class="wrapper"
                ref="scroll"
                :scrollbar="scrollbarObj"
                :pullDownRefresh="pullDownRefreshObj"
                :pullUpLoad="pullUpLoadObj"
                :startY="parseInt(startY)"
                @pullingDown="onPullingDown"
                @pullingUp="onPullingUp">
            <ul ref="list" class="list-content">
                <li class="list-item" v-for="(item,index) in list" :key="index" style="height: 100px">
                    {{item}}
                </li>
            </ul>
        </vue-better-scroll>
    </div>
</template>

<script>
    import scrollMixin from '../assets/js/scroll-mixin'
    export default {
        name: 'scroll-by-mixins',
        mixins: [scrollMixin],
        methods: {
            getData () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const arr = []
                        for (let i = 0; i < 20; i++) {
                            this.count += 2
                            arr.push(this.count)
                        }
                        resolve(arr)
                    }, 1000)
                })
            }
        }
    }
</script>

<style scoped>

</style>
