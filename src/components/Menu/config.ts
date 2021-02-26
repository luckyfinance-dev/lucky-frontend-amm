import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.lucky.financial'
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
    href: 'https://www.lucky.financial/farms'
  },
  {
    label: 'Fortunes',
    icon: 'SunIcon',
    href: 'https://www.lucky.financial/fortunes'
  },
  {
    label: 'BigBang Lottery',
    icon: 'TicketIcon',
    href: 'https://www.lucky.financial/lottery'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/lucky-financial',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/lucky-financial',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
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
        href: "https://lucky-financial.gitbook.io/lucky-financial/",
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
//    href: 'https://www.lucky.financial/files/TBD',
//  },
]

export default config
