<template>
    <div>
        这里是父组件
        <input type="button" @click='toChild' value="发个子组件">
        <child2></child2>
    </div>
</template>

<script>
    import event from './event.js'
    import child2 from './child2.vue'
    export default {
        name: 'parent2',
        components: { child2 },
        methods: {
            toChild() {
                event.$emit('sendMsgToChild', '这是给子组件的信息')
            },
            handleMsg(val) {
                console.log(val + '我收到了')
            }
        },
        mounted() {
            event.$on('sendMsgToParent', this.handleMsg)
        },
        beforeDestroy() {
            event.$off('sendMsgToParent', this.handleMsg)
        }
    }
</script>