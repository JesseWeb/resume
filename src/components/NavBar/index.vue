<script setup lang="ts">
import { ref } from 'vue';

    let showNavs = ref(false);
</script>
<template>
    <div class="nav">
        <div class="nav-title">{{ $t('name') }}</div>
        <div class="nav-items">
            <a href="#">{{ $t('home') }}</a>
            <a href="#about">{{ $t('about') }}</a>
            <a href="/skills">{{ $t('skills') }}</a>
            <a href="/skills">{{ $t('qualifications') }}</a>
            <a href="/skills">{{ $t('portfolio') }}</a>
            <a href="/skills">{{ $t('contactMe') }}</a>
        </div>
    </div>
    <div class="nav-for-small">
        <div v-show="!showNavs" class="nav-title">{{ $t('name') }}</div>
        <div v-show="!showNavs" class="show-items-btn" @click="showNavs=!showNavs">btn</div>
        <div class="nav-items" @click="showNavs=!showNavs" v-show="showNavs">
            <div class="close">x</div>
            <a href="#">{{ $t('home') }}</a>
            <a href="#about">{{ $t('about') }}</a>
            <a href="/skills">{{ $t('skills') }}</a>
            <a href="/skills">{{ $t('qualifications') }}</a>
            <a href="/skills">{{ $t('portfolio') }}</a>
            <a href="/skills">{{ $t('contactMe') }}</a>
        </div>
    </div>
</template>

<style lang="less">
.nav{
        width: 100vw;
        height: 5rem;
        background-color: var(--bg-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        border-bottom: 1px solid var(--border-color);
        padding: 0 2rem;
}
.nav-title{
        color: var(--title-color);
        font-size: var(--normal-font-size);
        display: flex;
        align-items: center;
}
.nav-items{
        display: flex;
        align-items: center;
        gap: 2rem;
        >a{
            color: var(--title-color);
            font-size: var(--normal-font-size);
            text-decoration: none;
            &:hover{
                color: var(--first-color-alt);
            }
        }
}
.nav-for-small{
        display: none;
        position: fixed;
        bottom: 0;
        left: 0;
        top: auto;
        width: 100vw;
        height: 2rem;
        padding: 0 1rem;
        .show-items-btn{
            display: none;
        }
}
@media screen and (max-width: 768px) {
    .nav{
        display: none;
    }
    .nav-for-small{
        display: flex;
        justify-content: space-between;
        position: fixed;
        height: auto;
        min-height: 3rem;
        align-items: center;
        .show-items-btn{
            display: block;
            cursor: pointer;
            color: var(--first-color);
            display: flex;
            height: 100%;
            align-items: center;
        }
        .nav-items{
            height: auto;
            width: 100vw;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            padding-bottom: 3rem;
            >.close{
                position: absolute;
                bottom: 1rem;
                right: 1rem;
                font-size: 2rem;
                cursor: pointer;
            }
            >a{
                text-align: center;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    
}
</style>