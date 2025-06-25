![Contributors](https://img.shields.io/github/contributors/xuemian168/android-locker?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/xuemian168/android-locker?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/xuemian168/android-locker?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/xuemian168/android-locker?style=for-the-badge)
![Pull Requests](https://img.shields.io/github/issues-pr/xuemian168/android-locker?style=for-the-badge)
![License](https://img.shields.io/github/license/xuemian168/android-locker?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/xuemian168/android-locker?style=for-the-badge)
![Build](https://github.com/xuemian168/android-locker/actions/workflows/deploy.yml/badge.svg?style=for-the-badge)

[![Demo](https://img.shields.io/badge/Live%20Demo-a.zli.li-green?style=for-the-badge&logo=google-chrome)](https://a.zli.li/)

# Android Manufacturer Bootloader Unlock Status

A comprehensive, community-maintained hub for comparing bootloader unlock, kernel source, and warranty policies across major Android manufacturers. Supports multilingual SEO (Chinese, Hindi, English) and is optimized for deployment on GitHub Pages with custom domain support.

## Features
- Manufacturer-by-manufacturer comparison of bootloader unlock status, kernel source openness, and warranty policy
- Multilingual UI and SEO (Chinese, Hindi, English)
- Modern, responsive UI with beautiful card/grid layout
- Community-driven data, easy to contribute and update
- GitHub Actions CI/CD for automatic deployment to GitHub Pages
- Custom 404 page, animated with framer-motion and SVG

## Live Demo
- [a.zli.li](https://a.zli.li/)

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment
- The project is configured for GitHub Pages deployment via GitHub Actions.
- For custom domain, set `base: '/'` in `vite.config.ts` and add your domain to `public/CNAME`.
- For GitHub Pages subpath, set `base: '/your-repo-name/'`.

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## References
1. [MobileModels Bootloader/Kernel Source List](https://github.com/KHwang9883/MobileModels/blob/afa441e496b64f7c918926bfe5d6acf9c1c3296a/misc/bootloader-kernel-source.md)
2. [Android Verified Boot Documentation](https://source.android.com/docs/security/features/verifiedboot/device-state#user-settable-root-of-trust)
3. Other Reference Shows on webiste

## License
[MIT](./LICENSE)

## Contributors

- [@xuemian168](https://github.com/xuemian168) (Maintainer)

<!-- Add your name or GitHub username here if you contribute! -->