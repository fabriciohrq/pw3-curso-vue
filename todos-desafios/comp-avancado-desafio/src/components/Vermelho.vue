<template>
    <div class="caixa vermelho">
        <slot>Conteúdo do Componente Vermelho</slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .vermelho {
        border: 2px solid red;
        background-color: #f54235;
    }
    .caixa {
        color: #FFF;
        font-size: 1.8rem;
        padding: 25px;
		margin: 10px 0px;
    }

</style>
