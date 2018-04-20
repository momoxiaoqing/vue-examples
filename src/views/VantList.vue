<template>
    <div>
        <van-pull-refresh v-model="isLoadingUp" @refresh="onRefresh">
            <van-list
            v-model="loadingDown"
            :finished="finished"
            @load="onLoad"
        >
            <div v-for="item in list" :key="item" style="height: 100px">{{item}}</div>
        </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    export default {
        name: 'vant-list',
        data () {
            return {
                list: [],
                loadingDown: false,
                finished: false,
                count: 0,
                isLoadingUp: false
            }
        },
        methods: {
            onLoad () {
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1)
                    }
                    this.loadingDown = false

                    if (this.list.length >= 40) {
                        this.finished = true
                    }
                }, 500)
            },
            onRefresh () {
                setTimeout(() => {
                    // this.$toast('刷新成功')
                    this.isLoadingUp = false
                    this.count++
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
