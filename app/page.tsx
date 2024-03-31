'use client'

import Image from 'next/image'
import styles from './page.module.css'
import MuxPlayer from '@mux/mux-player-react'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to&nbsp;
          <code className={styles.code}>Web Chainsaw. The viewer shows a 'Network Error' when there is no live video currently ongoing.</code>
        </p>
        <MuxPlayer
          playbackId="7LQIYL85yC5D9prD6UVEuaSVrwKIU1DFSrMDyoOf5T8"
          metadata={{
            video_id: "chainsaw",
            video_title: "Chainsaw",
            viewer_user_id: "12345",
          }}
        />
      </div>
        <video preload="none" autoPlay muted playsInline loop>
        <source src="https://webchainsaw.s3.ap-southeast-2.amazonaws.com/vid_chainsaw.mp4" type="video/mp4" />
        <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
         />
       </video>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <span>+</span>
        <Image
          src="/amplify.svg"
          alt="Amplify Logo"
          width={45}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://docs.amplify.aws/gen2/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Review documentation for Amplify's code-first DX (Gen 2). (Quick test for website live updates.)</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/start/quickstart/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Quickstart <span>-&gt;</span>
          </h2>
          <p>Follow a tutorial to build a fullstack app with Amplify Gen 2.</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/build-a-backend/auth/set-up-auth/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Auth <span>-&gt;</span>
          </h2>
          <p>Zero-config Auth UI components with social sign-in and MFA.</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/build-a-backend/data/set-up-data/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Data <span>-&gt;</span>
          </h2>
          <p>
            Fully-typed real-time API with NoSQL database.
          </p>
        </a>
      </div>
    </main>
  )
}
