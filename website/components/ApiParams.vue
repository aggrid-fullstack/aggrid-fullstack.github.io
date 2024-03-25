<template>




</template>

<script>

export default {

    data() {
        return {

        }
    }

}

/*
//field and alias must be alphanumeric and underscore. cant start with a number
field: "", //field the actual column name stored in postgres
alias: "", //rename of field. this alias value will be used as interface for api column
set:   "", //only viable for insert/update/delete or select using params
if_null: "", //replaces null value if sent as null
default: "", //value injected into data if missing 
in:  "", //is the data/filter/order_by in payload used to generate query
out: "", //is the field returned back
desc: "",//what this fields purposes is
required: "", //allowed to be missing. if true and missing send error
data_type: "",
pk: "" //true/false
*/

//fields and params object


let fields_config =
`
{
"schema": "example_schema",
"tfnc": "example_function",
"qtype": "select"

"batch": true
"bind": false //if false value replacement done by node if true then use postgres prepared statements

"json_blob": "true/false"

"upsert": {
    "on_conflict": "",
    "on_contraint": "",
    "set_fields": [] //if set missing or empty do nothing
}

}
`



</script>