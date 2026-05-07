export const productProfile = {
  "repository": "listing-delivery-asset-checklist",
  "title": "出品・納品・素材チェック",
  "domain": "AndroidApp",
  "hostApp": null,
  "rank": 78,
  "tier": "P2",
  "ideaNo": 8,
  "overview": "BOOTH出品、商品画像、スマホ写真、3D素材レビューをチェックリスト化する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "販売前や納品前の抜け漏れが小さなミスとして残る。",
  "differentiation": "用途別チェック項目と証跡写真を同じカードに保存する。",
  "publish": "Google Play",
  "surface": "AndroidApp product spec + CLI validation core",
  "entity": "mobile checklist item",
  "requiredFields": [
    "id",
    "title",
    "listingTarget",
    "assetPath",
    "deliveryRule",
    "owner"
  ],
  "warningField": "offlineNote",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/project-portfolio-generator",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
