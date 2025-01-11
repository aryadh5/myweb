# About

My blog and portfolio website built using Next.js, Contentful and Tailwind CSS. I'm working on moving all of the personalized content to Contentful so this can be reused by anyone by substituting your own Contentful environment and data. [See it live](https://www.willsaada.com/).

## :zap: Running Locally

You'll need to setup a Contentful Envrionment using the right content types to be able to run this website. I'm working on a simple guide to help setup an environment and import my content types into your application.

To run the application add an API key and URL for Contentful. When testing and in QA/DEV environments you should use the [preview environment](https://www.contentful.com/developers/docs/references/content-preview-api/). For production environments you should use the [delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/).

```local
CONTENTFUL_URL=<Contentful URL example: https://preview.contentful.com/spaces/<spacename>/environments/<environment>>

CONTENTFUL_API_KEY=<Contentful API KEY>
```

Once you have that setup you'll need to run the following commands

```bash
npm install
npm run dev
```
