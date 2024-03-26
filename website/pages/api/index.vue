<template>
    <p>All values are sent and received as strings. 
        Type conversion is done by the browser, data server or end client
    </p>
</template>

<script>
export default {

data() {
    return {

        //example table and api payload call
        global_directives: {
            title:  "",
            desc: "primary directives used to describe structure of query and what database objects to use",
            header: ['Directive', 'Description'],
            rows:  [
                { "directive": "schema", "type": "text", "require": "a-zA-Z_0-9 must start with letter or underscore",       
                    "description": "name of schema"},
                { "directive": "tfnc", "type": "", "require": "",         
                    "description": "name of table/view/function. if fields used creates table operation. if params used creates function operation"},
                { "directive": "qtype", "type": "", "require": "",        
                    "description": "how query should be generated options are [select, insert, update, delete, deleted_at, modify, search,upsert]"},
                { "directive": "json_blob", "type": "", "require": "",    
                    "description": "if true sends as json dictionary if batch=false otherwise sends as json array"},
                { "directive": "batch", "type": "", "require": "",
                    "description": "if true all data is sent as one transaction. default sends each row individualy to server"},
                { "directive": "upsert", "type": "", "require": "",
                    "description": "for when qtype is upsert. providers parameters for upsert query"},
                { "directive": "fields/params", "type": "json", "require": "either fields or params. description of components in fields and table directives below",
                    "description": `json array describing what data to expect to send and receive to server. if using fields table operations will be created; 
                        tfnc is then assumed to be table or view. params asume tfnc is a function name. should return a row`},
                { "directive": "rls", "type": "json object", "require": "optional for select and search routes",
                    "description": `functionality to add information about user hitting api into the generated query. 
                        Allows quick implementation of user specific row level security`},
            ]
        },

        fields_directives: {
            title:  "",
            desc:   `
            fields contains information about each column used such as its name, type and input/output status.
            fields: [
                {"field": "column_name",   "data_type": "integer"},
                {"field": "column_name_2", "data_type": "text"},
            ] 
            Fields creates normal sql queries for example:

            select col1, col2 from schema_name.table_name
            insert into schema_name.tabl_namee (column1, column1) VALUES (value1, value2) RETURNING column1, column2 
            UPDATE schema_name.table_name SET column_1 = value_1, column_2 = value_2 WHERE id = id_value RETURNING column_1
            DELETE FROM schema_name.table_name WHERE id = id_value RETURNING x,y,z

            note for nothing to update?
            `,
            header: ['Directive', 'Description'],
            rows:  [
                { "directive": "field","type": "text", "require": "a-zA-Z_0-9 must start with letter or underscore",
                    "description": "actual column name stored in postgres"},
                { "directive": "alias", "type": "text", "require": "a-zA-Z_0-9 must start with letter or underscore",
                    "description": "alias name for api."},
                { "directive": "desc",        "description": "meaning of field", "type": "text", "require": ""},

                { "directive": "data_type", "type": "text", "require": "name of field matching postgres type",
                    "description": "postgres data type. used to convert text to proper value",},
                { "directive": "set", "type": "text (name of key parameter. value is inject into payload using parameters or for insert/update/delete for fields)", "require": "" ,
                    "description": "server injected value for field. default/if_null/required are ignored. key_values described below"},
                { "directive": "default", "type": "text, number or null", "require": "",
                    "description": "value to inject into payload of key:value pair missing (replaces undefiend values)"},
                { "directive": "if_null", "type": "boolean", "require": "" ,
                    "description": "used to replace value of key if its null"},
                { "directive": "required", "type": "boolean", "require": "", 
                    "description": "if key is missing api will reject request."},
                { "directive": "pk", "type": "boolean", "require": "only used in update route. The pk must be present",
                    "description": "for update route. specifies which keys are part of the where predicate"},
                { "directive": "in", "type": "boolean", "require": "",
                    "description": "default true. is payload included in query, filters"},
                { "directive": "out", "type": "boolean", "require": "",
                    "description": "default true is field returned"},
            ]
        },

        params_in_directives: {
            title:  "",
            desc: `
            // //order matters
            /*
            //order matters
            params: {
                in: [
                    {"field": "input_1", "data_type": "datetime", "set": "now"}
                    {"field": "input_2": "data_type": "bigint",   "set": "user_id"}
                ],
                out: [
                    {"field": "example": "set": "now"}
                    {"field": "example": "set": "user_id"}
                ] 
            }

            SELECT ("output_1")::text as "output_alias_1"
            FROM (
                SELECT "output_1", "output_2" FROM "xschema"."xfunction"(now(), user_id)
                --where
                --order by
                --limit
            ) x
           `,
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
                { "directive": "field",       "description": "field/column returned by function", "type": "", "require": ""},
                { "directive": "alias",       "description": "api alias for output field", "type": "", "require": ""},
                { "directive": "desc",        "description": "description of output field", "type": "", "require": ""},
                { "directive": "data_type",   "description": "data type for outputfield", "type": "", "require": ""},
            ]
        },

        rls_directives: {
            title: "",
            desc:  "",
            header: [],
            rows:   []

        },


        aggrid_meta_directives: {
            title: "",
            desc:  "cell level security. row height ...",
            header: [],
            rows:   []

        },



        key_values: { //for set
            title: "",
            desc:  `used in set for qtypes: insert,update and delete when using fields. Always injected for params. 
                Contains information of user calling an api route.
                now is used for when event occurs. injects now() function as input Designed for maintaining deleted_at, updated_at and created_at
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
            desc:   `
            
            using on_conflict
            upsert: {
                on_conflict: name_of_unique_column
                set_fields: [ ] //list of fields to update on conflict
            }
            
            using on_constraint
            upsert: {
                on_conflict: name_of_uniqueness_constraint
                set_fields: [ ] //list of fields to update on conflict
            }

            `,
            header: ['Directive', 'Description'],
            rows:  [
                { "directive": "on_conflict/on_constraint",    "description": "specifices contraint name and type", "type": "text", "require": "one or the other must be present"},
                { "directive": "set_fields",      "description": "if set missing or empty do nothing is used during upsert", "type": "[text]", "require": ""}
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
