<template>
    <div>
        <h1>Laravel – Our Cool Dashboard</h1>
        <ul>
            <li>Name: {{ $auth.user().name }}</li>
            <li>Email: {{ $auth.user().email }}</li>
            <li>Token: {{ this.$auth.user().token }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>