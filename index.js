const words = ['Hi! Welcome in my nostalgic website!']
words.forEach(word => {
    let textTimeline = gsap.timeline({
        yoyo: false
    })
    textTimeline.to('#typewriter', {
        text: word,
        duration: 4
    })
})

const datas = ['05/03/2024 - Emerson']
datas.forEach(data => {
    let textTimeline = gsap.timeline({
        yoyo: false
    })
    textTimeline.to('#datawriter', {
        text: data,
        duration: 2
    })
})

const h1 = ['Nostalgic PC']
h1.forEach(texth1 => {
    let textTimeline = gsap.timeline({
        yoyo: false
    })
    textTimeline.to('#h1writer', {
        text: texth1,
        duration: 2
    })
})

const p = ['If you enjoy, see my GitHub also!']
p.forEach(textp => {
    let textTimeline = gsap.timeline({
        yoyo: false
    })
    textTimeline.to('#pwriter', {
        text: textp,
        duration: 2
    })
})