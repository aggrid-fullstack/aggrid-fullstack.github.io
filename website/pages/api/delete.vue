<template>
<div>

<div class="section">
    <div class="block">
        <h1 class="title">Delete </h1>
        <p>
            qtype="delete" specifies a delete route. Any field that has input as true is added to the where clause. Each input (in) is
            required for the delete route to work. By default in/out are set to true and are expected in the payload and will be returned
            on sucessful execution. 

            --options
        </p>
        <p>options</p>
    </div>

    <div class="block"><highlightjs :code="delete_fields"/></div>
    
    <div class="block"></div><highlightjs :code="delete_params"/><div class="block"></div>
</div>

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
    schema: "example_schema",  //required: must exist in postgres and connection string must have necessary permissions
    tfnc:   "example_table",   //required: must exist in postgres and connection string must have necessary permissions
    qtype:  "delete",          //required: specifies query to create. connection string must have necessary permissions 

    //any input: true is sent into where clause. output: true is added to returning clause
    //by default input and output are set to true
    "fields": [
        {   "field": "id",          //required: name must exist in postgres table
            "data_type": "bigint",  //required: must match type in postgres
            "in": true,             //optional: defaults to true
            "out":true,             //optional: defaults to true
            "alias": "ID"           //optional: defaults to name used in field

        }
        {"field": "first_name",  "data_type": "text",      "alias": "FN"   "in": false, "out":true} //pk is in the where clause
    ]
}

/*
input payload
data: [{id: 1}]

//query
DELETE FROM "example_schema"."example_table" WHERE id = :id RETURNING ("id")::text as "ID", 
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
            {"field": "id", "data_type": "int" }    //pk is in the where clause
            {"field": "user_id", "set": "user_id" } //set injects value by server.
        },
        "out": [
            {"field": "id" }
            {"field": "first_name",  "alias": "FN"   "set": "", }
        ]
    ]
}

/*
input payload:
    data: [{id: 1}]

//query (user_id injected by server using set command)

SELECT ("id")::text as "id", ("first_name")::text as "FN" 
    FROM "example_schema"."example_function"(:id, :user_id)

output payload:
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