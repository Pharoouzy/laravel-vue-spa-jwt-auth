<template>
    <div>
        <h1>Dashboard</h1>
        <ul>
            <li>Name: {{ $auth.user().name }}</li>
            <li>Email: {{ $auth.user().email }}</li>
            <li>Token: {{ this.$auth.user().token }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: ''
        }
    },
    methods: {
        fetchUser(){
            var app = this
            this.$auth.fetch({
                params: {
                    name: app.name,
                    email: app.email
                },
                success: function (res){
                    console.log(res)
                },
                error: function(err){
                    console.log(err)
                }
            })
        }
    }
}
</script>