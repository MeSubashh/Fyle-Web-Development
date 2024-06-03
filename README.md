# Project Overview

This project demonstrates a simple multi-page website with interactive features. The initial page is `index.html` which leads to other pages based on user interaction.

## How It Works

### `index.html`

This is the main entry point of the website.

1. **Contact Us Button**:
    - When the "Contact Us" button is clicked, it navigates to the `contact.html` page.
    - `contact.html` contains a login form which collects data and sends it to [getform.io](https://getform.io).

2. **Further Page**:
    - After submitting the form in `contact.html`, `further.html` is loaded.

### `further.html`

This page includes interactive features such as hover effects and dynamic content changes.

1. **Hover Effects**:
    - The "Read More" button redirects to the [fyle.com](https://fylehq.com) website.

2. **Dynamic Image Changes**:
    - Images change when the text boxes are hovered over, providing a dynamic visual experience.

## File Structure

- `index.html`: Main entry point of the website.
- `contact.html`: Contains the login form which sends data to [getform.io](https://getform.io).
- `further.html`: Contains interactive features such as hover effects and dynamic image changes.
- `styles.css`: Core stylesheet that includes styles for all pages.
- `Further.css`: Additional stylesheet (currently not in use).

## How to Run

1. Clone the repository:
    ```sh
    git clone https://github.com/MeSubashh/Fyle-Web-Development.git
    ```

2. Navigate to the project directory:
    ```sh
    cd Fyle-Web-Development
    ```

3. Open `index.html` in a web browser to start using the website.

## Deployment

The project can be hosted on platforms like Vercel, Netlify, Cloudflare Pages, etc. Make sure to configure the file paths correctly for the assets and stylesheets when deploying.

## Troubleshooting

If you encounter issues with the CSS or JavaScript files not loading correctly, ensure that the file paths are correct and that the files are included in the project directory. For Vercel or other hosting platforms, check the deployment settings and logs for any errors.

---

Feel free to reach out if you have any questions or need further assistance!
