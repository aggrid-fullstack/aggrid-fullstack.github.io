<template>
    <p>sup</p>
</template>

<script>


//api table
`
/*
create table "__aggrid_admin__"."api" (
    id bigserial,
    route_group  text    NOT NULL,
    route_name   text    NOT NULL,
    route_action text    NOT NULL,
    config       json    NOT NULL,
    "version"    int     NOT NULL,
    "is_prod"    boolean NOT NULL DEFAULT FALSE

    --composite key

    --api route
    -- api/route_group/route_name/route_action/version
    -- if version missing order by version number select most recent

    -- if only api/route_group/route_name/route_action
    -- latest is with highest version and is_prod is true
)
*/


`
//set and key parameters
`
/*
used in set for select, insert,update and delete. Contains information of user calling an api route.
now is used for when event occurs. Designed for maintaining deleted_at, updated_at and created_at
columns if being used


All values are sent and received as strings. Type conversion is done by the browser, data server or end client
*/
interface ServerKeyParameters
{
user_id:    big integer //row id for user
oauth_id:   string      //oauth code sent by login usueally users email
email   :   string      //user email
first_name: string      //first name
middle_name: string     //middle name
last_name:  string      //last name
now:        datetime    //current date time of action
}

//example for select input parameters
{"fields": "example": "set": "now"}
{"fields": "example": "set": "user_id"}


/*
set commands are injected by the server when using modification queries (insert, update, delete, deleted_at)
or when using input_params

*/


/*
Defaults are values added to the data payload if missing. For fields array If default is not specified nothing is added and 
the server handles undefined values

When using parameters for stored procedure calls the 

if_null:
*/


/*
fields: [


]

//minimum is field and type


//
SELECT ("column_1")::text as "Column_Alias_1", ("column_2") as text
FROM (
    select ("column_1" as "Column_Alias_1", "column_2"
    FROM "xschema"."xtable"
    --where
    --order by
    --limit 
) x
*/


/*
//order matters
params: {
    input: [
        {"field": "example": "set": "now"}
        {"field": "example": "set": "user_id"}
    ]

    output: [
        {"field": "example": "set": "now"}
        {"field": "example": "set": "user_id"}
    ]
}

SELECT ("output_1")::text as "output_alias_1"
FROM (
    SELECT "output_1", "output_2" FROM "xschema"."xfunction"(:input_1, :input_2)
    --where
    --order by
    --limit
) x


alias to field 

field to alias



*/


/*
Fields creates normal sql queries

select col1, col2 from schema.table
insert into schema.table (column1, column1) VALUES (value1, value2) RETURNING column1, column2 
UPDATE schema.table SET column_1 = value_1, column_2 = value_2 WHERE id = id_value RETURNING column_1
DELETE FROM schema.table WHERE id = id_value RETURNING x,y,z

// on_conflict or on_contraint




*/

need to describe purpose of different options
example user_id payload
`



</script>
