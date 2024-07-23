# Foodie Site

<i style="text-align:center">

[![Deploy static content to Pages](https://github.com/raiyanu/foodie-site/actions/workflows/static.yml/badge.svg)](https://github.com/raiyanu/foodie-site/actions/workflows/static.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/681f51ee-caef-4e40-adec-360c2ba1eb71/deploy-status)](https://app.netlify.com/sites/big-food/deploys)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

</i>

Foodie Site is a web application designed to help restaurant and cafe owners digitize their menus. By using Sanity.io as a CMS, owners can easily update their menu items without the need for constant reprinting. Customers can access the menu by scanning a QR code, making it a convenient and eco-friendly solution.

## Live Site

You can view the live site at: [https://big-food.netlify.app/](https://big-food.netlify.app/)

## Features

- Digital menu accessible via QR code
- Easy menu management using Sanity.io CMS
- Beautifully categorized product tiles using Masonry.js
- Responsive design for various devices

## Repository Structure

The repository contains two main branches:

- `main`: For stable releases

- `beta`: For testing and new features

## Project Structure

```
├── about.html
├── assets
│   └── bg-1.jpg
├── board.excalidraw
├── data.json
├── dummyContent.md
├── faq.html
├── favicon.ico
├── foodie-site (Sanity.io CMS files)
│   ├── package.json
│   ├── README.md
│   ├── sanity.cli.js
│   ├── sanity.config.js
│   ├── schemaTypes
│   │   ├── author.js
│   │   ├── blogPost.js
│   │   ├── detail.js
│   │   ├── index.js
│   │   ├── productCategory.js
│   │   ├── product.js
│   │   └── variant.js
│   ├── static
│   └── yarn.lock
├── help.html
├── index.html
├── js
│   ├── cms.js
│   ├── content-loader.js
│   ├── fetchProduct.js
│   ├── main.js
│   ├── masonry-init.js
│   ├── masonry.js
│   ├── qrcode.min-init.js
│   ├── qrcode.min.js
│   └── temp.js
├── staticIndex.html
└── styles
    ├── bottom.css
    ├── menu.css
    └── style.css
```

## Getting Started

1. Clone the repository
2. Navigate to the `foodie-site` directory
3. Install dependencies with `yarn install` or `npm install`
4. Set up your Sanity.io project and configure the `sanity.config.js` file
5. Run the development server

## Technologies Used

- HTML/CSS/JavaScript
- Sanity.io for CMS
- Masonry.js for grid layout
- QR Code generation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

# Foodie Site

## TODO

Current open tasks and improvements:

- [ ] Rectify Pages UI

  - [ ] Fix typography issues in Help page
  - [ ] Fix typography issues in About page
  - [ ] Fix typography issues in FAQ page

- [ ] Refactor CMS in Sanity.io

  - [ ] Add additional field for Help page specific content
  - [ ] Separate content for FAQ and Help pages

- [ ] Improve site performance

  - [ ] Implement Webpack bundling for faster loading times

- [ ] Redesign navigation section

## License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

### Summary of the license terms:

1. **Source Code**: You must disclose your source code when you distribute or run the software publicly over a network.

2. **Modifications**: If you modify the code, you must release these modifications under the same license.

3. **Commercial Use**: Commercial use is allowed, but you must disclose the source code and provide attribution.

4. **Attribution**: You must give appropriate credit to the original author (Raiyan) and indicate any changes made to the software.

5. **Contributions**: Contributions to this project are welcome and will be subject to the same license terms.

For the full license text, please see the [LICENSE](LICENSE) file in the project repository or visit [GNU AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html).

## Contact

For any queries, suggestions, or commercial inquiries, please contact me @ : raiyan.c.me@gmail.com
