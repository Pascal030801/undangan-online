import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.undangan}>
      <div className={`${styles.container} ${styles.greeting}`}>
        <h3>we are getting married</h3>
        <p>Yuda</p>
        <p>&</p>
        <p>Ayu</p>
        <p>Kepada Yth.</p>
        <p>Ersapta Aristo & Pasangan</p>
        <p>di tempat</p>
        <div className={`${styles.mainbutton}`}>
          BUKA UNDANGAN
        </div>
      </div>
      <div className={`${styles.container} ${styles.detail}`}>
        <Image alt='img' layout='fill' src='https://sin1.contabostorage.com/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/image%201.jpg' />
        <p>Yuda & Ayu</p>
        <p>22 November 2022</p>
        <p>{`"Dan di atas semuanya itu:`}</p>
        <p>{`Kenakanlah kasih sebagai pengikat"`}</p>
        <p>{`Yang mempersatukan dan `}</p>
        <p>{`Yang mempersatukan dan menyempurnakan."`}</p>
        <p>Kolose 3:14</p>
      </div>
      <div className={`${styles.container} ${styles.pasangan}`}>
        <p>apt. Yuda Siswanto, S.Farm</p>
        <p>Putra Pertama dari</p>
        <p>Bapak Ali Siswanto (alm)</p>
        <p>& Ibu Ir. Magdalena, MM</p>
        <p>(Bengkayang)</p>
        <p>apt. Regina Ayudyaningsari Pradani, S.Farm</p>
        <p>putri Pertama dari</p>
        <p>bapak Paulus Joko Prayitno, S.Pd, MM</p>
        <p>& Ibu Retna Wikandani, S.Pd</p>
        <p>(Bengkayang)</p>
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
      <div className={`${styles.bottomnav}`}>

      </div>
    </div>
  )
}
