export type IAnswers = {
  projectName: string
  framework: 'Node' | 'React'
  language: 'JavaScript' | 'TypeScript'
}

type GenerateDefault = {
  answers: {
    projectName: IAnswers['projectName']
    language: IAnswers['language']
  }
  extension: 'js' | 'ts'
}

export type IGenerateReact = GenerateDefault & {
  options: {
    styled: 'mudule' | 'tailwindcss' | 'styled-components'
  }
}

export type IGenerateNode = GenerateDefault & {
  options: {
    database: string
    server: string
    typeOrm: string
  }
}
