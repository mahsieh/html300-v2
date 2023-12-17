<template>
    <div class="images">
        <h1>This is an images page</h1>

        <!--iterate through images object and display each image individually-->
        <div v-for="image in images">
            <!--use bootstrap to have responsive images-->
            <img class="img-fluid" :src="image.src" :title="image.caption">
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            /*array of image objects from previous assignment*/
            images: [
                {
                    src: "/src/assets/travel.jpg",
                    caption: "Tooltipped image depicting air travel to various locations"
                },
                {
                    src: "/src/assets/urban_vacation.jpg",
                    caption: "Tooltipped image of Paris near Eiffel Tower"
                },
                {
                    src: "/src/assets/tropical_vacation.jpg",
                    caption: "Tooltipped image of a tropical island with pier"
                }
            ]
        }
    }
}
</script>
  
<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>