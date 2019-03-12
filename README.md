# personal-website

<h4 align="center">
  A minimal, lightweight and mobile-first blog that uses <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a>.
</h4>

## Quick Start

#### Install the Gatsby CLI

The Gatsby CLI is available via npm and should be installed globally to use it locally.

```sh
# Install the Gatsby CLI globally
npm install -g gatsby-cli
```

#### Start Developing

Navigate into your new site’s directory and start it up.

```sh
cd personal-website
gatsby develop
```

#### Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

Open the `personal-website` directory in your code editor of choice and edit `src/templates/index-template.js`. Save your changes and the browser will update in real time!

## Deploy with Netlify

When you make changes to your site they are automatically reflected locally, but what about on the Netlify hosted version? Every time you commit and push changes to GitHub, it triggers a new build on Netlify, and as soon as the build finishes, your changes are also live on the internet.

## CMS Access

Netlify CMS can be used to add new blog posts & edit the content pages. The CMS can be accessed here https://affectionate-jang-b43f86.netlify.com/admin. Any changes that are published will automatically trigger a build & once that build has completed the updated content will be visible on the live site.

#### Access Locally
To test the CMS locally, you'll need run a production build of the site:
```
$ gatsby build
$ gatsby serve
```
