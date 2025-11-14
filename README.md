# Aviator Pro Capacitor-ready Project

This project contains a simple web app (in /web) and Capacitor config to wrap it into an Android app.

## Steps to produce an APK (two methods)

### Method A — Build locally with Node + Android Studio (recommended)
1. On a PC/Mac with Android Studio installed:
   - Install Node.js (14+)
   - Clone this repo or extract this ZIP
   - Run: `npm install` (not required for this minimal package)
   - Run: `npm run build`  # copies web/ -> dist/
   - Initialize Capacitor: `npx cap init AviatorPro com.aviator.pro --web-dir=dist`
   - Add Android: `npx cap add android`
   - Copy web assets: `npx cap copy`
   - Open Android Studio: `npx cap open android`
   - In Android Studio: Build > Generate Signed Bundle / APK
2. Install the signed APK on your phone.

### Method B — Build using GitHub Actions (CI) and download APK artifact
1. Push this repo to GitHub.
2. The included workflow `.github/workflows/android.yml` will build an APK on push to `main`.
3. After the workflow completes, download the generated APK artifact from the Actions page.

## Important notes
- Replace the WebSocket URL in `web/app.js` with your proxy URL (wss://...).
- For secure WS from app use `wss://` and host proxy on HTTPS.
- The GitHub Actions workflow uses keystore stored in GitHub Secrets to sign the APK (set `KEY_JKS_BASE64`, `KEY_ALIAS`, `KEY_PASSWORD`, `KEYSTORE_PASSWORD` secrets).
- If you want me to walk through any step on phone or push to GitHub, tell me and I'll give exact commands.
