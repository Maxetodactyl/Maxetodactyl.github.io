
# Maxetodactyl's Wiki

This is the repository for Maxetodactyl's Wiki. The project is a React-based site that can be deployed to GitHub Pages.

## Setup Instructions

Follow these steps to set up the project locally and deploy it to GitHub Pages:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Maxetodactyl/Maxetodactyl.github.io.git
```

### 2. Navigate into the Project Directory

Change into the project directory:

```bash
cd Maxetodactyl.github.io
```

### 3. Install Dependencies

Install the required dependencies:

```bash
npm install
```

### 4. Test Locally

To build the project and test it locally, run:

```bash
npm run build
```

This will generate a `build/` folder containing the optimized production files.

### 5. Install `gh-pages` (if not installed)

If the `gh-pages` package is not already installed, install it by running:

```bash
npm install --save-dev gh-pages
```

### 6. Deploy to GitHub Pages

Deploy the project to GitHub Pages by running:

```bash
npm run deploy
```

This will push the `build` folder to the `build` branch of the repository and enable GitHub Pages.

## Notes

- The site will be available at `https://Maxetodactyl.github.io`.

---

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

