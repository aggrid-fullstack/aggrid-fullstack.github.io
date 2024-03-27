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



    <div class="block"><h1 class="title">Fields </h1><highlightjs :code="delete_fields"/></div>
    <div class="block"></div><h1 class="title">Params </h1><highlightjs  :code="delete_params"/><div class="block"></div>
    <div class="block"></div><h1 class="title">Postgres Function for Params Call </h1><highlightjs  :code="delete_function"/><div class="block"></div>
</div>

</div>
</template>


<script>

export default {

    data() {
        return {
            delete_fields:   delete_fields,
            delete_params:   delete_params,
            delete_function: delete_function
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
    //by default input and output are set to true. all in:true are required by payload or injected by server using set.
    "fields": [
        {   "field": "id",          //required: name must exist in postgres table
            "data_type": "bigint",  //required: must match type in postgres
            "in": true,             //optional: defaults to true
            "out":true,             //optional: defaults to true
            "alias": "ID"           //optional: defaults to name used in field
            "desc": "row id"        //optional: description of field purpose/meaning
            //set is optional specifies user information should be injected into field
        }
        {"field": "first_name",  "data_type": "text",      "alias": "FN"   "in": false, "out":true} //pk is in the where clause
    ]
}

/*
input payload
data: [{"id": 1}]

//query
DELETE FROM "example_schema"."example_table" WHERE id = :id RETURNING ("id")::text as "ID", 
    ("first_name")::text as "FN"

output
data [{"id": 1, "FN": "Mike"}]

*/
`

let delete_params =
`{
    schema: "example_schema",    //required
    tfnc:   "example_function",  //required
    qtype:  "delete",            //required: action of route.
    desc:   "deletes record"     //optional: descripes api endpoints purpose

    //in field specified for params.in is added to the function in the order its defined
    "params": [
        "in": {
            //if empty assumes function has no arguments
            {   
                "field":     "id",  //required: Values injected in order this would be in position 1. Name doesnt matter
                "data_type": "int"  //required: type must match function requirement.
                "desc": "row id"    //optional: description of field purpose/meaning
                //"default" is optional can inject a value if missing. if default not specified then its required in payload

            {   
                "field": "user_id", 
                "set":   "user_id"  //optional: set injects user_id value by server. 
            }
        },
        "out": [
            //outfields are optional. if empty nothing is returned
            {   
                "field":     "id",  //required: name of returned column
                "data_type": "int", //required: type of column
                "alias":     "ID" , //optional: output name for field
        
            }
            {   "field": "first_name", "data_type": "text",  "alias": "FN"}
        ]
    ]
}

/*
input payload:
    data: [{"id": 1}]

sever injected payload:
    data: [{"id": 1, "user_id": 1}]

//query (user_id injected by server using set command)

SELECT ("id")::text as "ID", ("first_name")::text as "FN" 
    FROM "example_schema"."example_function"(:id, :user_id)

output payload:
    data [{"id": 1, "FN": "Mike"}]
*/
`

let delete_function =
`
CREATE OR REPLACE FUNCTION insert_and_return()
RETURNS TABLE (ID INT, Name VARCHAR) AS $$
BEGIN
    // Perform the insert using RETURNING
    INSERT INTO your_table_name (name) VALUES ('John')
    RETURNING id, name INTO ID, Name;

    SELECT 1 FROM x WHERE id = 1;

    UPDATE x set v =1 where id =1;

    -- Return the inserted data
    RETURN NEXT;
END;
$$ LANGUAGE plpgsql;
`



</script>