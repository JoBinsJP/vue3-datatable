# DataTable - Vue3 Component

> Basic DataTable component for Vue3 in typescript and Composition API. It has basic functionality such as Filter/Search, pagination etc.

[![NPM](https://img.shields.io/npm/v/@jobinsjp/vue3-datatable.svg)](https://www.npmjs.com/package/@jobinsjp/vue3-datatable)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build](https://img.shields.io/travis/JoBinsJP/vue3-datatable?logo=travis)](https://travis-ci.org/JoBinsJP/vue3-datatable)

## [Demo](https://vue3-datatable.netlify.app/)

![DataTable Demo](demo.png)

## Install

```bash
npm install --save @jobinsjp/vue3-datatable
```
or,
```bash
yarn add @jobinsjp/vue3-datatable
```
## Usage
A minimal setup example is presented here using composition api and typescript; though typescript is not necessary to use this package. 
```vue
<template>
    <DataTable :rows="data"></DataTable>
</template>
<script setup lang="ts">
    import { DataTable } from "@jobinsjp/vue3-datatable"
    import "@jobinsjp/vue3-datatable/dist/style.css"

    const data = [
        {
            "id": 1,
            "first_name": "Misti",
            "last_name": "Strase",
            "email": "mstrase0@instagram.com",
            "gender": "Non-binary",
            "ip_address": "151.38.32.165",
        },
        {
            "id": 2,
            "first_name": "Valentina",
            "last_name": "Bonas",
            "email": "vbonas1@is.gd",
            "gender": "Agender",
            "ip_address": "103.10.225.246",
        },
    ]
</script>
```

## Properties

In addition to basic use it you can configure data-table behaviour by applying following properties and template slots.

### Striped

**striped** property

```vue
    <data-table :rows="data" striped/>
```

### Custom Loader

**loading** property

**loadData** event

```vue
<template>
    <data-table ...
                :loading="isLoading"
                @loadData="loadData">
        <template #loading>
            <div class="">Loading....</div>
        </template>
    </data-table>
</template>


setup() {
    // ...

    const isLoading = ref(false)
    const loadData = async (query) => {
        isLoading.value = true
        // ...
        isLoading.value = false
    }

    return {
        isLoading,
        loadData,
        // ...
        }
}
```

### Clickable Row

**rowClicked** event

```vue
<template>
    <data-table ...
                @rowClicked="rowClickHandler">
    </data-table>
</template>

setup() {
    // ...

    const rowClickHandler = (row) => {
        console.log("Row Clicked", row)
    }
```

### Empty Table

**empty** slot

```vue

import { TableBodyCell } from "@jobinsjp/vue3-datatable"

   <data-table :rows="[]">
        <template #empty>
            <TableBodyCell colspan="2">
                No record found.
            </TableBodyCell>
        </template>
    </data-table>
```

### Custom Row & Column, Paginated, Filter

Documentation, in todo, see code example here: https://github.com/JoBinsJP/vue3-datatable/tree/master/src/components/Tables

## License

MIT © [https://github.com/JoBinsJP/vue3-datatable](https://github.com/JoBinsJP/vue3-datatable)
