<template>
  <IconList :icons="icons" :variant="currentVariant" @openModal="openModal" />
</template>

<script setup>
import IconList from "@/components/IconList.vue";
import { ref, computed, onUpdated } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const emit = defineEmits(["openModal"]);
const props = defineProps({
  currentVariant: String,
});

const res = await fetch("/icons.json");
const iconData = await res.json();
let icons = iconData.icons;

function openModal(icon) {
  emit("openModal", icon);
}
</script>
