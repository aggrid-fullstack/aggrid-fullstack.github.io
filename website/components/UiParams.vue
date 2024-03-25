<template>




</template>

<script>

export default {

    data() {
        return {
            field: "",
            headName: "",
            desc: "",//what this fields purposes is
            required: "", //allowed to be missing. if true and missing send error
            data_type: "",
        }
    }

}

/*
{
    "ui": "grid/survey",
    "desc": "description of app purpose"
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
    "actions": {
        add
        delete
        copy
        help
        status
    }

    "ui_def": [
        { 
            "field": "", //name of field of api or alias if alias used in api
            "headerName": "", //the name of field displayed. defaults to field
            "pin": true/valse 
            "desc": "", "error_desc": "", "hide": ""
            "ui": "",
            "type": "", ??
            "read_only" :"",
            "required": "", //true or false at least one entry is required. default to true for all editable fields
            "is_error": "", //or is_valid
            "filter":
            "width": ""
            "order_by"
            "params": {
                "api"
                "test_api"
                "if_null": 0
            }
            suppressFillHandle: true
            column_refresh:         "row_refresh": "", //need row id ??
        }
    ],
    "gridParams": {
        "column_order": [

        ]
    //enable fill handle y direction only
    }
    "surveyParams": {
        "pages": bool
        "page_size": 5
        "page_group": [
            [ ],
            [ ]
        ]
    }
}
*/


</script>