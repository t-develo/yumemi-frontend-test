<script setup lang="ts">
import axios from 'axios';

interface RESAS_Prefecture {
    prefCode: number;
    prefName: string;
}
interface RESAS_Prefectures {
    message: string;
    result: Array<RESAS_Prefecture>;
}

async function getPrefectures(): Promise<RESAS_Prefectures> {
    const result = await axios.get(
        `${import.meta.env.VITE_RESAS_API_ENDPOINT}/api/v1/prefectures`,
        { headers: { 'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY } }
    );
    return await result.data;
}

const prefectures: RESAS_Prefectures = await getPrefectures();
</script>

<template>
    <div v-for="prefecture in prefectures.result" :key="prefecture.prefCode">
        <p>{{ prefecture.prefName }}</p>
    </div>
</template>
