video.addEventListener('click', function() {
    console.log('click')
    this.classList.add('hidden')
    import('./player.js').then(({ player }) => {
        setTimeout(() => {
            player.play()
        }, 100)
    })
})