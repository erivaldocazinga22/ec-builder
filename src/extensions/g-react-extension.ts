import { GluegunToolbox } from 'gluegun'
import { IGenerateReact } from '../core/models/generate'

export default (toolbox: GluegunToolbox) => {
  toolbox.generateReact = async ({ answers, extension }: IGenerateReact) => {
    const { template, filesystem } = toolbox
    const dirs = [
      'src/app/assets',
      'src/app/components',
      'src/core/hooks',
      'src/core/models',
      'src/core/static',
      'public',
    ]
    dirs.forEach((dir) => {
      filesystem.dir(`${answers.projectName}/${dir}`)
    })

    await template.generate({
      template: 'react/package.js.ejs',
      target: `${answers.projectName}/package.json`,
      props: {
        name: answers.projectName,
      },
    })

    await template.generate({
      template: 'react/index.js.ejs',
      target: `${answers.projectName}/index.html`,
      props: {
        extension: extension.toUpperCase(),
      },
    })
    await template.generate({
      template: 'react/vite-config.js.ejs',
      target: `${answers.projectName}/vite.config.${extension}`,
    })

    await template.generate({
      template: 'react/app/main-app.js.ejs',
      target: `${answers.projectName}/src/main.${extension}x`,
    })

    await template.generate({
      template: 'react/app/router-app.js.ejs',
      target: `${answers.projectName}/src/router.${extension}x`,
    })

    await template.generate({
      template: 'react/app/layout-app.js.ejs',
      target: `${answers.projectName}/src/app/pages/private/RootLayout.${extension}x`,
      props: {
        layoutName: 'RootLayout',
      },
    })

    await template.generate({
      template: 'react/app/layout-app.js.ejs',
      target: `${answers.projectName}/src/app/pages/PublicLayout.${extension}x`,
      props: {
        layoutName: 'PublicLayout',
      },
    })

    await template.generate({
      template: 'react/app/pages-components.js.ejs',
      target: `${answers.projectName}/src/app/pages/SignIn.${extension}x`,
      props: {
        pageName: 'SignIn',
      },
    })

    await template.generate({
      template: 'react/app/pages-components.js.ejs',
      target: `${answers.projectName}/src/app/pages/private/Home.${extension}x`,
      props: {
        pageName: 'Home',
      },
    })

    await template.generate({
      template: 'react/git-ignore.js.ejs',
      target: `${answers.projectName}/.gitignore`,
    })

    await template.generate({
      template: 'react/dot-env-local.js.ejs',
      target: `${answers.projectName}/.env.local`,
    })

    await template.generate({
      template: 'react/dot-env-local.js.ejs',
      target: `${answers.projectName}/.env-local-exemple`,
    })

    await template.generate({
      template: 'react/core/env-config.js.ejs',
      target: `${answers.projectName}/src/core/lib/env.config.${extension}`,
    })

    await template.generate({
      template: 'react/core/axios-config.js.ejs',
      target: `${answers.projectName}/src/core/lib/axios.config.${extension}`,
      props: {
        nameToken: answers.projectName.toLowerCase().replace(/[^a-z0-9]/g, ''),
      },
    })

    await template.generate({
      template: 'react/core/query-client-config.js.ejs',
      target: `${answers.projectName}/src/core/lib/queryClient.${extension}`,
    })

    await template.generate({
      template: 'react/app/global-css.js.ejs',
      target: `${answers.projectName}/src/global.css`,
    })
  }
}
