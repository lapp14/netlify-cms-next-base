# Netlify CMS NextJS Base

Base headless CMS site using Git, Netlify CMS and NextJS

[Live Demo](https://netlify-cms-next-base.netlify.app/)

## TODO
- Look up `rem` spacing and make a good layout
- Implement spacing and line heights for different markup components

## Development

Run `npm run dev` to start development server

## Setup

- Create new repo on GitHub
- Log into Netlify and select New Site from Git
- Use the following build settings
  - Build command: `npm run export`
  - Publish directory: `out`
- Go to `Build & Deploy > Environment` and add env variable `NETLIFY_NEXT_PLUGIN_SKIP = true` ([more info...](https://stackoverflow.com/questions/72724257/i-cannot-deploy-next-js-to-netlify-deploy-failed-because-of-a-mistake-in-netli))
- Check the branch name in CMS `config.yml` to make sure it matches repo

### Enable Identity and Git Gateway
From your site dashboard on Netlify:

1. Go to `Site Settings > Identity`, and select Enable Identity service.
1. If you'd like to allow one-click login with services like Google and GitHub, check the boxes next to the services you'd like to use, under External providers.
1. Scroll down to Services > Git Gateway, and click Enable Git Gateway. This authenticates with your Git host and generates an API access token. In this case, we're leaving the Roles field blank, which means any logged in user may access the CMS. For information on changing this, check the Netlify Identity documentation.
1. Go to `/admin` and sign up. Check spam folder for email, and confirm
1. Once able to log in, under Registration preferences, select Invite only.

## Configuration

- Set your business profile up in `profile.js`

## Links

https://www.netlifycms.org/docs/nextjs/
https://www.smashingmagazine.com/2021/06/creating-multi-author-blog-nextjs/

Font sizes in design: https://www.editorx.com/shaping-design/article/font-size