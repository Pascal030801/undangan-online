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
  
      if(inputNama.current.value === '' || inputUcapan.current.value === '') {
        toast('Nama atau Ucapan tidak boleh kosong', {
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
        return;
      }
      
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
                        <input ref={inputNama} className={`${styles.input_field}`} placeholder='nama' type={'text'} id="namahadir" />
                      </div>
                      <div className={`${styles.input} ${styles.input_row}`}>
                        <label className={`${styles.input_label}`}>Ucapan</label>
                        <textarea 
                          ref={inputUcapan} 
                          className={`${styles.input_field}`}
                          placeholder='maksimal 100 karakter' 
                          onChange={(e) => {
                            if(e.target.value.length > 100){
                              console.log('lebih')
                              inputUcapan.current.value = e.target.value.substring(0,100)
                            }
                          }}
                        />
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
                    style={{ transform: `translate3d(0, calc(-${index} * 10.5rem), 0)` }}
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
            {params: {namaundangan: 'Farmasi+USD'}},
            {params: {namaundangan: 'Master+Sambat'}},
            {params: {namaundangan: 'UWC+2015'}},
            {params: {namaundangan: 'F.+Sonia+Ninette+dan+Partner'}},
            {params: {namaundangan: 'apt.+Birgitta+Lisbethiara,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'Kiki+Amelia+dan+Partner'}},
            {params: {namaundangan: 'apt.+Debora+Purwasista+C.,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'Devanti+Tarigan+dan+Partner'}},
            {params: {namaundangan: 'Melvin+Ingrid+Aurelya+dan+Partner'}},
            {params: {namaundangan: 'Keisha+Kharisma+dan+Partner'}},
            {params: {namaundangan: 'Shelva+Kharisma+dan+Partner'}},
            {params: {namaundangan: 'Paulina+Lusty+dan+Partner'}},
            {params: {namaundangan: 'Jocelyn+Tanya+dan+Partner'}},
            {params: {namaundangan: 'Juliana+Megawati+Simanjuntak+dan+Partner'}},
            {params: {namaundangan: 'Nuryanti+Renita+Padang+dan+Partner'}},
            {params: {namaundangan: 'Yuliana+Kahol+dan+Partner'}},
            {params: {namaundangan: 'Meilinda+Dwi+dan+Partner'}},
            {params: {namaundangan: 'Sani+Riwu+dan+Partner'}},
            {params: {namaundangan: 'Elisabeth+dan+Partner'}},
            {params: {namaundangan: 'Ega+Felik+Sudana+dan+Partner'}},
            {params: {namaundangan: 'Merry+Rachel+dan+Partner'}},
            {params: {namaundangan: 'Jessica+Eclarita+dan+Partner'}},
            {params: {namaundangan: 'Putri+Agustina+Karo+Karo+dan+Partner'}},
            {params: {namaundangan: 'Yelni+Salbabalat+dan+Partner'}},
            {params: {namaundangan: 'Merry+Ella+dan+Partner'}},
            {params: {namaundangan: 'Nelson+Reynaldi+dan+Partner'}},
            {params: {namaundangan: 'Michelle+Vica+dan+Partner'}},
            {params: {namaundangan: 'Erlinka+Fabiolla+dan+Partner'}},
            {params: {namaundangan: 'Anja+Natalia+dan+Partner'}},
            {params: {namaundangan: 'Reizkian+Yesaya+dan+Partner'}},
            {params: {namaundangan: 'Irwan+Manullang+dan+Partner'}},
            {params: {namaundangan: 'Jefri+Gibson+Nababan+dan+Partner'}},
            {params: {namaundangan: 'Jason+Hartanto+dan+Partner'}},
            {params: {namaundangan: 'Risma+Martasuri+dan+Partner'}},
            {params: {namaundangan: 'Ivan+Anthony+dan+Partner'}},
            {params: {namaundangan: 'Teddy+Nugraha+dan+Partner'}},
            {params: {namaundangan: 'Wisnu+Aji+dan+Partner'}},
            {params: {namaundangan: 'Apoteker+USD'}},
            {params: {namaundangan: 'Jessica+dan+Partner'}},
            {params: {namaundangan: 'Rumiris+Silaen+dan+Partner'}},
            {params: {namaundangan: 'Maria+Larasati+dan+Partner'}},
            {params: {namaundangan: 'Margaretha+Etha+dan+Partner'}},
            {params: {namaundangan: 'Cynthia+Monica+dan+Partner'}},
            {params: {namaundangan: 'dr.+Nadia+Eka+Damayanti+dan+Partner'}},
            {params: {namaundangan: 'N.Riawan+dan+Partner'}},
            {params: {namaundangan: 'Pattrick+Octovino+G.+dan+Partner'}},
            {params: {namaundangan: 'Christianus+Raka+dan+Partner'}},
            {params: {namaundangan: 'Nathanael+Sibarani+dan+Partner'}},
            {params: {namaundangan: 'Agnes+Filia+dan+Partner'}},
            {params: {namaundangan: 'Clara+N.+dan+Partner'}},
            {params: {namaundangan: 'Maria+Sylvia+dan+Partner'}},
            {params: {namaundangan: 'Benedictus+Pradipta+dan+Partner'}},
            {params: {namaundangan: 'Satrio+dan+Partner'}},
            {params: {namaundangan: 'Aditya+Vembriarto+dan+Partner'}},
            {params: {namaundangan: 'Albertus+Fanny+dan+Partner'}},
            {params: {namaundangan: 'Susi+Sinambela+dan+Partner'}},
            {params: {namaundangan: 'Grace+Sinambela+dan+Partner'}},
            {params: {namaundangan: 'Boy+Andrew+dan+Partner'}},
            {params: {namaundangan: 'Ervina+Lorenza+dan+Partner'}},
            {params: {namaundangan: 'Eunike+Ella+dan+Partner'}},
            {params: {namaundangan: 'Evita+Lorenza+dan+Partner'}},
            {params: {namaundangan: 'Elsa+Audina+dan+Partner'}},
            {params: {namaundangan: 'Evita+Boli+dan+Partner'}},
            {params: {namaundangan: 'Lia+Amelia+Tarigas+dan+Partner'}},
            {params: {namaundangan: 'Akwilina+Gloria+Cici+dan+Partner'}},
            {params: {namaundangan: 'Taufik+dan+Partner'}},
            {params: {namaundangan: 'Bangun+Baramantya+dan+Partner'}},
            {params: {namaundangan: 'Budi+Wibawanta+dan+Partner'}},
            {params: {namaundangan: 'Eka+Sila+Kusna+Jaya+dan+Partner'}},
            {params: {namaundangan: 'Adi+Kristianto+dan+Partner'}},
            {params: {namaundangan: 'Wahyu+Haris+dan+Partner'}},
            {params: {namaundangan: 'Antonius+Djumadi+dan+Partner'}},
            {params: {namaundangan: 'Satria+Putra+Kanugrahan+dan+Partner'}},
            {params: {namaundangan: 'Pandega+Yoga+Kanugrahan+dan+Partner'}},
            {params: {namaundangan: 'Nayaka+Pranaja+Kanugrahan+dan+Partner'}},
            {params: {namaundangan: 'Octa+Viany+Laiyan+dan+Partner'}},
            {params: {namaundangan: 'Claudia+Yosephine+dan+Partner'}},
            {params: {namaundangan: 'Wage+Dading+W+dan+Partner'}},
            {params: {namaundangan: 'Dina+Marlena+dan+Partner'}},
            {params: {namaundangan: 'Vita+Ata+dan+Partner'}},
            {params: {namaundangan: 'Inka+Ratna+Dewi+dan+Partner'}},
            {params: {namaundangan: 'Melita+Endang+Pangaribuan+dan+Partner'}},
            {params: {namaundangan: 'Tri+Dharmawan+(Fen+Fen)+dan+Partner'}},
            {params: {namaundangan: 'Jhon+Mrand+dan+Partner'}},
            {params: {namaundangan: 'Yogi+Tjangesto+dan+Partner'}},
            {params: {namaundangan: 'General+Practice+RSSV'}},
            {params: {namaundangan: 'dr.+Vanny+Febriana+dan+Partner'}},
            {params: {namaundangan: 'apt.+Nelli+Karina,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Corry+A.+Sinaga,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Rieneka+Eudia+Han,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Rita+Tjhin,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Christina,+S.Si.,+M.M.+dan+Partner'}},
            {params: {namaundangan: 'RSSV+2021'}},
            {params: {namaundangan: 'Resti+Andriani+dan+Partner'}},
            {params: {namaundangan: 'Yosua+Febriyanto+dan+Partner'}},
            {params: {namaundangan: 'Ns.+Christian+Januardi+dan+Partner'}},
            {params: {namaundangan: 'apt.+Daud+Andreas,+S.Farm,+M.Si.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Albin+Supada,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Ratih+Arieska,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'PUBDOK+HISFARSI'}},
            {params: {namaundangan: 'apt.+Ririn+Ulpha+Brigita,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Nurul+Masyithah,+M.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Yeni+Ridayani,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Moethia,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Agustia+Darmayanti,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Hegi+Ramadian+A.,S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Rusdiyanti,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Ridho+Bayu+Saputra,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Indrasari+Eka,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'apt.+Jerry+Widiodi+Elwata,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'Hendriani+Saputri+Tiadora+dan+Partner'}},
            {params: {namaundangan: 'Emmaculata+Rara+dan+Partner'}},
            {params: {namaundangan: 'apt.+Rifani+Amalia,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'dr.+Fithriyyah+dan+Partner'}},
            {params: {namaundangan: 'apt.+Dini+Novindriana,+S.Farm.+dan+Partner'}},
            {params: {namaundangan: 'Anggun+Berlyana+dan+Partner'}},
            {params: {namaundangan: 'Dheta+Oceania+dan+Partner'}},
            {params: {namaundangan: 'Retha+Saragih+dan+Partner'}},
            {params: {namaundangan: 'Andita+Surya+dan+Partner'}},
            {params: {namaundangan: 'Julista+Iin+Aurianti+dan+Partner'}},
            {params: {namaundangan: 'Ria+Utami+dan+Partner'}},
            {params: {namaundangan: 'Farmasi+Family+RSSV+dan+Partner'}},
            {params: {namaundangan: 'Noviza+Vivi+dan+Partner'}},
            {params: {namaundangan: 'Maria+Erni+Yekti+Lestari+dan+Partner'}},
            {params: {namaundangan: 'Johan+Pandya+Paramahita+dan+Partner'}},
            {params: {namaundangan: 'Rafael+Savio+dan+Partner'}},
            {params: {namaundangan: 'Jonathan+Rahaditya+dan+Partner'}},
            {params: {namaundangan: 'Raras+Widya+dan+Partner'}},
            {params: {namaundangan: 'Magdalena+Cesya+dan+Partner'}},
            {params: {namaundangan: 'E.+Dara+Sampata+dan+Partner'}},
            {params: {namaundangan: 'Fitri+Wulandari+dan+Partner'}},
            {params: {namaundangan: 'Erlynda+Kho+dan+Partner'}},
            {params: {namaundangan: 'Sean+Sebastian+Felim+dan+Partner'}},
            {params: {namaundangan: 'Naomi+Anna+Silaban+dan+Partner'}},
            {params: {namaundangan: 'Eveline+Trifena+dan+Partner'}},
            {params: {namaundangan: 'Chelsea+Celine+dan+Partner'}},
            {params: {namaundangan: 'Christine+Aprilia+dan+Partner'}},
            {params: {namaundangan: 'Agatha+Ratna+dan+Partner'}},
            {params: {namaundangan: 'Jermia+Tampubolon+dan+Partner'}},
            {params: {namaundangan: 'Yemima+Holy+Sitorus+dan+Partner'}},
            {params: {namaundangan: 'Cristine+Lewy+Nainggolan+dan+Partner'}},
            {params: {namaundangan: 'Obed+Silalahi+dan+Partner'}},
            {params: {namaundangan: 'Jessica+Irene+dan+Partner'}},
            {params: {namaundangan: 'dr.+Ruth+Yanti+dan+Partner'}},
            {params: {namaundangan: 'Marco+Cibro+dan+Partner'}},
            {params: {namaundangan: 'Martha+Ranny+dan+Partner'}},
            {params: {namaundangan: 'Theresia+Riawati+dan+Partner'}},
            {params: {namaundangan: 'Pamela+dan+Partner'}},
            {params: {namaundangan: 'Marisa+Icha+dan+Partner'}},
            {params: {namaundangan: 'Eka+dan+Partner'}},
            {params: {namaundangan: 'Cressendo+Choir'}},
            {params: {namaundangan: 'TPPKK+Bengkayang'}},
            {params: {namaundangan: 'SMKN+1+Bengkayang'}},
            {params: {namaundangan: 'Ida+Nurfitriana+Minsanis+dan+Partner'}},
            {params: {namaundangan: 'Vera+Teguh+dan+Partner'}},
            {params: {namaundangan: 'Veri+Teguh+Mandiri+dan+Partner'}},
            {params: {namaundangan: 'A.+Gunawan+Susilo+dan+Partner'}},
            {params: {namaundangan: 'V.+Kabul+Widodo+dan+Partner'}},
            {params: {namaundangan: 'Petrus+Joko+Utomo+dan+Partner'}},
            {params: {namaundangan: 'Theresia+Ardiyanti+Pratiwi+dan+Partner'}},
            {params: {namaundangan: 'Zuni+Setyani+dan+Partner'}},
            {params: {namaundangan: 'Heru+Prasaja+dan+Partner'}},
            {params: {namaundangan: 'Lilis+Mustikaningsih+dan+Partner'}},
            {params: {namaundangan: 'PUBDOK+RABERCAB'}},
            {params: {namaundangan: 'Andrias+Andi+dan+Partner'}},
            {params: {namaundangan: 'Rani+Vegelia+Sihombing+dan+Partner'}},
            {params: {namaundangan: 'Dokter+Rawat+Inap+RSSV'}},
            {params: {namaundangan: 'Dokter+IGD+RSSV'}},
            {params: {namaundangan: 'Pengurus+IAI+PC+Kota+Singkawang'}},
            {params: {namaundangan: 'Johanes+Evan+Boli+RP+dan+Partner'}},
            {params: {namaundangan: 'Hengky+dan+Partner'}},
            {params: {namaundangan: 'Hillary+Tanida+Stephani+Sitompul+dan+Partner'}},
            {params: {namaundangan: 'Pier+Chrisman+Sudya+dan+Partner'}},
            {params: {namaundangan: 'Theodorus+Januar+Kristi+Luvi+dan+Partner'}},
            {params: {namaundangan: 'Viny+Lea+Kastila+dan+Partner'}},
            {params: {namaundangan: 'Gunard+Amerigo+Rimba+dan+Partner'}},
            {params: {namaundangan: 'Leonides+Agung+Anggara+dan+Partner'}},
            {params: {namaundangan: 'Agum+Agasi+dan+Partner'}},
            {params: {namaundangan: 'Avila+Delvia+dan+Partner'}},
            {params: {namaundangan: 'Akwila+Delvita+dan+Partner'}},
            {params: {namaundangan: 'M.+Ghazi+Kamal+dan+Partner'}},
            {params: {namaundangan: 'Syaikul+Ardi+Narasoma+dan+Partner'}},
            {params: {namaundangan: 'Yansen+Barus+dan+Partner'}},
            {params: {namaundangan: 'Erik+Dakusa+dan+Partner'}},
            {params: {namaundangan: 'Farida+Nuryaningsih+dan+Partner'}},
            {params: {namaundangan: 'Priyo+Pamungkas+dan+Partner'}},
            {params: {namaundangan: 'Nita+Tri+Madya+.R+dan+Partner'}},
            {params: {namaundangan: 'Erik+Kurniawan+dan+Partner'}},
            {params: {namaundangan: 'Ruben+Setiawan+.P+dan+Partner'}},
            {params: {namaundangan: 'Bherniko+Permana+.P+dan+Partner'}},
            {params: {namaundangan: 'Carles+Adam+Irwan+LG+dan+Partner'}},
            {params: {namaundangan: 'Jaen+Ernest+.N+dan+Partner'}},
            {params: {namaundangan: 'Hans+Parta+.N+dan+Partner'}},
            {params: {namaundangan: 'Reza+Fikri+Utama+dan+Partner'}},
            {params: {namaundangan: 'Fahrumsyah+Jali+dan+Partner'}},
            {params: {namaundangan: 'Adytia+Triwardana+dan+Partner'}},
            {params: {namaundangan: 'Irsan+Nasution+dan+Partner'}},
            {params: {namaundangan: 'Venyta+Cynhtia+Samosir+dan+Partner'}},
            {params: {namaundangan: 'Desi+Ardianti+Damanik+dan+Partner'}},
            {params: {namaundangan: 'Yasinta+Lucia+dan+Partner'}},
            {params: {namaundangan: 'Yeni+Rori+dan+Partner'}},
            {params: {namaundangan: 'Susi+Junianti+Situmeang+dan+Partner'}},
            {params: {namaundangan: 'Delviana+dan+Partner'}},
            {params: {namaundangan: 'Hoko+Wilopo+dan+Partner'}},
            {params: {namaundangan: 'Septania+Romauli+dan+Partner'}},
            {params: {namaundangan: 'Wina+Anggreni+dan+Partner'}},
            {params: {namaundangan: 'Yuni+Sari+dan+Partner'}},
            {params: {namaundangan: 'Reinaldo+Leander+dan+Partner'}},
            {params: {namaundangan: 'Elmi+Farida+dan+Partner'}},
            {params: {namaundangan: 'Julia+Mentari+dan+Partner'}},
            {params: {namaundangan: 'Liliani+Thomas+dan+Partner'}},
            {params: {namaundangan: 'Fransisca+dan+Partner'}},
            {params: {namaundangan: 'Chaterine+dan+Partner'}},
            {params: {namaundangan: 'Cindy+Lofina+dan+Partner'}},
            {params: {namaundangan: 'Erikson+Sinaga+dan+Partner'}},
            {params: {namaundangan: 'Brandon+Salim+dan+Partner'}},
            {params: {namaundangan: 'Raymond+Barus+dan+Partner'}},
            {params: {namaundangan: 'Aldo+Josua+dan+Partner'}},
            {params: {namaundangan: 'Febryanto+Saragih+dan+Partner'}},
            {params: {namaundangan: 'Letare+Simamora+dan+Partner'}},
            {params: {namaundangan: 'Deni+Sigar+dan+Partner'}},
            {params: {namaundangan: 'Anderianto+Ori+dan+Partner'}},
            {params: {namaundangan: 'Buana+LG+dan+Partner'}},
            {params: {namaundangan: 'Tedy+dan+Partner'}},
            {params: {namaundangan: 'Novan+Anugrah+dan+Partner'}},
            {params: {namaundangan: 'Fajar+Tubiyanto+dan+Partner'}},
            {params: {namaundangan: 'Han+Bester+dan+Partner'}},
            {params: {namaundangan: 'Fredy+dan+Partner'}},
            {params: {namaundangan: 'Loron+dan+Partner'}},
            {params: {namaundangan: 'SMPN+1+Bengkayang'}},
            {params: {namaundangan: 'SMA+STBK+Atena'}},
            {params: {namaundangan: 'Farmasi+USU+2013'}},
            {params: {namaundangan: 'apt.+Muhamad+Nur+Khairudin,+S.Farm+dan+Partner'}},
            {params: {namaundangan: 'Yulenta+Dora+dan+Partner'}},
            {params: {namaundangan: 'dr.+Argunmas+dan+Partner'}},
            {params: {namaundangan: 'Antonius+Suhardi+dan+Partner'}},
            {params: {namaundangan: 'Agnes+Siwi+dan+Partner'}},
            {params: {namaundangan: 'St.+Gerald+Ethelie+dan+Partner'}},
            {params: {namaundangan: 'Agatha+Astri+dan+Partner'}},
            {params: {namaundangan: 'Helen+Cynthia+dan+Partner'}},
            {params: {namaundangan: 'Pipit+Puspitasari+dan+Partner'}},
            {params: {namaundangan: 'Humas+Titrasi'}},
            {params: {namaundangan: 'Kornelius+Tony,+S.Pd.,+M.Si+dan+Partner'}},
            {params: {namaundangan: 'Ulfa+Tunisak+dan+Partner'}},
            {params: {namaundangan: 'Devi+Oktavitalis+dan+Partner'}},
            {params: {namaundangan: 'PB.+Pemda'}},
            {params: {namaundangan: 'PB.+Satria'}},
            {params: {namaundangan: 'Deus+dan+Partner'}},
            {params: {namaundangan: 'Dicky+Candra+Prawira+dan+Partner'}},
            {params: {namaundangan: 'Samsul+Bahri+dan+Partner'}},
            {params: {namaundangan: 'Herfi+Agoesta+dan+Partner'}},
            {params: {namaundangan: 'Jonatan+dan+Partner'}},
            {params: {namaundangan: 'Lukas+dan+Partner'}},
            {params: {namaundangan: 'Heldy+dan+Partner'}},
            {params: {namaundangan: 'Stanley+Fernando+dan+Partner'}},
            {params: {namaundangan: 'Mario+Fernando+Tanalepy+dan+Partner'}},
            {params: {namaundangan: 'Erico+Mario+Sandi+dan+Partner'}},
            {params: {namaundangan: 'Providentius+Regodian+dan+Partner'}},
            {params: {namaundangan: 'Agung+Triatmojo+dan+Partner'}},
            {params: {namaundangan: 'Cristin+Virgyantari+dan+Partner'}},
            {params: {namaundangan: 'Apridawati+Elistyandari+dan+Partner'}},
            {params: {namaundangan: 'SMP+N+3+Sleman+dan+Partner'}},
            {params: {namaundangan: 'BPW+JMKI+Jogja+dan+Partner'}},
  
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
