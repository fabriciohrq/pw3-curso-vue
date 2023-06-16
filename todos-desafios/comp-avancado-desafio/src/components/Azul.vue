<template>
    <div class="caixa azul">
        <slot>Conteúdo do Componente Azul</slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .azul {
        border: 2px solid blue;
        background-color: #2594f0;
    }
    .caixa {
        color: #FFF;
        font-size: 1.8rem;
        padding: 25px;
		margin: 10px 0px;
    }
</style>
