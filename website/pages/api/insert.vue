<script>

let insert_fields =
`
{
schema: "example_schema",
tfnc:   "example_table",
qtype:  "insert",

"fields": [
    {"field": "x", "alias": "",  "type": "", "default": "", "set": "", "input": true, "output":true, "required": false}, //pk is in the where clause
    {"field": "y", "alias": "Z", "type": "", "default": "", "set": "", "input": true, "output":true, "required": false} //pk is in the where clause
]
}

/* query




*/
`


`

insert

SELECT your_function(input_param1, input_param2, input_param3) AS (output_param1, output_param2)
`

//defaults


`
SELECT your_function(param1, param2, param3) AS (col1, col2, col3)
FROM (
    SELECT columns
    unnest json array
)
`

</script>
