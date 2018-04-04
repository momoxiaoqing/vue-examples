<template>
    <div>
        <scroll class="wrapper" :callback="callback">
            <ul ref="list" class="list-content">
                <li class="list-item" v-for="(item,index) in list" :key="index">
                    {{item}}
                    <test></test>
                </li>
            </ul>
        </scroll>
    </div>
</template>

<script>
    import Test from '../components/Test'
    import Scroll from '../components/Scroll'
    export default {
        name: 'ScrollPage',
        data () {
            return {
                list: [],
                count: 0
            }
        },
        methods: {
            callback: function () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const arr = []
                        for (let i = 0; i < 20; i++) {
                            arr.push(this.count++)
                        }
                        resolve(arr)
                    }, 1000)
                })
            }
        },
        components: {
            Scroll,
            Test
        }
    }
</script>

<style scoped>

</style>
