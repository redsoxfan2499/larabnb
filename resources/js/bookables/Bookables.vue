<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Bookables</div>
                    <div v-if="loading">Data is loading...</div>
                    <div v-else class="card-body">
                        <div class="row mb-4" v-for="row in rows" :key="'row' + row">
                            <div class="col d-flex align-items-stretch"
                                 v-for="(bookable, column) in bookablesInARow(row)"
                                :key="'row' + row + column"
                            >
                                <BookableListItem
                                    v-bind:key="bookable.id"
                                    v-bind:title="bookable.title"
                                    v-bind:description="bookable.description"
                                    v-bind:price="bookable.price"
                                >
                                </BookableListItem>
                            </div>
                            <div class="col" v-for="p in placeholdersInARow(row)" :key="'placeholder'+ row + p"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BookableListItem from "./BookableListItem";
export default {
    components: {BookableListItem: BookableListItem},
   data() {
        return {
            loading: false,
            columns: 3,
            bookables: null,
        }
   },
    computed: {
        rows() {
            return Math.ceil(this.bookables.length / this.columns)
        }
    },
    methods: {
        bookablesInARow(row) {
            return this.bookables.slice((row - 1) * this.columns, row * this.columns);
        },
        placeholdersInARow(row) {
            return this.columns - this.bookablesInARow(row).length;
        }
    },
    created() {
        this.loading = true;
        const p = new Promise((resolve, reject) => {
           // console.log(resolve);
           // console.log(reject);
            setTimeout(() => resolve("Hey"), 3000);
        }).then(result => console.log(`Success ${result}`))
        .catch(result => console.log(`Error ${result}`));
        //console.log(p);
        const request = axios
            .get("api/bookables")
            .then(response => {
                this.bookables = response.data;
                this.loading = false;
            });
    }
}
</script>
