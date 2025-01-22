export interface SocialLink {
  icon: SocialLinkIcon
  link: string
}

export type SocialLinkIcon =
  | 'i-carbon:logo-github'
  | 'i-carbon:logo-x'
  | 'i-carbon:logo-instagram'
  | 'i-carbon:logo-mastodon'
  | 'i-carbon:email'
  | 'i-carbon:rss'

export type SocialLinkSize = 'small' | 'medium'
