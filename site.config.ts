import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '016e0ef793884b01a8bee4d024a6591c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'David Vega',
  domain: 'danvegamo.com',
  author: 'David Vega',

  // open graph metadata (optional)
  description: 'Portfolio of David Vega',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'Danvegamo',
  linkedin: 'Danvegamo',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  medium: 'https://medium.com/@d_vega', // optional medium URL
  // newsletter: '#', // optional newsletter URL
  youtube: 'channel/UCyMmbzWgp46YO0dSLM5yNTg', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  //pageUrlOverrides: {
  // '/foo': 'ca3fec4980444233a2bc7dba30fbcd0c',
  // '/bar': '6a0fdf6c1f3640f88c900a5910e328af',
  // },
   pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default',
  navigationStyle: 'custom',
   navigationLinks: [
    {
      title: 'About of me',
     pageId: 'e56902269a40450295f9c86cdbe44e31'
    },
    {
      title: 'Contact',
      pageId: '5db3899cd19244488ab19baddf946826'
    },
    {
      title: 'Blog',
    url: 'https://medium.com/@d_vega'
    }
   ]
})
