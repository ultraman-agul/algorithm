<template>
    <div>
        这里是子组件
        <button @click='handleToSend'>发给父组件</button>
    </div>
</template>

<script>
    import event from './event.js'
    export default {
        name: 'parent2',
        methods: {
            handleMsg(val) {
                console.log(val + '------我收到啦')
            },
            handleToSend() {
                event.$emit('sendMsgToParent', '发给父组件的信息')
            }
        },
        mounted() {
            event.$on('sendMsgToChild', this.handleMsg)
        },
        beforeDestroy() {
            // 及时销毁，否则可能造成内存泄漏
            event.$off('sendMsgToChild', this.handleMsg)
        }
    }
</script>