# Maths for CS Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/d9a10574-0b7e-4785-85bf-96ded66c6201/deploy-status)](https://app.netlify.com/sites/mathsforcs/deploys)

A first-year course for computer science students at York St John University, covering number systems, modular arithmatic, algorithms, logic, set theory, and statistics.

This is the source code for [the module website](https://mathsforcs.netlify.app). It uses the [Jekyll Doc theme](https://github.com/aksakalli/jekyll-doc-theme) for [Jekyll](https://jekyllrb.com/).

Unless you want to fork this repository, you are probably looking for [the module website](https://mathsforcs.netlify.app).

## Running locally

You need Ruby and gem before starting, then:

```bash
# install bundler
gem install bundler

# clone the project
git clone https://github.com/aksakalli/jekyll-doc-theme.git
cd jekyll-doc-theme

# install dependencies
bundle install

# run jekyll with dependencies
bundle exec jekyll serve
```

## Docker

Alternatively, you can deploy it using the multi-stage [Dockerfile](Dockerfile)
that serves files from Nginx for better performance in production.

Build the image for your site's `JEKYLL_BASEURL`:

```
docker build --build-arg JEKYLL_BASEURL="/your-base/url" -t jekyll-doc-theme .
```

(or leave it empty for root: `JEKYLL_BASEURL=""`) and serve it:

```
docker run -p 8080:80 jekyll-doc-theme
```

## License

The content of this website, excluding the linked videos, is licensed under the [CC-BY-SA 4.0 International license](LICENSE.md).

Jekyll Doc theme is released under [the MIT license](LICENSE-Jekyll-Docs.md]).
