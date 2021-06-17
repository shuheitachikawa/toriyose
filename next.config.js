require("dotenv").config();

module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
  env: {
    micro_cms_base_url: process.env.MICROCMS_BASE_URL,
    micro_cms_x_api_key: process.env.MICROCMS_API_KEY,
    micro_cms_x_write_api_key: process.env.MICROCMS_WRITE_API_KEY,
    next_public_google_analystics_id: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
  },
  async redirects() {
    return [
      {
        source: '/category',
        destination: '/',
        permanent: true,
      },
    ]
  },
}