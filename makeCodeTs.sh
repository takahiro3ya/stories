#!/bin/zsh

# ========================================
# src/stories 配下のコンポーネントファイルから、.code.ts というコードを文字列変換したファイルを作成する。
#   1. テンプレートリテラルを利用するので、` と ${ はエスケープする。
#   2. .code.ts は Storybook でのコード表示に利用する。
# ========================================

# xargs でのファイルリダイレクト。
# https://iww.hateblo.jp/entry/20141219/xargs

# sed は高級言語と同じように正規表現を使えない場合もある。
# https://thr3a.hatenablog.com/entry/20181114/1542153157

# sed の正規表現はシングルクォートとダブルクォートで挙動が変わるので注意。
# https://yanor.net/wiki/?%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88/sed%E3%81%A7%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%92%E7%BD%AE%E6%8F%9B%E3%81%99%E3%82%8B%E9%9A%9B%E3%81%AE%E6%B3%A8%E6%84%8F%E7%82%B9

# sh -c の '' 内の ' エスケープについて → エスケープできないので区切る。
# https://www.softel.co.jp/blogs/tech/archives/5623
# 区切り処理前の通常のコマンドは下記
# echo 'const code = `'
# sed -e 's/`/\\`/g' -e 's/${/\\${/g'
# echo '`;\nexport default code;'

# ${FILE%.tsx} の % → 変数に代入されている文字列を後ろから切り取る。
# https://koyacode.com/meaning-of-percent-symbol-of-shell-parameter-expansion/
# ${}
# https://webbibouroku.com/Blog/Article/shell-paren-brace-bracket#outline__9

find src/stories -name "*.tsx" -type f \
  | grep -v ".stories.tsx" - \
  | xargs -I {} sh -c 'FILE={} ; CODE_FILE=${FILE%.tsx}.code.ts \
  ; echo '\''const code = `'\'' > $CODE_FILE \
  ; sed -e '\''s/`/\\`/g'\'' -e '\''s/${/\\${/g'\'' $FILE >> $CODE_FILE \
  ; echo '\''`;\nexport default code;'\'' >> $CODE_FILE'

echo 'Complete!'
