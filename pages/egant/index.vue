<script setup>
const columns = [{
    key: 'id',
    label: 'ID'
  }, {
    key: 'firstname',
    label: 'Firstname',
    sortable: true
  }, {
    key: 'lastname',
    label: 'Lastname',
    sortable: true
  }, {
    key: 'middlename',
    label: 'Middlename',
    sortable: true,
  }, {
    key: 'user_type',
    label: 'Role'
  }];

import peopleData from '@/data/users.json'; // Import the JSON data

// Transform the data to match the structure expected by the table
const people = peopleData.map(person => ({ 
  id: person.id, 
  firstname: person.firstname, 
  lastname: person.lastname, 
  middlename: person.middlename, 
  user_type: person.user_type 
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

