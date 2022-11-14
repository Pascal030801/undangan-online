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
import data from '../utils/data';
import Head from 'next/head';

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

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

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

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === submittedUcapan.length - 2 ? 0 : prevIndex + 1
        ),
      1000
    );

    return () => {
      resetTimeout();
    };
  }, [index, submittedUcapan.length]);

  const slideImages = data.imagesGallery;  

  return (
    <>
      <Head key='undangan'>
        <meta property="og:site_name" content="Undangan Pernikahan Yuda dan Ayuß" />
        <meta property="og:title" content="Undangan Pernikahan Yuda dan Ayuß" />
        <meta property="og:description" content={`Turut mengundang ${props.formattedNamaUndangan} ke pernikahan kami`} />
        <meta property="og:image" itemprop="image" content="https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/thumbnail%2F4b.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />
        <meta property="title" content="Undangan Pernikahan Yuda dan Ayu" />
      </Head>
        <div className={styles.undangan}>
            <audio ref={bgMusicRef} src="/static/background_music.mp3" autoPlay={true} loop={true}>
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
            <div className={`${styles.bottomnav}`}>
                <FontAwesomeIcon icon={faHands} className={`${styles.navbar_icon}`} onClick={scrollToGreetingDiv} />
                <FontAwesomeIcon icon={faFileLines} className={`${styles.navbar_icon}`} onClick={scrollToDetailDiv} />
                <FontAwesomeIcon icon={faHeart} className={`${styles.navbar_icon}`} onClick={scrollToPasanganDiv} />
                <FontAwesomeIcon icon={faLocationPin} className={`${styles.navbar_icon}`} onClick={scrollToLokasilDiv} />
                <FontAwesomeIcon icon={faAddressBook} className={`${styles.navbar_icon}`} onClick={scrollToReservationDiv} />
                <FontAwesomeIcon icon={faImages} className={`${styles.navbar_icon}`} onClick={scrollToGalleryDiv} />
                <FontAwesomeIcon icon={faGift} className={`${styles.navbar_icon}`} onClick={scrollToGiftDiv} />
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
              <img src='/static/detail_img1.jpeg' className={`${styles.detail_foto_pasangan} ${styles.detail_foto_pasangan_1}`} />
                <Fade>
                  <div className={`${styles.informasi_undangan}`}>
                    <p className={`${styles.namapasangan}`}>Yuda & Ayu</p>
                    <p className={`${styles.tanggal_pernikahan}`}>22 November 2022</p>
                  </div>
                </Fade>
                <img src='/static/1a.jpg' className={`${styles.detail_foto_pasangan} ${styles.detail_foto_pasangan_2}`} />
                <Fade>
                  <div className={`${styles.quote_alkitab_container}`}>
                    <p className={`${styles.quote_alkitab}`}>{`"Dan di atas semuanya itu:`}</p>
                    <p className={`${styles.quote_alkitab}`}>{`Kenakanlah kasih sebagai pengikat"`}</p>
                    <p className={`${styles.quote_alkitab}`}>{`Yang mempersatukan dan `}</p>
                    <p className={`${styles.quote_alkitab}`}>{`menyempurnakan."`}</p>
                    <p className={`${styles.quote_alkitab}`} style={{marginTop: '1em'}}>Kolose 3:14</p>
                  </div>
                </Fade>

            </div>
            <div 
              ref={pasanganRef} 
              className={`${styles.container} ${styles.pasangan}`} 
            >
                <div className={`${styles.mempelai_container}`} >
                  <div className={`${styles.mempelai_img}`}>
                    <Slide bottom cascade appear={true}>
                      <img alt='img' loading='eager' className={`${styles.pasangan_image}`} src={'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/Foto%20Yuda.png'} />
                    </Slide>
                  </div>
                  <Slide bottom cascade >
                    <div className={`${styles.info_mempelai}`}>
                      <div className={`${styles.nama_pasangan_container}`}>
                        <p className={styles.namapasangan}>apt. Yuda Siswanto, S.Farm</p>
                      </div>

                      <p className={styles.detailpasangan}>Putra Pertama dari</p>
                      <p className={styles.detailpasangan}>Bapak Ali Siswanto (alm)</p>
                      <p className={styles.detailpasangan}>& Ibu Ir. Magdalena, MM</p>
                      <p className={styles.detailpasangan}>(Bengkayang)</p>
                    </div>
                  </Slide>
                </div>
                <div className={`${styles.separator_container}`}>
                  <div className={styles.separator}></div>  
                  <Zoom>
                    <p className={`${styles.separator_text}`}>&</p>
                  </Zoom>
                  <div className={styles.separator}></div>
                </div>
                <div className={`${styles.mempelai_container}`}>
                  <div className={`${styles.mempelai_img}`}>
                    <Slide bottom cascade>
                      <div>
                          <img alt='img' loading='eager' className={`${styles.pasangan_image}`} src={'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/Foto%20Ayu.png'} />
                      </div>
                    </Slide>
                  </div>
                  <Slide bottom cascade>
                    <div className={`${styles.info_mempelai}`}>
                      <div className={`${styles.nama_pasangan_container}`}>
                        <p className={styles.namapasangan}>apt. Regina Ayudyaningsari</p>
                        <p className={styles.namapasangan}>Pradani, S.Farm</p>
                      </div>
                      
                      <p className={styles.detailpasangan}>Putri Pertama dari</p>
                      <p className={styles.detailpasangan}>Bapak Paulus Joko Prayitno, S.Pd, MM</p>
                      <p className={styles.detailpasangan}>& Ibu Retna Wikandani, S.Pd</p>
                      <p className={styles.detailpasangan}>(Bengkayang)</p>
                    </div>
                  </Slide>
                </div>
            </div>
            <div ref={lokasiRef} className={`${styles.container} ${styles.lokasi}`}>
                <Fade top>
                  <p className={`${styles.judul_lokasi}`}>Pemberkatan</p>
                </Fade>
                <div className={`${styles.lokasi_divider}`}></div>
                <Slide bottom cascade>
                  <p className={`${styles.tanggal_dan_waktu_acara} ${styles.tanggal_acara}`}>Selasa, 22 November 2022</p>
                  <p className={`${styles.tanggal_dan_waktu_acara}`}>09:00-Selesai</p>
                  <div className={`${styles.icon_container}`} >
                    <FontAwesomeIcon icon={faChurch} className={`${styles.undangan_icon}`} />
                  </div>
                  <p className={`${styles.nama_lokasi_undangan}`}>Gereja Santo Pius X</p>
                </Slide>
                <p className={`${styles.nama_lokasi_undangan} ${styles.nama_lokasi_undangan_spacer}`}>Bengkayang</p>
                <div className={`${styles.mainbutton}`} onClick={() => {openInNewTab('https://goo.gl/maps/vPCWqfYSJzg3E5GY8')}}>
                  Lihat Lokasi
                </div>
                <Fade top>
                  <p className={`${styles.judul_lokasi}`}>Resepsi</p>
                </Fade>
                <div className={`${styles.lokasi_divider}`}></div>
                <Slide bottom cascade>
                  <p className={`${styles.tanggal_dan_waktu_acara} ${styles.tanggal_acara}`}>Selasa, 22 November 2022</p>
                  <p className={`${styles.tanggal_dan_waktu_acara}`}>12:00-19:00</p>
                  <div className={`${styles.icon_container}`}>
                    <FontAwesomeIcon icon={faBuilding} className={`${styles.undangan_icon}`} />
                  </div>
                  <p className={`${styles.nama_lokasi_undangan}`}>Hotel Lala Golden</p>
                  <p className={`${styles.nama_lokasi_undangan} ${styles.nama_lokasi_undangan_spacer}`}>Bengkayang</p>
                </Slide>
                <div className={`${styles.mainbutton}`} onClick={() => {openInNewTab('https://goo.gl/maps/zo3ctXy9Rh1dnzUo6')}}>
                  Lihat Lokasi
                </div>
            </div>
            <div ref={reservationRef} className={`${styles.container} ${styles.reservation}`}>
                <div className={`${styles.form_container}`}>
                  <p className={`${styles.title}`} style={{}}>Reservasi</p>
                  <div className={`${styles.sub_title_container}`}>
                    <p className={`${styles.sub_title}`} >Konfirmasi Kehadiran</p>
                    <p className={`${styles.sub_title}`}>Tamu Undangan</p>
                  </div>

                  <form>
                      <div className={`${styles.input} ${styles.input_row}`}>
                        <label htmlFor='namahadir' className={`${styles.input_label}`}>Nama</label>
                        <input ref={inputNama} className={`${styles.input_field}`} type={'text'} id="namahadir" />
                      </div>
                      <div className={`${styles.input} ${styles.input_row}`}>
                        <label className={`${styles.input_label}`}>Ucapan</label>
                        <textarea ref={inputUcapan} className={`${styles.input_field}`} />
                      </div>
                      <div className={`${styles.input} ${styles.input_column}`}>
                        <p className={`${styles.konfirmasi_text}`} >Konfirmasi :</p>
                        <div className={`${styles.konfirmasi_radio_input}`}>
                            <input ref={inputHadir} name='StatusKehadiran' type={'radio'} value={'Ya, Saya Hadir'} id={'Ya'} />
                            <label htmlFor={'Ya'}>Ya, Saya Hadir</label>
                        </div>
                        <div className={`${styles.konfirmasi_radio_input}`}>
                            <input ref={inputRagu} name='StatusKehadiran' type={'radio'}  value={'Saya ragu-ragu'} id={'Ragu'} />
                            <label htmlFor={'Ragu'}>Saya ragu-ragu</label>
                        </div>
                        <div className={`${styles.konfirmasi_radio_input}`}>
                            <input ref={inputTidakHadir} name='StatusKehadiran' type={'radio'} value={'Maaf, Saya tidak bisa hadir'} id={'Tidak'} />
                            <label htmlFor={'Tidak'}>Maaf, Saya tidak bisa hadir</label>
                        </div>
                      </div>
                      <div className={`${styles.konfirmasi_btn_container}`}>
                        <button type={'submit'} className={`${styles.konfirmasi_btn}`} onClick={onKonfirmasiSubmit}>Kirim</button>
                      </div>
                  </form>
                </div>

                <div className={`${styles.slideshow}`}>
                  <div
                    className={`${styles.slideshowSlider}`}
                    style={{ transform: `translate3d(0, calc(-${index} * 6.5rem), 0)` }}
                  >
                    {submittedUcapan.map((ucapan, index) => (
                      <div
                        key={index}
                        className={`${styles.slide} ${styles.ucapan_card}`}
                      >
                        <p className={`${styles.nama_pengucap}`}>{ucapan.nama}</p>
                        <div className={`${styles.kalimat_ucapan}`}>
                          <p>{ucapan.ucapan}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            <div ref={galleryRef} className={`${styles.container} ${styles.gallery}`}>
                <p className={`${styles.gallery_title}`}>Galeri</p>
                <div className={`${styles.slide_container}`}>
                  <ReactImageGallery 
                      items={slideImages} 
                      showThumbnails 
                      thumbnailPosition='bottom' 
                      lazyLoad 
                      showFullscreenButton={false}
                      showPlayButton={false}
                      renderItem={(item) => {
                        return (
                            <img src={item.original} alt='image' className={`${styles.gallery_image}`} />
                        )
                      }}
                      renderThumbInner={(item) => {
                        return (<img src={item.thumbnail} alt='img' className={`${styles.gallery_thumbnail}`} />);
                      }}
                  />
                </div>
            </div>
            <div ref={giftRef} className={`${styles.container} ${styles.gift}`}>
                <p className={`${styles.title}`}>Gift</p>
                <p className={`${styles.subtitle}`}>Kehadiran Bapak/Ibu/Saudara(i) sekalian adalah kebahagiaan</p>
                <p className={`${styles.subtitle}`}>yang tak ternilai bagi kami dan keluarga, namun jika</p>
                <p className={`${styles.subtitle}`}>memberi merupakan tanda kasih, semoga hal tersebut</p>
                <p className={`${styles.subtitle}`}>menjadi pelengkap kebahagiaan kami</p>
                <div className={styles.bankcard} {...ayuBankLongPress}>
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
                <div className={styles.bankcard} {...yudaBankLongPress}>
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

                <p className={`${styles.title} ${styles.text}`}>Kirim Hadiah</p>
                <p className={`${styles.text}`}>Rumah Kami</p>
                <p className={`${styles.text}`}>Jl.Trisula, Gang Aur No 18,</p>
                <p className={`${styles.text}`}>Bukit Batu, Singkawang.</p>
            </div>
            <div className={`${styles.thankyou}`}>
                <div className={`${styles.thankyou_image}`}>
                    <div className={`${styles.image_overlay}`}>
                      <p className={`${styles.thankyou_text }`}>Terima Kasih</p>
                    </div>
                </div>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 40px', flexDirection: 'column'}}>
                  <p className={`${styles.quote}`}>{`“Have a good and goldy marriage`}</p>
                  <p className={`${styles.quote}`}>{`that shows the world Christ's love`}</p>
                  <p className={`${styles.quote}`}>{`through how you sacrificially love and serve`}</p>
                  <p className={`${styles.quote}`}>{`one another.”`}</p>
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
            {params: {namaundangan: 'Farmasi+USD+dan+Pasangan'}},
            {params: {namaundangan: 'Master+Sambat+dan+Pasangan'}},
            {params: {namaundangan: 'UWC+2015+dan+Pasangan'}},
            {params: {namaundangan: 'F.+Sonia+Ninette+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Birgitta+Lisbethiara,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'Kiki+Amelia+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Debora+Purwasista+C.,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'Devanti+Tarigan+dan+Pasangan'}},
            {params: {namaundangan: 'Melvin+Ingrid+Aurelya+dan+Pasangan'}},
            {params: {namaundangan: 'Keisha+Kharisma+dan+Pasangan'}},
            {params: {namaundangan: 'Shelva+Kharisma+dan+Pasangan'}},
            {params: {namaundangan: 'Paulina+Lusty+dan+Pasangan'}},
            {params: {namaundangan: 'Jocelyn+Tanya+dan+Pasangan'}},
            {params: {namaundangan: 'Juliana+Megawati+Simanjuntak+dan+Pasangan'}},
            {params: {namaundangan: 'Nuryanti+Renita+Padang+dan+Pasangan'}},
            {params: {namaundangan: 'Yuliana+Kahol+dan+Pasangan'}},
            {params: {namaundangan: 'Meilinda+Dwi+dan+Pasangan'}},
            {params: {namaundangan: 'Sani+Riwu+dan+Pasangan'}},
            {params: {namaundangan: 'Elisabeth+dan+Pasangan'}},
            {params: {namaundangan: 'Ega+Felik+Sudana+dan+Pasangan'}},
            {params: {namaundangan: 'Merry+Rachel+dan+Pasangan'}},
            {params: {namaundangan: 'Jessica+Eclarita+dan+Pasangan'}},
            {params: {namaundangan: 'Putri+Agustina+Karo+Karo+dan+Pasangan'}},
            {params: {namaundangan: 'Yelni+Salbabalat+dan+Pasangan'}},
            {params: {namaundangan: 'Merry+Ella+dan+Pasangan'}},
            {params: {namaundangan: 'Nelson+Reynaldi+dan+Pasangan'}},
            {params: {namaundangan: 'Michelle+Vica+dan+Pasangan'}},
            {params: {namaundangan: 'Erlinka+Fabiolla+dan+Pasangan'}},
            {params: {namaundangan: 'Anja+Natalia+dan+Pasangan'}},
            {params: {namaundangan: 'Reizkian+Yesaya+dan+Pasangan'}},
            {params: {namaundangan: 'Irwan+Manullang+dan+Pasangan'}},
            {params: {namaundangan: 'Jefri+Gibson+Nababan+dan+Pasangan'}},
            {params: {namaundangan: 'Jason+Hartanto+dan+Pasangan'}},
            {params: {namaundangan: 'Risma+Martasuri+dan+Pasangan'}},
            {params: {namaundangan: 'Ivan+Anthony+dan+Pasangan'}},
            {params: {namaundangan: 'Teddy+Nugraha+dan+Pasangan'}},
            {params: {namaundangan: 'Wisnu+Aji+dan+Pasangan'}},
            {params: {namaundangan: 'Apoteker+USD+dan+Pasangan'}},
            {params: {namaundangan: 'Jessica+dan+Pasangan'}},
            {params: {namaundangan: 'Rumiris+Silaen+dan+Pasangan'}},
            {params: {namaundangan: 'Maria+Larasati+dan+Pasangan'}},
            {params: {namaundangan: 'Margaretha+Etha+dan+Pasangan'}},
            {params: {namaundangan: 'Cynthia+Monica+dan+Pasangan'}},
            {params: {namaundangan: 'dr.+Nadia+Eka+Damayanti+dan+Pasangan'}},
            {params: {namaundangan: 'N.Riawan+dan+Pasangan'}},
            {params: {namaundangan: 'Pattrick+Octovino+G.+dan+Pasangan'}},
            {params: {namaundangan: 'Christianus+Raka+dan+Pasangan'}},
            {params: {namaundangan: 'Nathanael+Sibarani+dan+Pasangan'}},
            {params: {namaundangan: 'Agnes+Filia+dan+Pasangan'}},
            {params: {namaundangan: 'Clara+N.+dan+Pasangan'}},
            {params: {namaundangan: 'Maria+Sylvia+dan+Pasangan'}},
            {params: {namaundangan: 'Benedictus+Pradipta+dan+Pasangan'}},
            {params: {namaundangan: 'Satrio+&+Maria+dan+Pasangan'}},
            {params: {namaundangan: 'Aditya+Vembriarto+&+Cicilia+Ferry+dan+Pasangan'}},
            {params: {namaundangan: 'Albertus+Fanny+&+Maria+Aditya+dan+Pasangan'}},
            {params: {namaundangan: 'Susi+Sinambela+dan+Pasangan'}},
            {params: {namaundangan: 'Grace+Sinambela+dan+Pasangan'}},
            {params: {namaundangan: 'Boy+Andrew+dan+Pasangan'}},
            {params: {namaundangan: 'Ervina+Lorenza+dan+Pasangan'}},
            {params: {namaundangan: 'Eunike+Ella+dan+Pasangan'}},
            {params: {namaundangan: 'Evita+Lorenza+dan+Pasangan'}},
            {params: {namaundangan: 'Elsa+Audina+dan+Pasangan'}},
            {params: {namaundangan: 'Evita+Boli+dan+Pasangan'}},
            {params: {namaundangan: 'Lia+Amelia+Tarigas+dan+Pasangan'}},
            {params: {namaundangan: 'Akwilina+Gloria+Cici+dan+Pasangan'}},
            {params: {namaundangan: 'Taufik+dan+Pasangan'}},
            {params: {namaundangan: 'Bangun+Baramantya+dan+Pasangan'}},
            {params: {namaundangan: 'Budi+Wibawanta+dan+Pasangan'}},
            {params: {namaundangan: 'Eka+Sila+Kusna+Jaya+dan+Pasangan'}},
            {params: {namaundangan: 'Adi+Kristianto+dan+Pasangan'}},
            {params: {namaundangan: 'Wahyu+Haris+dan+Pasangan'}},
            {params: {namaundangan: 'Antonius+Djumadi+dan+Pasangan'}},
            {params: {namaundangan: 'Satria+Putra+Kanugrahan+dan+Pasangan'}},
            {params: {namaundangan: 'Pandega+Yoga+Kanugrahan+dan+Pasangan'}},
            {params: {namaundangan: 'Nayaka+Pranaja+Kanugrahan+dan+Pasangan'}},
            {params: {namaundangan: 'Octa+Viany+Laiyan+dan+Pasangan'}},
            {params: {namaundangan: 'Claudia+Yosephine+dan+Pasangan'}},
            {params: {namaundangan: 'Wage+Dading+W+dan+Pasangan'}},
            {params: {namaundangan: 'Dina+Marlena+dan+Pasangan'}},
            {params: {namaundangan: 'Vita+Ata+dan+Pasangan'}},
            {params: {namaundangan: 'Inka+Ratna+Dewi+dan+Pasangan'}},
            {params: {namaundangan: 'Melita+Endang+Pangaribuan+dan+Pasangan'}},
            {params: {namaundangan: 'Tri+Dharmawan+(Fen+Fen)+dan+Pasangan'}},
            {params: {namaundangan: 'Jhon+Mrand+dan+Pasangan'}},
            {params: {namaundangan: 'Yogi+Tjangesto+dan+Pasangan'}},
            {params: {namaundangan: 'General+Practice+RSSV+dan+Pasangan'}},
            {params: {namaundangan: 'dr.+Vanny+Febriana+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Nelli+Karina,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Corry+A.+Sinaga,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Rieneka+Eudia+Han,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Rita+Tjhin,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Christina,+S.Si.,+M.M.+dan+Pasangan'}},
            {params: {namaundangan: 'RSSV+2021+dan+Pasangan'}},
            {params: {namaundangan: 'Resti+Andriani+dan+Pasangan'}},
            {params: {namaundangan: 'Yosua+Febriyanto+dan+Pasangan'}},
            {params: {namaundangan: 'Ns.+Christian+Januardi+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Daud+Andreas,+S.Farm,+M.Si.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Albin+Supada,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Ratih+Arieska,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'PUBDOK+HISFARSI+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Ririn+Ulpha+Brigita,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Nurul+Masyithah,+M.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Yeni+Ridayani,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Moethia,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Agustia+Darmayanti,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Hegi+Ramadian+A.,S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Rusdiyanti,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Ridho+Bayu+Saputra,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Indrasari+Eka+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Jerry+Widiodi+Elwata,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'Hendriani+Saputri+Tiadora+dan+Pasangan'}},
            {params: {namaundangan: 'Emmaculata+Rara+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Rifani+Amalia,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'dr.+Fithriyyah+dan+Pasangan'}},
            {params: {namaundangan: 'apt.+Dini+Novindriana,+S.Farm.+dan+Pasangan'}},
            {params: {namaundangan: 'Anggun+Berlyana+dan+Pasangan'}},
            {params: {namaundangan: 'Dheta+Oceania+dan+Pasangan'}},
            {params: {namaundangan: 'Retha+Saragih+dan+Pasangan'}},
            {params: {namaundangan: 'Andita+Surya+dan+Pasangan'}},
            {params: {namaundangan: 'Julista+Iin+Aurianti+dan+Pasangan'}},
            {params: {namaundangan: 'Ria+Utami+dan+Pasangan'}},
            {params: {namaundangan: 'Farmasi+Family+RSSV+dan+Pasangan'}},
            {params: {namaundangan: 'Noviza+Vivi+dan+Pasangan'}},
            {params: {namaundangan: 'Maria+Erni+Yekti+Lestari+dan+Pasangan'}},
            {params: {namaundangan: 'Johan+Pandya+Paramahita+dan+Pasangan'}},
            {params: {namaundangan: 'Rafael+Savio+dan+Pasangan'}},
            {params: {namaundangan: 'Jonathan+Rahaditya+dan+Pasangan'}},
            {params: {namaundangan: 'Raras+Widya+dan+Pasangan'}},
            {params: {namaundangan: 'Magdalena+Cesya+dan+Pasangan'}},
            {params: {namaundangan: 'E.+Dara+Sampata+dan+Pasangan'}},
            {params: {namaundangan: 'Fitri+Wulandari+dan+Pasangan'}},
            {params: {namaundangan: 'Erlynda+Kho+dan+Pasangan'}},
            {params: {namaundangan: 'Sean+Sebastian+Felim+dan+Pasangan'}},
            {params: {namaundangan: 'Naomi+Anna+Silaban+dan+Pasangan'}},
            {params: {namaundangan: 'Eveline+Trifena+dan+Pasangan'}},
            {params: {namaundangan: 'Chelsea+Celine+dan+Pasangan'}},
            {params: {namaundangan: 'Christine+Aprilia+dan+Pasangan'}},
            {params: {namaundangan: 'Agatha+Ratna+dan+Pasangan'}},
            {params: {namaundangan: 'Jermia+Tampubolon+dan+Pasangan'}},
            {params: {namaundangan: 'Yemima+Holy+Sitorus+dan+Pasangan'}},
            {params: {namaundangan: 'Cristine+Lewy+Nainggolan+dan+Pasangan'}},
            {params: {namaundangan: 'Obed+Silalahi+dan+Pasangan'}},
            {params: {namaundangan: 'Jessica+Irene+dan+Pasangan'}},
            {params: {namaundangan: 'dr.+Ruth+Yanti+dan+Pasangan'}},
            {params: {namaundangan: 'Marco+Cibro+dan+Pasangan'}},
            {params: {namaundangan: 'Dheta+Oceania+dan+Pasangan'}},
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
