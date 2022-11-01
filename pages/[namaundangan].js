/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/UndanganWithNama.module.css'
import {faChurch, faBuilding, faHands, faFileLines, faHeart, faLocationPin, faAddressBook, faImages, faGift, faVolumeHigh, faVolumeXmark} from '@fortawesome/free-solid-svg-icons'
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import useLongPress from '../customHooks/useLongPress';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import db from '../utils/db'
import Jump from 'react-reveal/Jump';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function UndanganWithNama(props) {
  const greetingRef = useRef();
  const detailRef = useRef();
  const pasanganRef = useRef();
  const lokasiRef = useRef();
  const reservationRef = useRef();
  const galleryRef = useRef();
  const giftRef = useRef();

  const inputNama = useRef();
  const inputUcapan = useRef();
  const inputHadir = useRef();
  const inputRagu = useRef();
  const inputTidakHadir = useRef();

  const bgMusicRef = useRef();

  const [submittedUcapan, setSubmittedUcapan] = useState([]);
  const [musicPlayStatus, setMusicPlayStatus] = useState(false);

  const playOrPauseMusic = (isPlay) => {
    if(isPlay === undefined){
      bgMusicRef.current.play();
      setMusicPlayStatus(true);
    }else{
      if(isPlay){
        bgMusicRef.current.play()
        setMusicPlayStatus(isPlay);
      }else{
        bgMusicRef.current.pause();
        setMusicPlayStatus(isPlay);
      }
    }

  };

  const scrollToGreetingDiv = () => {
    playOrPauseMusic();
    greetingRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const scrollToDetailDiv = () => {
    playOrPauseMusic();
    detailRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const scrollToPasanganDiv = () => {
    playOrPauseMusic();
    pasanganRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const scrollToLokasilDiv = () => {
    playOrPauseMusic();
    lokasiRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const scrollToReservationDiv = () => {
    playOrPauseMusic();
    reservationRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const scrollToGalleryDiv = () => {
    playOrPauseMusic();
    galleryRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const scrollToGiftDiv = () => {
    playOrPauseMusic();
    giftRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  useEffect(() => {
    async function getReservasiData() {
      const reservasiSubmitted = await db.collection('reservasi').get();
      const ucapanDatas = reservasiSubmitted.docs.map((ucapan) => {
        const ucapanData = ucapan.data();
        return {id: ucapan.id, nama: ucapanData.nama, ucapan: ucapanData.ucapan}
      })

      setSubmittedUcapan(ucapanDatas);
    }

    getReservasiData();
  }, [])

  const onKonfirmasiSubmit = async (e) => {
    try {
      e.preventDefault();

      let statusKehadiran;
  
      if(inputHadir.current.checked){
        statusKehadiran = inputHadir.current.value;
      }else if(inputRagu.current.checked){
        statusKehadiran = inputRagu.current.value;
      }else if (inputTidakHadir.current.checked) {
        statusKehadiran = inputTidakHadir.current.value;
      }
  
      const data = {
        nama: inputNama.current.value,
        ucapan: inputUcapan.current.value,
        statusKehadiran: statusKehadiran
      }

      await db.collection('reservasi').add(data);

      inputHadir.current.checked = false;
      inputRagu.current.checked = false;
      inputTidakHadir.current.checked = false;

      inputNama.current.value = '';
      inputUcapan.current.value = '';

      toast('Berhasil menambahkan ucapan', {
        position: "bottom-center",
        autoClose: 150,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        closeButton: false,
        type: 'success'
      });
    } catch (error) {
      console.log(error)
      toast('Gagal menambahkan data', {
        position: "bottom-center",
        autoClose: 150,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        closeButton: false,
        type: 'error'
      });
    }    
  }

  const onAyuLongPress = () => {
    console.log('longpress is triggered');
    navigator.clipboard.writeText('002901141813500').then(() => {
      toast('Nomor Rekening Berhasil disalin', {
        position: "bottom-center",
        autoClose: 150,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        closeButton: false
        });
    });
  };

  const onYudaLongPress = () => {
    console.log('longpress is triggered');
    navigator.clipboard.writeText('0112201500005042').then(() => {
      toast('Nomor Rekening Berhasil disalin', {
        position: "bottom-center",
        autoClose: 150,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
    })
  };

  const onClick = () => {
    console.log('click is triggered')
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  const ayuBankLongPress = useLongPress(onAyuLongPress, onClick, defaultOptions);
  const yudaBankLongPress = useLongPress(onYudaLongPress, onClick, defaultOptions);


  const slideImages = [
    // {
    //   original: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/2c.jpg',
    //   thumbnail: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/2c.jpg',
    //   thumbnailHeight: '50px',
    //   thumbnailWidth: '50px'
    // },
    {
      original: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/1b%20resize.png',
      thumbnail: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/thumbnail%2F1b.png',
      thumbnailHeight: '50px',
      thumbnailWidth: '50px'
    },
    {
      original: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/1c%20resize.png',
      thumbnail: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/thumbnail%2F1c.png',
      thumbnailHeight: '50px',
      thumbnailWidth: '50px'
    },
    // {
    //   original: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/6a.jpg',
    //   thumbnail: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/6a.jpg',
    //   thumbnailHeight: '50px',
    //   thumbnailWidth: '50px'
    // },
    // {
    //   original: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/6c.jpg',
    //   thumbnail: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/6c.jpg',
    //   thumbnailHeight: '50px',
    //   thumbnailWidth: '50px'
    // },
    {
      original: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/1a%20resize.png',
      thumbnail: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/thumbnail%2F1a.png',
      thumbnailHeight: '50px',
      thumbnailWidth: '50px'
    },
    // {
    //   original: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/8a.jpg',
    //   thumbnail: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/8a.jpg',
    //   thumbnailHeight: '50px',
    //   thumbnailWidth: '50px'
    // },
    // {
    //   original: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/8b.jpg',
    //   thumbnail: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/8b.jpg',
    //   thumbnailHeight: '50px',
    //   thumbnailWidth: '50px'
    // },
    // {
    //   original: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/11a.jpg',
    //   thumbnail: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/11a.jpg',
    //   thumbnailHeight: '50px',
    //   thumbnailWidth: '50px'
    // },
    // {
    //   original: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/11d.jpg',
    //   thumbnail: 'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/11d.jpg',
    //   thumbnailHeight: '50px',
    //   thumbnailWidth: '50px'
    // },
  ];
  

  return (
    <>
        <div className={styles.undangan}>
            <audio ref={bgMusicRef} src="/static/background_music.mp3" loop=''>
              <source src="/static/background_music.mp3" type="audio/mp3" />
            </audio>
            <div>
            {musicPlayStatus && (
              <div 
                style={{
                  backgroundColor: '#455dd5',
                  fontSize:'25px',
                  position: 'fixed',
                  bottom: '25%',
                  color: '#F9F9F9',
                  padding: '10px',
                  marginLeft: '10px',
                  borderRadius: '100%',
                  zIndex: 99
                }}
                onClick={(e) => {
                  e.preventDefault();
                  playOrPauseMusic(false)
                }} 
              >
              <FontAwesomeIcon icon={faVolumeHigh} />
              </div>
            )}
            {!musicPlayStatus && (
              <div 
                style={{
                  backgroundColor: '#455dd5',
                  fontSize:'25px',
                  position: 'fixed',
                  bottom: '25%',
                  color: '#F9F9F9',
                  padding: '10px',
                  marginLeft: '10px',
                  borderRadius: '100%',
                  zIndex: 99
                }}
                onClick={(e) => {
                  e.preventDefault();
                  playOrPauseMusic(true)
                }} 
              >
                <FontAwesomeIcon icon={faVolumeXmark} />
              </div>
            )}
            </div>
            <div className={`${styles.bottomnav}`}  style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
                <FontAwesomeIcon icon={faHands} style={{fontSize: '25px', color: '#F9F9F9'}} onClick={scrollToGreetingDiv} />
                <FontAwesomeIcon icon={faFileLines} style={{fontSize: '25px', color: '#F9F9F9'}} onClick={scrollToDetailDiv} />
                <FontAwesomeIcon icon={faHeart} style={{fontSize: '25px', color: '#F9F9F9'}} onClick={scrollToPasanganDiv} />
                <FontAwesomeIcon icon={faLocationPin} style={{fontSize: '25px', color: '#F9F9F9'}} onClick={scrollToLokasilDiv} />
                <FontAwesomeIcon icon={faAddressBook} style={{fontSize: '25px', color: '#F9F9F9'}} onClick={scrollToReservationDiv} />
                <FontAwesomeIcon icon={faImages} style={{fontSize: '25px', color: '#F9F9F9'}} onClick={scrollToGalleryDiv} />
                <FontAwesomeIcon icon={faGift} style={{fontSize: '25px', color: '#F9F9F9'}}onClick={scrollToGiftDiv} />
            </div>
            <div ref={greetingRef} className={`${styles.container} ${styles.greeting}`}>
                <div className={`${styles.hiasan}`}></div>
                <div className={`${styles.text_container}`} >
                  <Jump>
                    <h3 className={`${styles.announcement}`}>We Are Getting Married</h3>
                  </Jump>
                  <Slide bottom>
                    <div className={styles.namapasangan}>
                      <p>Yuda</p>
                      <p>&</p>
                      <p>Ayu</p>
                    </div>
                    
                    <div className={styles.tamuundangan}>
                        <p>Kepada Yth.</p>
                        <p>{props.formattedNamaUndangan}</p>
                        <p>di tempat</p>
                    </div>

                    
                  </Slide>
                </div>
                <Slide bottom>
                  <div className={`${styles.container} ${styles.button_container}`}>
                    <div className={`${styles.button_wrapper}`}>
                      <div className={`${styles.mainbutton}`} onClick={scrollToDetailDiv}>
                          BUKA UNDANGAN
                      </div>
                    </div>
                  </div>
                </Slide>
            </div>
            
            <div ref={detailRef} className={`${styles.container} ${styles.detail}`}>
                <div 
                style={{
                    width: '100vw', 
                    flex: 3, 
                    background: 'url("/static/image1.jpg") no-repeat',
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover', 
                }}
                >
                </div>
                <Fade>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', marginBottom: '20px'}}>
                    <p className={`${styles.namapasangan}`}>Yuda & Ayu</p>
                    <p className={`${styles.tanggal_pernikahan}`}>22 November 2022</p>
                  </div>
                </Fade>
                <div 
                  style={{
                      width: '100vw', 
                      flex: 3, 
                      background: 'url("/static/1a.png") no-repeat',
                      backgroundPosition: 'center', 
                      backgroundSize: 'cover', 
                  }}
                >
                </div>
                <Fade>
                  <div className={`${styles.quote_alkitab_container}`}>
                    <p className={`${styles.quote_alkitab}`}>{`"Dan di atas semuanya itu:`}</p>
                    <p className={`${styles.quote_alkitab}`}>{`Kenakanlah kasih sebagai pengikat"`}</p>
                    <p className={`${styles.quote_alkitab}`}>{`Yang mempersatukan dan `}</p>
                    <p className={`${styles.quote_alkitab}`}>{`Yang mempersatukan dan menyempurnakan."`}</p>
                    <p className={`${styles.quote_alkitab}`} style={{marginTop: '1em'}}>Kolose 3:14</p>
                  </div>
                </Fade>

            </div>
            <div 
              ref={pasanganRef} 
              className={`${styles.container} ${styles.pasangan}`} 
              style={{
                display: 'flex', 
                flex: 1, 
                flexDirection: 'column', 
                justifyContent: 'space-evenly'
                
              }}
            >
                <div style={{alignItems: 'stretch', justifyContent: 'stretch', flex: 4, display: 'flex', flexDirection: 'column', alignContent: 'stretch', justifyItems: 'stretch',}}>
                  <div style={{flex: '1 1 auto', justifyContent:'center', display: 'flex'}}>
                    <Slide bottom cascade appear={true}>
                      <img alt='img' loading='eager' style={{height: '100%', height: '100px'}} src={'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/Foto%20Yuda.png'} />
                    </Slide>
                  </div>
                  <div style={{flex: 10, display: 'flex', flexDirection: 'column'}}>
                    <Slide bottom cascade >
                      <p className={styles.namapasangan}>apt. Yuda Siswanto, S.Farm</p>
                      <p className={styles.detailpasangan}>Putra Pertama dari</p>
                      <p className={styles.detailpasangan}>Bapak Ali Siswanto (alm)</p>
                      <p className={styles.detailpasangan}>& Ibu Ir. Magdalena, MM</p>
                      <p className={styles.detailpasangan}>(Bengkayang)</p>
                    </Slide>
                  </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <div className={styles.separator}></div>  
                  <Zoom>
                    <p style={{fontSize: '36px', marginLeft: '18px', marginRight: '18px', fontFamily: 'Cormorant Upright'}}>&</p>
                  </Zoom>
                  <div className={styles.separator}></div>
                </div>
                <div style={{alignItems: 'center', justifyContent: 'center', flex: 4, display: 'flex', flexDirection: 'column'}}>
                  <div style={{flex: 1}}>
                    <Slide bottom cascade>
                      <div>
                          <img alt='img' loading='eager' style={{width: '100px'}} src={'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/Foto%20Ayu.png'} />
                      </div>
                    </Slide>
                  </div>
                  <div style={{flex: 2, display: 'flex', flexDirection: 'column'}}>
                    <Slide bottom cascade>
                      <div className={styles.namapasangan}>
                        <p>apt. Regina Ayudyaningsari</p>
                        <p>Pradani, S.Farm</p>
                      </div>
                      <p className={styles.detailpasangan}>Putri Pertama dari</p>
                      <p className={styles.detailpasangan}>Bapak Paulus Joko Prayitno, S.Pd, MM</p>
                      <p className={styles.detailpasangan}>& Ibu Retna Wikandani, S.Pd</p>
                      <p className={styles.detailpasangan}>(Bengkayang)</p>
                    </Slide>
                  </div>
                </div>
            </div>
            <div ref={lokasiRef} className={`${styles.container} ${styles.lokasi}`}>
                <Fade top>
                  <p style={{fontWeight: '700', fontFamily: 'Playfair Display', fontSize: '40px', textAlign: 'center', color: '#6E85B7'}}>Pemberkatan</p>
                </Fade>
                <div style={{minHeight: '3px', minWidth: '194px', marginTop: '14px', marginBottom: '14px', backgroundColor: '#F6F4F4'}}></div>
                <Slide bottom cascade>
                  <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#717171', marginBottom: '14px'}}>Selasa, 22 November 2022</p>
                  <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#717171'}}>09:00-Selesai</p>
                  <div style={{minHeight: '3px', minWidth: '143px', marginTop: '14px', marginBottom: '14px', backgroundColor: '#F6F4F4'}}></div>
                  <FontAwesomeIcon icon={faChurch} style={{fontSize: '55px', marginBottom: '14px'}} />
                  <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#606060',}}>Gereja Santo Pius X</p>
                </Slide>
                <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#606060', marginBottom: '14px'}}>Bengkayang</p>
                <div className={`${styles.mainbutton}`} onClick={() => {openInNewTab('https://goo.gl/maps/vPCWqfYSJzg3E5GY8')}}>
                  Lihat Lokasi
                </div>
                <Fade top>
                  <p style={{fontWeight: '700', fontFamily: 'Playfair Display', fontSize: '40px', textAlign: 'center', color: '#6E85B7'}}>Resepsi</p>
                </Fade>
                <div style={{minHeight: '3px', minWidth: '194px', marginTop: '14px', marginBottom: '14px', backgroundColor: '#F6F4F4'}}></div>
                <Slide bottom cascade>
                  <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#717171', marginBottom: '14px'}}>Selasa, 22 November 2022</p>
                  <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#717171'}}>12:00-19:00</p>
                  <div style={{minHeight: '3px', minWidth: '143px', marginTop: '14px', marginBottom: '14px', backgroundColor: '#F6F4F4'}}></div>
                  <FontAwesomeIcon icon={faBuilding} style={{fontSize: '55px', marginBottom: '14px'}} />
                  <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#606060'}}>Hotel Lala Golden</p>
                  <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#606060', marginBottom: '14px'}}>Bengkayang</p>
                </Slide>
                <div className={`${styles.mainbutton}`} onClick={() => {openInNewTab('https://goo.gl/maps/zo3ctXy9Rh1dnzUo6')}}>
                  Lihat Lokasi
                </div>
            </div>
            <div ref={reservationRef} className={`${styles.container} ${styles.reservation}`} style={{display: 'flex', flexDirection: 'column', paddingBottom: '20px', paddingLeft: '10px', paddingRight: '10px', paddingTop: '20px', paddingBottom: '30px',}}>
                <div style={{ flex: 6, backgroundColor: '#25316D', color: '#F9F9F9', paddingLeft: '55px', paddingRight: '51px', paddingTop: '42px', paddingBottom: '51px'}}>
                <p style={{fontFamily: 'Playfair Display', fontSize: '36px', color: '#F7CB20', fontWeight: 700, marginBottom: '6px'}}>Reservasi</p>
                <p style={{fontFamily: 'PT Serif', fontSize: '11px', color: '#F9F9F9', fontWeight: 575}}>Konfirmasi Kehadiran</p>
                <p style={{fontFamily: 'PT Serif', fontSize: '11px', color: '#F9F9F9', fontWeight: 575, marginBottom: '52px'}}>Tamu Undangan</p>

                <form>
                    <div className={styles.input} style={{display: 'flex', flex: 1, flexDirection: 'row', marginBottom: '24px'}}>
                    <div style={{display: 'flex', flex: 1}}>
                        <label htmlFor='namahadir'>Nama</label>
                    </div>
                    <div style={{display: 'flex', flex: 3}}>
                        <label htmlFor='namahadir' style={{marginRight: '11px'}}>:</label>
                        <input ref={inputNama} type={'text'} id="namahadir" style={{width: '100%', height: '29px'}} />
                    </div>
                    </div>
                    <div className={styles.input} style={{display: 'flex', flex: 1, flexDirection: 'row', marginBottom: '24px'}}>
                    <div style={{display: 'flex', flex: 1}}>
                        <label>Ucapan</label>
                    </div>
                    <div style={{display: 'flex', flex: 3}}>
                        <label style={{marginRight: '11px'}}>:</label>
                        <textarea ref={inputUcapan} rows={3} style={{width: '100%'}}  />
                    </div>
                    </div>
                    <div className={styles.input}>
                    <p style={{textAlign: 'left', marginBottom: '24px'}}>Konfirmasi :</p>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
                        <input ref={inputHadir} name='StatusKehadiran' type={'radio'} value={'Ya, Saya Hadir'} id={'Ya'} style={{marginRight: '16px'}} />
                        <label htmlFor={'Ya'}>Ya, Saya Hadir</label>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
                        <input ref={inputRagu} name='StatusKehadiran' type={'radio'}  value={'Saya ragu-ragu'} id={'Ragu'} style={{marginRight: '16px'}} />
                        <label htmlFor={'Ragu'}>Saya ragu-ragu</label>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
                        <input ref={inputTidakHadir} name='StatusKehadiran' type={'radio'}  value={'Maaf, Saya tidak bisa hadir'} id={'Tidak'} style={{marginRight: '16px'}} />
                        <label htmlFor={'Tidak'}>Maaf, Saya tidak bisa hadir</label>
                    </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '42px'}}>
                    <button type={'submit'} style={{width: '121px', height: '42px', backgroundColor: '#1A1919', color: '#F9F9F9', borderWidth: '0'}} onClick={onKonfirmasiSubmit}>Kirim</button>
                    </div>
                </form>
                
                </div>
                {/* <div style={{flex: 6, overflow: 'hidden'}}>
                  {submittedUcapan.map((ucapan) => {
                    return (
                      <div key={ucapan.id} style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                        <p>{ucapan.nama}</p>
                        <p>{ucapan.ucapan}</p>
                      </div>
                    )
                  })}
                </div> */}
            </div>
            <div 
                ref={galleryRef} 
                className={`${styles.container} ${styles.gallery}`} 
                style={{
                backgroundColor: '#25316D', 
                borderTopLeftRadius: '90px', 
                borderTopRightRadius: '90px', 
                paddingTop: '50px',
                display:'flex',
                flexDirection: 'column',
                justifyItems: 'stretch',
                justifyContent: 'space-between',
                overflow: 'auto'
                }}
            >
                <p style={{fontFamily: 'Playfair Display', fontWeight: 500, fontSize: '48px', color: '#F9F9F9', textAlign: 'center', marginBottom: '18px', flex: 1}}>Galeri</p>
                <div className="slide-container" style={{ flex: 11}}>
                <ReactImageGallery 
                    items={slideImages} 
                    showThumbnails 
                    thumbnailPosition='bottom' 
                    lazyLoad 
                    showFullscreenButton={false}
                    showPlayButton={false}
                    renderItem={(item) => {
                    return (
                        <img src={item.original} alt='image'style={{maxHeight: '60vh'}}/>
                    )
                    }}
                    renderThumbInner={(item) => {
                    return (<img src={item.thumbnail} alt='img' width={item.thumbnailWidth} height={item.thumbnailHeight} />);
                    }}
                />
                </div>
            </div>
            <div ref={giftRef} className={`${styles.container} ${styles.gift}`}>
                <p className={`${styles.title}`}>Gift</p>
                <p className={`${styles.subtitle}`}>Kado anda berarti bagi kami. jika memberi adalah  ungkapan tanda kasih anda. Anda dapat memberi kado secara cashless.</p>
                <div className={styles.bankcard} style={{marginBottom: '22px'}} {...ayuBankLongPress}>
                  <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end'}}>
                      <img 
                      src='https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/logo-bri-600x600%201.png' 
                      alt='rekening ayu'
                      width={'37px'}
                      height={'34px'}
                      />
                  </div>
                  <p className={`${styles.norek}`}>002901141813500</p>
                  <p className={`${styles.detailrek}`}>A/N</p>
                  <p className={`${styles.detailrek}`}>Regina Ayudyaningsari Pradani</p>
                </div>
                <div className={styles.bankcard} style={{marginBottom: '42px'}} {...yudaBankLongPress}>
                  <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end'}}>
                      <img 
                      src='https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/Logo%20Bank%20BTN.png' 
                      alt='rekening yuda' 
                      width={'89px'}
                      height={'40px'}
                      />
                  </div>
                  <p className={`${styles.norek}`}>0112201500005042</p>
                  <p className={`${styles.detailrek}`}>A/N</p>
                  <p className={`${styles.detailrek}`}>Yuda Siswanto</p>
                </div>

                <p style={{fontFamily: 'PT Serif', fontSize: '24px', fontWeight: 700, color: '#717171'}}>Kirim Hadiah</p>
                <div style={{minHeight: '3px', minWidth: '143px', marginTop: '14px', marginBottom: '14px', backgroundColor: '#F6F4F4'}}></div>
                <p style={{fontFamily: 'PT Serif', fontSize: '16px', fontWeight: 400, color: '#717171'}}>Rumah Kami</p>
                <p style={{fontFamily: 'PT Serif', fontSize: '16px', fontWeight: 400, color: '#717171'}}>Jl.Trisula, Gang Aur No 18,</p>
                <p style={{fontFamily: 'PT Serif', fontSize: '16px', fontWeight: 400, color: '#717171'}}>Bukit Batu, Singkawang.</p>
            </div>
            <div className={`${styles.thankyou}`} style={{ minHeight: '80vh'}}>
                <div 
                style={{
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/static/thankyoubg.jpg") no-repeat', 
                    minHeight: '100vw', 
                    minWidth: '100vw', 
                    backgroundPosition: 'center', 
                    backgroundSize: '100vw 100vw', 
                    marginBottom: '35px',
                    zIndex: 1,
                }}>
                    <div style={{zIndex: 3,   background: 'rgba(0, 0, 0, 0.4)', minHeight: '100vw', minWidth: '100vw'}}>
                      <p style={{color: '#F7D039', fontWeight: 700, fontSize: '40px', fontFamily: 'Playfair Display', zIndex: 1, backgroundColor: 'transparent', paddingTop: '40px'}}>Terima Kasih</p>
                    </div>
                </div>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 60px', flexDirection: 'column'}}>
                  <p style={{fontSize: '12px', fontWeight: 700, fontFamily: 'Playfair Display', color: '#717171', }}>{`“have a good and goldy marriage`}</p>
                  <p style={{fontSize: '12px', fontWeight: 700, fontFamily: 'Playfair Display', color: '#717171', }}>{`that shows the world Christ's love`}</p>
                  <p style={{fontSize: '12px', fontWeight: 700, fontFamily: 'Playfair Display', color: '#717171', }}>{`through how you sacrificially love and serve`}</p>
                  <p style={{fontSize: '12px', fontWeight: 700, fontFamily: 'Playfair Display', color: '#717171', }}>{`one another.”`}</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    </>
  )
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {namaundangan: 'Ersapta+dan+Pasangan'}},
            {params: {namaundangan: 'Evan+dan+Pasangan'}},
            {params: {namaundangan: 'Viny+dan+Pasangan'}},
            {params: {namaundangan: 'Pascalis+dan+Pasangan'}},
        ],
        fallback: true,
    }
  }

export async function getStaticProps(context) {
    let {namaundangan} = context.params;
    const namaundanganWord = String(namaundangan).split('+');
    let formattedNamaUndangan = '';
    for (let word of namaundanganWord) {
        if(word === 'dan') {
            word = '&';
        }
        formattedNamaUndangan += word[0].toUpperCase() + word.slice(1) + ' ';
    }

    formattedNamaUndangan = formattedNamaUndangan.trim();
    return {props: {formattedNamaUndangan: formattedNamaUndangan}}
}

export default UndanganWithNama;
