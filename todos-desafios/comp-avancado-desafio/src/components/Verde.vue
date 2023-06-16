<template>
    <div class="caixa verde">
        <slot>Conteúdo do Componente Verde</slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .verde {
        border: 2px solid green;
        background-color: #49b057;
    }
    .caixa {
        color: #FFF;
        font-size: 1.8rem;
        padding: 25px;
		margin: 10px 0px;
    }
</style>
