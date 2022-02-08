<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Bookables</div>

                    <div class="card-body">
                        <BookableListItem></BookableListItem>
                        <BookableListItem></BookableListItem>
                        <BookableListItem></BookableListItem>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BookableListItem from "./BookableListItem";
export default {
    components: {BookableListItem: BookableListItem}
}
</script>
