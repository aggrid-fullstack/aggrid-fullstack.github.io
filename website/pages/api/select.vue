<template>
<div>
    <h1>fields</h1>

    <highlightjs :code="select_fields"/>

    <h1>example</h1>


    <h1>params</h1>

</div>



</template>



<script>

export default {
    data() {
        return {
            select_fields:  select_fields
        }
    }
    
}

let select_fields =
`
{
schema: "example_schema",
tfnc:   "example_table",
qtype:  "select",

"fields": [
    {"field": "", "alias": "", "type": "", "default": "", "set": "", "input": true,  
    "output":true, //defaults to true. if false not returene by select. Often used from returning large text strings or tsvectors used for searching only 
    "required": false} //pk is in the where clause
]
}

/*
payload



query


*/

/* query

*/

`

let input_output = `



`


let select_params = 
`select params

{
    "schema": "example_schema",
    "tfnc": "example_function",
    "qtype": "select"

    "params": [
        "input_fields": [
            {"field": "", "alias": "", "type": "", "default": "", "set": "", "input": true,  "output":true, "required": false, "pk": true}
        ],
        "output_fields": [
            {"field": "", "alias": "", "type": ""}
        ]

    ]
    //key is from key parameters is user_id, oauth_id, etc.
    "rls": [{"key": "", "operator": "", "field"}, //subquery: {"return_field": "schema": "table": , where: [{"main_field": "", "operator": "", "sub_field": "", subfield_type: ""}]}]
    "batch": true
    "bind": false
}

data: [{input_field1: 'a'}]

SELECT out_field1, out_field2 FROM example_schema.example_function(:input_field1, :input_field2)
`

let rls =
`
rls wrappers


SELECT 
    column1, 
    column2, 
    column3,
    ARRAY(
        SELECT subquery_column 
        FROM your_table AS sub 
        WHERE sub.some_id = main_table.id
    ) AS converted_array_column
FROM 
    main_table;

SELECT column1, column2, column3
FROM 
    (SELECT * FROM query where :user_id = ANY (converted_array_column)) x

`

let payload = ``

`
SELECT ("output_1")::text as "output_alias_1"
FROM (
    SELECT "output_1", "output_2" FROM "xschema"."xfunction"(:input_1, :input_2)
    --where
    --order by
    --limit
) x
`

</script>
