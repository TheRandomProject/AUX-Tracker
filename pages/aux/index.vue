<script setup>
const columns = [{
    key: 'id',
    label: 'ID'
  }, {
    key: 'name',
    label: 'Fullname',
    sortable: true
  }, {
    key: 'type',
    label: 'Type',
    sortable: true
  }, {
    key: 'created_at',
    label: 'Create at',
    sortable: true
  }];

import peopleData from '@/data/auxs.json'; // Import the JSON data

// Transform the data to match the structure expected by the table
const people = peopleData.map(person => ({ 
  id: person.id, 
  name: person.name, 
  type: person.type, 
  created_at: person.created_at, 
}))

const q = ref('')

const filteredRows = computed(() => {
  if (!q.value) {
    return people
  }

  return people.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})

</script>

<template>
  <UTable :columns="columns" :rows="people" :sort="{ column: 'id' }" sort-asc-icon="i-heroicons-arrow-up-20-solid" sort-desc-icon="i-heroicons-arrow-down-20-solid" :sort-button="{ icon: 'i-heroicons-sparkles-20-solid', color: 'primary', variant: 'outline', size: '2xs', square: false, ui: { rounded: 'rounded-full' } }"/>
</template>

