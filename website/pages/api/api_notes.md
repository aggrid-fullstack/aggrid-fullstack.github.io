
```sql

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
```



# SELECT
```javascript
//for select
//use explain to test api routes
{
    "schema": "",
    "tfnc": "",
    "qtype": ["select", "insert", "update", "delete", "upsert", "modify"]
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
        "set_fields": [] //if set missing or empty do nothing

    }
}

```

# UPDATE










# DELETE


