/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    basePath: process.env.NODE_ENV === 'production' ? '/ia4s' : '',
}

export default nextConfig;
