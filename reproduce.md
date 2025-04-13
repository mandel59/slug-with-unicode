# Steps to reproduce

## 日本語

1. devサーバーを起動する
2. `http://localhost:3000/%E4%BE%8B` を開く。`%E4%BE%8B` は `例` のURLエンコード
3. インスペクターで `<meta property="og:image">` を確認する

## English

1. Start dev server
2. Open `http://localhost:3000/%E4%BE%8B`. `%E4%BE%8B` is URL encoded `例`
3. Check `<meta property="og:image">` in inspector

# Describe the bug

## 日本語

OpenGraph画像のパスが`/%25E4%25BE%258B/opengraph-image` となっています。
slug部分の文字列は `%25E4%25BE%258B` で、これはslugが二重にパーセントエンコードされています。


## 英語

The path of OpenGraph image is `/%25E4%25BE%258B/opengraph-image`.
The string for the slug portion is `%25E4%25BE%258B`, which means that the slug is double percent-encoded.