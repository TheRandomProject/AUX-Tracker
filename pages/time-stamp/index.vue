<script setup>
const people = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
  { id: 7, label: 'Caroline Schultz' },
  { id: 8, label: 'Mason Heaney' },
  { id: 9, label: 'Claudie Smitham' },
  { id: 10, label: 'Emil Schaefer' }
]

const type = [
  { id: 1, label: 'Time In' },
  { id: 2, label: 'Time Out' },
  { id: 3, label: 'Break / Lunch' },
  { id: 4, label: 'Meet' },
  { id: 5, label: 'First 15 Min' },
  { id: 6, label: 'Second 15 Min' }
]

const selected = ref([people[1]])

</script>

<template>
    <div>
        <TheClock />
        
        <div class="flex fixed top-96 w-full justify-center ">
            <div class="w-1/4">
                <UCommandPalette
                    v-model="selected"
                    multiple
                    nullable
                    :groups="[{ key: 'people', commands: people }]"
                    :fuse="{ resultLimit: 2, fuseOptions: { threshold: 0.1 } }"
                />
            </div>
            <div class="w-1/6 mx-4">
                <UCommandPalette
                    v-model="selected"
                    multiple
                    nullable
                    :groups="[{ key: 'type', commands: type }]"
                    :fuse="{ resultLimit: 5, fuseOptions: { threshold: 0.1 } }"
                />
            </div>
            <div class="w-2/5">
                
                <UButton icon="i-heroicons-pencil-square" color="primary" variant="solid" label="Enter" class="mt-4 ml-2"/>
            </div>
        </div>
       
    </div>
</template>