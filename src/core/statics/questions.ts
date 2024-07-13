export const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Qual é o nome do projeto?',
    validate: (value: string) => {
      // Verifica se o nome está vazio
      if (!value || value.trim() === '') {
        return 'O nome do projeto não pode estar vazio!'
      }

      // Verifica se o nome contém letras maiúsculas
      if (/[A-Z]/.test(value)) {
        return 'O nome do projeto não pode conter letras maiúsculas!'
      }

      // Verifica se o nome contém espaços
      if (/\s/.test(value)) {
        return 'O nome do projeto não pode conter espaços!'
      }

      // Verifica se o nome contém caracteres especiais não permitidos
      if (/[^a-z0-9_.]/.test(value)) {
        return 'O nome do projeto só pode conter letras minúsculas, números, "_" e "."!'
      }

      // Verifica se o nome começa com número ou caractere especial, exceto "."
      if (/^[^a-z.]/.test(value)) {
        return 'O nome do projeto não pode começar com número ou caractere especial, exceto "."!'
      }

      // Verifica se o nome é um único caractere e se é um "."
      if (value.length === 1 && value !== '.') {
        return 'O nome do projeto inválido!'
      }

      // Se todas as validações passarem, retorna true
      return true
    },
  },
  {
    type: 'select',
    name: 'framework',
    message: 'O projeto é em React ou Node?',
    choices: ['React', 'Node'],
  },
  {
    type: 'select',
    name: 'language',
    message: 'Qual é a linguagem base do projeto?',
    choices: ['JavaScript', 'TypeScript'],
  },
]
