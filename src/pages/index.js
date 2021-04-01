import React, { Component } from "react"
import Sound from 'react-sound';


import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



import son0 from '../images/intro.mp3'
import son1 from '../images/Hotel.mp3'
import son2 from '../images/footing.mp3'
import son3 from '../images/Lestouristes.mp3'
import son4 from '../images/Café.mp3'
import son5 from '../images/neige.mp3'
import son6 from '../images/Annabdip.mp3'
import son7 from '../images/Latechnologie.mp3'
import son8 from '../images/apero.mp3'
import son9 from '../images/LeToro.mp3'
import son10 from '../images/cookingtime.mp3'
import son11 from '../images/Rafotelmod.mp3'
import son12 from '../images/Blondie.mp3'
import son13 from '../images/envoiture.mp3'
import son14 from '../images/Flash.mp3'








import play from '../images/play.svg'
import pause from '../images/pause.svg'
import next from '../images/next.svg'
import back from '../images/back.svg'
import reset from '../images/reset.svg'
import soundon from '../images/soundon.svg'
import soundoff from '../images/soundoff.svg'

import line from '../images/line.svg'
import miniline from '../images/miniline.svg'

import cd from '../images/cd2.svg'
import music from '../images/music.svg'
import flocon from '../images/flocon.svg'



import p1 from '../images/p1.jpg'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.jpg'
import p6 from '../images/p6.png'
import p7 from '../images/p7.jpg'
import p8 from '../images/p8.png'
import p9 from '../images/p9.jpg'
import p10 from '../images/p10.png'
import p11 from '../images/p11.png'
import p12 from '../images/p12.jpg'
import p13 from '../images/p13.png'
import p14 from '../images/p14.jpg'
import p15 from '../images/p15.jpg'
import p16 from '../images/p16.jpg'
import p17 from '../images/p17.png'
import p18 from '../images/p18.png'
import p19 from '../images/p19.png'
import p20 from '../images/p20.png'
import p21 from '../images/p21.png'
import p22 from '../images/p22.jpg'
import p23 from '../images/p23.png'
import p24 from '../images/p24.png'
import p25 from '../images/p25.jpg'
import p26 from '../images/p26.png'
import p27 from '../images/p27.png'
import p28 from '../images/p28.jpg'
import p29 from '../images/p29.png'
import p30 from '../images/p30.png'
import p31 from '../images/p31.jpg'
import p32 from '../images/p32.jpg'
import p33 from '../images/p33.png'
import p34 from '../images/p34.png'
import p35 from '../images/p35.png'
import p36 from '../images/p36.jpg'
import p37 from '../images/p37.png'
import p38 from '../images/p38.png'
import p39 from '../images/p39.jpg'
import p40 from '../images/p40.png'
import p41 from '../images/p41.png'
import p42 from '../images/p42.jpg'
import p43 from '../images/p43.png'
import p44 from '../images/p44.png'
import p45 from '../images/p45.png'
import p46 from '../images/p46.png'
import p47 from '../images/p47.png'
import p48 from '../images/p48.jpg'







class IndexPage extends Component {

  state = {

    playlist: [
      {
        son: son14,
        duration: 6,
        title: 'RADIO CONFINEMENT '
      },
      {
        son: son1,
        duration: 36,
        title: 'LES ANECDOTES DE GÉRARD '
      },
      {
        son: son2,
        duration: 21,
        title: 'FOOTING MATINAL '
      },
      {
        son: son3,
        duration: 24,
        title: 'LES PARISIENS '
      },
      {
        son: son4,
        duration: 95,
        title: 'CAFÉ + PARIS FOOT '
      },
      {
        son: son5,
        duration: 8,
        title: 'NEIGE FRAîCHE '
      },
      {
        son: son6,
        duration: 107,
        title: 'ANNABELLE DIPLÔMÉE '
      },
      {
        son: son7,
        duration: 79,
        title: 'BERNADETTE ET LA TECHNOLOGIE '
      },
      {
        son: son8,
        duration: 156,
        title: 'CHIT (DEEP) CHAT APÉRO '
      },
      {
        son: son9,
        duration: 140,
        title: 'UN TAUREAU POUR 42 VACHES '
      },
      {
        son: son10,
        duration: 51,
        title: 'COOKING TIME '
      },
      {
        son: son11,
        duration: 95,
        title: 'NÉGOCIER LA COLOC '
      },
      {
        son: son12,
        duration: 109,
        title: 'SOIRÉE TEINTURE '
      },
      {
        son: son13,
        duration: 90,
        title: 'RETOUR À PARIS  '
      }
    ],
    playing: 'STOPPED',
    sonIndex: 0,
    diapo: [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44, p45, p46, p47, p48],
    picIndex: 0,
    position: 0,
    duration: 0,
    mute: false,
    volume: 50
  }


  componentDidMount = () => {
    setInterval(() => this.handleNextPic(), 1500);
  }


  handleNextPic = () => {
    if (this.state.picIndex == 47) {
      this.setState({ picIndex: 0 });
    } else {
      this.setState({ picIndex: this.state.picIndex + 1 });
    }
  }

  handleReset = () => {
    this.setState({
      sonIndex: 0, position: 0
    })
  }


  handlePlaySong = () => {
    this.setState({
      playing: 'PLAYING'
    })
  }

  handleClick = (event) => {
    console.log(event.nativeEvent.offsetX * this.state.duration / 200)
    this.setState({
      position: event.nativeEvent.offsetX * this.state.duration / 200
    })
  }


  handleMute = () => {
    if (this.state.volume === 0) {
      this.setState({
        volume: 70
      })
    } else {
      this.setState({
        volume: 0
      })
    }
  }


  handlePauseSong = () => {
    this.setState({
      playing: 'PAUSED'
    })
    console.log(this.state.playlist[this.state.sonIndex].son)
  }

  handleNextSong = () => {
    if (this.state.sonIndex == this.state.playlist.length - 1) {
      this.setState({ sonIndex: 0, position: 0 });
    } else {
      this.setState({ sonIndex: this.state.sonIndex + 1, position: 0, playing: 'PLAYING' });


    }
  }


  handlePreviousSong = () => {
    if (this.state.sonIndex == 0) {
      this.setState({ sonIndex: 0, position: 0 });
    } else {
      this.setState({ sonIndex: this.state.sonIndex - 1, position: 0 });
    }
  }

  millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  render() {

    let pic = this.state.diapo[this.state.picIndex]
    let playlistLength = this.state.playlist.length
    let soundNb = this.state.sonIndex + 1

    return (
      <Layout>
        <SEO title="Home" />
        <div className="home">

          <div className="home__header">
            <div className="home__header__left">
              CONFINEMENT.<span className='times'>02</span>
            </div>
            <div className="home__header__right">
              LES ÉCHINES  <img src={cd} alt='img' />
              <span className='times'> 73700</span>
            </div>
          </div>

          <div className="home__content">
            <img src={pic} alt='img' />



          </div>


          <div className="home__footer">
            <div className="home__footer__player">
              <div className="home__footer__player__controls">
                <img className="home__footer__player__controls__sm" onClick={(e) => this.handleReset()} src={reset} alt='img' />
                <img className="home__footer__player__controls__bg" onClick={(e) => this.handlePreviousSong()} src={back} alt='img' />
                {this.state.playing !== 'PLAYING' ?
                  <img className="home__footer__player__controls__bg" onClick={(e) => this.handlePlaySong()} src={play} alt='img' />
                  : <img className="home__footer__player__controls__ps" onClick={(e) => this.handlePauseSong()} src={pause} alt='img' />
                }
                <img className="home__footer__player__controls__bg" onClick={(e) => this.handleNextSong()} src={next} alt='img' />
                {this.state.volume === 0 ?
                  <img className="home__footer__player__controls__sm" onClick={(e) => this.handleMute()} src={soundoff} alt='img' />
                  : <img className="home__footer__player__controls__sm" onClick={(e) => this.handleMute()} src={soundon} alt='img' />
                }
              </div>
              <div className="home__footer__player__infos">
                <div className="home__footer__player__infos__globalline" >
                  <div className="home__footer__player__infos__globalline__time" >
                    {this.millisToMinutesAndSeconds(this.state.position)}
                    <span class="home__footer__player__infos__globalline__time__right"> {this.millisToMinutesAndSeconds(this.state.duration)}</span>
                  </div>

                  <div className="home__footer__player__infos__line" >
                    <div className="home__footer__player__infos__line__duration" style={{ background: 'white', width: `${this.state.position / this.state.duration * 200}px`, height: '2px' }}> </div>
                    <img className="home__footer__player__infos__line__full" src={line} alt='img' />
                    <div className="home__footer__player__infos__line__over" onClick={(event) => this.handleClick(event)} style={{ margin: 'auto', width: '200px', height: '8px' }}> </div>

                  </div>
                  <div className="home__footer__player__infos__line__title" ><span className='times'> {soundNb}/{playlistLength}  </span> <img style={{ padding: '5px 4px' }} src={miniline} alt='img' /> {this.state.playlist[this.state.sonIndex].title}
                    {this.state.sonIndex === 0 ? <img className='emoji' src={music} alt='img' /> : ''} {this.state.sonIndex === 5 ? <img className='emoji' src={flocon} alt='img' /> : ''}
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>

          <Sound
            url={this.state.playlist[this.state.sonIndex].son}
            playStatus={this.state.playing}
            onPlaying={({ position, duration }) => this.setState({ position, duration })}
            position={this.state.position}
            onFinishedPlaying={() => this.handleNextSong()}
            volume={this.state.volume}
          />




        </div>

      </Layout >

    )
  }
}



export default IndexPage
