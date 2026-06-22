export const content = {
  site: {
    identity: 'Patrick Kan',
    role: 'Développeur logiciel full-stack',
    email: 'kanchunmingpatrick@gmail.com',
    location: 'Toronto, ON',
    linkedinUrl: 'https://www.linkedin.com/in/patrick-kan-71821a170/',
    portfolioUrl: 'https://pxx615.github.io/patrick-kan-portfolio/',
  },
  navigation: { label: 'Sections de la page', about: 'À propos', projects: 'Projets', experience: 'Expérience', skills: 'Compétences' },
  menu: {
    open: 'Ouvrir le menu', close: 'Fermer le menu', quickActions: 'Actions rapides et navigation', actions: 'Actions',
    lightMode: 'Passer au mode clair', darkMode: 'Passer au mode sombre', changeLanguage: 'Changer de langue', languageEnglish: 'English', languageFrench: 'Français', copyEmail: 'Copier l’e-mail', emailCopied: 'E-mail copié', sendEmail: 'Envoyer un e-mail', navigation: 'Navigation', linkedIn: 'LinkedIn',
  },
  about: {
    label: 'À propos',
    heading: 'Je crée des expériences web utiles et sécurisées, de l’interface à l’infrastructure.',
    description: 'Je suis un développeur logiciel full-stack basé à Toronto, avec plus de 6 ans d’expérience dans la création d’applications destinées aux clients. Je possède de l’expérience en sécurité applicative, systèmes d’authentification, API RESTful, infrastructure infonuagique et optimisation des performances.',
    linksLabel: 'Liens de contact et de portfolio', emailLabel: 'Envoyer un e-mail à Patrick Kan', portfolioLabel: 'Site portfolio',
  },
  sectionTitles: { featuredProjects: 'Projets en vedette', experience: 'Expérience', technicalSkills: 'Compétences techniques', photoGallery: 'Galerie photo' },
  projectsUi: { listLabel: 'Projets', mediaPlaceholder: 'Aperçu du projet à venir', headerImageComingSoon: 'Image d’en-tête à venir', viewProject: 'Voir le projet', projectPreview: 'aperçu du projet' },
  skills: { toolkit: 'Boîte à outils technologique' },
  gallery: { imageAlt: 'Photo de la galerie de chats' },
  accessibility: { projectHeader: 'en-tête du projet', technologies: 'technologies', skills: 'compétences', email: 'E-mail', portfolio: 'Portfolio' },
  footer: { thanks: 'Merci de votre visite.', moveToTop: 'Retour en haut' },
  experience: [
    { company: 'EWOWDAY Lifestyle & DIY Workshop', role: 'Développeur full-stack', dates: 'mars 2024 - aujourd’hui', tags: ['React', 'Node.js', 'REST APIs', 'SQL', 'Sécurité'], description: 'J’ai dirigé la refonte complète de la plateforme client, augmentant les réservations mensuelles de 30 % et lançant des fonctionnalités de réservation, de cartes-cadeaux et de réseaux sociaux.' },
    { company: 'Resiada Inc.', role: 'Développeur logiciel', dates: 'sept. 2021 - fév. 2024', tags: ['ASP.NET', 'C#', 'JavaScript', 'SQL', 'xUnit'], description: 'J’ai développé et maintenu des applications ASP.NET, amélioré l’expérience client et réduit les temps de chargement de 40 %.' },
    { company: 'Teranet Inc.', role: 'Développeur logiciel', dates: 'juin 2020 - sept. 2020', tags: ['Développement logiciel', 'Agile', 'Applications web'], description: 'J’ai contribué au développement de logiciels de production lors d’un stage en ingénierie ciblé.' },
    { company: 'Matte Black Motion Capture', role: 'Développeur d’applications mobiles', dates: 'nov. 2019 - mars 2020', tags: ['Développement mobile', 'Unreal Engine', 'UI/UX'], description: 'J’ai développé des expériences d’applications mobiles pour un studio de technologie de capture de mouvement.' },
    { company: 'Screen Industries Research and Training Centre', role: 'Développeur logiciel', dates: 'sept. 2019 - déc. 2019', tags: ['VR/AR', 'Développement logiciel', 'Recherche'], description: 'J’ai soutenu le développement logiciel pour le centre de recherche et de formation en RV/RA.' },
    { company: 'Agence du revenu du Canada', role: 'Technicien de soutien informatique', dates: 'fév. 2019 - août 2019', tags: ['Soutien informatique', 'Systèmes', 'Résolution de problèmes'], description: 'J’ai fourni du soutien technique et de l’aide aux systèmes dans un vaste environnement du secteur public.' },
    { company: 'Mississauga Evangelical Missionary Church', role: 'Développeur web front-end et technicien de soutien informatique', dates: 'août 2018 - déc. 2022', tags: ['Front-end', 'HTML/CSS', 'JavaScript', 'Soutien informatique'], description: 'J’ai fait du bénévolat en développement web front-end et en soutien informatique pour la communauté de l’église.' },
    { company: 'Sheridan College', role: 'Technologie des systèmes informatiques', dates: '2017 - 2020', tags: ['Développement de systèmes', 'Ingénierie des réseaux'], description: 'Développement de systèmes et ingénierie de réseaux' },
  ],
  projects: [
    { name: 'EWOWDAY', type: 'Plateforme d’ateliers de style de vie et de bricolage', tags: ['React', 'Node.js', 'SQL', 'REST APIs'], detail: 'Une plateforme d’ateliers destinée aux clients, reconstruite pour faciliter la découverte, fluidifier les réservations et simplifier l’utilisation des cartes-cadeaux. La nouvelle plateforme a contribué à augmenter les réservations mensuelles de 30 %.' },
    { name: 'Resiada', type: 'Application web destinée aux clients', tags: ['ASP.NET', 'C#', 'JavaScript', 'xUnit'], detail: 'Une application ASP.NET full-stack améliorée à travers l’interface, les services et la couche de base de données. Le travail portait sur la convivialité, l’accès fondé sur les rôles, l’authentification et la performance.' },
    { name: 'Matte Black Motion Capture', type: 'Développement d’applications mobiles', tags: ['Développement d’applications mobiles', 'Unreal Engine', 'UI/UX'], detail: 'Développement d’applications mobiles pour un studio de capture de mouvement, transformant des idées de produit en expériences mobiles ciblées.' },
    { name: 'AI Navigation Assistant', type: 'Prototype d’extension de navigateur', tags: ['Extension de navigateur', 'Chatbot IA'], detail: 'Une extension de navigateur expérimentale conçue pour réduire les frictions lors de la navigation dans les applications web. Le prototype combine un soutien conversationnel basé sur l’IA avec la reconnaissance contextuelle de la page, ce qui permet aux utilisateurs de poser des questions sur le site actuel, de trouver des fonctionnalités plus efficacement et de recevoir des conseils étape par étape sans quitter la page.' },
  ],
  skillGroups: [
    { title: 'Langages', skills: ['JavaScript', 'TypeScript', 'SQL', 'C#', 'PHP', 'Java'] },
    { title: 'Front-end', skills: ['React', 'Vue', 'Redux', 'HTML', 'CSS', 'Element Plus'] },
    { title: 'Back-end', skills: ['Node.js', 'Express.js', 'ASP.NET', 'Spring Boot', 'Symfony', 'RESTful APIs'] },
    { title: 'Nuage et infrastructure', skills: ['AWS', 'EC2', 'SSL/TLS', 'RDS', 'S3', 'IIS', 'Cloudflare', 'Microsoft Azure'] },
    { title: 'Base de données', skills: ['MySQL', 'MongoDB'] },
    { title: 'Intégration et API', skills: ['OAuth (Google Login)', 'Stripe Integration', 'Meta/Facebook API'] },
    { title: 'Messagerie et diffusion d’événements', skills: ['Apache Kafka'] },
    { title: 'Outils de développement', skills: ['Git', 'GitHub', 'GitHub Copilot', 'Pipelines CI/CD', 'NPM', 'xUnit'] },
  ],
}

// Resume-aligned French copy. Technical product names remain in their original form.
content.about = {
  ...content.about,
  description: 'D\u00e9veloppeur logiciel full-stack avec plus de 6 ans d\u2019exp\u00e9rience dans la conception et le d\u00e9veloppement d\u2019applications web \u00e9volutives avec React, TypeScript, Vue.js, Node.js, PHP/Symfony, ASP.NET Core et des bases de donn\u00e9es SQL. Exp\u00e9rience en interfaces r\u00e9actives, API RESTful, authentification et autorisation, optimisation des performances, s\u00e9curit\u00e9, livraison Agile et collaboration interfonctionnelle.',
}

content.experience = [
  { company: 'EWOWDAY Lifestyle & DIY Workshop', role: 'D\u00e9veloppeur full-stack', dates: 'mars 2024 - aujourd\u2019hui', location: 'Toronto, ON', tags: ['React', 'TypeScript', 'Redux', 'Vue.js', 'PHP', 'Symfony', 'MySQL', 'REST APIs', 'Cloudflare'], description: 'D\u00e9veloppe et maintient des applications web destin\u00e9es aux clients, contribuant \u00e0 une hausse de 30 % des r\u00e9servations mensuelles. A livr\u00e9 des fonctions de cartes-cadeaux, panier de r\u00e9servation et affichage de m\u00e9dias sociaux, tout en optimisant les API RESTful et les requ\u00eates SQL pour la performance et la s\u00e9curit\u00e9.' },
  { company: 'Resiada Inc.', role: 'D\u00e9veloppeur logiciel', dates: 'sept. 2021 - f\u00e9v. 2024', location: 'Toronto, ON', tags: ['ASP.NET Core', 'React', 'REST APIs', 'JWT Authentication', 'Role-Based Access', 'xUnit', 'Agile'], description: 'A d\u00e9velopp\u00e9 et maintenu des applications ASP.NET et React full-stack dans un environnement Agile. A repens\u00e9 l\u2019application destin\u00e9e aux clients pour r\u00e9duire les temps de chargement de 40 %, et a diminu\u00e9 les r\u00e9gressions de production de 30 % gr\u00e2ce aux tests et aux revues de code.' },
  { company: 'Teranet Inc.', role: 'D\u00e9veloppeur logiciel', dates: 'juin 2020 - sept. 2020', location: 'Toronto, ON', tags: ['ASP.NET', 'C#', 'SQL Server', 'Production Support'], description: 'A d\u00e9velopp\u00e9 et maintenu des applications d\u2019entreprise avec ASP.NET, C# et SQL Server, en contribuant au d\u00e9veloppement de fonctionnalit\u00e9s et au soutien de production.' },
  { company: 'Matte Black Motion Capture', role: 'D\u00e9veloppeur logiciel', dates: 'nov. 2019 - mars 2020', location: 'Toronto, ON', tags: ['Mobile Development', 'Unreal Engine 4', 'C++', 'Face Tracking'], description: 'A d\u00e9velopp\u00e9 des exp\u00e9riences d\u2019applications mobiles pour un studio de capture de mouvement, en transformant des id\u00e9es de produit en exp\u00e9riences mobiles cibl\u00e9es.' },
  { company: 'Screen Industries Research and Training Centre', role: 'D\u00e9veloppeur logiciel', dates: 'sept. 2019 - d\u00e9c. 2019', location: 'Toronto, ON', tags: ['VR/AR', 'Unity', 'C#', 'Unreal Engine 4', 'C++'], description: 'A d\u00e9velopp\u00e9 des applications VR/AR avec Unity (C#) et Unreal Engine 4 (C++), en contribuant \u00e0 des exp\u00e9riences interactives et \u00e0 des prototypes dans un environnement de recherche et de formation.' },
  { company: 'Agence du revenu du Canada', role: 'Technicien de soutien informatique', dates: 'f\u00e9v. 2019 - ao\u00fbt 2019', location: 'Mississauga, ON', tags: ['IT Support', 'Systems', 'Troubleshooting'], description: 'A fourni du soutien technique et de l\u2019aide aux syst\u00e8mes dans un vaste environnement du secteur public.' },
  { company: 'Mississauga Evangelical Missionary Church', role: 'D\u00e9veloppeur web front-end et technicien de soutien informatique', dates: 'ao\u00fbt 2018 - d\u00e9c. 2022', location: 'Mississauga, ON', tags: ['Front-end Development', 'HTML/CSS', 'JavaScript', 'IT Support'], description: 'A fait du b\u00e9n\u00e9volat en d\u00e9veloppement web front-end et en soutien informatique pour la communaut\u00e9 de l\u2019\u00e9glise.' },
  { company: 'Sheridan College', role: 'Technologie des syst\u00e8mes informatiques', dates: '2017 - 2020', tags: ['D\u00e9veloppement de syst\u00e8mes', 'Ing\u00e9nierie des r\u00e9seaux'], description: 'D\u00e9veloppement de syst\u00e8mes et ing\u00e9nierie de r\u00e9seaux' },
]

content.projects = [
  { name: 'EWOWDAY', type: 'Plateforme d\u2019ateliers de style de vie et de bricolage', tags: ['Vue.js', 'TypeScript', 'PHP', 'Symfony', 'MySQL', 'REST APIs', 'Cloudflare'], detail: 'Une plateforme de commerce \u00e9lectronique et de r\u00e9servation d\u2019ateliers de bricolage destin\u00e9e aux clients. A livr\u00e9 des fonctions d\u2019\u00e9change de cartes-cadeaux et d\u2019affichage de m\u00e9dias sociaux, a exploit\u00e9 Cloudflare pour la s\u00e9curit\u00e9 et la fiabilit\u00e9, et a contribu\u00e9 \u00e0 une hausse de 30 % des r\u00e9servations mensuelles.' },
  { name: 'Resiada', type: 'Plateforme de r\u00e9servation d\u2019h\u00f4tels destin\u00e9e aux clients', tags: ['React', 'TypeScript', 'ASP.NET Core', 'MySQL', 'Authentication'], detail: 'Une plateforme de r\u00e9servation d\u2019h\u00f4tels full-stack permettant aux utilisateurs de parcourir, filtrer et r\u00e9server des h\u00f4tels partenaires selon le lieu, la distance, les dates et le prix. A mis en \u0153uvre la validation par code d\u2019acc\u00e8s et des m\u00e9canismes de remise, tout en am\u00e9liorant l\u2019authentification, la convivialit\u00e9 et les performances.' },
  { name: 'Matte Black Motion Capture', type: 'Application mobile de suivi facial', tags: ['Mobile Development', 'Unreal Engine 4', 'C++'], detail: 'Une application mobile qui permet aux cr\u00e9ateurs de contenu de contr\u00f4ler des avatars virtuels par les expressions faciales et les mouvements pour la diffusion et l\u2019enregistrement. L\u2019int\u00e9gration d\u2019Unreal Engine permet aussi de contr\u00f4ler les avatars et les objets de sc\u00e8ne avec des contr\u00f4leurs portatifs.' },
  { name: 'AI Navigation Assistant', type: 'Prototype d\u2019extension de navigateur', tags: ['Browser Extension', 'JavaScript', 'Unity', 'AI', 'C#'], detail: 'Un prototype d\u2019extension de navigateur permettant aux utilisateurs de poser des questions sur le site actuel par texte ou voix et de recevoir une assistance contextuelle aliment\u00e9e par l\u2019IA, y compris pour naviguer entre les sections sans quitter la page.' },
]
