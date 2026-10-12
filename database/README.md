# Base de données — Trouve ton artisan

## Description

Ce dossier contient les scripts SQL permettant de créer et d'alimenter la base de données du projet **Trouve ton artisan**.

La base de données utilise MySQL.

## Structure

La base de données `trouve_ton_artisan` comprend quatre tables :

* `category` : les catégories d'artisans.
* `speciality` : les spécialités.
* `city` : les villes.
* `artisan` : les informations sur les artisans.

Les tables sont reliées par des clés étrangères.

## Installation

1. Ouvrir phpMyAdmin.
2. Exécuter le script `create.sql` pour créer la base de données et ses tables.
3. Exécuter le script `seed.sql` pour insérer les données initiales.

**Attention :** le script `create.sql` supprime la base `trouve_ton_artisan` si elle existe déjà, puis la recrée. Son exécution efface donc les données précédentes de cette base.

## Images

Le dossier `images/` contient les images utilisées par le projet :

* `avatars/` : images associées aux spécialités.
* `logos/` : logos des artisans.

## Technologies

* MySQL
* SQL
