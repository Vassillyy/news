export interface Article {
  id: number
  title: string
  content: string
  link: string
  domain: string
  date: string
  lang: string
  reach: number
  keywords: Keyword[]
  author: string[]
  country: string
  country_code: string
  sentiment: string
  traffic: Traffic[]
  fav: string
  highlights: string[]
  duplicates: number
}

interface Keyword {
  value: string
  count: number
  icon?: string
}

interface Traffic {
  value: string
  count: number
}
