<template>
    <div>
        <div><router-link to="/preview">图片放大demo</router-link></div>
        <div><router-link to="/swiper">swiper滑动demo</router-link></div>
        <div><router-link to="/scrollPage">上拉加载下拉刷新demo</router-link></div>
        <div class="hello">
            <h1>{{ msg }}</h1>
            <h2>Essential Links</h2>
            <ul>
                <li>
                    <a
                            href="https://vuejs.org"
                            target="_blank"
                    >
                        Core Docs
                    </a>
                </li>
                <li>
                    <a
                            href="https://forum.vuejs.org"
                            target="_blank"
                    >
                        Forum
                    </a>
                </li>
                <li>
                    <a
                            href="https://chat.vuejs.org"
                            target="_blank"
                    >
                        Community Chat
                    </a>
                </li>
                <li>
                    <a
                            href="https://twitter.com/vuejs"
                            target="_blank"
                    >
                        Twitter
                    </a>
                </li>
                <br>
                <li>
                    <a
                            href="http://vuejs-templates.github.io/webpack/"
                            target="_blank"
                    >
                        Docs for This Template
                    </a>
                </li>
            </ul>
            <h2>Ecosystem</h2>
            <ul>
                <li>
                    <a
                            href="http://router.vuejs.org/"
                            target="_blank"
                    >
                        vue-router
                    </a>
                </li>
                <li>
                    <a
                            href="http://vuex.vuejs.org/"
                            target="_blank"
                    >
                        vuex
                    </a>
                </li>
                <li>
                    <a
                            href="http://vue-loader.vuejs.org/"
                            target="_blank"
                    >
                        vue-loader
                    </a>
                </li>
                <li>
                    <a
                            href="https://github.com/vuejs/awesome-vue"
                            target="_blank"
                    >
                        awesome-vue
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <div style="height: 100px;">1</div>
            <div style="height: 100px;">1</div>
            <div style="height: 100px;">1</div>
            <div style="height: 100px;">1</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            change: function () {
                this.$store.dispatch('changeCount', 10)
            }
        },
        created: function () {
            this.change()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
