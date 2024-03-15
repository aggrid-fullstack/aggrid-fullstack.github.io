# UI Configuration

```javascript
let x = 5;

{
    "ui": {
        "type": "grid/survey"
        "actions": ""//actions column. allow copy?
        "quickfilter": {

        }
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


//submodal survey
"params": {


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
        //row_drop
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