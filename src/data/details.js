// These properties will be vailable to all of the templates
// and namespaced under the file name.
// (https://www.11ty.io/docs/data-js/)
//
// eg: {{ details.name }}

module.exports = {


  // Your twitter handle
  twitter: djtlmd,

  // Your name
  name: Daniel Turner-Lloveras,

  // The event we are at
  event: "DTL Conference",

  // The repository to which this site is linked
  repo : process.env.REPOSITORY_URL
    ? process.env.REPOSITORY_URL.replace('git@github.com:','https://github.com/')
    : 'https://github.com/netlify/my-first-few-deploys',

  // The site name used in the URL of the Netlify Admin UI
  // (Which we can figure out from the deployed URL)
  sitename: process.env.URL
    ? process.env.URL.split('https://')[1].split('.netlify.com')[0]
    : 'playwith',

  // Something to tweet which includes a link to
  // this instance of the example site
  tweet: `I just went from zero to 100 real quick on @Netlify in a matter of seconds!
Take a look at my site at ${process.env.URL || 'https://playwith.netlify.com'}!
#SwitchToNetlify at #SmashingConf`,

  url: process.env.URL

}
