<?php

return [

    'app' => [
        'release' => '3.1',
        'show_release' => env('SHOW_RELEASE', true),
    ],

    'services' => [

        'activities' => [

            'path' => 'trax/core/activities',
            'host' => env('SERVICE_ACTIVITIES_HOST', env('APP_URL', null)),
            'service' => \Trax\Activities\ActivitiesService::class,
            'database' => \Trax\Activities\ActivitiesDatabase::class,
            'listeners' => true,
        ],

        'activity-profiles' => [

            'path' => 'trax/core/activity-profiles',
            'host' => env('SERVICE_ACTIVITY_PROFILES_HOST', env('APP_URL', null)),
            'service' => \Trax\ActivityProfiles\ActivityProfilesService::class,
            'database' => \Trax\ActivityProfiles\ActivityProfilesDatabase::class,
        ],

        'agents' => [

            'path' => 'trax/core/agents',
            'host' => env('SERVICE_AGENTS_HOST', env('APP_URL', null)),
            'service' => \Trax\Agents\AgentsService::class,
            'database' => \Trax\Agents\AgentsDatabase::class,
            'listeners' => true,
        ],

        'agent-profiles' => [

            'path' => 'trax/core/agent-profiles',
            'host' => env('SERVICE_AGENT_PROFILES_HOST', env('APP_URL', null)),
            'service' => \Trax\AgentProfiles\AgentProfilesService::class,
            'database' => \Trax\AgentProfiles\AgentProfilesDatabase::class,
        ],

        'gateway' => [

            'path' => 'trax/core/gateway',
            'host' => env('SERVICE_GATEWAY_HOST', env('APP_URL', null)),
            'service' => \Trax\Gateway\GatewayService::class,
        ],

        'statements' => [

            'path' => 'trax/core/statements',
            'host' => env('SERVICE_STATEMENTS_HOST', env('APP_URL', null)),
            'service' => \Trax\Statements\StatementsService::class,
            'database' => \Trax\Statements\StatementsDatabase::class,
        ],

        'starter' => [

            'path' => 'trax/core/starter',
            'host' => env('SERVICE_STARTER_HOST', env('APP_URL', null)),
            'service' => \Trax\Starter\StarterService::class,
        ],

        'states' => [

            'path' => 'trax/core/states',
            'host' => env('SERVICE_STATES_HOST', env('APP_URL', null)),
            'service' => \Trax\States\StatesService::class,
            'database' => \Trax\States\StatesDatabase::class,
        ],
    ],

    'deployment' => [

        'local_services' => env('LOCAL_SERVICES', 'all'),
        'remote_services' => env('REMOTE_SERVICES', []),
        'event_stream' => [
            'enabled' => env('EVENT_STREAM_ENABLED', false),
        ]
    ],

    'auth' => [

        'admin' => [
            'email' => env('ADMIN_EMAIL', 'admin@traxlrs.com'),
            'password' => env('ADMIN_PASSWORD', 'aaaaaaaa'),
        ],

        'endpoint' => [
            'username' => env('DEFAULT_ENDPOINT_USERNAME', 'traxlrs'),
            'password' => env('DEFAULT_ENDPOINT_PASSWORD', 'aaaaaaaa'),
        ],

        'passwords' => [
            'size' => env('PASSWORDS_SIZE', 8),
            'letters' => env('PASSWORDS_LETTERS', false),
            'numbers' => env('PASSWORDS_NUMBERS', false),
            'symbols' => env('PASSWORDS_SYMBOLS', false),
            'mixed_case' => env('PASSWORDS_MIXED_CASE', false),
            'uncompromised' => env('PASSWORDS_UNCOMPROMISED', false),
            'renew' => env('PASSWORDS_RENEW', -1),
        ],
    ],

    'testsuite' => [
        'path' => env('TESTSUITE_PATH', '/opt/adl-lrs-testsuite'),
    ],

    'features' => [
        'extended-edition' => env('EXTENDED_EDITION', false),
        'data-api' => env('DATA_API', false),
        'jobs-api' => env('JOBS_API', false),
        'logging-api' => env('LOGGING_API', false),
        'access-api' => env('ACCESS_API', false),
    ],
    
    'xapi' => [

        // The default limit when getting statements.
        'statements_limit' => env('XAPI_STATEMENTS_LIMIT', 100),

        // The default authority to assign to incoming statements.
        'authority' => [
            'account' => [
                'name' => env('XAPI_STATEMENTS_AUTHORITY_NAME', 'api'),
                'homePage' => env('XAPI_STATEMENTS_AUTHORITY_HOMEPAGE', 'http://traxlrs.com'),
            ]
        ],
        
        // Pseudonymization options.
        'pseudo' => [
            'homepage' => env('XAPI_PSEUDO_HOMEPAGE', 'http://pseudo.traxlrs.com'),
            'hash_key' => env('XAPI_PSEUDO_HASH_KEY', 'Oh4JYEcohtoaZmS3oBb4d'),
        ],

        // About information.
        'about' => [
            'version' => ['1.0.3'],
        ],
    ],

    'pipeline' => [

        'validate_statements' => [
            'default' => env('PIPELINE_DEFAULT_VALIDATE_STATEMENTS', true),
            'forced' => env('PIPELINE_FORCED_VALIDATE_STATEMENTS', false),
        ],
        'check_conflicts' => [
            'default' => env('PIPELINE_DEFAULT_CHECK_CONFLICTS', true),
            'forced' => env('PIPELINE_FORCED_CHECK_CONFLICTS', false),
        ],
        'record_attachments' => [
            'default' => env('PIPELINE_DEFAULT_RECORD_ATTACHMENTS', true),
            'forced' => env('PIPELINE_FORCED_RECORD_ATTACHMENTS', false),
        ],
        'void_statements' => [
            'default' => env('PIPELINE_DEFAULT_VOID_STATEMENTS', true),
            'forced' => env('PIPELINE_FORCED_VOID_STATEMENTS', false),
        ],
        'update_activities' => [
            'default' => env('PIPELINE_DEFAULT_UPDATE_ACTIVITIES', true),
            'forced' => env('PIPELINE_FORCED_UPDATE_ACTIVITIES', false),
        ],
        'update_agents' => [
            'default' => env('PIPELINE_DEFAULT_UPDATE_AGENTS', true),
            'forced' => env('PIPELINE_FORCED_UPDATE_AGENTS', false),
        ],
        'update_vocab' => [
            'default' => env('PIPELINE_DEFAULT_UPDATE_VOCAB', true),
            'forced' => env('PIPELINE_FORCED_UPDATE_VOCAB', false),
        ],
        'update_activity_ids' => [
            'default' => env('PIPELINE_DEFAULT_UPDATE_ACTIVITY_IDS', true),
            'forced' => env('PIPELINE_FORCED_UPDATE_ACTIVITY_IDS', false),
        ],
        'update_agent_ids' => [
            'default' => env('PIPELINE_DEFAULT_UPDATE_AGENT_IDS', true),
            'forced' => env('PIPELINE_FORCED_UPDATE_AGENT_IDS', false),
        ],
        'pseudonymize_statements' => [
            'default' => env('PIPELINE_DEFAULT_PSEUDONYMIZE_STATEMENTS', false),
            'forced' => env('PIPELINE_FORCED_PSEUDONYMIZE_STATEMENTS', false),
        ],
        'query_targeting' => [
            'default' => env('PIPELINE_DEFAULT_QUERY_TARGETING', true),
            'forced' => env('PIPELINE_FORCED_QUERY_TARGETING', false),
        ],
    ],
];
