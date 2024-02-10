/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/ia4s' : '',
    output: 'export',
};

module.exports = nextConfig

export default nextConfig;
