-- =====================================================
-- Projet : Trouve ton artisan
-- Auteur : Djaafar Deghmous
-- Description : Alimentation de la base de données
-- =====================================================

-- =====================================================
-- Table : category
-- =====================================================
INSERT INTO category (name)
VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');

-- =====================================================
-- Table : speciality
-- =====================================================
INSERT INTO speciality (name, id_category)
VALUES
('Boucher','images/avatars/boucher.png',1),
('Boulanger','images/avatars/boulanger.png',1),
('Chocolatier','images/avatars/chocolatier.jpg',1),
('Traiteur','images/avatars/traiteur.png',1),
('Chauffagiste','images/avatars/chauffagiste.jpg',2),
('Electricien','images/avatars/electricien.png',2),
('Menuisier','images/avatars/menuisier.png',2),
('Plombier','images/avatars/plombier.png',2),
('Bijoutier','images/avatars/bijoutier.png',3),
('Couturier','images/avatars/couturier.png',3),
('Ferronnier','images/avatars/ferronnier.png',3),
('Coiffeur','images/avatars/coiffeur.png',4),
('Fleuriste','images/avatars/fleuriste.png',4),
('Toiletteur','images/avatars/toiletteur.jpeg',4),
('Webdesign','images/avatars/webdesign.jpg',4);

-- =====================================================
-- Table : city
-- =====================================================
INSERT INTO city (name)
VALUES
('Lyon'),
('Montélimar'),
('Evian'),
('Chamonix'),
('Bourg-en-bresse'),
('Vienne'),
('Aix-les-bains'),
('Annecy'),
('Le Puy-en-Velay'),
('Saint-Priest'),
('Chambéry'),
('Romans-sur-Isère'),
('Annonay'),
('Valence');

-- =====================================================
-- Table : artisan
-- =====================================================
INSERT INTO artisan (name, mark, about, email, website, top, id_speciality, id_city)
VALUES
('Boucherie Dumont',NULL , 4.5, 'Lorem ipsum dolor sit amet,...', 'boucherie.dumond@gmail.com', NULL, FALSE, 1, 1),
('Au pain chaud', 'images/logos/boulanger.jpg',4.8, 'Lorem ipsum dolor sit amet,...', 'aupainchaud@hotmail.com', NULL, TRUE, 2, 2),
('Chocolaterie Labbé','images/logos/logo_chocolatier.jpg', 4.9, 'Lorem ipsum dolor sit amet,...', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', TRUE, 3, 1),
('Traiteur Truchon','images/logos/logo_traiteur.jpg', 4.1, 'Lorem ipsum dolor sit amet,...', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', FALSE, 4, 1),
('Orville Salmons',NULL, 5.0, 'Lorem ipsum dolor sit amet,...', 'o-salmons@live.com', NULL, TRUE, 5, 3),
('Mont Blanc Electricité',NULL, 4.5, 'Lorem ipsum dolor sit amet,...', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', FALSE, 6, 4),
('Boutot & fils',NULL, 4.7, 'Lorem ipsum dolor sit amet,...', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', FALSE, 7, 5),
('Vallis Bellemare','images/logos/logo_plombier.jpg', 4.0, 'Lorem ipsum dolor sit amet,...', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', FALSE, 8, 6),
('Claude Quinn',NULL, 4.2, 'Lorem ipsum dolor sit amet,...', 'claude.quinn@gmail.com', NULL, FALSE, 9, 7),
('Amitee Lécuyer',NULL, 4.5, 'Lorem ipsum dolor sit amet,...', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', FALSE, 10, 8),
('Ernest Carignan',NULL, 5.0, 'Lorem ipsum dolor sit amet,...', 'e-carigan@hotmail.com', NULL, FALSE, 11, 9),
('Royden Charbonneau',NULL, 3.8, 'Lorem ipsum dolor sit amet,...', 'r.charbonneau@gmail.com', NULL, FALSE, 12, 10),
('Leala Dennis',NULL, 3.8, 'Lorem ipsum dolor sit amet,...', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', FALSE, 12, 11),
('C''est sup''hair',NULL, 4.1, 'Lorem ipsum dolor sit amet,...', 'sup-hair@gmail.com', 'https://sup-hair.fr', FALSE, 12, 12),
('Le monde des fleurs',NULL, 4.6, 'Lorem ipsum dolor sit amet,...', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', FALSE, 13, 13),
('Valérie Laderoute',NULL, 4.5, 'Lorem ipsum dolor sit amet,...', 'v-laredoute@gmail.com', NULL, FALSE, 14, 14),
('CM Graphisme',NULL, 4.4, 'Lorem ipsum dolor sit amet,...', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', FALSE, 15, 14);












