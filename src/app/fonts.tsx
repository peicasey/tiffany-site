import { Inter ,Croissant_One, Montserrat_Alternates  } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export const croissant = Croissant_One({
    weight: '400',
    subsets: ['latin'],
})

export const monsterrat400 = Montserrat_Alternates({
    weight: '400',
    subsets: ['latin'],
})

export const monsterrat700 = Montserrat_Alternates({
    weight: '700',
    subsets: ['latin'],
})

export const augillion = localFont({ src: './../assets/Augillion.otf' })