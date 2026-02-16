# RIT ArtistConnect

## Site link
https://ritartists.cad.rit.edu/

## What is this project for?

This website is intended as a resource to connect interested parties in the RIT
community with artists in their desired field. There are very few points of contact for
non-artists to connect with artists on campus to create graphics/assets for their
personal and academic projects. In addition, several artists in our club have
expressed interest in opening commissions or wanting to gain experience on
creative projects for portfolio building purposes. This website would seek to bridge
the gap between the two, as well as promoting Drawing Club on campus.

### Userbase

The database will be available to members of the RIT community, primarily catering
to current students, staff, and alumni with active RIT accounts. Anyone with an RIT
email address will be able to create an account, but in order to have an artist listing
visible, they must submit a form that will be available on the website.

## Development Information

### Requirements

- PHP 8.3
- Composer
- Node.js 22

### Architecture

The site is written with the following tech stack:
- Backend: [Laravel](https://laravel.com)
  - Satisfies requirements imposed on us by CAD Group Web Hosting
- Middleware: [InertiaJS](https://inertiajs.com)
  - Decreases friction in implementing frontend to backend
    communications, and is tightly integrated with Laravel and React
- Frontend: [React](https://react.dev)
  - Is the [most popular JavaScript Framework](https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/)
- UI: [Mantine](https://mantine.dev)
  - Can be easily customized to use custom colors and typograph

### Initial Setup

Once you have the requirements installed, do the following:
- Move to the `src` directory
- Copy `.env.example` to `.env` and modify the values to match your desired configuration
- `composer install` to install backend dependencies
- `npm install` to install frontend dependencies
- `php artisan key:generate` to generate an App Key
- `php artisan migrate` to update the database to match current migration`

### Installation Issues
- Database Errors:
  - In `.env`, change `DB_CONNECTION` to `sqlite` and `DB_DATABASE=/absolute/path/to/artistconnect.sqlite` where `/absolute/path/to/` is the absolute path to the directory where you want to store the database file.

### Running in Development

- From the `src` directory, run `composer run dev`

### Building for Production

- From the `src` directory, run `npm run build`
- For new deployments, configure your webserver to serve the `public` directory of the repository

### Contributors

- [Seth Teichman](https://github.com/smt5541)
