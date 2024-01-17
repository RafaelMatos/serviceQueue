import { AppointmentContextProvider } from '@/context/AppointmentContext'
import { queryClient } from '@/lib/react-query'
import { globalStyles } from '@/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'
import '../lib/dayjs'

export const nunito = Nunito({ subsets: ['latin'] })

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
globalStyles()
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <QueryClientProvider client={queryClient}>
      <AppointmentContextProvider>
        <div className={nunito.className}>
          {getLayout(<Component {...pageProps} />)}
        </div>
      </AppointmentContextProvider>
    </QueryClientProvider>
  )
}
