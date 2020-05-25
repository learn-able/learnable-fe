import { useState } from 'react'
import PlaylistView1 from '../PlaylistViews/PlaylistView1'
import PlaylistView2 from '../PlaylistViews/PlaylistView2'
import PlaylistView3 from '../PlaylistViews/PlaylistView3'
import PlaylistView4 from '../PlaylistViews/PlaylistView4'

const Playlist = ({ status, title, id }) => {
  const isNewPlaylist = (id) => {
    return id
    ? 4
    : 1
  }

  const [step, setStep] = useState(isNewPlaylist(id));

  const switchViews = () => {
    switch (step) {
      case 1:
        return <PlaylistView1 />
      case 2:
        return <PlaylistView2 />
      case 3:
        return <PlaylistView3 />
      case 4:
        return <PlaylistView4 />
    }
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <section>
      <h3>{title}</h3>
      {switchViews(step)}
      {step > 1 && <button onClick={prevStep}>-</button>}
      {step < 4 && <button onClick={nextStep}>+</button>}
    </section>
  )
}

export default Playlist
