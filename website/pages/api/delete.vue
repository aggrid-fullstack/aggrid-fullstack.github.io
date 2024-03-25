<template>
<div>
    <highlightjs :code="delete_fields"/>

    <highlightjs :code="delete_params"/>



</div>


</template>


<script>

export default {

    data() {
        return {
            delete_fields: delete_fields,
            delete_params: delete_params,
        }
    }
    
}

let delete_fields =
`
{
schema: "example_schema",
tfnc:   "example_table",
qtype:  "delete",

//any input: true is sent into where clause. output: true is added to returning clause
//by default input and output are set to true
"fields": [
    {"field": "id",          "alias": "",    "input": true,  "output":true} //pk is in the where clause
    {"field": "first_name",  "alias": "FN"   "input": false, "output":true} //pk is in the where clause
]
}

/*
input payload
data: [{id: 1}]

query
DELETE FROM "example_schema"."example_table" WHERE id = :id RETURNING ("id")::text as id, 
    ("first_name")::text as "FN"

output
data [{id: 1, FN: "Mike"}]

*/
`

let delete_params =
`
{
schema: "example_schema",
tfnc:   "example_function",
qtype:  "delete",

//any input: true is sent into where clause. output: true is added to returning clause
"params": [
    "in": {
        {"field": "id" } //pk is in the where clause
        {"field": "user_id", "set": "user_id", } //set injects value by server.
    },
    "out": [
        {"field": "id" }
        {"field": "first_name",  "alias": "FN"   "set": "", }
    ]
]
}

/*
input payload
data: [{id: 1}]

query (user_id injected by server using set command)
SELECT ("id")::text as "id", ("first_name")::text as "FN" 
    FROM "example_schema"."example_function"(:id, :user_id)

output
data [{id: 1, FN: "Mike"}]
*/
`

/*
CREATE OR REPLACE FUNCTION insert_and_return()
RETURNS TABLE (ID INT, Name VARCHAR) AS $$
BEGIN
    -- Perform the insert using RETURNING
    INSERT INTO your_table_name (name) VALUES ('John')
    RETURNING id, name INTO ID, Name;

    -- Return the inserted data
    RETURN NEXT;
END;
$$ LANGUAGE plpgsql;
*/



</script>