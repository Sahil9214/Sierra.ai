/* eslint-disable prettier/prettier */
import { font1, font2, font3, font4 } from '@/app/fonts'

export const fontVariables = `
  ${font1.variable} 
  ${font2.variable} 
  ${font3.variable} 
  ${font4.variable}
`

export const fontStyles = {
    regular: {
        className: font1.className,
        weight: '400',
        style: 'normal'
    },
    regularItalic: {
        className: font2.className,
        weight: '400',
        style: 'italic'
    },
    mediumItalic: {
        className: font3.className,
        weight: '500',
        style: 'italic'
    },
    medium: {
        className: font4.className,
        weight: '500',
        style: 'normal'
    }
}