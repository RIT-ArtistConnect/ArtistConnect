# RIT ArtistConnect

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

While the instructions below are intended for Windows, many of the steps are the same on an Ubuntu Linux system.

1. Install WSL (open PowerShell as an Administrator and run `wsl --install`)
2. Reboot your system for changes to take effect
3. Install Ubuntu from the Windows Store
4. Open Ubuntu
5. Generate an SSH Key for Ubuntu to connect to GitHub (run `ssh-keygen`, follow the prompts)
6. Run `cat ~/.ssh/id_ed25519.pub` if you didn't change the path in `ssh-keygen`, otherwise enter that path
7. Copy the output of the previous command and add it to your [GitHub SSH Keys](https://github.com/settings/ssh/new)
8. In the terminal, run `cd /mnt/c` - this navigates you to the contents of your Windows `C:` drive - from here, move to the folder you'd like to store the project folder in and run `git clone git@github.com:RIT-ArtistConnect/ArtistConnect.git` - if prompted about host authenticity, type `yes`
9. `cd ArtistConnect`
10. `git config core.filemode false` because storing the repository under the Windows portion of your filesystem loses parts of the Linux file permissions and confuses Git if this is not set
11. Update your package manager index: `sudo apt update`
12. Install the project requirements available from the package manager: `sudo apt install php8.3 composer mariadb-server`
13. Install nvm (Node Version Manager): `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash && source ~/.bashrc`
14. Install Node.js: `nvm install 22`
15. Install required PHP Modules: `sudo apt install php-xml php-mysqlnd`
16. `composer update && composer install` to install PHP libraries
17. `npm install` to install Node.js libraries
18. `sudo mysql` to open a MySQL Shell
19. `CREATE DATABASE artistconnect;` to create an empty database for the application
20. `CREATE USER 'artistconnect'@'localhost' IDENTIFIED BY 'artistconnect';` to create a MySQL user for the application
21. `GRANT ALL PRIVILEGES ON artistconnect.* to 'artistconnect'@'localhost';` to grant the application MySQL user full access to the application database
22. `FLUSH PRIVILEGES;` to apply access changes
23. `\q` to exit the MySQL Shell
24. On Windows, download [Java](https://www.java.com/en/download/) and [FakeSMTP](https://nilhcem.github.io/FakeSMTP/downloads/fakeSMTP-latest.zip)
25. Unzip FakeSMTP and move the .jar file to a location you'll remember - you'll need this running for email functions (registration, password reset, etc.) in the app to work without raising errors
26. In a Windows terminal in the location with the fakeSMTP-2.0.jar file, run `java -jar fakeSMTP-2.0.jar` - this will open a window labelled "Fake SMTP Server"
27. In the FakeSMTP window, change Listening port to `2525` and click the "Start server" button - if windows prompts about network access, click "Allow"
28. Back in the `ArtistConnect` folder in Ubuntu, `cp .env.example .env` to copy the default environment configuration - you'll need to make some changes to this file:
    - `DB_USERNAME=artistconnect`
    - `DB_PASSWORD=artistconnect`
    - `MAIL_MAILER=smtp`
    - To determine the value for `MAIL_HOST`, run `ipconfig` in a Windows terminal and find your current IPv4 address
29. `php artisan key:generate` to generate an App Key
30. `php artisan migrate` to run database migrations
31. `composer run dev` to run ArtistConnect in development
32. In your web browser, visit `localhost:8000` - this will load the ArtistConnect homepage - register for an account with a `rit.edu` email address (you will not receive any real emails when running in development, as the site is sending emails to FakeSMTP)
33. Check your FakeSMTP window - there should be an email with the subject "Verify Email Address" - to view this email and verify your account, you have two options:
    1. If you are already signed in to an email desktop application, you can double-click the row in the FakeSMTP table
    2. If you aren't signed in and don't want to sign in to an email program on your computer, navigate to the folder with your FakeSMTP JAR file - there should now be a folder called `received-emails` - in this folder, there should be a `.eml` file - upload this file to [EML Reader](https://www.emlreader.com) to view the content
34. Click the "Verify Email Address" button in the email
35. `sudo mysql` to open a MySQL Shell
36. `USE artistconnect` to tell MySQL to operate on the `artistconnect` database
37. `UPDATE users SET is_admin = 1;` to make all users in the database (there should only be one, at this point) site admins
38. `\q` to exit the MySQL Shell
39. Reload your ArtistConnect webpage, you should now see an "Admin" link in the navbar
40. Congratulations! Your local instance of ArtistConnect has been set up for further development!

### Running in Development

- From the `src` directory, run `composer run dev`

### Building for Production

- From the `src` directory, run `npm run build`
- For new deployments, configure your webserver to serve the `public` directory of the repository

### Contributors

- [Seth Teichman](https://github.com/smt5541)
