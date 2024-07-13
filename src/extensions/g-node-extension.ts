import { GluegunToolbox } from 'gluegun'
import { IGenerateNode } from '../core/models/generate'

export default (toolbox: GluegunToolbox) => {
  toolbox.generateNode = async (props: IGenerateNode) => {
    //    const { answers, extension, options } = props
    toolbox.print.info({ props })
  }
}
