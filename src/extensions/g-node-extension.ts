import { GluegunToolbox } from 'gluegun'
import { IGenerateNode } from '../core/models/generate'

export default (toolbox: GluegunToolbox) => {
  const { template, filesystem, print } = toolbox

  toolbox.generateNode = async (props: IGenerateNode) => {
    const { answers, extension, options } = props
    const dir = [
      { path: 'src/http/app/controllers', type_orm: true },
      { path: 'src/http/app/middlewares', type_orm: true },
      { path: 'src/http/core/utils', type_orm: true },
      { path: 'src/http/core/seeders', type_orm: 'sequelize' },
      { path: 'src/http/core/models', type_orm: 'sequelize' },
      { path: 'src/http/core/migrations', type_orm: 'sequelize' },
      { path: 'public/uploads', type_orm: true },
    ]

    dir.forEach((directory) => {
      if (
        !(
          directory.type_orm === 'sequelize' &&
          answers.language === 'TypeScript'
        )
      ) {
        filesystem.dir(`${answers.projectName}/${directory.path}`)
      }
    })

    const files = [
      {
        template: 'sqlite-database.js.ejs',
        path: `src/http/core/db/${answers.projectName}.db`,
        content: '',
      },
      {
        template: `router-${options.server}.js.ejs`,
        path: `src/http/app/routers/index.${extension}`,
        content: '',
      },
      {
        template: `server-${options.server}.js.ejs`,
        path: `src/http/Server.${extension}`,
        content: '',
      },
    ]

    for (const file of files) {
      if (
        !(options.database === 'sqlite' && file.template.includes('sqlite'))
      ) {
        await template.generate({
          template: `node/${file.template}`,
          target: `${answers.projectName}/${file.path}`,
          props: { name: answers.projectName },
        })
      }
    }

    await template.generate({
      template: 'node/package.js.ejs',
      target: `${answers.projectName}/package.json`,
      props: {
        name: answers.projectName,
        extension: extension,
        description: `EC Builder generate ${answers.projectName} API Node ${answers.language}`,
      },
    })

    if (answers.language === 'JavaScript') {
      await template.generate({
        template: 'node/.sequelizerc.js.ejs',
        target: `${answers.projectName}/.sequelizerc`,
      })
    }

    await template.generate({
      template: 'node/env-file.js.ejs',
      target: `${answers.projectName}/.env`,
      props: { name: answers.projectName, port: undefined },
    })

    const packagePath = `${answers.projectName}/package.json`

    if (!filesystem.exists(packagePath)) {
      print.error('package.json não encontrado no diretório atual.')
      return
    }

    const packageJson = filesystem.read(packagePath, 'json')

    const dependencies: Record<string, string> = {
      multer: '^1.4.5-lts.1',
      bcrypt: '^5.1.1',
      jsonwebtoken: '^9.0.2',
    }

    const devDependencies: Record<string, string> = {}

    if (answers.language === 'TypeScript') {
      devDependencies['typescript'] = '^4.0.0'
      dependencies['prisma'] = '^5.16.2'
      devDependencies['tsx'] = '^4.16.2'
      devDependencies['@types/node'] = '^14.0.0'
      devDependencies['@babel/preset-env'] = '^7.24.6'

      packageJson.scripts = {
        ...packageJson.scripts,
        ps: 'prisma studio',
      }
    } else {
      dependencies['sequelize'] = '^6.37.3'
      devDependencies['nodemon'] = '^3.1.2'
      devDependencies['sequelize-cli'] = '^6.6.2'
    }

    if (options.database) {
      if (options.database === 'mysql') {
        dependencies['mysql2'] = '^3.10.2'
      } else if (options.database === 'sqlite') {
        dependencies['sqlite3'] = '^5.0.0'
      }
    } else {
      dependencies['sqlite3'] = '^5.0.0'
    }

    if (options.server) {
      if (options.server === 'fastify') {
        dependencies['fastify'] = '^4.28.1'
        dependencies['@fastify/cors'] = '^9.0.1'
      } else if (options.server === 'express') {
        dependencies['express'] = '^4.19.2'
        dependencies['cors'] = '^2.8.5'
      }
    } else {
      dependencies['express'] = '^4.19.2'
      dependencies['cors'] = '^2.8.5'
    }

    packageJson.dependencies = {
      ...packageJson.dependencies,
      ...dependencies,
    }

    packageJson.devDependencies = {
      ...packageJson.devDependencies,
      ...devDependencies,
    }

    filesystem.write(packagePath, packageJson)

    print.info(`Dependências adicionadas ao package.json
    - Framework: ${options.server || 'Express'}
    - Linguagem: ${answers.language}`)
  }
}
