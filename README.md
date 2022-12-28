# Netlify CMS NextJS Base

Base headless CMS site using Git, Netlify CMS and NextJS

[Live Demo](https://netlify-cms-next-base.netlify.app/)

## Todo list...
- telephone number optional
- mobile footer spacing breaks width

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
- Optionally, you can enable [Image Optimization](https://nextjs.org/docs/api-reference/next/image#loader-configuration) using a cloud provider
  - Optimization has been disabled by defauly in `next.config.js`, as it breaks the Netlify build without further config

## Links

- [Netlify CMS Next docs](https://www.netlifycms.org/docs/nextjs/)
- [Creating a Multi-author blog with NextJS](https://www.smashingmagazine.com/2021/06/creating-multi-author-blog-nextjs/)

### Web Typography and design
- [Everything You Need to Know About Designing for Web Typography](https://medium.com/swlh/everything-you-need-to-know-about-designing-for-web-typography-69cec6ca8230)
- [Calculatow for `px` and `rem`](https://type-scale.com/)
- [Font size guidelines for responsive websites](https://www.editorx.com/shaping-design/article/font-size)