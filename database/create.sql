-- =====================================================
-- Projet : Trouve ton artisan
-- Auteur : Djaafar Deghmous
-- Description : Création de la base de données
-- =====================================================

-- Création de la base de données
DROP DATABASE IF EXISTS trouve_ton_artisan;

CREATE DATABASE trouve_ton_artisan;

-- Sélection de la base de données
USE trouve_ton_artisan;

-- =====================================================
-- Table : category
-- =====================================================

CREATE TABLE category (

    id_category INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL

);

-- =====================================================
-- Table : speciality
-- =====================================================

CREATE TABLE speciality (

    id_speciality INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    avatar VARCHAR(255) NULL,
    
    id_category INT NOT NULL,

    CONSTRAINT fk_speciality_category
        FOREIGN KEY (id_category)
        REFERENCES category(id_category)

);

-- =====================================================
-- Table : city
-- =====================================================

CREATE TABLE city (

    id_city INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL

);

-- =====================================================
-- Table : artisan
-- =====================================================

CREATE TABLE artisan (

    id_artisan INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    logo VARCHAR(255) NULL,

    mark DECIMAL(2,1) CHECK (mark BETWEEN 0.0 AND 5.0) DEFAULT NULL,

    about TEXT,

    email VARCHAR(100),

    website VARCHAR(100),

    top BOOLEAN NOT NULL DEFAULT FALSE,

    id_speciality INT NOT NULL,

    CONSTRAINT fk_artisan_speciality
        FOREIGN KEY (id_speciality)
        REFERENCES speciality(id_speciality),

    id_city INT NOT NULL,

    CONSTRAINT fk_artisan_city
        FOREIGN KEY (id_city)
        REFERENCES city(id_city)
);