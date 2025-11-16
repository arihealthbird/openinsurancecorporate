import localFont from 'next/font/local'

export const sentient = localFont({
  variable: '--font-sentient',
  display: 'swap',
  src: [
    { path: '../public/fonts/sentient/Sentient-Extralight.woff2', weight: '200', style: 'normal' },
    {
      path: '../public/fonts/sentient/Sentient-ExtralightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    { path: '../public/fonts/sentient/Sentient-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/sentient/Sentient-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/sentient/Sentient-Medium.woff2', weight: '500', style: 'normal' },
    {
      path: '../public/fonts/sentient/Sentient-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    { path: '../public/fonts/sentient/Sentient-Bold.woff2', weight: '700', style: 'normal' },
    {
      path: '../public/fonts/sentient/Sentient-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const satoshi = localFont({
  variable: '--font-satoshi',
  display: 'swap',
  src: [
    { path: '../public/fonts/satoshi/Satoshi-Light.woff2', weight: '300', style: 'normal' },
    {
      path: '../public/fonts/satoshi/Satoshi-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    { path: '../public/fonts/satoshi/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/satoshi/Satoshi-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/satoshi/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
    {
      path: '../public/fonts/satoshi/Satoshi-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    { path: '../public/fonts/satoshi/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
    {
      path: '../public/fonts/satoshi/Satoshi-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    { path: '../public/fonts/satoshi/Satoshi-Black.woff2', weight: '900', style: 'normal' },
    {
      path: '../public/fonts/satoshi/Satoshi-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
})
