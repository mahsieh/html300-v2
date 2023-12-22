<template>
    <!--define a div around the image for the border toggle-->
    <div @click="borderToggle">
        <!--use bootstrap to have responsive images-->
        <img class="img-fluid" :src="src" :caption="caption" :title="title" :class="{ 'image-border': borderVisible }"> <!--based on state of image, assign a class-->
    </div>
</template>

<script>
//import the mixin for toggling the border on or off
import borderToggle from "/src/mixins/imageMixin.js"

export default {
    // create the image component
    name: "ImageComponent",
    // actually use the mixin
    mixins: [borderToggle],
    // define 3 props for the imagecomponent
    props: {
        src: {
            type: String,
            required: true,
            /*use a validation against image source to verify file type*/
            validator: function(value) {
                const validFormats = /\.(jpg)$/i
                return validFormats.test(value)
            }
        },
        caption: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: 'Travel Vibes'            
        }
    }
}
</script>

<style>
/*set styling for the visible border */
.image-border {
    border: 1rem solid purple;
}
</style>