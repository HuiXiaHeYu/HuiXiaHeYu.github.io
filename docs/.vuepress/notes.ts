import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const readNote = defineNoteConfig({
  dir: 'read',
  link: '/notes/read',
  sidebar: 'auto',
})
const languageNote = defineNoteConfig({
  dir: 'language',
  link: '/notes/language',
  sidebar: 'auto',
})
const toolsNote = defineNoteConfig({
  dir: 'tools',
  link: '/notes/tools',
  sidebar: 'auto',
})
const feameworkNote = defineNoteConfig({
  dir: 'framework',
  link: '/notes/framework',
  sidebar: 'auto',
})
const othersNote = defineNoteConfig({
  dir: 'others',
  link: '/notes/others',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/notes/',
  notes: [readNote, languageNote, toolsNote, feameworkNote, othersNote],
})
