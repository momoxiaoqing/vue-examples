<template>
    <div>
        <keep-alive><div>{{test}}</div></keep-alive>
        <keep-alive>{{list}}</keep-alive>
        <button @click="change">change</button>
    </div>
</template>

<script>
    export default {
        name: 'store-test',
        data () {
            return {
            }
        },
        methods: {
            change: function () {
                let test = {
                    a: 1
                }
                this.$store.commit('changeList', test)
            }
        },
        mounted () {
        },
        computed: {
            test () {
                debugger
                let s = this.$store.getters.getCount
                if (!s) {
                    s = 1223
                }
                return s
            },
            list () {
                return this.$store.state.list
            }
        },
        components: {}
    }
</script>

<style scoped>

</style>
