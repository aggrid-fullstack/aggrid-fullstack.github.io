# UI Configuration

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


# UI Components