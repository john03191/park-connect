# README

## 概要
★アプリ名：park-connect

★仕様
  ・基本のdevise機能
  ・グループチャット
  ・非同期通信(Ajax)
  ・ゲストログイン機能
  ・GoogleMap表示機能
  ・インクリメンタルサーチ
  ・自動更新

★本番環境(デプロイ先 IPアドレス：http://18.176.98.234/)

★制作背景(意図)
子供を連れて公園に遊びに行っても、子供同士で遊ぶことが少なくなってきている。
（なぜ）
悲惨な事件や近所付き合いの減少により親同士の付き合いが薄くなってきている。
（解決策）
親同士を先にオンラインツールで繋がりをもってもらい
親同士が仲良くなり、子供同士で遊ぶことに抵抗がなくなる。

★DEMO
TOPページ
https://gyazo.com/faced023cf72e8fe8d4bca8ba67b0d98
チャットページ
https://gyazo.com/f1b4088398a075a5d7b6be494453a296
ゲストログイン機能
https://gyazo.com/589b2123846f4b31df6243e773dad3e5

★工夫したポイント
・チャットにするために非同期通信（Ajax）と自動更新機能を実装しました。
・閲覧しやすくするためにゲストログイン機能を搭載しました。

★使用技術
使用言語：haml/scss/Ruby/Ruby on Rails/JavaScript/jQuery/MySQL/GitHub/VScode

★課題や今後実装したい機能
・公園情報投稿機能
・LINEのようなチャットページ
・ユーザーマイページ（公園情報を保存）

★DB設計
## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :groups
- has_many :messages

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|text||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :messages