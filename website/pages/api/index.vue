<template>
    <p>sup</p>
</template>

<script>
export default {

data() {
    return {

        //example table and api payload call

        global_directives: {
            title:  "",
            header: ['Directive', 'Description'],
            rows:  [
                { "directive": "schema",       "description": "", "type": "", "require": ""},
                { "directive": "tfnc",         "description": "", "type": "", "require": ""},
                { "directive": "qtype",        "description": "", "type": "", "require": ""},
                { "directive": "json_blob",    "description": "", "type": "", "require": ""},
                { "directive": "batch",        "description": "", "type": "", "require": ""},
                { "directive": "upsert",       "description": "", "type": "", "require": ""},
                { "directive": "fields/params",    "description": "", "type": "", "require": ""},
                { "directive": "rls",            "description": "", "type": "", "require": ""},
            ]
        },

        /*
            //field and alias must be alphanumeric and underscore. cant start with a number
            field: "", //field the actual column name stored in postgres
            alias: "", //rename of field. this alias value will be used as interface for api column
            set:   "", //only viable for insert/update/delete or select using params
            if_null: "", //replaces null value if sent as null
            default: "", //value injected into data if missing 
            in:  "", //is the data/filter/order_by in payload used to generate query
            out: "", //is the field returned back
            desc: "",//what this fields purposes is
            required: "", //allowed to be missing. if true and missing send error
            data_type: "",
            pk: "" //true/false
        */


        // All values are sent and received as strings. Type conversion is done by the browser, data server or end client

        /*
            Defaults are values added to the data payload if missing. For fields array If default is not specified nothing is added and 
            the server handles undefined values

            Fields creates normal sql queries

            select col1, col2 from schema.table
            insert into schema.table (column1, column1) VALUES (value1, value2) RETURNING column1, column2 
            UPDATE schema.table SET column_1 = value_1, column_2 = value_2 WHERE id = id_value RETURNING column_1
            DELETE FROM schema.table WHERE id = id_value RETURNING x,y,z
        */

        fields_directives: {
            title:  "",
            header: ['Directive', 'Description'],
            rows:  [
                { "directive": "field",       "description": "actual column name stored in postgres", "type": "", "require": ""},
                { "directive": "alias",       "description": "alias name for api.", "type": "", "require": ""},
                { "directive": "data_type",   "description": "postgres data type", "type": "", "require": ""},
                { "directive": "set",         "description": "server injected value for field. default/if_null/required are ignored. key_values described below", "type": "", "require": ""},
                { "directive": "default",     "description": "", "type": "", "require": ""},
                { "directive": "if_null",     "description": "", "type": "", "require": ""},
                { "directive": "required",    "description": "", "type": "", "require": ""},
                { "directive": "pk",          "description": "", "type": "", "require": ""},
                { "directive": "in",          "description": "is payload included in query", "type": "", "require": ""},
                { "directive": "out",         "description": "is field returned", "type": "", "require": ""},
            ]
        },

        params_in_directives: {
            title:  "",
            // //order matters
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
            */
            header: ['Directive', 'Description'], //in or out
            rows:  [
                { "directive": "field",       "description": "name of the input parameter", "type": "", "require": ""},
                { "directive": "alias",       "description": "api alias name for field", "type": "", "require": ""},
                { "directive": "desc",        "description": "meaning of field", "type": "", "require": ""},
                { "directive": "data_type",   "description": "postgres types", "type": "", "require": ""},
                { "directive": "set",         "description": "server injected value for field. default/if_null/required are ignored", "type": "", "require": ""},
                { "directive": "default",     "description": "if value not in payload default value injected into payload", "type": "", "require": ""},
                { "directive": "if_null",     "description": "value to use if payload field is null", "type": "", "require": ""},
                { "directive": "required",    "description": "requires field in payload. error if missing", "type": "", "require": ""}
            ]
        },

        params_out_directives: {
            title:  "",
            header: ['Directive', 'Description'], //in or out
            rows:  [
                { "directive": "field",       "description": "", "type": "", "require": ""},
                { "directive": "alias",       "description": "", "type": "", "require": ""},
                { "directive": "desc",        "description": "", "type": "", "require": ""},
                { "directive": "data_type",   "description": "", "type": "", "require": ""},
            ]
        },


        key_values: { //for set
            title:  `used in set for select, insert,update and delete. Contains information of user calling an api route.
                now is used for when event occurs. Designed for maintaining deleted_at, updated_at and created_at
                columns if being used All values are sent and received as strings. Type conversion is done by the browser, data server or end client`,
            header: ['Directive', 'Description'],
            rows:  [
                { "directive": "user_id",     "description": "", "type": "", "require": ""},
                { "directive": "oauth_id",    "description": "", "type": "", "require": ""},
                { "directive": "email",       "description": "", "type": "", "require": ""},
                { "directive": "first_name",  "description": "", "type": "", "require": ""},
                { "directive": "middle_name", "description": "", "type": "", "require": ""},
                { "directive": "last_name",   "description": "", "type": "", "require": ""},
                { "directive": "now",         "description": "", "type": "", "require": ""}
            ]
        },

        upsert_values: { //for set
            title:  "",
            header: ['Directive', 'Description'],
            rows:  [
                { "directive": "on_conflict/on_constraint",    "description": "", "type": "", "require": ""},
                { "directive": "set_fields",      "description": "if set missing or empty do nothing", "type": "[text]", "require": ""}
            ]
        },
    }
}

}


//api table

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





</script>
