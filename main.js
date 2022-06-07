document.addEventListener('DOMContentLoaded', () => {
  const BASE_API_URL = 'https://itunes.apple.com'
  const MEDIA = 'music'
  const form = document.querySelector('#form')
  const formResults = document.querySelector('#formResults')
  const musicPlayer = document.querySelector('#musicPlayer')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const userInput = document.querySelector('#formInput').value
    if (userInput.length <= 0) {
      alert('You must enter an artist name')
      return
    }
    try {
      const response = await fetch(
        `${BASE_API_URL}/search?media=${MEDIA}&term=${userInput}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const data = await response.json()
      renderSearchResults(data.results)
    } catch (error) {
      console.log('err', error)
      alert('Sorry, an error has occurred please try again.')
    }
  })

  formResults.addEventListener('click', (e) => {
    if (e.target.dataset.previewUrl !== undefined) {
      removeAllChildNodes(musicPlayer)

      const audioEl = document.createElement('audio')
      audioEl.appendChild(document.createElement('source')).src =
        e.target.dataset.previewUrl
      audioEl.controls = true
      audioEl.autoplay = true

      musicPlayer.appendChild(audioEl)
      musicPlayer.appendChild(
        document.createElement('p')
      ).innerText = `Now Playing: ${e.target.dataset.songInfo}`
    }
  })

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  const renderSearchResults = (data) => {
    removeAllChildNodes(formResults)

    formResults.appendChild(document.createElement('h2')).innerText =
      'Search Results:'
    data.forEach((result) => {
      const formResultItem = document.createElement('div')
      const imageEl = document.createElement('img')

      imageEl.src = result.artworkUrl100
      imageEl.dataset.previewUrl = result.previewUrl
      imageEl.dataset.songInfo = `${result.trackName} - ${result.artistName}`
      formResultItem.classList.add('resultItem')
      formResultItem.appendChild(imageEl)
      formResultItem.appendChild(document.createElement('h3')).innerText =
        result.trackName
      formResultItem.appendChild(document.createElement('h2')).innerText =
        result.artistName

      formResults.appendChild(formResultItem)
    })
  }
})
