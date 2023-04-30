<template>
  <NuxtLayout>
    <div>
        <div flex flex-col gap-2>
            <div flex flex-col gap-2>
                <h1>Data</h1>
                <div flex flex-col gap-2 text-red>
                    <div v-for="error,index in errorMessages" :key="error">
                        <span>{{ index+1 }}. {{ error }}</span>
                    </div>
                </div>
                <input v-model="data.name" placeholder="Enter your name" />
                <input v-model="data.email" placeholder="Enter your email" />
                <input v-model="data.age" placeholder="Enter your age" />
            </div>
            <button @click="addItem">Add Item</button>
        </div>


      <div flex flex-col>
        <div v-for="item, index in items" :key="item.email" flex gap-2>
            <div flex gap-2>
                <span>{{ item.name }}</span>
                <span>{{ item.email }}</span>
                <span>{{ item.age }}</span>
            </div>
            <button bg-red @click="remove(index)">Delete</button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const { validate } = useValidation()

const items = ref([])
const errorMessages = ref([])

const data = reactive({
    name: "",
    email: "",
    age: 0
})

const addItem = () => {
    errorMessages.value = []

    const result = validate(data)
    
    if (result === true) {
        items.value.push({...data})
    
        data.name = ''
        data.email = ''
        data.age = 0 
    }
    else { 
        errorMessages.value = result
    }
}

const remove = (index) => {
    items.value.splice(index,1)
}
</script>
