import React from 'react'
import { hot } from 'react-hot-loader/root'

import styles from './App.css'

export function App() {
  return <main className={styles.app}>hello world</main>
}

export default hot(App)
