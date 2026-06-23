# Mary Li — Portfolio

A dependency-free personal portfolio designed for GitHub Pages.

## Local preview

From this directory, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Push the files in this directory to a GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the publishing branch (usually `main`) and the `/ (root)` folder.
5. Save. GitHub will display the public URL after deployment completes.

All site links use relative paths, so the portfolio works both on a user site
and under a project subpath such as `username.github.io/repository/`.

## Updating the resume

Replace `assets/mary-li-resume.pdf` with the new PDF while keeping the filename
unchanged.
