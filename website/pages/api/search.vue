<template>
<div>
    <h1>fields</h1>



    <h1>params</h1>

</div>



</template>



<script>



```select fields
search and rank

{
    "schema": "example_schema",
    "tfnc":   "example_table",
    "qtype":  "search"

    "fields": [
        {"field": "", "alias": "", "type": "", "default": "", "set": "", "input": true,  
        "output":true, //defaults to true. if false not returene by select. Often used from returning large text strings or tsvectors used for searching only 
        "required": false, "pk": true} //pk is in the where clause
    ]

    "rank": [
        
    ]

    //key is from key parameters is user_id, oauth_id, etc.
    "rls": {"key": "", "operator": "", "field"},
    "bind": false
    "score_field": " "
}
```


```select params

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
    "rls": {"key": "", "operator": "", "field"},
    "batch": true
    "bind": false
}

data: [{input_field1: 'a'}]

SELECT out_field1, out_field2 FROM example_schema.example_function(:input_field1, :input_field2)

```


```
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

SELECT column1, colun2, column3
FROM 
    (SELECT * FROM query where :user_id = ANY (converted_array_column)) x

```

</script>
