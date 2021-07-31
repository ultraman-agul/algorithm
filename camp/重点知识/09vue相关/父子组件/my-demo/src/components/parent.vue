<template>
    <div>
        <input type="text" v-model='msg'>
        这里是父组件
        <child :mydata='msg' @message='lisentData'></child>
    </div>
</template>
<script>
    import child from '@/components/child.vue'
    export default {
        data() {
            return {
                msg: 'agul'
            }
        },
        components: { child },
        methods: {
            lisentData(val) {
                console.log('收到子组件信息' + val)
            }
        }
    }
</script>