import localFont  from 'next/font/local';

const libre_bodoni = localFont({
    src: [
      {
        path: '../public/fonts/libre-bodoni/Libre-Bodoni-master/fonts/TTF/LibreBodoni-Regular.ttf',
        weight: '400',
        style: 'normal'
      },
      {
        path: '../public/fonts/libre-bodoni/Libre-Bodoni-master/fonts/TTF/LibreBodoni-Italic.ttf',
        weight: '400',
        style: 'italic'
      },
      {
        path: '../public/fonts/libre-bodoni/Libre-Bodoni-master/fonts/TTF/LibreBodoni-Bold.ttf',
        weight: '700',
        style: 'normal'
      },
      {
        path: '../public/fonts/libre-bodoni/Libre-Bodoni-master/fonts/TTF/LibreBodoni-BoldItalic.ttf',
        weight: '700',
        style: 'italic'
      }
    ],
    display: 'swap',
    variable: '--font-libre-bodoni'
  });
  
  const sourceSansPro = localFont({
    src: [
      {
        path: '../public/fonts/source-sans-pro/SourceSansPro-Regular.ttf',
        weight: '400',
        style: 'normal'
      },
      {
        path: '../public/fonts/source-sans-pro/SourceSansPro-Italic.ttf',
        weight: '400',
        style: 'italic'
      },
      {
        path: '../public/fonts/source-sans-pro/SourceSansPro-Bold.ttf',
        weight: '700',
        style: 'normal'
      },
      {
        path: '../public/fonts/source-sans-pro/SourceSansPro-BoldItalic.ttf',
        weight: '700',
        style: 'italic'
      },
      {
        path: '../public/fonts/source-sans-pro/SourceSansPro-SemiBold.ttf',
        weight: '600',
        style: 'normal'
      }
    ],
    display: 'swap',
    variable: '--font-source-sans-pro'
  });
  
  export { libre_bodoni, sourceSansPro };