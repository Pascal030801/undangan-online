/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const detailRef = useRef();

  const scrollToDetailDiv = () => {
    detailRef.current.scrollIntoView({behavior: 'smooth', block: 'start'}) 
  }

  return (
    <div className={styles.undangan}>
      <div className={`${styles.bottomnav}`}>

      </div>
      <div className={`${styles.container} ${styles.greeting}`}>
        <div className={`${styles.hiasan}`}></div>
        <div style={{alignItems: 'center', justifyContent: 'center', flex: 1, height: 'calc(100vh - 59px)', display: 'flex', flexDirection: 'column'}} >
          <h3 style={{fontFamily: "Poppins", fontWeight: 700, fontSize: "14px", lineHeight: "21px", textAlign: 'center', marginBottom: '60px'}}>we are getting married</h3>
          <p className={styles.namapasangan}>Yuda</p>
          <p className={styles.namapasangan}>&</p>
          <p className={styles.namapasangan}>Ayu</p>
          <div style={{marginTop: '60px', marginBottom: '40px'}}>
            <p className={styles.tamuundangan}>Kepada Yth.</p>
            <p className={styles.tamuundangan}>Ersapta Aristo & Pasangan</p>
            <p className={styles.tamuundangan}>di tempat</p>
          </div>

          <div className={`${styles.mainbutton}`} onClick={scrollToDetailDiv}>
            BUKA UNDANGAN
          </div>
        </div>

      </div>
      
      <div ref={detailRef} className={`${styles.container} ${styles.detail}`} id="detail">
        <div>
          <img alt='img' style={{width: '100vw'}} src={'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/image%201.jpg'} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', marginBottom: '20px'}}>
          <p className={`${styles.namapasangan}`}>Yuda & Ayu</p>
          <p className={`${styles.tanggal_pernikahan}`}>22 November 2022</p>
        </div>
        <div>
          <img alt='img' style={{width: '100vw'}} src={'https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/1a.jpg'} />
        </div>
        <div className={`${styles.quote_alkitab_container}`}>
          <p className={`${styles.quote_alkitab}`}>{`"Dan di atas semuanya itu:`}</p>
          <p className={`${styles.quote_alkitab}`}>{`Kenakanlah kasih sebagai pengikat"`}</p>
          <p className={`${styles.quote_alkitab}`}>{`Yang mempersatukan dan `}</p>
          <p className={`${styles.quote_alkitab}`}>{`Yang mempersatukan dan menyempurnakan."`}</p>
          <p className={`${styles.quote_alkitab}`} style={{marginTop: '1em'}}>Kolose 3:14</p>
        </div>

      </div>
      <div className={`${styles.container} ${styles.pasangan}`}>
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
      <div className={`${styles.container} ${styles.lokasi}`}>
        <p>Pemberkatan</p>
        <p>Selasa, 22 November 2022</p>
        <p>09:00-Selesai</p>
        <p>Gereja Santo Pius X</p>
        <p>Bengkayang</p>
        <div className={`${styles.mainbutton}`}>
          Lihat Lokasi
        </div>
        <p>Resepsi</p>
        <p>Selasa, 22 November 2022</p>
        <p>12:00-19:00</p>
        <p>Hotel Lala Golden</p>
        <p>Bengkayang</p>
        <div className={`${styles.mainbutton}`}>
          Lihat Lokasi
        </div>
      </div>
      <div className={`${styles.container} ${styles.reservation}`}>
        <p>Reservasi</p>
        <p>Konfirmasi Kehadiran</p>
        <p>Tamu Undangan</p>

        <form>
          <div className={styles.input}>
            <label>Nama</label>
            <label>:</label>
            <input type={'text'} />
          </div>
          <div className={styles.input}>
            <label>Ucapan</label>
            <label>:</label>
            <input type={'text'} />
          </div>
          <div className={styles.input}>
            <label>Konfirmasi :</label>
            <input type={'radio'}  value={'Ya, Saya Hadir'} id={'Ya'} />
            <label htmlFor={'Ya'}>Ya, Saya Hadir</label>
            <input type={'radio'}  value={'Maaf, Saya tidak bisa hadir'} id={'Tidak'} />
            <label htmlFor={'Tidak'}>Maaf, Saya tidak bisa hadir</label>
          </div>
          <button type={'submit'}>Kirim</button>
        </form>
      </div>
      <div className={`${styles.container} ${styles.gallery}`}>

      </div>
      <div className={`${styles.container} ${styles.gift}`}>
        <p>Kado anda berarti bagi kami. jika memberi adalah  ungkapan tanda kasih anda. Anda dapat memberi kado secara cashless.</p>
        <div className={styles.bankcard}>
          <div>Logo Bank</div>
          <p>002901141813500</p>
          <p>A/N</p>
          <p>Regina Ayudyaningsari Pradani</p>
        </div>
        <div className={styles.bankcard}>
          <div>Logo Bank</div>
          <p>0112201500005042</p>
          <p>A/N</p>
          <p>Yuda Siswanto</p>
        </div>

        <p>Kirim Hadiah</p>
        <p>Rumah Regina Ayu</p>
        <p>Jl.Trisula, Gang Aur No 18,</p>
        <p>Bukit Batu, Singkawang.</p>
      </div>
      <div className={`${styles.container} ${styles.thankyou}`}>
        <p>Terima Kasih</p>
        <p>{`“Have a good and godly marriage that shows the world Christ's love through how you sacrificially love and serve one another.”`}</p>
      </div>

    </div>
  )
}
