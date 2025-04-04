
# 📱 Delibali App Automation (Appium + WebdriverIO)

Starter project untuk melakukan automation testing pada aplikasi mobile berbasis **React Native (Android)** menggunakan **Appium + WebDriverIO (WDIO)**.

---

## 📂 Struktur Folder

```
DelibaliAutomation/
├── apps/                      # Tempat APK kamu
├── config/
│   └── capabilities.android.js   # Konfigurasi capability (device, app path, dll)
├── test/
│   ├── pageobjects/          # Page Object: menyimpan semua komponen dan action per halaman
│   └── specs/                # Test Case: berisi skenario untuk menguji flow aplikasi
├── wdio.conf.js              # Konfigurasi utama WebDriverIO
├── package.json              # Dependency dan script test
└── README.md                 # Dokumentasi project
```

---

## 🔧 Bagian yang Perlu Diubah Jika Aplikasi Berbeda

1. **APK Path**
   - Ubah di `config/capabilities.android.js`:
   ```js
   'appium:app': `${process.cwd()}/apps/your-app.apk`,
   ```

2. **App Package dan App Activity**
   - Jika tidak pakai `app` (APK langsung), kamu bisa pakai:
   ```js
   'appium:appPackage': 'com.your.app',
   'appium:appActivity': '.MainActivity',
   ```

3. **Device Name**
   - Ganti dengan nama device dari `adb devices`, contoh:
   ```js
   'appium:deviceName': 'emulator-5554',
   ```

4. **Page Object**
   - Edit file di `/test/pageobjects/` sesuai komponen aplikasi kamu.
   - Misal: `login.page.js`, `home.page.js`, `product.page.js`.

---

## ▶️ Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan Appium secara manual di terminal

```bash
npx appium
```

### 3. Jalankan test automation

```bash
npm run test
```

Atau spesifik file:
```bash
npx wdio run wdio.conf.js --spec ./test/specs/register.test.js
```

---

## ✅ Fitur yang Sudah Disiapkan

- Struktur test berbasis **Page Object Pattern**
- Test sample untuk halaman register
- Support **noReset mode** (tidak install ulang APK setiap run)
- Dukungan untuk Android emulator & real device

---


