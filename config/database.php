<?php

use Illuminate\Support\Str;

return [

    /*
    |--------------------------------------------------------------------------
    | Default Database Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the database connections below you wish
    | to use as your default connection for database operations. This is
    | the connection which will be utilized unless another connection
    | is explicitly specified when you execute a query / statement.
    |
    */

    'default' => env('DB_CONNECTION', 'mysql'),

    /*
    |--------------------------------------------------------------------------
    | Database Connections
    |--------------------------------------------------------------------------
    |
    | Below are all of the database connections defined for your application.
    | An example configuration is provided for each database system which
    | is supported by Laravel. You're free to add / remove connections.
    |
    */

    'connections' => [

        'activities' => [
            'driver' => env('ACTIVITIES_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))),
            'host' => env('ACTIVITIES_DB_HOST', env('XAPI_DB_HOST', env('DB_HOST', '127.0.0.1'))),
            'port' => env('ACTIVITIES_DB_PORT', env('XAPI_DB_PORT', env('DB_PORT', '3306'))),
            'database' => env('ACTIVITIES_DB_DATABASE', env('XAPI_DB_DATABASE', env('DB_DATABASE', ''))),
            'username' => env('ACTIVITIES_DB_USERNAME', env('XAPI_DB_USERNAME', env('DB_USERNAME', ''))),
            'password' => env('ACTIVITIES_DB_PASSWORD', env('XAPI_DB_PASSWORD', env('DB_PASSWORD', ''))),
            'async' => env('ACTIVITIES_DB_ASYNC', env('XAPI_DB_ASYNC', false)),
            'charset' => env('ACTIVITIES_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))) == 'mysql' ? 'utf8mb4' : 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            // MySQL settings.
            'collation' => 'utf8mb4_unicode_ci',
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                (PHP_VERSION_ID >= 80500 ? Pdo\Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
            // PostgreSQL settings.
            'search_path' => env('ACTIVITIES_DB_SCHEMA', env('XAPI_DB_SCHEMA', env('DB_SCHEMA', 'public'))),
            'sslmode' => 'prefer',
        ],

        'activity-profiles' => [
            'driver' => env('ACTIVITY_PROFILES_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))),
            'host' => env('ACTIVITY_PROFILES_DB_HOST', env('XAPI_DB_HOST', env('DB_HOST', '127.0.0.1'))),
            'port' => env('ACTIVITY_PROFILES_DB_PORT', env('XAPI_DB_PORT', env('DB_PORT', '3306'))),
            'database' => env('ACTIVITY_PROFILES_DB_DATABASE', env('XAPI_DB_DATABASE', env('DB_DATABASE', ''))),
            'username' => env('ACTIVITY_PROFILES_DB_USERNAME', env('XAPI_DB_USERNAME', env('DB_USERNAME', ''))),
            'password' => env('ACTIVITY_PROFILES_DB_PASSWORD', env('XAPI_DB_PASSWORD', env('DB_PASSWORD', ''))),
            'async' => env('ACTIVITY_PROFILES_DB_ASYNC', env('XAPI_DB_ASYNC', false)),
            'charset' => env('ACTIVITY_PROFILES_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))) == 'mysql' ? 'utf8mb4' : 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            // MySQL settings.
            'collation' => 'utf8mb4_unicode_ci',
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                (PHP_VERSION_ID >= 80500 ? Pdo\Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
            // PostgreSQL settings.
            'search_path' => env('ACTIVITY_PROFILES_DB_SCHEMA', env('XAPI_DB_SCHEMA', env('DB_SCHEMA', 'public'))),
            'sslmode' => 'prefer',
        ],

        'agents' => [
            'driver' => env('AGENTS_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))),
            'host' => env('AGENTS_DB_HOST', env('XAPI_DB_HOST', env('DB_HOST', '127.0.0.1'))),
            'port' => env('AGENTS_DB_PORT', env('XAPI_DB_PORT', env('DB_PORT', '3306'))),
            'database' => env('AGENTS_DB_DATABASE', env('XAPI_DB_DATABASE', env('DB_DATABASE', ''))),
            'username' => env('AGENTS_DB_USERNAME', env('XAPI_DB_USERNAME', env('DB_USERNAME', ''))),
            'password' => env('AGENTS_DB_PASSWORD', env('XAPI_DB_PASSWORD', env('DB_PASSWORD', ''))),
            'async' => env('AGENTS_DB_ASYNC', env('XAPI_DB_ASYNC', false)),
            'charset' => env('AGENTS_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))) == 'mysql' ? 'utf8mb4' : 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            // MySQL settings.
            'collation' => 'utf8mb4_unicode_ci',
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                (PHP_VERSION_ID >= 80500 ? Pdo\Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
            // PostgreSQL settings.
            'search_path' => env('AGENTS_DB_SCHEMA', env('XAPI_DB_SCHEMA', env('DB_SCHEMA', 'public'))),
            'sslmode' => 'prefer',
        ],

        'agent-profiles' => [
            'driver' => env('AGENT_PROFILES_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))),
            'host' => env('AGENT_PROFILES_DB_HOST', env('XAPI_DB_HOST', env('DB_HOST', '127.0.0.1'))),
            'port' => env('AGENT_PROFILES_DB_PORT', env('XAPI_DB_PORT', env('DB_PORT', '3306'))),
            'database' => env('AGENT_PROFILES_DB_DATABASE', env('XAPI_DB_DATABASE', env('DB_DATABASE', ''))),
            'username' => env('AGENT_PROFILES_DB_USERNAME', env('XAPI_DB_USERNAME', env('DB_USERNAME', ''))),
            'password' => env('AGENT_PROFILES_DB_PASSWORD', env('XAPI_DB_PASSWORD', env('DB_PASSWORD', ''))),
            'async' => env('AGENT_PROFILES_DB_ASYNC', env('XAPI_DB_ASYNC', false)),
            'charset' => env('AGENT_PROFILES_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))) == 'mysql' ? 'utf8mb4' : 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            // MySQL settings.
            'collation' => 'utf8mb4_unicode_ci',
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                (PHP_VERSION_ID >= 80500 ? Pdo\Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
            // PostgreSQL settings.
            'search_path' => env('AGENT_PROFILES_DB_SCHEMA', env('XAPI_DB_SCHEMA', env('DB_SCHEMA', 'public'))),
            'sslmode' => 'prefer',
        ],

        'statements' => [
            'driver' => env('STATEMENTS_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))),
            'host' => env('STATEMENTS_DB_HOST', env('XAPI_DB_HOST', env('DB_HOST', '127.0.0.1'))),
            'port' => env('STATEMENTS_DB_PORT', env('XAPI_DB_PORT', env('DB_PORT', '3306'))),
            'database' => env('STATEMENTS_DB_DATABASE', env('XAPI_DB_DATABASE', env('DB_DATABASE', ''))),
            'username' => env('STATEMENTS_DB_USERNAME', env('XAPI_DB_USERNAME', env('DB_USERNAME', ''))),
            'password' => env('STATEMENTS_DB_PASSWORD', env('XAPI_DB_PASSWORD', env('DB_PASSWORD', ''))),
            'async' => env('STATEMENTS_DB_ASYNC', env('XAPI_DB_ASYNC', false)),
            'charset' => env('STATEMENTS_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))) == 'mysql' ? 'utf8mb4' : 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            // MySQL settings.
            'collation' => 'utf8mb4_unicode_ci',
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                (PHP_VERSION_ID >= 80500 ? Pdo\Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
            // PostgreSQL settings.
            'search_path' => env('STATEMENTS_DB_SCHEMA', env('XAPI_DB_SCHEMA', env('DB_SCHEMA', 'public'))),
            'sslmode' => 'prefer',
            // Specific to the statements table.
            'timeseries' => env('STATEMENTS_DB_TIMESERIES', env('XAPI_DB_TIMESERIES', false)),
        ],

        'states' => [
            'driver' => env('STATES_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))),
            'host' => env('STATES_DB_HOST', env('XAPI_DB_HOST', env('DB_HOST', '127.0.0.1'))),
            'port' => env('STATES_DB_PORT', env('XAPI_DB_PORT', env('DB_PORT', '3306'))),
            'database' => env('STATES_DB_DATABASE', env('XAPI_DB_DATABASE', env('DB_DATABASE', ''))),
            'username' => env('STATES_DB_USERNAME', env('XAPI_DB_USERNAME', env('DB_USERNAME', ''))),
            'password' => env('STATES_DB_PASSWORD', env('XAPI_DB_PASSWORD', env('DB_PASSWORD', ''))),
            'async' => env('STATES_DB_ASYNC', env('XAPI_DB_ASYNC', false)),
            'charset' => env('STATES_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))) == 'mysql' ? 'utf8mb4' : 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            // MySQL settings.
            'collation' => 'utf8mb4_unicode_ci',
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                (PHP_VERSION_ID >= 80500 ? Pdo\Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
            // PostgreSQL settings.
            'search_path' => env('STATES_DB_SCHEMA', env('XAPI_DB_SCHEMA', env('DB_SCHEMA', 'public'))),
            'sslmode' => 'prefer',
        ],

        'dev' => [
            'driver' => env('DEV_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))),
            'host' => env('DEV_DB_HOST', env('XAPI_DB_HOST', env('DB_HOST', '127.0.0.1'))),
            'port' => env('DEV_DB_PORT', env('XAPI_DB_PORT', env('DB_PORT', '3306'))),
            'database' => env('DEV_DB_DATABASE', env('XAPI_DB_DATABASE', env('DB_DATABASE', ''))),
            'username' => env('DEV_DB_USERNAME', env('XAPI_DB_USERNAME', env('DB_USERNAME', ''))),
            'password' => env('DEV_DB_PASSWORD', env('XAPI_DB_PASSWORD', env('DB_PASSWORD', ''))),
            'async' => env('DEV_DB_ASYNC', env('XAPI_DB_ASYNC', false)),
            'charset' => env('DEV_DB_DRIVER', env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql'))) == 'mysql' ? 'utf8mb4' : 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            // MySQL settings.
            'collation' => 'utf8mb4_unicode_ci',
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                (PHP_VERSION_ID >= 80500 ? Pdo\Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
            // PostgreSQL settings.
            'search_path' => env('DEV_DB_SCHEMA', env('XAPI_DB_SCHEMA', env('DB_SCHEMA', 'public'))),
            'sslmode' => 'prefer',
        ],

        'xapi' => [
            'driver' => env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql')),
            'host' => env('XAPI_DB_HOST', env('DB_HOST', '127.0.0.1')),
            'port' => env('XAPI_DB_PORT', env('DB_PORT', '3306')),
            'database' => env('XAPI_DB_DATABASE', env('DB_DATABASE', '')),
            'username' => env('XAPI_DB_USERNAME', env('DB_USERNAME', '')),
            'password' => env('XAPI_DB_PASSWORD', env('DB_PASSWORD', '')),
            'async' => env('XAPI_DB_ASYNC', false),
            'charset' => env('XAPI_DB_DRIVER', env('DB_CONNECTION', 'mysql')) == 'mysql' ? 'utf8mb4' : 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            // MySQL settings.
            'collation' => 'utf8mb4_unicode_ci',
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                (PHP_VERSION_ID >= 80500 ? Pdo\Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
            // PostgreSQL settings.
            'search_path' => env('XAPI_DB_SCHEMA', env('DB_SCHEMA', 'public')),
            'sslmode' => 'prefer',
            // Specific to the statements table.
            'timeseries' => env('XAPI_DB_TIMESERIES', false),
        ],

        'vocab' => [
            'driver' => env('VOCAB_DB_DRIVER', env('DB_CONNECTION', 'mysql')),
            'host' => env('VOCAB_DB_HOST', env('DB_HOST', '127.0.0.1')),
            'port' => env('VOCAB_DB_PORT', env('DB_PORT', '3306')),
            'database' => env('VOCAB_DB_DATABASE', env('DB_DATABASE', '')),
            'username' => env('VOCAB_DB_USERNAME', env('DB_USERNAME', '')),
            'password' => env('VOCAB_DB_PASSWORD', env('DB_PASSWORD', '')),
            'charset' => env('VOCAB_DB_DRIVER', env('DB_CONNECTION', 'mysql')) == 'mysql' ? 'utf8mb4' : 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            // MySQL settings.
            'collation' => 'utf8mb4_unicode_ci',
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                (PHP_VERSION_ID >= 80500 ? Pdo\Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
            // PostgreSQL settings.
            'search_path' => env('VOCAB_DB_SCHEMA', env('DB_SCHEMA', 'public')),
            'sslmode' => 'prefer',
        ],

        'logging' => [
            'driver' => env('LOGGING_DB_DRIVER', env('DB_CONNECTION', 'mysql')),
            'host' => env('LOGGING_DB_HOST', env('DB_HOST', '127.0.0.1')),
            'port' => env('LOGGING_DB_PORT', env('DB_PORT', '3306')),
            'database' => env('LOGGING_DB_DATABASE', env('DB_DATABASE', '')),
            'username' => env('LOGGING_DB_USERNAME', env('DB_USERNAME', '')),
            'password' => env('LOGGING_DB_PASSWORD', env('DB_PASSWORD', '')),
            'charset' => env('LOGGING_DB_DRIVER', env('DB_CONNECTION', 'mysql')) == 'mysql' ? 'utf8mb4' : 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            // MySQL settings.
            'collation' => 'utf8mb4_unicode_ci',
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                (PHP_VERSION_ID >= 80500 ? Pdo\Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
            // PostgreSQL settings.
            'search_path' => env('LOGGING_DB_SCHEMA', env('DB_SCHEMA', 'public')),
            'sslmode' => 'prefer',
        ],

        'auth' => [
            'driver' => env('AUTH_DB_DRIVER', env('DB_CONNECTION', 'mysql')),
            'host' => env('AUTH_DB_HOST', env('DB_HOST', '127.0.0.1')),
            'port' => env('AUTH_DB_PORT', env('DB_PORT', '3306')),
            'database' => env('AUTH_DB_DATABASE', env('DB_DATABASE', '')),
            'username' => env('AUTH_DB_USERNAME', env('DB_USERNAME', '')),
            'password' => env('AUTH_DB_PASSWORD', env('DB_PASSWORD', '')),
            'charset' => env('AUTH_DB_DRIVER', env('DB_CONNECTION', 'mysql')) == 'mysql' ? 'utf8mb4' : 'utf8',
            'prefix' => '',
            'prefix_indexes' => true,
            // MySQL settings.
            'collation' => 'utf8mb4_unicode_ci',
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                (PHP_VERSION_ID >= 80500 ? Pdo\Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
            // PostgreSQL settings.
            'search_path' => env('AUTH_DB_SCHEMA', env('DB_SCHEMA', 'public')),
            'sslmode' => 'prefer',
        ],

        'mysql' => [
            'driver' => 'mysql',
            'url' => env('DB_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'laravel'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => env('DB_CHARSET', 'utf8mb4'),
            'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
            'prefix' => '',
            'prefix_indexes' => true,
            'strict' => true,
            'engine' => 'InnoDB',
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                (PHP_VERSION_ID >= 80500 ? Pdo\Mysql::ATTR_SSL_CA : PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
        ],

        'pgsql' => [
            'driver' => 'pgsql',
            'url' => env('DB_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '5432'),
            'database' => env('DB_DATABASE', 'laravel'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => env('DB_CHARSET', 'utf8'),
            'prefix' => '',
            'prefix_indexes' => true,
            'search_path' => env('DB_SCHEMA', 'public'),
            'sslmode' => 'prefer',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Migration Repository Table
    |--------------------------------------------------------------------------
    |
    | This table keeps track of all the migrations that have already run for
    | your application. Using this information, we can determine which of
    | the migrations on disk haven't actually been run on the database.
    |
    */

    'migrations' => [
        'table' => 'migrations',
        'update_date_on_publish' => true,
    ],

    /*
    |--------------------------------------------------------------------------
    | Redis Databases
    |--------------------------------------------------------------------------
    |
    | Redis is an open source, fast, and advanced key-value store that also
    | provides a richer body of commands than a typical key-value system
    | such as Memcached. You may define your connection settings here.
    |
    */

    'redis' => [

        'client' => env('REDIS_CLIENT', 'phpredis'),

        'options' => [
            'cluster' => env('REDIS_CLUSTER', 'redis'),
            'prefix' => env('REDIS_PREFIX', Str::slug(env('APP_NAME', 'laravel'), '_').'_database_'),
            'persistent' => env('REDIS_PERSISTENT', false),
        ],

        'default' => [
            'url' => env('REDIS_URL'),
            'host' => env('REDIS_HOST', '127.0.0.1'),
            'username' => env('REDIS_USERNAME'),
            'password' => env('REDIS_PASSWORD'),
            'port' => env('REDIS_PORT', '6379'),
            'database' => env('REDIS_DB', '0'),
        ],

        'cache' => [
            'url' => env('REDIS_URL'),
            'host' => env('REDIS_HOST', '127.0.0.1'),
            'username' => env('REDIS_USERNAME'),
            'password' => env('REDIS_PASSWORD'),
            'port' => env('REDIS_PORT', '6379'),
            'database' => env('REDIS_CACHE_DB', '1'),
        ],

    ],

];
