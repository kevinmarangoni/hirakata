
import type { Metadata } from 'next'
import Head from 'next/head'
import StyledComponentsRegistry from '../../lib/registry'

import Layout from '@/components/Layout/Layout'

import Theme from '@context/Theme'

export const metadata: Metadata = {
  title: 'Hirakata',
  description: 'Aprenda Hiragana e Katakana ao mesmo tempo',
}



export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <StyledComponentsRegistry>
    <Theme>
      <html lang="pt_BR">
        <Head>
          <link href="https://fonts.cdnfonts.com/css/doboto" rel="stylesheet"/>
        </Head>
        <body>
          <Layout>{children}</Layout>
        </body>
      </html>
    </Theme>
  </StyledComponentsRegistry>
  )
}
