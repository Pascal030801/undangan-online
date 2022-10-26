/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react'
import styles from '../styles/UndanganWithNama.module.css'
import {faChurch, faBuilding, faHands, faFileLines, faHeart, faLocationPin, faAddressBook, faImages, faGift} from '@fortawesome/free-solid-svg-icons'
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import useLongPress from '../customHooks/useLongPress';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

function UndanganWithNama(props) {
  const greetingRef = useRef();
  const detailRef = useRef();
  const pasanganRef = useRef();
  const lokasiRef = useRef();
  const reservationRef = useRef();
  const galleryRef = useRef();
  const giftRef = useRef();

  const router = useRouter();

  const scrollToGreetingDiv = () => {
    greetingRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const scrollToDetailDiv = () => {
    detailRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const scrollToPasanganDiv = () => {
    pasanganRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const scrollToLokasilDiv = () => {
    lokasiRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const scrollToReservationDiv = () => {
    reservationRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const scrollToGalleryDiv = () => {
    galleryRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const scrollToGiftDiv = () => {
    giftRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onKonfirmasiSubmit = (e) => {
    e.preventDefault();
    
  }

  const onAyuLongPress = () => {
    console.log('longpress is triggered');
    navigator.clipboard.writeText('002901141813500');
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
  };

  const onYudaLongPress = () => {
    console.log('longpress is triggered');
    navigator.clipboard.writeText('0112201500005042')
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

            <div className={`${styles.bottomnav}`}  style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
                <FontAwesomeIcon icon={faHands} style={{fontSize: '25px', color: '#FFFFFF'}} onClick={scrollToGreetingDiv} />
                <FontAwesomeIcon icon={faFileLines} style={{fontSize: '25px', color: '#FFFFFF'}} onClick={scrollToDetailDiv} />
                <FontAwesomeIcon icon={faHeart} style={{fontSize: '25px', color: '#FFFFFF'}} onClick={scrollToPasanganDiv} />
                <FontAwesomeIcon icon={faLocationPin} style={{fontSize: '25px', color: '#FFFFFF'}} onClick={scrollToLokasilDiv} />
                <FontAwesomeIcon icon={faAddressBook} style={{fontSize: '25px', color: '#FFFFFF'}} onClick={scrollToReservationDiv} />
                <FontAwesomeIcon icon={faImages} style={{fontSize: '25px', color: '#FFFFFF'}} onClick={scrollToGalleryDiv} />
                <FontAwesomeIcon icon={faGift} style={{fontSize: '25px', color: '#FFFFFF'}}onClick={scrollToGiftDiv} />
            </div>
            <div ref={greetingRef} className={`${styles.container} ${styles.greeting}`}>
                <div className={`${styles.hiasan}`}></div>
                <div style={{alignItems: 'center', justifyContent: 'center', flex: 1, height: 'calc(100vh - 59px)', display: 'flex', flexDirection: 'column'}} >
                <h3 style={{fontFamily: "Poppins", fontWeight: 700, fontSize: "14px", lineHeight: "21px", textAlign: 'center', marginBottom: '60px'}}>we are getting married</h3>
                <p className={styles.namapasangan}>Yuda</p>
                <p className={styles.namapasangan}>&</p>
                <p className={styles.namapasangan}>Ayu</p>
                <div style={{marginTop: '60px', marginBottom: '40px'}}>
                    <p className={styles.tamuundangan}>Kepada Yth.</p>
                    <p className={styles.tamuundangan}>{props.formattedNamaUndangan}</p>
                    <p className={styles.tamuundangan}>di tempat</p>
                </div>

                <div className={`${styles.mainbutton}`} onClick={scrollToDetailDiv}>
                    BUKA UNDANGAN
                </div>
                </div>

            </div>
            
            <div ref={detailRef} className={`${styles.container} ${styles.detail}`} style={{display: 'flex', flexDirection: 'column'}} id="detail">
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
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', marginBottom: '20px'}}>
                <p className={`${styles.namapasangan}`}>Yuda & Ayu</p>
                <p className={`${styles.tanggal_pernikahan}`}>22 November 2022</p>
                </div>
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
                <div className={`${styles.quote_alkitab_container}`}>
                <p className={`${styles.quote_alkitab}`}>{`"Dan di atas semuanya itu:`}</p>
                <p className={`${styles.quote_alkitab}`}>{`Kenakanlah kasih sebagai pengikat"`}</p>
                <p className={`${styles.quote_alkitab}`}>{`Yang mempersatukan dan `}</p>
                <p className={`${styles.quote_alkitab}`}>{`Yang mempersatukan dan menyempurnakan."`}</p>
                <p className={`${styles.quote_alkitab}`} style={{marginTop: '1em'}}>Kolose 3:14</p>
                </div>

            </div>
            <div ref={pasanganRef} className={`${styles.container} ${styles.pasangan}`}>
                <div style={{alignItems: 'center', justifyContent: 'center', flex: 1, display: 'flex', flexDirection: 'column'}}> 
                <div>
                    <img alt='img' style={{width: '128px'}} src={'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/Foto%20Yuda.png'} />
                </div>
                <p className={styles.namapasangan}>apt. Yuda Siswanto, S.Farm</p>
                <p className={styles.detailpasangan}>Putra Pertama dari</p>
                <p className={styles.detailpasangan}>Bapak Ali Siswanto (alm)</p>
                <p className={styles.detailpasangan}>& Ibu Ir. Magdalena, MM</p>
                <p className={styles.detailpasangan}>(Bengkayang)</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <div className={styles.separator}></div>
                <p style={{fontSize: '36px', marginLeft: '18px', marginRight: '18px', fontFamily: 'Cormorant Upright'}}>&</p>
                <div className={styles.separator}></div>
                </div>
                <div style={{alignItems: 'center', justifyContent: 'center', flex: 1, display: 'flex', flexDirection: 'column'}}>
                <div>
                    <img alt='img' style={{width: '128px'}} src={'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/Foto%20Ayu.png'} />
                </div>
                <p className={styles.namapasangan}>apt. Regina Ayudyaningsari Pradani, S.Farm</p>
                <p className={styles.detailpasangan}>Putri Pertama dari</p>
                <p className={styles.detailpasangan}>Bapak Paulus Joko Prayitno, S.Pd, MM</p>
                <p className={styles.detailpasangan}>& Ibu Retna Wikandani, S.Pd</p>
                <p className={styles.detailpasangan}>(Bengkayang)</p>
                </div>
            </div>
            <div ref={lokasiRef} className={`${styles.container} ${styles.lokasi}`}>
                <p style={{fontWeight: '700', fontFamily: 'Playfair Display', fontSize: '40px', textAlign: 'center', color: '#F7CB20'}}>Pemberkatan</p>
                <div style={{minHeight: '3px', minWidth: '194px', marginTop: '14px', marginBottom: '14px', backgroundColor: '#F7CB20'}}></div>
                <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#717171', marginBottom: '14px'}}>Selasa, 22 November 2022</p>
                <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#717171'}}>09:00-Selesai</p>
                <div style={{minHeight: '3px', minWidth: '143px', marginTop: '14px', marginBottom: '14px', backgroundColor: '#F7CB20'}}></div>
                <FontAwesomeIcon icon={faChurch} style={{fontSize: '55px', marginBottom: '14px'}} />
                <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#606060',}}>Gereja Santo Pius X</p>
                <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#606060', marginBottom: '14px'}}>Bengkayang</p>
                <div className={`${styles.mainbutton}`} onClick={() => {openInNewTab('https://goo.gl/maps/vPCWqfYSJzg3E5GY8')}}>
                Lihat Lokasi
                </div>
                <p style={{fontWeight: '700', fontFamily: 'Playfair Display', fontSize: '40px', textAlign: 'center', color: '#F7CB20'}}>Resepsi</p>
                <div style={{minHeight: '3px', minWidth: '194px', marginTop: '14px', marginBottom: '14px', backgroundColor: '#F7CB20'}}></div>
                <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#717171', marginBottom: '14px'}}>Selasa, 22 November 2022</p>
                <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#717171'}}>12:00-19:00</p>
                <div style={{minHeight: '3px', minWidth: '143px', marginTop: '14px', marginBottom: '14px', backgroundColor: '#F7CB20'}}></div>
                <FontAwesomeIcon icon={faBuilding} style={{fontSize: '55px', marginBottom: '14px'}} />
                <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#606060'}}>Hotel Lala Golden</p>
                <p style={{fontWeight: '700', fontFamily: 'PT Serif', fontSize: '13px', textAlign: 'center', color: '#606060', marginBottom: '14px'}}>Bengkayang</p>
                <div className={`${styles.mainbutton}`} onClick={() => {openInNewTab('https://goo.gl/maps/zo3ctXy9Rh1dnzUo6')}}>
                Lihat Lokasi
                </div>
            </div>
            <div ref={reservationRef} className={`${styles.container} ${styles.reservation}`}>
                <div style={{backgroundColor: '#242424', marginLeft: '10px', marginRight: '10px', marginTop: '102px', marginBottom: '30px', color: '#FFFFFF', paddingLeft: '55px', paddingRight: '51px', paddingTop: '42px', paddingBottom: '51px'}}>
                <p style={{fontFamily: 'Playfair Display', fontSize: '36px', color: '#F7CB20', fontWeight: 700, marginBottom: '6px'}}>Reservasi</p>
                <p style={{fontFamily: 'PT Serif', fontSize: '11px', color: '#FFFFFF', fontWeight: 575}}>Konfirmasi Kehadiran</p>
                <p style={{fontFamily: 'PT Serif', fontSize: '11px', color: '#FFFFFF', fontWeight: 575, marginBottom: '52px'}}>Tamu Undangan</p>

                <form>
                    <div className={styles.input} style={{display: 'flex', flex: 1, flexDirection: 'row', marginBottom: '24px'}}>
                    <div style={{display: 'flex', flex: 1}}>
                        <label htmlFor='namahadir'>Nama</label>
                    </div>
                    <div style={{display: 'flex', flex: 3}}>
                        <label htmlFor='namahadir' style={{marginRight: '11px'}}>:</label>
                        <input type={'text'} id="namahadir" style={{width: '100%', height: '29px'}} />
                    </div>
                    </div>
                    <div className={styles.input} style={{display: 'flex', flex: 1, flexDirection: 'row', marginBottom: '24px'}}>
                    <div style={{display: 'flex', flex: 1}}>
                        <label>Ucapan</label>
                    </div>
                    <div style={{display: 'flex', flex: 3}}>
                        <label style={{marginRight: '11px'}}>:</label>
                        <textarea rows={3} style={{width: '100%'}}  />
                    </div>
                    </div>
                    <div className={styles.input}>
                    <p style={{textAlign: 'left', marginBottom: '24px'}}>Konfirmasi :</p>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
                        <input type={'radio'}  value={'Ya, Saya Hadir'} id={'Ya'} style={{marginRight: '16px'}} />
                        <label htmlFor={'Ya'}>Ya, Saya Hadir</label>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
                        <input type={'radio'}  value={'Saya ragu-ragu'} id={'Ragu'} style={{marginRight: '16px'}} />
                        <label htmlFor={'Ragu'}>Saya ragu-ragu</label>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
                        <input type={'radio'}  value={'Maaf, Saya tidak bisa hadir'} id={'Tidak'} style={{marginRight: '16px'}} />
                        <label htmlFor={'Tidak'}>Maaf, Saya tidak bisa hadir</label>
                    </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '42px'}}>
                    <button type={'submit'} style={{width: '121px', height: '42px', backgroundColor: '#1A1919', color: '#FFFFFF', borderWidth: '0'}} onClick={onKonfirmasiSubmit}>Kirim</button>
                    </div>
                </form>
                </div>
            </div>
            <div 
                ref={galleryRef} 
                className={`${styles.container} ${styles.gallery}`} 
                style={{
                backgroundColor: '#F7CB20', 
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
                <p style={{fontFamily: 'Playfair Display', fontWeight: 500, fontSize: '48px', color: '#FFFFFF', textAlign: 'center', marginBottom: '18px', flex: 1}}>Galeri</p>
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
                <p style={{color: '#F7CB20', fontSize: '40px', fontWeight: 700, fontFamily: 'Playfair Display', marginBottom: '30px'}}>Gift</p>
                <p style={{color: '#717171', fontSize: '14px', fontWeight: 600, fontFamily: 'PT Serif', marginBottom: '30px'}}>Kado anda berarti bagi kami. jika memberi adalah  ungkapan tanda kasih anda. Anda dapat memberi kado secara cashless.</p>
                <div className={styles.bankcard} style={{marginBottom: '22px'}} {...ayuBankLongPress}>
                <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end'}}>
                    <img 
                    src='https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/logo-bri-600x600%201.png' 
                    alt='rekening ayu'
                    width={'37px'}
                    height={'34px'}
                    />
                </div>
                <p style={{fontFamily: 'PT Serif', fontSize: '20px', fontWeight: 700, color: '#FFFFFF', textAlign:'left'}}>002901141813500</p>
                <p style={{fontFamily: 'PT Serif', fontSize: '12px', fontWeight: 700, color: '#FFFFFF', textAlign:'left'}}>A/N</p>
                <p style={{fontFamily: 'PT Serif', fontSize: '12px', fontWeight: 700, color: '#FFFFFF', textAlign:'left'}}>Regina Ayudyaningsari Pradani</p>
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
                <p style={{fontFamily: 'PT Serif', fontSize: '20px', fontWeight: 700, color: '#FFFFFF', textAlign:'left'}}>0112201500005042</p>
                <p style={{fontFamily: 'PT Serif', fontSize: '12px', fontWeight: 700, color: '#FFFFFF', textAlign:'left'}}>A/N</p>
                <p style={{fontFamily: 'PT Serif', fontSize: '12px', fontWeight: 700, color: '#FFFFFF', textAlign:'left'}}>Yuda Siswanto</p>
                </div>

                <p style={{fontFamily: 'PT Serif', fontSize: '24px', fontWeight: 700, color: '#717171'}}>Kirim Hadiah</p>
                <div style={{minHeight: '3px', minWidth: '143px', marginTop: '14px', marginBottom: '14px', backgroundColor: '#FFD840'}}></div>
                <p style={{fontFamily: 'PT Serif', fontSize: '16px', fontWeight: 400, color: '#717171'}}>Rumah Kami</p>
                <p style={{fontFamily: 'PT Serif', fontSize: '16px', fontWeight: 400, color: '#717171'}}>Jl.Trisula, Gang Aur No 18,</p>
                <p style={{fontFamily: 'PT Serif', fontSize: '16px', fontWeight: 400, color: '#717171'}}>Bukit Batu, Singkawang.</p>
            </div>
            <div className={`${styles.thankyou}`} style={{ minHeight: '75vh'}}>
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
                    <p style={{color: '#F7D039', fontWeight: 700, fontSize: '40px', fontFamily: 'Playfair Display', zIndex: 1, backgroundColor: 'transparent'}}>Terima Kasih</p>
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
            {params: {namaundangan: 'Ersapta+&+Pasangan'}},
            {params: {namaundangan: 'Evan+&+Pasangan'}},
            {params: {namaundangan: 'Viny+&+Pasangan'}},
            {params: {namaundangan: 'Pascalis+&+Pasangan'}},
        ],
        fallback: true,
    }
  }

export async function getStaticProps(context) {
    let {namaundangan} = context.params;
    const namaundanganWord = String(namaundangan).split('+');
    let formattedNamaUndangan = '';
    for (let word of namaundanganWord) {
        formattedNamaUndangan += word[0].toUpperCase() + word.slice(1) + ' ';
    }

    formattedNamaUndangan = formattedNamaUndangan.trim();
    return {props: {formattedNamaUndangan: formattedNamaUndangan}}
}

export default UndanganWithNama;
