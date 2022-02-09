# Lifeanalytics Laravel-Vue Website 

## About Website

Frontend - Vue.JS

Backend - Laravel

## Installation by Script File

-Run start.sh file.
-To stop installation, press ctrl+c.

## Installation

- `composer create-project --prefer-dist cretueusebiu/lifeanalytics_laravel_vue`
- Edit `.env` and set your database connection details
- (When installed via git clone or download, run `php artisan key:generate` and `php artisan jwt:secret`)
- `php artisan migrate`
- `npm install`

## Usage

#### Development

```bash
npm run dev
```

#### Production

```bash
npm run build
```

## Testing

```bash
# Run unit and feature tests
vendor/bin/phpunit

# Run Dusk browser tests
php artisan dusk
```

