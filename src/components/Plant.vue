<template>
    <div class = "plant">
        <h3>{{ plant.text }}</h3>
        <p>{{ plant.description }}</p>
    </div>
    
</template>

<script>
export default{
    name : 'Plant',
    props:{
        plant:Object
    }
}
</script>
<style>
.fas {
  color: red;
}
.plant {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.plant.reminder {
  border-left: 5px solid green;
}
.plant h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
