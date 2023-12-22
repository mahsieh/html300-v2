<template>
    <div class="accordion">
        <h1>This is an accordion page</h1>

        <!--iterate through carded content and display in accordion-->        
        <div class="card" v-for="(newsarticle, count) in cards">
            <div class="card-header" :id="newsarticle.title">
                <h5 class="mb-0">
                    
                    <button class="btn btn-link" data-toggle="collapse" :data-target="'#collapse' + count"
                        :aria-expanded="newsarticle.toggle" :aria-controls="'collapse' + count">{{ newsarticle.title }}</button>
                </h5>
            </div>

            <div :id="'collapse' + count" class="collapse show" :aria-labelledby="newsarticle.title" data-parent=".accordion"> <!--corrected to target the accordion class instead of id-->
                <div class="card-body">{{ newsarticle.body }}</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            // data for cards of the accordion stored here, inside objects 
            cards: [
                {
                    title: "Latest News Article #1",
                    body: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis risus eu felis auctor tempor. Sed lacus turpis, elementum vel suscipit nec, imperdiet a arcu. Nunc lorem ipsum, sollicitudin ac rhoncus sed, interdum sit amet enim. Pellentesque tempor urna sit amet ante cursus, eu tincidunt tellus consectetur. Vestibulum gravida pellentesque accumsan. Pellentesque semper maximus magna et convallis. Sed bibendum sed dolor vel placerat. Mauris facilisis ut purus et sollicitudin. Ut semper posuere nibh, et vulputate purus cursus laoreet. Sed egestas venenatis tortor eget aliquet. Cras enim velit, vehicula nec finibus ut, viverra vitae purus. Duis ac ipsum lacinia, molestie dolor at, sodales est. Morbi imperdiet euismod nisl eu vulputate. Etiam non tellus ut mauris finibus fringilla. In pulvinar a ex sit amet semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
                    //tried implementing a toggle variable in each card to correct existing issue, but wasn't able to
                    toggle: true
                },
                {
                    title: "Latest News Article #2",
                    body: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis risus eu felis auctor tempor. Sed lacus turpis, elementum vel suscipit nec, imperdiet a arcu. Nunc lorem ipsum, sollicitudin ac rhoncus sed, interdum sit amet enim. Pellentesque tempor urna sit amet ante cursus, eu tincidunt tellus consectetur. Vestibulum gravida pellentesque accumsan. Pellentesque semper maximus magna et convallis. Sed bibendum sed dolor vel placerat. Mauris facilisis ut purus et sollicitudin. Ut semper posuere nibh, et vulputate purus cursus laoreet. Sed egestas venenatis tortor eget aliquet. Cras enim velit, vehicula nec finibus ut, viverra vitae purus. Duis ac ipsum lacinia, molestie dolor at, sodales est. Morbi imperdiet euismod nisl eu vulputate. Etiam non tellus ut mauris finibus fringilla. In pulvinar a ex sit amet semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
                    toggle: false
                },
                {
                    title: "Latest News Article #3",
                    body: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis risus eu felis auctor tempor. Sed lacus turpis, elementum vel suscipit nec, imperdiet a arcu. Nunc lorem ipsum, sollicitudin ac rhoncus sed, interdum sit amet enim. Pellentesque tempor urna sit amet ante cursus, eu tincidunt tellus consectetur. Vestibulum gravida pellentesque accumsan. Pellentesque semper maximus magna et convallis. Sed bibendum sed dolor vel placerat. Mauris facilisis ut purus et sollicitudin. Ut semper posuere nibh, et vulputate purus cursus laoreet. Sed egestas venenatis tortor eget aliquet. Cras enim velit, vehicula nec finibus ut, viverra vitae purus. Duis ac ipsum lacinia, molestie dolor at, sodales est. Morbi imperdiet euismod nisl eu vulputate. Etiam non tellus ut mauris finibus fringilla. In pulvinar a ex sit amet semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
                    toggle: false
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

.card-body {
    color: black;
}</style>
  