import { GluegunToolbox } from 'gluegun'
import { questions } from '../core/statics/questions'
import { IAnswers } from '../core/models/generate'

module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      print: { info, error },
      prompt,
      parameters: { options },
      generateNode,
      generateReact,
    } = toolbox

    try {
      const answers: IAnswers = await prompt.ask(questions)
      const isNode = answers.framework === 'Node'
      const isTypeScript = answers.language === 'TypeScript'
      const extension = isTypeScript ? 'ts' : 'js'

      if (isNode) {
        generateNode({
          answers: {
            projectName: answers.projectName.toLowerCase(),
            language: answers.language,
          },
          extension,
          options: {
            database: options?.database ?? 'slite',
            server: options?.server ?? 'express',
            typeOrm:
              options?.typeOrm ??
              (answers.language === 'TypeScript' ? 'prisma' : 'sequelize'),
          },
        })
      } else {
        generateReact({
          answers: {
            projectName: answers.projectName.toLowerCase(),
            language: answers.language,
          },
          extension,
          options: { styled: options?.styled ?? 'mudule' },
        })
      }
      info('Generated successfully')
    } catch (err) {
      error('Failed to generate files!')
    }
  },
}
