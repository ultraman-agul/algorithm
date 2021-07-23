<template>
    <div>这里是子组件
        <div>{{mydata}}</div>
        <input type="button" value="提交给父组件" @click='commit'>
    </div>
</template>

<script>
    export default {
        name: 'child',
        props: ['mydata'],
        methods: {
            commit() {
                this.$emit('message', '你真好')
            }
        }
    }
</script>