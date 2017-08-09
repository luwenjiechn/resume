// const fs = require('fs')
// let arr = fs.readdirSync(__dirname)
// arr.map((value, index) => {
//     let moduleName = value.split('.')[0]
//     switch (moduleName) {
//         case 'index':
//             break
//         default:
//             export { moduleName } from `./${moduleName}`
//     }
// })

export {default as Block } from './Block'
export {default as Head} from './Head'
export {default as Body} from './Body'
export {default as Progress} from './Progress'
export {default as Desc} from './Desc'
export {default as IM} from './IM'