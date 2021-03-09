import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://lucky.financial'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://lucky.financial/farms'
  },
  {
    label: 'Fortunes',
    icon: 'SunIcon',
    href: 'https://lucky.financial/fortunes'
  },
  {
    label: 'BigBang Lottery',
    icon: 'TicketIcon',
    href: 'https://lucky.financial/lottery'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xb2ba6fa707948f9a0bc420c35b78e5020a07bc4d',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/lucky-financial',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/lucky-financial',
      },
     // { Updaste Astro Tools Link once live.
     //   label: 'AstroTools',
     //   href: 'https://app.astrotools.io/pancake-pair-explorer/',
    //  },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/luckyfinance-dev/",
      },
      {
        label: "Docs",
        href: "https://docs.lucky.financial",
      },
      {
        label: "Blog",
        href: "https://medium.com/@luckyfinancial",
      },
    ],
  },

//  {
//    label: 'Audit by Hacken',
//    icon: 'AuditIcon',
//    href: 'https://lucky.financial/files/TBD',
//  },
]

export default config
