import { AppointmentContextProvider } from '@/context/AppointmentContext'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

export const nunito = Nunito({ subsets: ['latin'] })
globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppointmentContextProvider>
      <div className={nunito.className}>
        <Component {...pageProps} />
      </div>
    </AppointmentContextProvider>
  )
}
