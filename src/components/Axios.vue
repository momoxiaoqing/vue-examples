<template>
    <div>
        <button @click="fetchResults" />
    </div>
</template>

<script>

    export default {
        name: 'axiosTest',
        data () {
            return {
                value: null
            }
        },
        methods: {
            getData: function () {
                return new Promise(resolve => {
                    resolve({data: 'value'})
                })
            },
            fetchResults () {
                this.getData().then(res => {
                    this.value = res.data
                })
            }
        },
        mounted () {
        },
        components: {}
    }
</script>

<style scoped>

</style>
