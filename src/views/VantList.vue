<template>
    <div>
        <van-list
                v-model="loading"
                :finished="finished"
                @load="onLoad"
        >
            <div v-for="item in list" :key="item" style="height: 100px">{{item}}</div>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: 'vant-list',
        data () {
            return {
                list: [],
                loading: false,
                finished: false
            }
        },
        methods: {
            onLoad () {
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1)
                    }
                    this.loading = false

                    if (this.list.length >= 40) {
                        this.finished = true
                    }
                }, 500)
            }
        },
        mounted () {
        },
        components: {}
    }
</script>

<style scoped>

</style>
