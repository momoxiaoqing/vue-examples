<template>
    <div>
        <div @click="goBack">返回</div>
        <h1>{{ss}}</h1>
        <div>
            <img class="preview-img-1" v-for="(item, index) in list" :src="item.src" :key="index" height="100"
                 @click="$preview.open(index, list,1)">
        </div>
        <div>
            <img class="preview-img-2" v-for="(item, index) in list2" :src="item.src" :key="index" height="100"
                 @click="$preview.open(index, list2,2)">
        </div>
    </div>
</template>

<script>
    import img from '../assets/1.jpg'
    export default {
        name: 'Preview',
        data () {
            return {
                ss: 'photoswipe test',
                list: [{
                    src: img,
                     w: 0,
                     h: 0
                }, {
                    src: 'static/2.jpg',
                    w: 0,
                    h: 0
                }],
                list2: [{
                    src: img,
                    w: 0,
                    h: 0
                }, {
                    src: 'static/2.jpg',
                    w: 0,
                    h: 0
                }, {
                    src: 'static/3.jpg',
                    w: 0,
                    h: 0
                }
                ]
            }
        },
        methods: {
            goBack () {
                // this.$router.go(-1)
                history.back()
            }
        }
    }
</script>
<style scoped>
    img{
        width: 100px;
    }
</style>
