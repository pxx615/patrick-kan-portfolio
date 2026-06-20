import {
  SiApachekafka,
  SiCloudflare,
  SiCss,
  SiDotnet,
  SiExpress,
  SiGit,
  SiGithub,
  SiGoogle,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMeta,
  SiMysql,
  SiNodedotjs,
  SiNpm,
  SiPhp,
  SiReact,
  SiRedux,
  SiSpring,
  SiStripe,
  SiSymfony,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa'
import { createElement } from 'react'
import { TbApi } from 'react-icons/tb'
import { VscAzure } from 'react-icons/vsc'
import resiadaVideo from '../assets/resiada/resiada.mp4'
import resiadaHeader from '../assets/resiada/resiada-header.png'
import ewowdayVideo from '../assets/ewowday/ewowday.mp4'
import ewowdayHeader from '../assets/ewowday/ewowday-header.png'
import facelinkHeader from '../assets/facelink/facelink-header.jpg'
import facelinkVideo from '../assets/facelink/facelink-preview.mp4'
import chatbotHeader from '../assets/chatbot/chatbot-header.png'
import chatbotVideo from '../assets/chatbot/chatbot-preview.mp4'
import { content } from './en'


export const catImages = Object.entries(import.meta.glob('../assets/cat/*', { eager: true, import: 'default' }))
  .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
  .map(([, source]) => source)

export const getExperience = (content) => [
  {
    ...content.experience[0],
    tags: ['React', 'Node.js', 'REST APIs', 'SQL', 'Security'],
    mark: 'E',
    color: 'orange',
    projectName: 'EWOWDAY',
  },
  {
    ...content.experience[1],
    tags: ['ASP.NET', 'C#', 'JavaScript', 'SQL', 'xUnit'],
    mark: 'R',
    color: 'violet',
    projectName: 'Resiada',
  },
  {
    ...content.experience[2],
    tags: ['Software Development', 'Agile', 'Web Applications'],
    mark: 'T',
    color: 'blue',
  },
  {
    ...content.experience[3],
    tags: ['Mobile Development', 'Unreal Engine', 'UI/UX'],
    mark: 'MB',
    color: 'green',
    projectName: 'Matte Black Motion Capture',
  },
  {
    ...content.experience[4],
    tags: ['VR/AR', 'Software Development', 'Research'],
    mark: 'S',
    color: 'cyan',
    projectName: 'AI Navigation Assistant',
  },
  {
    ...content.experience[5],
    tags: ['IT Support', 'Systems', 'Troubleshooting'],
    mark: 'CRA',
    color: 'red',
  },
  {
    ...content.experience[6],
    tags: ['Front-end', 'HTML/CSS', 'JavaScript', 'IT Support'],
    mark: 'M',
    color: 'pink',
  },
  {
    ...content.experience[7],
    tags: ['System Development', 'Network Engineering'],
    mark: 'SC',
    color: 'education',
    type: 'education',
  },
]

export const getProjects = (content) => [
  {
    ...content.projects[0],
    tags: ['React', 'Node.js', 'SQL', 'REST APIs'],
    accent: 'orange',
    media: ewowdayVideo,
    headerImage: ewowdayHeader,
  },
  {
    ...content.projects[1],
    tags: ['ASP.NET', 'C#', 'JavaScript', 'xUnit'],
    accent: 'violet',
    media: resiadaVideo,
    headerImage: resiadaHeader,
  },
  {
    ...content.projects[2],
    tags: ['Mobile Development', 'Unreal Engine', 'UI/UX'],
    accent: 'green',
    media: facelinkVideo,
    headerImage: facelinkHeader,
  },
  {
    ...content.projects[3],
    tags: ['Browser Extension', 'AI Chatbot'],
    accent: 'cyan',
    media: chatbotVideo,
    headerImage: chatbotHeader,
  }
]

export const getSkillGroups = (content) => content.skillGroups

function CSharpIcon(props) {
  return createElement('svg', { viewBox: '0 0 100 100', ...props },
    createElement('polygon', { points: '50,3 92,27 92,73 50,97 8,73 8,27', fill: '#512bd4' }),
    createElement('text', { x: '50', y: '65', fill: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: '34', fontWeight: '800', textAnchor: 'middle' }, 'C#'),
  )
}

export const technologyShowcase = [
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Vue', icon: SiVuedotjs, color: '#42b883' },
  { name: 'Redux', icon: SiRedux, color: '#764abc' },
  { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS', icon: SiCss, color: '#1572b6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
  { name: 'Express', icon: SiExpress, color: '#f0f4f8' },
  { name: 'API', icon: TbApi, color: '#70b8ff' },
  { name: '.NET', icon: SiDotnet, color: '#a179dc' },
  { name: 'Spring', icon: SiSpring, color: '#6db33f' },
  { name: 'Symfony', icon: SiSymfony, color: '#f6f6f6' },
  { name: 'AWS', icon: FaAws, color: '#ff9900' },
  { name: 'Azure', icon: VscAzure, color: '#0078d4' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'Cloudflare', icon: SiCloudflare, color: '#f38020' },
  { name: 'Stripe', icon: SiStripe, color: '#635bff' },
  { name: 'Google', icon: SiGoogle, color: '#4285f4' },
  { name: 'Meta', icon: SiMeta, color: '#0668e1' },
  { name: 'Kafka', icon: SiApachekafka, color: '#e8eef9' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
  { name: 'GitHub', icon: SiGithub, color: '#f0f4f8' },
  { name: 'NPM', icon: SiNpm, color: '#cb3837' },
  { name: 'C#', icon: CSharpIcon, color: '#512bd4' },
  { name: 'PHP', icon: SiPhp, color: '#777bb4' },
  { name: 'Java', icon: FaJava, color: '#5382a1' },
]

export const technologyRows = [
  technologyShowcase.filter((_, index) => index % 2 === 0),
  technologyShowcase.filter((_, index) => index % 2 !== 0),
]

export const technologySkillAliases = {
  AWS: ['AWS', 'EC2', 'SSL/TLS', 'RDS', 'S3'],
  'C#': ['C#', 'xUnit'],
  MySQL: ['MySQL', 'SQL'],
  HTML5: 'HTML',
  '.NET': 'ASP.NET',
  Azure: 'Microsoft Azure',
  Kafka: 'Apache Kafka',
  Spring: 'Spring Boot',
  Express: 'Express.js',
  API: 'RESTful APIs',
  GitHub: ['GitHub', 'GitHub Copilot'],
  Stripe: 'Stripe Integration',
  Google: 'OAuth (Google Login)',
  Meta: 'Meta/Facebook API',
}

export const projectThemes = {
  orange: {
    topPrimary: 'rgba(244, 135, 69, .5)',
    topSecondary: 'rgba(184, 80, 36, .28)',
    cursorPrimary: 'rgba(244, 135, 69, .42)',
    cursorSecondary: 'rgba(244, 135, 69, .2)',
    highlight: '#f48745',
    highlightSoft: 'rgba(244, 135, 69, .22)',
  },
  violet: {
    topPrimary: 'rgba(190, 163, 219, .56)',
    topSecondary: 'rgba(120, 95, 157, .31)',
    cursorPrimary: 'rgba(125, 114, 255, .42)',
    cursorSecondary: 'rgba(157, 140, 255, .2)',
    highlight: '#9d8cff',
    highlightSoft: 'rgba(157, 140, 255, .22)',
  },
  pink: {
    topPrimary: 'rgba(241, 142, 203, .48)',
    topSecondary: 'rgba(168, 61, 134, .27)',
    cursorPrimary: 'rgba(241, 142, 203, .42)',
    cursorSecondary: 'rgba(241, 142, 203, .2)',
    highlight: '#f18ecb',
    highlightSoft: 'rgba(241, 142, 203, .22)',
  },
  green: {
    topPrimary: 'rgba(110, 217, 162, .48)',
    topSecondary: 'rgba(39, 134, 84, .27)',
    cursorPrimary: 'rgba(110, 217, 162, .42)',
    cursorSecondary: 'rgba(110, 217, 162, .2)',
    highlight: '#6ed9a2',
    highlightSoft: 'rgba(110, 217, 162, .22)',
  },
  cyan: {
    topPrimary: 'rgba(84, 217, 223, .48)',
    topSecondary: 'rgba(22, 141, 155, .27)',
    cursorPrimary: 'rgba(84, 217, 223, .42)',
    cursorSecondary: 'rgba(84, 217, 223, .2)',
    highlight: '#54d9df',
    highlightSoft: 'rgba(84, 217, 223, .22)',
  }
}

export function getTechnologyForSkill(skill) {
  const aliasMatch = Object.entries(technologySkillAliases).find(([, mappedSkills]) => {
    const names = Array.isArray(mappedSkills) ? mappedSkills : [mappedSkills]
    return names.includes(skill)
  })

  return aliasMatch?.[0] ?? technologyShowcase.find((technology) => technology.name === skill)?.name ?? null
}


