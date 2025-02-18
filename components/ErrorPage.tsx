import * as React from 'react'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  const title = 'Error'

  return (
    <>
      <PageHead title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Error Loading Page, It is possible we need to redirect to main page. </h1>

          {statusCode && <p>Error code: {statusCode}</p>}
          <p>Houston we have a problem</p>

          <img src='/error.png' alt='Error' className={styles.errorImage} />
        </main>
      </div>
    </>
  )
}
