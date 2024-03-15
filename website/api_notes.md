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



```


# SELECT
```javascript
//for select
//use explain to test api routes
{
    "schema": "",
    "tfnc": "",
    "qtype": ["select", "insert", "update", "delete"]
    /*


    */
    "fields": [
        {"field": "", "alias": "", "type": "", "default": "", "set": "", "input": true,  "output":true, "required": false, "pk": true} //pk is in the where clause
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
    "rls": {"key": "", "operator": "", "field"},
    "batch": true
    "bind": false
}
```

```sql
--for select
Select 1 from x
--for insert/update/delete/deleted_at
```


# INSERT

```javascript
let x = 5;

{
    "ui": "grid/survey"
    "api": {
        "select": "",
        "row_refresh": "", //need row id
        "insert": "",
        "update": "",
        "delete": ""
    }
    "test_api": {
        "select": "",
        "insert": "",
        "update": "",
        "delete": ""
    }
    "ui_def": [
        {"headerName": "", "field": "", 
            "desc": "", "error_desc": "", "hide": ""
            "ui": "",
            "read_only" :"",
            "is_error": "", //or is_valid
            "is_valid": "",
            "params": {

            }    
        }
    ]
}
```

# UPDATE










# DELETE


