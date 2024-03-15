
```sql

create table "__aggrid_admin__"."api" (
    id bigserial,
    route_group  text NOT NULL,
    route_name   text NOT NULL,
    route_action text NOT NULL,
    config       json NOT NULL,
    "version"    int  NOT NULL

    --composite key

    --api route
    -- api/route_group/route_name/route_action/version
    -- if version missing order by version number select most recent
)
```



# key parameters
```typescript
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


```


# SELECT
```javascript
//for select
//use explain to test api routes
{
    "schema": "",
    "tfnc": "",
    "qtype": ["select", "insert", "update", "delete", "upsert"]
    /*


    */

    //insert/update/delete etc sent as json blob not as individual values
    "json_blob": "true/false"

    "fields": [
        {"field": "", "alias": "", "type": "", "default": "", "set": "", "input": true,  
        "output":true, //defaults to true. if false not returene by select. Often used from returning large text strings or tsvectors used for searching only 
        "required": false, "pk": true} //pk is in the where clause
    ]

    /*


    */
    "params": [
        "input_fields": [
            {"field": "", "alias": "", "type": "", "default": "", "set": "", "input": true,  "output":true, "required": false, "pk": true}
        ],
        "output_fields": [
            {"field": "", "alias": "", "type": ""}
        ]

    ]
    //key is from key parameters is user_id, oauth_id, etc.
    "rls": {"key": "", "operator": "", "field"},
    "batch": true
    "bind": false
}
```

```sql
--for select
Select 1 from x
--for insert/update/delete/deleted_at


--for rls

SELECT * FROM x
WHERE key_value in (field)
--and other fields
--order by
--limit


--for batch
INSERT INTO x (col1, col2)

SELECT 
    (element ->> 'key1')::type_1 AS key1,
    (element ->> 'key2')::type_2  AS key2
FROM json_array_elements(json_column) AS element;


UPDATE x
SET 
FROM (

) y
WHERE x.a = a


DELETE FROM x
WHERE id IN (
    SELECT from json
)

```





# INSERT

```javascript
//how to handle upsert
{

    "upsert": {
        "on_conflict": "",
        "on_contraint": "",
        "set": [] //if set missing or empty do nothing

    }

}

```

# UPDATE










# DELETE


