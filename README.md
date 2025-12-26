# TRAX LRS 3.1 - Starter Edition

## About TRAX LRS

TRAX LRS is an xAPI conformant **Learning Record Store (LRS)** built with the excellent Laravel framework.
It’s not a Learning Analytics solution. It’s a pure LRS. It focuses on storing and managing learning data, and that’s it.
We want to keep it simple and clean, and give you the freedom to build what you want around it.

For further information, visit http://traxlrs.com.


## Server Requirements

### Apache 2.4

-   mod_rewrite

### PHP

PHP **8.2**, **8.3**, **8.4** or **8.5** is required with the following **extensions**:

-   Ctype
-   cURL
-   DOM
-   Fileinfo
-   Filter
-   Hash
-   Mbstring
-   OpenSSL
-   PCRE
-   PDO (MySQL / PgSQL)
-   Session
-   Tokenizer
-   XML

Be sure to enable these extensions **both for PHP Apache and PHP CLI**, which may have to different INI files!

Finally, be sure to allocate enough memory to PHP, the default value (`128M`) being too small. Once again, change this setting both for PHP Apache and PHP CLI.

```
memory_limit = 1024M
```

### Database

- MySQL 8.0 to 9.5
- PostgreSQL 13 to 17 (18 not supported yet)

### Utilities

-   Git
-   Composer 2.2.0


## Upgrade from 3.0.x

This release requires a fresh install of the application.

You can copy the `.env` file from the 3.0.x release.

The database is unchanged. 
Don't run the `php artisan database:install` command if you want to keep your data.


## Installation

### First Steps

Assuming that you want to install TRAX LRS in a folder named **trax3**:

```shell
git clone https://github.com/trax-project/trax3-starter-lrs.git trax3
cd trax3
composer install
```

### File Permissions

The folders `storage` and `bootstrap/cache` must be writable both by the web server and the console user.
Assuming that the ownership has been properly set, you should be able to assign a `0775` permission
to the folders and subfolders and a `644` permission to the files.

Check this post for further details: https://laracasts.com/discuss/channels/laravel/proper-folder-permissions

If you are not sure how to configure this, you can use the following commands **FOR TESTING PURPOSE ONLY**.

```
chmod -R 777 bootstrap/cache storage
```

### Web Server

For security reasons, only the `public` folder should be accessible thru the web server.
So you must create a virtual host and configure the document root to `trax3/public`.

### Configuration file

At the root of the application folder, make a copy of the `.env.example` file,
rename it `.env` and set the public URL of your TRAX LRS application.
For example:

```ini
APP_URL=http://trax3.test
```

Then, run the following command:

```
php artisan key:generate
```

### Database

First, create an empty database with the `utf8mb4_unicode_ci` encoding.

Then, configure the database in the `.env` file.

_MySQL example:_

```ini
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=trax3
DB_USERNAME=root
DB_PASSWORD=
```

_PostgreSQL example:_

```ini
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=trax3
DB_USERNAME=postgres
DB_PASSWORD=aaaaaa
```

Finally, run the following command:

```
php artisan database:install
```

### Admin Account

The admin account has the default following credentials:

-   Email: `admin@traxlrs.com`
-   Password: `aaaaaaaa`

You can define your own credentials in the `.env` file with the `ADMIN_EMAIL` and `ADMIN_PASSWORD` environment variables.


### xAPI endpoint

Assuming that TRAX LRS is hosted at `http://trax3.test`, the xAPI endpoint is `http://trax3.test/trax/api/gateway/clients/default/stores/default/xapi`.

The default Basic HTTP credentials are:

-   Username: `traxlrs`
-   Password: `aaaaaaaa`

You can define your own credentials in the `.env` file with the `DEFAULT_ENDPOINT_USERNAME` and `DEFAULT_ENDPOINT_PASSWORD` environment variables.


## Production deploy

In the `.env` file, you should have the following settings:

```ini
APP_ENV=production
APP_DEBUG=false
```

You should cache the application config with:

```shell
php artisan config:cache
```

If you need to remove the config cache:

```shell
php artisan config:clear
```


## Known issues

### SQLSTATE[42000]: Syntax error or access violation: 1071

If you get this error during the `php artisan database:install` command, check your version of MySQL.

### 404 error on the main page

TRAX LRS has a `/public/.htaccess` file with some Apache directives.
When these directives are ignored by Apache, this leads to a 404 error.
In this case, check the `httpd.conf` file of Apache and try to set the following options:

```xml
<Directory "path-to-traxlrs/public">
    Require all granted
    Allowoverride All
</Directory>
```
