/* ScrollReveal, Carrousel */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(
  `
  #introduction .subtitle, #introduction .template, #introduction .btn,
  #character .character-image, #character-text, .skills
`,
  { interval: 250 }
)
