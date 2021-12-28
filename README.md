# GPEA MW Petition template

The MW petition template is built on React.js and Chakraui library.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## MW Petition Design Migration Schema

The project will pull the basic campaign data based on the `MARKET` and `PROJECT_NAME` in the `env` from the schema endpoint.

- [Petition theme data schema](https://docs.google.com/spreadsheets/d/1_NziZSM1zHoQOzo_BgPS2apl7TLCqRRbO0ev1ykkl08/edit#gid=0)

## Quick start

1. Run `npm run install` to install the dependencies.
2. Run `npm run dev` to start the localhost.
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Steps to follow: Cloning a petition page

```text
src/
└── apps/
    ├── hk/
    │   ├── project1/
    │   └── project2/
    └── tw/
        ├── project1/
        └── project2/
```

1. Go to `apps` folder and you will see the project folder groupped by NRO.
2. Duplicate the entire project folder (e.g `/apps/hk/arctic`) and rename it to a new project name.
3. Modify the Banner / Thankyou content, the content will be used on the Hero landing section (first screen area).
4. Modify the `Content.js` and `Thankyou.js`, the content will be used on the signup form and thankyou form.
5. Modify the `SEO.js`, the content will become the page meta data (sharing content and image etc).
6. Modify the local `.env.development` and `.env.production` files, the content is used to configure the development / build evironment.
7. Try to run the `npm run dev` script to check if the app can be boosted successfully.

## To deploy the page onto the ftp server

1. Run `npm run build` to check if the react app can be built normally. (Optional if you have done it before)
2. Run `npm run build-export` in order to build the app and export the static files.
3. Now you should be able to find the output static files in the `out` folder.
4. (Optional but preferred deploy option) Assuming you have configured the prerequisite of the ftp credientials. You can run `npm run deploy` to deploy the output to the destinated ftp server programmatically.

## Pretty-quick

We use Prettier with [pretty-quick](https://github.com/azz/pretty-quick) as the pre-commit tool. This can re-format your files that are marked as “staged” via git add before you commit.

[Installation guide](https://prettier.io/docs/en/precommit.html)

```node
npx husky-init
npm install --save-dev pretty-quick
npx husky set .husky/pre-commit "npx pretty-quick --staged"
```

## How to utilize the .env files

.env file will store the environment variables and its mainly used for the build script and node.js script. For this project, we also use it to store the project identity so we can fetch the project theme data from the [project schema spreadsheet](https://docs.google.com/spreadsheets/d/1_NziZSM1zHoQOzo_BgPS2apl7TLCqRRbO0ev1ykkl08/edit#gid=0).
There is the priority of the .env files and the machine will run the app based on the mode to get the corespinding env variables.

- `.env`: The default env file. We keep the value empty so it can be shared across the users and will not cause conflicts
- `.env.development`: The env file designed for development mode. You only need to modify the project local path and project name in the file.
- `.env.production`: The env file for production mode. You will need to provide all project configs PLUS the path configs and FTP configs in the file.

## Folder structure

apps

- It contains the project folders split by market and standalone project.

common

- It contains the shared resources such as scss, json, images and functions.

components

- It contains the reusable components, such as header, footer and form.

containers

- It contains the shared parent wrappers and layout.

out

- It contains the output static files, deploy script will upload the outputs.

public

- It contains static files such as index.html, javascript library files, images, and other asset.

store

- It contains the redux files like actions, reducers & actionTypes.

pages

- It contains the component used in next.js to generate routing and pages.

## Learn More about Next.js

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Learn More about Chakra-ui

- [Chakra UI Documentation](https://chakra-ui.com/)

## How we maintain the styles

Chakraui is heavily rely on style props to manage and override the component styles. Please check the available props in the doc.

Besides Chakraui component, I also suggest use styled-component to create pure component and to minimize the CSS issues.

## Useful documnetation and references

- [Chakraui Component style](https://chakra-ui.com/docs/theming/component-style)
- [Chakraui Style Props](https://chakra-ui.com/docs/features/style-props)
- [Chakraui Frontend Handbook](https://infinum.com/handbook/books/frontend/react/chakra-ui)
