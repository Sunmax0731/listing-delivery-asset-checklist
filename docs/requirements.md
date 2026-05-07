# 要件定義

| 項目 | 内容 |
| --- | --- |
| Rank | 78 |
| Domain | AndroidApp |
| Idea No. | 8 |
| Repository | listing-delivery-asset-checklist |
| 主な公開先 | Google Play |

## 背景

販売前や納品前の抜け漏れが小さなミスとして残る。

## 目的

BOOTH出品、商品画像、スマホ写真、3D素材レビューをチェックリスト化する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 必須要件

- mobile checklist item を複数件まとめて検証できる。
- required fields: `id`, `title`, `listingTarget`, `assetPath`, `deliveryRule`, `owner`。
- warning field: `offlineNote`。
- 代表シナリオ、QCDS metrics、docs ZIP、release evidence を再生成できる。
