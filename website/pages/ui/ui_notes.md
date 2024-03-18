# UI Configuration

```javascript
let x = 5;

{
    "ui": {
        "type": "grid/survey"
        "actions": ""//actions column. allow copy?. status (E. empty. etc. tool tip?)
        "allow_empty": ""//default false.
        "quickfilter": {


        }

        //based on if id present.
        "survey_option": "" //survey options
        //id_field from url or default select
        "api": {
            "select": "",
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
    }
    "url_params": {
        //optional or required
    }


    "ui_columns": [
        {   "headerName": "", 
            "field": "", 
            "desc": "",
            "is_pinned": "true/false"
            "error_desc": "", 
            "hide": ""
            "ui": "", //infers type
            "read_only" :"",
            "flag": "true/false", //flags are readonly and sent back to server on each call
            "is_error": "", //mathjs expression
            "null_error": ""
            "required": "" //true/false
            "params": {

            }
        }
    ],
    "column_order" []
}


//submodal grid
"params": {
    "title": ""//field name for title
    "id": "" //fields used for id to filter out for submodal {{main_grid_field: submodal_grid_field}}

    "refresh": "" //true false.
    "refresh_row": ""//true false
    "row_drop": ""

    "api": {
        "select": "",
        "insert": "",
        "update": "",
        "delete": "",
        "row_refresh": "", //need row id for submodal and subsurvey
    }
    "test_api": {
        "select": "",
        "insert": "",
        "update": "",
        "delete": "",
        "row_refresh": "", //need row id for submodal and subsurvey
    }
    //row_drop: true //drops row in sub survey or sub grid succesful

}    




```



# UI Components
```javascript

//subgrid
//json dictionary
//json array
//subgrid row rendered.

//link


//dropdown



```