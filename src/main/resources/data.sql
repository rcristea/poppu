DELETE FROM movie_actors;
DELETE FROM seat_availabilities;
DELETE FROM actors;
DELETE FROM shows;
DELETE FROM reviews;
DELETE FROM movies;
DELETE FROM showrooms;
DELETE FROM users;

INSERT INTO users VALUES (1, 'poppuofficial@gmail.com', 'poppu', true, 'admin', '$2a$10$O1RbZIPCQCLr522HZUP51.E43Zn4oYSnjIrMeKTUaLqmI46jBM74m', '(123) 456 - 7890', 'ADMIN', 'ACTIVE', null);
INSERT INTO users VALUES (2, 'poppucustomer@gmail.com', 'poppu', true, 'customer', '$2a$10$O1RbZIPCQCLr522HZUP51.E43Zn4oYSnjIrMeKTUaLqmI46jBM74m', '(123) 456 - 7890', 'USER', 'ACTIVE', null);

INSERT INTO addresses VALUES (1, 'Dooleyville', '123 Play Ground Stret', 789563);
INSERT INTO addresses VALUES (2, 'Transilvania', '575 Barbeque Drive', 777777);
INSERT INTO addresses VALUES (3, 'Juno', '400 Freezing Lane', 999999);

UPDATE users SET address_id = 1 WHERE user_id = 2;

INSERT INTO showrooms VALUES (1,'A'),(2,'B'),(3,'C');
INSERT INTO seats VALUES (1,'A1',1),(2,'A2',1),(3,'A3',1),(4,'A4',1),(5,'A5',1),(6,'B1',1),(7,'B2',1),(8,'B3',1),(9,'B4',1),(10,'B5',1),(11,'C1',1),(12,'C2',1),(13,'C3',1),(14,'C4',1),(15,'C5',1),(16,'D1',1),(17,'D2',1),(18,'D3',1),(19,'D4',1),(20,'D5',1);
INSERT INTO seats VALUES (21,'A1',2),(22,'A2',2),(23,'A3',2),(24,'A4',2),(25,'A5',2),(26,'B1',2),(27,'B2',2),(28,'B3',2),(29,'B4',2),(30,'B5',2),(31,'C1',2),(32,'C2',2),(33,'C3',2),(34,'C4',2),(35,'C5',2),(36,'D1',2),(37,'D2',2),(38,'D3',2),(39,'D4',2),(40,'D5',2);
INSERT INTO seats VALUES (41,'A1',3),(42,'A2',3),(43,'A3',3),(44,'A4',3),(45,'A5',3),(46,'B1',3),(47,'B2',3),(48,'B3',3),(49,'B4',3),(50,'B5',3),(51,'C1',3),(52,'C2',3),(53,'C3',3),(54,'C4',3),(55,'C5',3),(56,'D1',3),(57,'D2',3),(58,'D3',3),(59,'D4',3),(60,'D5',3);
/*
INSERT INTO actors VALUES
                          ('1', 'Simu', 'Liu'),
                          ('2', 'Nora', 'Lum'),
                          ('3', 'Tony', 'Leung'),
                          ('4', 'Ben', 'Kingsley'),
                          ('5', 'Meng''er', 'Zhang'),
                          ('6', 'Fala', 'Cheng'),
                          ('7', 'Michelle', 'Yeoh'),
                          (8, 'Wah', 'Yuen'),
                          (9, 'Florian','Munteanu'),
                          (10,'Andy','Le'),
                          (11,'Paul','He'),
                          (12,'Jayden','Zhang'),
                          (13,'Elodie','Fong'),
                          (14,'Arnold','Sun'),
                          (15,'Stephanie','Hsu'),
                          (16,'Kunal','Dudheker'),
                          (17,'Tsai','Chin'),
                          (18,'Jodie','Long');

INSERT INTO movies VALUES(1001, 'Action', '2021:09:07', 'Destin Cretton','2h 12m',true, 'Kevin Feige', 'PG13',8.8, 'Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.', 'Shang-Chi and the Legend of the Ten Rings', '8YjFbMbfXaQ', 'assets/img/posters/shangchi_and_the_legend_of_the_ten_rings.jpeg');
INSERT INTO movie_actors VALUES (1,1001,'Shang-Chi'),(2,1001,'Katy'),(3,1001,'Xu Wenwu'),(4,1001,'Trevor Slattery'),(5,1001,'Xialing'),(6,1001,'Li'),(7,1001,'Ying Nan'),(8,1001,'Master Guang Bo'),(9,1001,'Razor Fist'),(10,1001,'Death Dealer'),(11,1001,'Chancellor Hui'),(12,1001,'Young Shang-Chi'),(13,1001,'Young Xialing'),(14,1001,'Teen Shang-Chi'),(15,1001,'Soo'),(16,1001,'John'),(17,1001,'Waipo'),(18,1001,'Mrs. Chen');
INSERT INTO shows VALUES (1,'2021:11:18 09:00:00',1001,1),(2,'2021:11:18 19:00:00',1001,1),(3,'2021:11:18 22:15:00',1001,3);
INSERT INTO reviews VALUES (1,'I really liked this movie. It was a movie',5.9,'Much Wow',1001), (2,'The music quality was on fleek',7.9,'I like hearing',1001),(3,'I found the movie to be sub-par.',5.5,'Movie okay',1001);

INSERT INTO actors VALUES (19, 'Paul','Bettany'),(20, 'Sophia','Lillis'),(21, 'Peter','Macdissi'),(22, 'Steve','Zahn'),(23, 'Judy','Greer'),(24, 'Margo','Martindale'),(25, 'Stephen','Root'),(26, 'Lois','Smith'),(27, 'Jane','McNeill'),(28, 'Caity','Brewer'),(29, 'Hannah','Black'),(30, 'Michael','Repeta'),(31, 'Isabella','Pambianchi'),(32, 'Burgess','Jenkins'),(33, 'Zach','Strum'),(34, 'Colton','Ryan'),(35, 'Britt','Rentschler'),(36, 'Alan','Campbell');
INSERT INTO movies VALUES(1002, 'Comedy', '2020:01:25', 'Alan Ball','1h 35m', true, 'Alan Ball', 'R',7.8, 'In 1973, when Frank Bledsoe and his 18-year-old niece Beth take a road trip from Manhattan to Creekville, South Carolina, for the family patriarch''s funeral, they''re unexpectedly joined by Frank''s lover, Walid.','Uncle Frank', 'K8nm0iYLvcs', 'assets/img/posters/uncle_frank.jpg');
INSERT INTO movie_actors VALUES (19,1002,'Frank'),(20,1002,'Beth'),(21,1002,'Wally'),(22,1002,'Mike'),(23,1002,'Kitty'),(24,1002,'Mammaw'),(25,1002,'Daddy Mac'),(26,1002,'Aunt Butch'),(27,1002,'Neva'),(28,1002,'Marcia'),(29,1002,'Janis'),(30,1002,'11-year-old Bullet'),(31,1002,'8-year-old Mae Ray'),(32,1002,'Beau'),(33,1002,'Tee Dub'),(34,1002,'Bruce'),(35,1002,'Charlotte'),(36,1002,'Bernard');
INSERT INTO shows VALUES (4,'2021:11:18 09:00:00',1002,2),(5,'2021:11:18',1002,3),(6,'2021:11:18 16:45:00',1002,1);
INSERT INTO reviews VALUES (4,'This movie was very scary. I thought this was supposed to be a children''s movie',4.3,'Too Spooky',1002),(5,'The movie was really good, as I am not one to be spooked easily',7.8,'Would watch again',1002),(6,'The movie was terrible. Will never get that time back in my life',3.2,'Bad movie',1002);

INSERT INTO actors VALUES (37, 'Mary','Winstead'),(38, 'Woody','Harrelson'),(39, 'Miku','Martineau'),(40, 'Tadanobu','Asano'),(41, 'Jun','Kunimura'),(42, 'Michiel','Huisman'),(43, 'Mari','Yamamoto'),(44, 'Hirotaka','Renge'),(45, 'Kazuya','Tanabe'),(46, 'Cindy','Bishop'),(47, 'Amelia','Crouch'),(48, 'Ava','Caryofyllis'),(49, 'Gemma','Allen'),(50, 'Hiroyuki','Kobayashi'),(51, 'Koji','Nishiyama'),(52, 'Kazuhiro','Muroyama'),(53, 'Shinji','Uchiyama');
INSERT INTO movies VALUES (1003, 'Thriller', '2021:09:04', 'Cedric Nicolas-Troyan','1h 46m', true, 'Matt Levin', 'R',6.6,'Slipped a fatal poison on her final job, a ruthless Tokyo assassin has less than 24 hours to find out who ordered the hit and exact revenge.', 'Kate', 'MysGjRS9jFU', 'assets/img/posters/kate.jpg');
INSERT INTO movie_actors VALUES (37,1003,'Kate'),(38,1003,'Varrick'),(39,1003,'Ani'),(40,1003,'Renji'),(41,1003,'Kijima'),(42,1003,'Stephen'),(43,1003,'Kanako'),(44,1003,'Specialist'),(45,1003,'Shinzo'),(46,1003,'Mother'),(47,1003,'Teen Kate'),(48,1003,'Child Kate'),(49,1003,'Young Kate'),(50,1003,'Old Wakagashira'),(51,1003,'Sato'),(52,1003,'Taxi Driver'),(53,1003,'Young Yakuza');
INSERT INTO shows VALUES (7,'2021:11:18 11:30:00',1003,3),(8,'2021:11:18 13:50:00',1003,2),(9,'2021:11:18 19:00:00',1003,2);
INSERT INTO reviews VALUES (7,'I really loved watching this movie. Would watch again!',9.8,'Best movie of the year',1003),(8,'The movie was okay',6.7,'Okay',1003),(9,'Meh',4.5,'Meh',1003);

INSERT INTO actors VALUES (54, 'Stephen','Lang'),(55,'Madelyn','Grace'),(56,'Brendan','Sexton III'),(57,'Adam','Young'),(58,'Rocci','Williams'),(59,'Christian','Zagia'),(60,'Bobby','Schofield'),(61,'Fiona','O''Shaughnessy'),(62,'Stephanie','Arcila'),(63,'Diaana','Babnicova'),(64,'Sofija','Stojanovic'),(65,'Steffan','Rhodri'),(66,'Miodrag','Cvetkovic'),(67,'Ibrahim','Ishaq'),(68,'Eydel','Balbuena'),(69,'Ron','Rogell'),(70,'Georgia','Collins'),(71,'Fiona','Watkins');
INSERT INTO movies VALUES (1004, 'Horror', '2021:08:13', 'Rodo Sayagues','1h 38m', true, 'Fede Álvarez', 'R',8.2, 'The sequel is set in the years following the initial deadly home invasion, where Norman Nordstrom (Stephen Lang) lives in quiet solace until his past sins catch up to him.', 'Don''t Breathe 2', 'gRbG2tjHYCA', 'assets/img/posters/dont_breathe_2.jpg');
INSERT INTO movie_actors VALUES (54,1004,'The Blind Man'),(55,1004,'Phoenix'),(56,1004,'Raylan'),(57,1004,'Jim-Bob'),(58,1004,'Duke'),(59,1004,'Raul'),(60,1004,'Jared'),(61,1004,'Mother'),(62,1004,'Hernandez'),(63,1004,'Billie'),(64,1004,'Young Phoenix'),(65,1004,'Surgeon'),(66,1004,'Gang Member 1'),(67,1004,'Gang Member 2'),(68,1004,'Gang Member 3'),(69,1004,'Market Manager'),(70,1004,'Young Phoenix Photo Double'),(71,1004,'Phoenix Photo Double');
INSERT INTO shows VALUES (10,'2021:11:18 11:30:00',1004,1),(11,'2021:11:18 13:50:00',1004,1),(12,'2021:11:18 22:15:00',1004,2);
INSERT INTO reviews VALUES (10,'The movie wasn''t as good as the first one',6.7,'Alright',1004),(11,'Better than the first movie',8.9,'Better than the first',1004),(12,'The movie was so-so',4.4,'Alright',1004);

INSERT INTO actors VALUES (72,'Camila','Cabello'),(73,'Billy','Porter'),(74,'Nicholas','Galitzine'),(75,'Idina','Menzel'),(76,'Pierce','Brosnan'),(77,'Minnie','Driver'),(78,'Tallulah','Greive'),(79,'Maddie','Baillio'),(80,'Charlotte','Spencer'),(81,'James','Corden'),(82,'James','Acaster'),(83,'Romesh','Ranganathan'),(84,'Rob','Beckett'),(85,'Ben','Smith'),(86,'Luke','Latchman'),(87,'Fra','Fee'),(88,'Jenet','Lacheur'),(89,'Mary','Higgins');
INSERT INTO movies VALUES (1005, 'Adventure', '2021:09:03', 'Kay Cannon','1h 53m', true, 'James Corden', 'PG',1.5, 'A modern movie musical with a bold take on the classic fairy tale. Our ambitious heroine has big dreams and with the help of her fab Godmother, she perseveres to make them come true.', 'Cinderella','20DF6U1HcGQ','assets/img/posters/cinderella_2021.jpg');
INSERT INTO movie_actors VALUES (72,1005,'Cinderella'),(73,1005,'Fabulous Godmother'),(74,1005,'Prince Robert'),(75,1005,'Vivian'),(76,1005,'King Rowan'),(77,1005,'Queen Beatrice'),(78,1005,'Princess Gwen'),(79,1005,'Malvolia'),(80,1005,'Narissa'),(81,1005,'James'),(82,1005,'John'),(83,1005,'Romesh'),(84,1005,'Thomas Cecil'),(85,1005,'Town Crier'),(86,1005,'Griff'),(87,1005,'Hench'),(88,1005,'Count Wilbur'),(89,1005,'Princess Laura');
INSERT INTO shows VALUES (13,'2021:11:18 09:00:00',1005,3),(14,'2021:11:18 16:45:00',1005,3),(15,'2021:11:18 22:15:00',1005,1);
INSERT INTO reviews VALUES (13,'This was an incredible movie. I was bawling through most of the movie',8.9,'Incredible',1005),(14,'This movie was one of the best to come out of COVID',7.9,'Great',1005),(15,'This is the best movie I have ever seen in my entire 50 years of living on this earth',10,'Amazing',1005);

INSERT INTO actors VALUES (90,'Nanna','Blondell'),(91,'Anastasios','Soulis'),(92,'Jonhannes','Kuhnke'),(93,'Anna','Azcárate'),(94,'Thomas','Hanzon'),(95,'Kalled','Mustonen'),(96,'Tomas','Bergström'),(97,'Melvin','Solin'),(98,'Veronica','Mukka'),(99,'Per','Mårthans'),(100,'Peter','Borossy'),(101,'Johan','Hedman');
INSERT INTO movies VALUES (1006,'Horror','2021:02:11','Alain Darborg','1h 26m',true,'Annika Sucksdorff','TVMA',5.7,'When Nadja becomes pregnant, they make an attempt to rekindle their relationship by traveling to the north of Sweden for a hiking trip but soon their romantic trip turns into a nightmare.','Red Dot','t7FwypV69qc','assets/img/posters/red_dot.jpeg');
INSERT INTO movie_actors VALUES (90,1006,'Nadja'),(91,1006,'David'),(92,1006,'Einar'),(93,1006,'Mona'),(94,1006,'Thomas'),(95,1006,'Jarmo'),(96,1006,'Rolle'),(97,1006,'Olof'),(98,1006,'Mountain rescue central voice'),(99,1006,'Principal'),(100,1006,'Radio Voice'),(101,1006,'Police Officer');
INSERT INTO shows VALUES (16,'2021:11:18 11:30:00',1006,2),(17,'2021:11:18 16:45:00',1006,2),(18,'2021:11:18 19:00:00',1006,3);
INSERT INTO reviews VALUES (16,'The movie was okay. They could have made the movie a little bit louder',6.7,'Okay',1006),(17,'Much Wow',9.9,'So many appreciate',1006),(18,'I want to watch this every night before bed',8.9,'Truly magnificent',1006);

INSERT INTO actors VALUES (102,'Josephine','Langford'),(103,'Hero','Tiffin'),(104,'Louis','Lombard'),(105,'Chance','Perdomo'),(106,'Rob','Estes'),(107,'Arielle','Kebbel'),(108,'Stephen','Moyer'),(109,'Mira','Sorvino'),(110,'Frances','Turner'),(111,'Kiana','Madeira'),(112,'Carter','Jenkins'),(113,'Atanas','Srebrev'),(114,'Anton','Kottas'),(115,'Emmanuel','Todorov'),(116,'Velizar','Biney'),(117,'Matthew','Hall'),(118,'Angela','Sari'),(119,'Simon','Fick');
INSERT INTO movies VALUES (1007,'Drama','2021:09:30','Castille Landon','1h 36m',false,'Hero Tiffin','R',5.4,'Just as Tessa makes the biggest decision of her life, everything changes. Revelations about her family, and then Hardin''s, throw everything they knew before in doubt and makes their hard-won future together more difficult to claim.','After We Fell','NYdNN6C9hfI','assets/img/posters/after_we_fell.jpeg');
INSERT INTO movie_actors VALUES (102,1007,'Tessa'),(103,1007,'Hardin'),(104,1007,'Trish'),(105,1007,'Landon'),(106,1007,'Ken'),(107,1007,'Kimberly'),(108,1007,'Christian Vance'),(109,1007,'Carol'),(110,1007,'Karen'),(111,1007,'Nora'),(112,1007,'Robert'),(113,1007,'Richard Young'),(114,1007,'Smith'),(115,1007,'Mike'),(116,1007,'Dr. West'),(117,1007,'Bartender'),(118,1007,'Lillian'),(119,1007,'Foreboding Guy');

INSERT INTO actors VALUES (138,'Daiki','Yamashita'),(139,'Nobuhiko','Okamoto'),(140,'Yûki','Kaji'),(141,'Tetsu','Inada'),(142,'Yûichi','Nakamura'),(143,'Yoshimasa','Hosoya'),(144,'Ryô','Yoshizawa'),(145,'Arisa','Sekine'),(146,'Megumi','Hayashibara'),(147,'Yoko','Honna'),(148,'Kazuya','Nakai'),(149,'Mariya','Ise'),(150,'Yuichiro','Umehara'),(151,'Junya','Enoki'),(152,'Shogo','Sakata'),(153,'Yuuki','Hayashi'),(154,'Hirofumi','Nojima'),(155,'Takumu','Miyazono');
INSERT INTO movies VALUES (1009,'Animation','2021:10:29','Kenji Nagasaki','1h 44m',false,'None','PG13',6.6,'When a cult of terrorists ruins a city by releasing a toxin that causes people''s abilities to spiral out of control, Japan''s greatest heroes spread around the world in an attempt to track down the mastermind and put him to justice.','My Hero Academia: World Heroes'' Mission','6cBYUfAno-0','assets/img/posters/my_hero_academia_world_heroes_mission.png');
INSERT INTO movie_actors VALUES (138,1009,'Izuku Midoriya (voice)'),(139,1009,'Katsuki Bakugo (voice)'),(140,1009,'Shoto Todoroki (voice)'),(141,1009,'Endeavor (voice)'),(142,1009,'Hawks (voice)'),(143,1009,'Fumikage Tokoyami (voice)'),(144,1009,'Rody Soul (voice)'),(145,1009,'Rody Soul (Child) (voice)'),(146,1009,'Pino (voice)'),(147,1009,'Clair Voyance (voice)'),(148,1009,'Flect Turn (voice)'),(149,1009,'Belos (voice)'),(150,1009,'Sidero (voice)'),(151,1009,'Serpenters (voice)'),(152,1009,'Leviathan (voice)'),(153,1009,'Rogone (voice)'),(154,1009,'Alan Kay (voice)'),(155,1009,'Salaam (voice)');
*/

INSERT INTO actors VALUES (174,'Gemma','Chan'),(175,'Richard','Madden'),(176,'Angelina','Jolie'),(177,'Salma','Hayek'),(178,'Kit','Harington'),(179,'Kumail','Nanjiani'),(180,'Lia','McHugh'),(181,'Brian','Henry'),(182,'Lauren','Ridloff'),(183,'Barry','Keoghan'),(184,'Ma','Dong-seok'),(185,'Harish','Patel'),(186,'Bill','Skarsgård'),(187,'Haaz','Sleiman'),(188,'Esai','Cross'),(189,'Harry','Styles'),(190,'Alan','Scott'),(191,'Hannah','Dodd');
INSERT INTO movies VALUES (1001,'Action','2021:11:05','Chloé Zhao','2h 36m',true,'Kevin Feige','PG13',7.5,'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.','Eternals','x_me3xsvDgk','assets/img/posters/eternals.jpeg');
INSERT INTO movie_actors VALUES (174,1001,'Sersi'),(175,1001,'Ikaris'),(176,1001,'Thena'),(177,1001,'Ajak'),(178,1001,'Dane Whitman'),(179,1001,'Kingo'),(180,1001,'Sprite'),(181,1001,'Phastos'),(182,1001,'Makkari'),(183,1001,'Druig'),(184,1001,'Gilgamesh'),(185,1001,'Karun'),(186,1001,'Kro'),(187,1001,'Ben'),(188,1001,'Jack'),(189,1001,'Eros'),(190,1001,'Patrick'),(191,1001,'Sandra');
INSERT INTO reviews VALUES (1,'I really liked this movie. It was a movie',5.9,'Much Wow',1001), (2,'The music quality was on fleek',7.9,'I like hearing',1001),(3,'I found the movie to be sub-par.',5.5,'Movie okay',1001);

INSERT INTO actors VALUES (1, 'Darby', 'Camp'), (2, 'Jack', 'Whitehall'), (3, 'Izaac', 'Wang'), (4, 'John', 'Cleese'), (5, 'Sienna', 'Guillory'), (6, 'Tony', 'Hale'), (7, 'David', 'Grier'), (8, 'Horatio', 'Sanz'), (9, 'Paul', 'Rodriquez'), (10, 'Russel', 'Peters'), (11, 'Keith', 'Ewell'), (12, 'Bear', 'Allen-Blaine'), (13, 'Tovah', 'Feldshuh'), (14, 'Jessica', 'Wynn'), (15, 'Ty', 'Jones'), (16, 'Russel', 'Wong'), (17, 'Siobhan', 'Hogan'), (18, 'Mia', 'Ronn');
INSERT INTO movies VALUES (1002, 'Adventure', '2021:11:10', 'Walt Becker', '1h 36m', true, 'Jordan Kerner', 'PG', 6.0, 'A young girl''s love for a tiny puppy named Clifford makes the dog grow to an enormous size.', 'Clifford the Big Red Dog', '4zH5iYM4wJo', 'assets/img/posters/clifford_the_big_red_dog.jpg');
INSERT INTO movie_actors VALUES (1, 1002, 'Emily'), (2, 1002, 'Casey'), (3, 1002, 'Owen'), (4, 1002, 'Bridwell'), (5, 1002, 'Maggie'), (6, 1002, 'Tieran'), (7, 1002, 'Packard'), (8, 1002, 'Raul'), (9, 1002, 'Alonso'), (10, 1002, 'Malik'), (11, 1002, 'Mr. Jarvis'), (12, 1002, 'Mrs. Jarvis'), (13, 1002, 'Mrs. Crullerman'), (14, 1002, 'Colette'), (15, 1002, 'Police Chief Watkins'), (16, 1002, 'Mr. Yu'), (17, 1002, 'Petra'), (18, 1002, 'Florence');
INSERT INTO reviews VALUES (4, 'This movie was amazing. I really loved what they did', 5.6, 'A masterpiece', 1002), (5, 'I thought he would big bigger.', 6.7, 'Good movie', 1002), (6, 'I liked the books better', 4.5, 'Was okay', 1002);

INSERT INTO actors VALUES (19, 'Jude', 'Hill'), (20, 'Lewis', 'McAskie'), (21, 'Caitriona', 'Balfe'), (22, 'Jamie', 'Dornan'), (23, 'Judi', 'Dench'), (24, 'Ciarán', 'Hinds'), (25, 'Josie', 'Walker'), (26, 'Freya', 'Yates'), (27, 'Nessa', 'Eriksson'), (28, 'Charlie', 'Barnard'), (29, 'Frankie', 'Hastings'), (30, 'Caolan', 'McCarthy'), (31, 'Ian', 'Dunnett Jnr'), (32, 'Michael', 'Maloney'), (33, 'Lara', 'McDonnell'), (34, 'Chris', 'McCurry'), (35, 'Rachel', 'Feeney');
INSERT INTO movies VALUES (1003, 'Drama', '2021:11:12', 'Kenneth Branagh', '1h 38m', true, 'Laura Berwick', 'PG13', 7.8, 'A young boy and his working class family experience the tumultuous late 1960s.', 'Belfast', 'HcYh5Lfy1PI', 'assets/img/posters/belfast.jpg');
INSERT INTO movie_actors VALUES (19, 1003, 'Buddy'), (20, 1003, 'Will'), (21, 1003, 'Ma'), (22, 1003, 'Pa'), (23, 1003, 'Granny'), (24, 1003, 'Pop'), (25, 1003, 'Aunt Violet'), (26, 1003, 'Cousin Frances'), (27, 1003, 'Cousin Vanessa'), (28, 1003, 'Cousin Charlie'), (29, 1003, 'Auntie Mary'), (30, 1003, 'Uncle Sammie'), (31, 1003, 'Uncle Tony'), (32, 1003, 'Frankie West'), (33, 1003, 'Moira'), (34, 1003, 'Mr. Stewart'), (35, 1003, 'Mrs Ford');
INSERT INTO reviews VALUES (7,'I really loved watching this movie. Would watch again!',9.8,'Best movie of the year',1003),(8,'The movie was okay',6.7,'Okay',1003),(9,'Meh',4.5,'Meh',1003);

INSERT INTO actors VALUES (36, 'Neal', 'McDonough'), (37, 'Bruce', 'Willis'), (38, 'Corey', 'Large'), (39, 'Alexia', 'Fast'), (40, 'Lochlyn', 'Munro'), (41, 'Nels', 'Lennarson'), (42, 'Megan', 'Hill'), (43, 'Trevor', 'Gretzky'), (44, 'Clem', 'Duranseaud'), (45, 'Everly', 'Large'), (46, 'Brooke', 'Baker'), (47, 'London', 'McDonough'), (48, 'Elliot', 'Montello'), (49, 'John', 'Alviz'), (50, 'Mitch', 'Baker'), (51, 'Amy', 'Fox'), (52, 'Laurence', 'Leeke'), (53, 'Insha', 'Pathan');
INSERT INTO movies VALUES (1004, 'Action', '2021:11:12', 'Edward Drake', '1h 34m', true, 'Corey Large', 'Unrated', 3.2, 'Five elite hunters pay to hunt down a man on a deserted island, only to find themselves becoming the prey.', 'Apex', 'N7fOOJUpeaY', 'assets/img/posters/apex.jpg');
INSERT INTO movie_actors VALUES (36, 1004, 'Dr. Samuel Rainsford'), (37, 1004, 'Thomas Malone'), (38, 1004, 'Carrion'), (39, 1004, 'West'), (40, 1004, 'Lyle'), (41, 1004, 'Bishop'), (42, 1004, 'Jeza'), (43, 1004, 'Ecka'), (44, 1004, 'Bliss'), (45, 1004, 'Ellie'), (46, 1004, 'Clara'), (47, 1004, 'Adelaide'), (48, 1004, 'Judas Jayden'), (49, 1004, 'Alviz the Annihilator'), (50, 1004, 'Gastion'), (51, 1004, 'Calamity Kassidy'), (52, 1004, 'Mad Mitch'), (53, 1004, 'Assistant to Jeza');
INSERT INTO reviews VALUES (10, 'I don''t know what was going through their head when they made this movie', 2.0, 'Bad', 1004), (11, 'This seemed like they were just trying to get money', 1.8, 'Cash Grab', 1004), (12, 'This movie was still pretty good. The plot was not that great sadly', 5.6, 'Could have been better', 1004);

INSERT INTO actors VALUES (54, 'Ellie', 'Kemper'), (55, 'Rob', 'Delaney'), (56, 'Archie', 'Yates'), (57, 'Aisling', 'Bea'), (58, 'Kenan', 'Thompson'), (59, 'Timothy', 'Simons'), (60, 'Ally', 'Maki'), (61, 'Pete', 'Holmes'), (62, 'Chris', 'Parnell'), (63, 'Devin', 'Ratray'), (64, 'Katie', 'Hall'), (65, 'Max', 'Ivutin'), (66, 'Andrew', 'Daly'), (67, 'Maddie', 'Holliday'), (68, 'Aiden', 'Wang'), (69, 'Allan', 'Wang'), (70, 'Mikey', 'Day'), (71, 'Jordan', 'Carlos');
INSERT INTO movies VALUES (1005, 'Action', '2021:11:12', 'Dan Mazer', '1h 33m', true, 'Hutch Parker', 'PG', 3.5, 'A married couple tries to steal back a valuable heirloom from a troublesome kid.', 'Home Sweet Home Alone', '2BkVf2voCr0', 'assets/img/posters/home_sweet_home_alone.jpg');
INSERT INTO movie_actors VALUES (54, 1005, 'Pam McKenzie'), (55, 1005, 'Jeff McKenzie'), (56, 1005, 'Max Mercer'), (57, 1005, 'Carol Mercer'), (58, 1005, 'Gavin Washington'), (59, 1005, 'Hunter'), (60, 1005, 'Mei'), (61, 1005, 'Uncle Blake'), (62, 1005, 'Uncle Stu'), (63, 1005, 'Buzz McCallister'), (64, 1005, 'Abby McKenzie'), (65, 1005, 'Chris McKenzie'), (66, 1005, 'Mike Mercer'), (67, 1005, 'Katie Mercer'), (68, 1005, 'Ollie'), (69, 1005, 'Ollie'), (70, 1005, 'Priest'), (71, 1005, 'Clem Breckin');
INSERT INTO reviews VALUES (13,'This was an incredible movie. I was bawling through most of the movie',8.9,'Incredible',1005),(14,'This movie was one of the best to come out of COVID',7.9,'Great',1005),(15,'This is the best movie I have ever seen in my entire 50 years of living on this earth',10,'Amazing',1005);

INSERT INTO actors VALUES (72, 'Carrie', 'Coon'), (73, 'Paul', 'Rudd'), (74, 'Finn', 'Wolfhard'), (75, 'McKenna', 'Grace'), (76, 'Logan', 'Kim'), (77, 'Celeste', 'O''Connor'), (78, 'Bill', 'Murray'), (79, 'Dan', 'Aykroyd'), (80, 'Ernie', 'Hudson'), (81, 'Annie', 'Potts'), (82, 'Sigourney', 'Weaver'), (83, 'Bob', 'Gunton'), (84, 'Jonathan', 'Simmons'), (85, 'Shawn', 'Seward'), (86, 'Billy', 'Bryk'), (87, 'Sydney', 'Diaz'), (88, 'Hannah', 'Duke'), (89, 'Bokeem', 'Woodbine');
INSERT INTO movies VALUES (1006, 'Adventure', '2021:11:19', 'Jason Reitman', '2h 4m', true, 'Ivan Reitman', 'PG13', 7.8, 'When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.', 'Ghostbusters: Afterlife', 'ahZFCF--uRY', 'assets/img/posters/ghostbusters_afterlife.jpg');
INSERT INTO movie_actors VALUES (72, 1006, 'Callie'), (73, 1006, 'Grooberson'), (74, 1006, 'Trevor'), (75, 1006, 'Phoebe'), (76, 1006, 'Podcast'), (77, 1006, 'Lucky'), (78, 1006, 'Peter Venkman'), (79, 1006, 'Ray Shantz'), (80, 1006, 'Winston Zeddemore'), (81, 1006, 'Janine Melnitz'), (82, 1006, 'Ivo Shandor'), (83, 1006, 'Skittles'), (84, 1006, 'Zahk'), (85, 1006, 'Swayze'), (86, 1006, 'Reseda'), (87, 1006, 'Sheriff Domingo');
INSERT INTO reviews VALUES (16,'The movie was okay. It was not as great as the first ones.',6.7,'Okay',1006),(17,'Much Wow',9.9,'So many appreciate',1006),(18,'I want to watch this every night before bed',8.9,'Truly magnificent',1006);

INSERT INTO actors VALUES (90, 'Devon', 'Sawa'), (91, 'Ivana', 'Baquero'), (92, 'Ryan', 'Lee'), (93, 'Stephen', 'Peck'), (94, 'Michael', 'White'), (95, 'Bruce', 'Campbell'), (96, 'Louie', 'Kurtzman'), (97, 'Celeste', 'Oliva'), (98, 'Ellen', 'Colton'), (99, 'Peg', 'Holzemer'), (100, 'Mark', 'Steger'), (101, 'Andria', 'Blackman'), (102, 'Mike', 'Murphy'), (103, 'Chistopher', 'Mikael'), (104, 'Stanley', 'Bruno'), (105, 'Lonnie', 'Farmer'), (106, 'Stephen', 'Martin'), (107, 'Ripley', 'Thibeault');
INSERT INTO movies VALUES (1007, 'Comedy', '2021:11:19', 'Casey Tebo', '1h 24m', true, 'Bruce Campbell', 'Unrated', 4.6, 'A group of toy store employees must protect each other from a horde of parasite infected shoppers.', 'Black Friday', 'M3H5Ye2BvUk', 'assets/img/posters/black_friday.jpg');
INSERT INTO movie_actors VALUES (90, 1007, 'Ken Bates'), (91, 1007, 'Marnie'), (92, 1007, 'Chris Godecki'), (93, 1007, 'Brian'), (94, 1007, 'Archie'), (95, 1007, 'Jonathan Wexler'), (96, 1007, 'Emmett'), (97, 1007, 'Anita'), (98, 1007, 'Ruth'), (99, 1007, 'Angry Gran'), (100, 1007, 'Monster Angry Gran'), (101, 1007, 'Wife'), (102, 1007, 'Husband'), (103, 1007, 'Lou'), (104, 1007, 'Bircher'), (105, 1007, 'Monty'), (106, 1007, 'All Mart Employee'), (107, 1007, 'Lyla');
INSERT INTO reviews VALUES (19, 'This movie was so unrealistic. The shoppers would have rushed all the clothing stores first.', 4.5, 'Unrealistic', 1007), (20, 'This movie was so funny. I almost died laughing.', 8.9, 'Fantastic', 1007), (21, 'This movie was pretty good. I liked all the subtle jokes.', 7.8, 'Very Funny', 1007);

INSERT INTO actors VALUES (108, 'Stephanie', 'Beatriz'), (109, 'María', 'Botero'), (110, 'John', 'Leguizamo'), (111, 'Mauro', 'Castillo'), (112, 'Jessica', 'Darrow'), (113, 'Angie', 'Cepeda'), (114, 'Carolina', 'Gaitan'), (115, 'Diane', 'Guerrero'), (116, 'Wilmer', 'Velderrama'), (117, 'Rhenzy', 'Feliz'), (118, 'Ravi', 'Cabot-Conyers'), (119, 'Adassa', 'Candiani'), (138, 'Maluma', 'Arias'), (139, 'Rose', 'Portillo'), (140, 'Noemi', 'Flores'), (141, 'Juan', 'Castano'), (142, 'Sara-Nicole', 'Robles'), (143, 'Hector', 'Elias');
INSERT INTO movies VALUES (1008, 'Animation', '2021:11:24', 'Jared Bush', '1h 39m', true, 'Yvett Merino', 'PG', 7.8, 'A young Colombian girl has to face the frustration of being the only member of her family without magical powers.', 'Encanto', 'CaimKeDcudo', 'assets/img/posters/encanto.jpg');
INSERT INTO movie_actors VALUES(108, 1008, 'Mirabel (voice)'), (109, 1008, 'Abuela Alma (voice)'), (110, 1008, 'Bruno (voice)'), (111, 1008, 'Félix (voice)'), (112, 1008, 'Luisa (voice)'), (113, 1008, 'Julieta (voice)'), (114, 1008, 'Pepa (voice)'), (115, 1008, 'Isabela (voice)'), (116, 1008, 'Agustín (voice)'), (117, 1008, 'Camilo (voice)'), (118, 1008, 'Antonio (voice)'), (119, 1008, 'Dolores (voice)'), (138, 1008, 'Mariano (voice)'), (139, 1008, 'Señor Guzmán (voice)'), (140, 1008, 'Young Mirabel (voice)'), (141, 1008, 'Osvaldo (voice)'), (142, 1008, 'Señora Ozma (voice)'), (143, 1008, 'Old Arturo (voice)');
INSERT INTO reviews VALUES (22, 'This was a masterpiece. It truly is one of the best movies to come out of Disney', 9.9, 'Fantastic', 1008), (23, 'This was one of the best movies to come out of Disney in the last 6 years', 8.7, 'Truly Wonderful', 1008), (24, 'I really liked this movie. It really resonated with my soul', 8.8, 'So Great', 1008);

INSERT INTO actors VALUES (120,'Zendaya','Coleman'),(121,'Tom','Holland'),(122,'Benedict','Cumberbatch'),(123,'Marisa','Tomei'),(124,'Jon','Favreau'),(126,'Angourie','Rice'),(127,'Paula','Newsome'),(128,'Rhys','Ifans'),(129,'Jamie','Foxx'),(130,'Alfred','Molina'),(131,'Benedict','Wong'),(132,'Thomas','Church'),(133,'Martin','Starr'),(134,'Tony','Revolori'),(135,'Jacob','Batalon'),(136,'Jerry','Smoove'),(137,'Harry','Holland');
INSERT INTO movies VALUES (1009,'Action','2021:12:17','Jon Watts','',false,'Kevin Feige','Unrated',7.8,'For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.','Spider-Man: No Way Home','rt-2cxAiPJk','assets/img/posters/spider_man_no_way_home.jpeg');
INSERT INTO movie_actors VALUES (120,1008,'MJ'),(121,1008,'Peter Parker'),(122,1008,'Doctor Strange'),(123,1008,'May Parker'),(124,1008,'Happy Hogan'),(84,1008,'J. Jonah Jameson'),(126,1008,'Betty Brant'),(127,1008,'none'),(128,1008,'Dr. Curtis Connors'),(129,1008,'Max Dillon'),(130,1008,'Otto Octavius'),(131,1008,'Wong'),(132,1008,'Flint Marko'),(133,1008,'Mr. Harrington'),(134,1008,'Flash Thompson'),(135,1008,'Ned Leeds'),(136,1008,'Mr. Dell'),(137,1008,'Drug Dealer');

INSERT INTO actors VALUES (156,'Christina','Ricci'),(157,'Keanu','Reeves'),(158,'Carrie-Anne','Moss'),(159,'Jessica','Henwick'),(160,'Priyanka','Jonas'),(161,'Jonathan','Groff'),(162,'Ellen','Hollman'),(163,'Yahya','Abdul-Mateen II'),(164,'Jada','Smith'),(165,'Neil','Harris'),(166,'Daniel','Bernhardt'),(167,'Max','Riemelt'),(168,'Lambert','Wilson'),(169,'Brian','Smith'),(170,'Telma','Hopkins'),(171,'Eréndira','Ibarra'),(172,'Andrew','Caldwell'),(173,'Ian','Pirie');
INSERT INTO movies VALUES (1010,'Action','2021:12:22','Lana Wachowski','2h 28m',false,'Grant Hill','R',4.2,'Plagued by strange memories, Neo''s life takes an unexpected turn when he finds himself back inside the Matrix.','The Matrix Resurrections','9ix7TUGVYIo','assets/img/posters/the_matrix_resurrections.jpg');
INSERT INTO movie_actors VALUES (156,1010,'nome'),(157,1010,'Neo'),(158,1010,'Trinity'),(159,1010,'Bugs'),(160,1010,'none'),(161,1010,'none'),(162,1010,'none'),(163,1010,'Morpheus'),(164,1010,'Niobe'),(165,1010,'The Analyst'),(166,1010,'Agent Johnson'),(167,1010,'none'),(168,1010,'Merovingian'),(169,1010,'none'),(170,1010,'none'),(171,1010,'none'),(172,1010,'none'),(173,1010,'Lieutenant');

INSERT INTO actors VALUES (192,'Shameik','Moore'),(193,'Hailee','Steinfeld'),(194,'Issa','Rae');
INSERT INTO movies VALUES (1011,'Animation','2022:10:07','Joaquim Santos','',false,'Phil Lord','Unrated',9.7,'There is not a synopsis for this movie yet.','Spider-Man: Into the Spider-Verse 2','HsX8pVqp_gg','assets/img/posters/spider_man_into_the_spider_verse_2.jpeg');
INSERT INTO movie_actors VALUES (192,1011,'Miles Morales (voice)'),(193,1011,'Gwen Stacey (voice)'),(194,1011,'Jessica Drew (voice)');

INSERT INTO actors VALUES (144, 'Cyrus', 'Arnold'), (145, 'Braxton', 'Baker'), (146, 'Erica', 'Cerra'), (147, 'Lossen', 'Chambers'), (148, 'Ethan', 'Childress'), (149, 'Christian', 'Convery'), (150, 'Brenda', 'Crichlow'), (151, 'Chris', 'Diamantopoulos'), (152, 'Huter', 'Dillon'), (153, 'Tessa', 'Espinola'), (154, 'Yuvraj', 'Singh'), (155, 'Billy', 'Lopez'), (197, 'Donny', 'Lucas'), (198, 'Jaime', 'MacLean'), (199, 'Veda', 'Maharaj'), (200, 'Jessica', 'Mikayla'), (201, 'Robert', 'Moloney'), (202, 'Gig', 'Morton');
INSERT INTO movies VALUES (1012, 'Animation', '2021:12:03', 'Swinton O. Scott III', '', false, 'Jeff Kinney', 'PG', 0.0, 'Greg Heffley is an ambitious kid with an active imagination and big plans to be rich and famous. The problem is that he has to survive middle school first.', 'Diary of a Wimpy Kid', 'f_FfCt2s7IA', 'assets/img/posters/diary_of_a_wimpy_kid.jpg');
INSERT INTO movie_actors VALUES (144, 1012, 'Teen Driver (voice)'), (145, 1012, 'Teen with Mullet (voice)'), (146, 1012, 'Susan (voice)'), (147, 1012, 'Homeroom Teacher (voice)'), (148, 1012, 'Rowley (voice)'), (149, 1012, 'Fregley (voice)'), (150, 1012, 'Mrs. Fregley (voice)'), (151, 1012, 'Frank (voice)'), (152, 1012, 'Rodrick (voice)'), (153, 1012, 'Curly-Haired Girl (voice)'), (154, 1012, 'Charlie Davies (voice)'), (155, 1012, 'Mr. Underwood (voice)'), (197, 1012, 'Mr. Humphreys (voice)'), (198, 1012, 'Holly Hills''s Friend'), (199, 1012, 'Chirag Gupta (voice)'), (200, 1012, 'Braces Girl (voice)'), (201, 1012, 'Joshie (voice)'), (202, 1012, 'Random Boy (voice)');

INSERT INTO actors VALUES (203, 'Timothée', 'Chalamet'), (204, 'Rebecca', 'Ferguson'), (205, 'Oscar', 'Isaac'), (206, 'Jason', 'Momoa'), (207, 'Stellan', 'Skarsgård'), (208, 'Stephen', 'Henderson'), (209, 'Josh', 'Brolin'), (210, 'Javier', 'Bardem'), (211, 'Sharon', 'Duncan-Brewster'), (212, 'Chang', 'Chen'), (213, 'Dave', 'Bautista'), (214, 'David', 'Dastmalchian'), (215, 'Charlotte', 'Rampling'), (216, 'Babs', 'Olusanmokun'), (217, 'Benjamin', 'Clémentine'), (218, 'Souad', 'Faress'), (219, 'Golda', 'Rosheuvel');
INSERT INTO movies VALUES (1013, 'Action', '2021:12:03', 'Denis Villeneuve', '2h 35m', false, 'Mary Parent', 'PG13', 8.2, 'Feature adaptation of Frank Herbert''s science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.', 'Dune', '8g18jFHCLXk', 'assets/img/posters/dune.jpg');
INSERT INTO movie_actors VALUES (120, 1013, 'Chani'), (203, 1013, 'Paul Atreides'), (204, 1013, 'Lady Jesseca Atreides'), (205, 1013, 'Duke Leto Atreides'), (206, 1013, 'Duncan Idaho'), (207, 1013, 'Baron Vladimir Harkonnen'), (208, 1013, 'Thufir Hawat'), (209, 1013, 'Gurney Halleck'), (210, 1013, 'Stilgar'), (211, 1013, 'Dr. Liet Kynes'), (212, 1013, 'Dr. Wellington Yueh'), (213, 1013, 'Beast Rabban Harkonnen'), (214, 1013, 'Piter de Vries'), (215, 1013, 'Reverend Mother Mohiam'), (216, 1013, 'Jamis'), (217, 1013, 'Herald of the Change'), (218, 1013, 'Bene Gesserit Sister'), (219, 1013, 'Shadout Mapes');

INSERT INTO actors VALUES (125, 'Leonardo', 'DiCaprio'), (220, 'Jennifer', 'Lawrence'), (221, 'Melanie', 'Lynskey'), (222, 'Jonah', 'Hill'), (223, 'Cate', 'Blanchett'), (224, 'Meryl', 'Streep'), (225, 'Ariana', 'Grande'), (226, 'Ron', 'Perlman'), (227, 'Mark', 'Rylance'), (228, 'Michael', 'Chiklis'), (229, 'Tyler', 'Perry'), (230, 'Rob', 'Morgan'), (231, 'Himesh', 'Patel'), (232, 'Kid', 'Cudi'), (233, 'Paul', 'Guilfoyle'), (234, 'Meghan', 'Leathers'), (235, 'Hettienne', 'Park');
INSERT INTO movies VALUES (1014, 'Comedy', '2021:12:10', 'Adam McKay', '2h 25m', false, 'Adam McKay', 'R', 0.0, 'Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.', 'Don''t Look Up', 'RbIxYm3mKzI', 'assets/img/posters/dont_look_up.jpg');
INSERT INTO movie_actors VALUES (203, 1014, 'Yule'), (125, 1014, 'Dr. Randall Mindy'), (220, 1014, 'Kate Dibiasky'), (221, 1014, 'June Mindy'), (222, 1014, 'Jason Orlean'), (223, 1014, 'Brie Evantee'), (224, 1014, 'President Janie Orlean'), (225, 1014, 'Riley Bina'), (226, 1014, 'Colonel Ben Drask'), (227, 1014, 'Peter Isherwell'), (228, 1014, 'Dan Pawketty'), (229, 1014, 'Jack Bremmer'), (230, 1014, 'Dr. Clayton ''Teddy'' Oglethorpe'), (231, 1014, 'Phillip'), (232, 1014, 'D J Chello'), (233, 1014, 'General Themes'), (234, 1014, 'Media Quant'), (235, 1014, 'Dr. Calder');

INSERT INTO shows VALUES (1, '2021:11:30 10:15:00',1001, 1),
                         (2, '2021:11:30 10:15:00',1004, 2),
                         (3, '2021:11:30 10:15:00',1007, 3),
                         (4, '2021:11:30 12:45:00',1002, 2),
                         (5, '2021:11:30 12:45:00',1006, 3),
                         (6, '2021:11:30 13:45:00',1008, 1),
                         (7, '2021:11:30 14:45:00',1003, 2),
                         (8, '2021:11:30 15:45:00',1005, 3),
                         (9, '2021:11:30 16:15:00',1006, 1),
                         (10, '2021:11:30 17:15:00',1001, 2),
                         (11, '2021:11:30 18:15:00',1007, 3),
                         (12, '2021:11:30 19:15:00',1004, 1),
                         (13, '2021:11:30 20:45:00',1008, 2),
                         (14, '2021:11:30 20:45:00',1002, 3);

INSERT INTO shows VALUES (15, '2021:12:01 10:15:00',1002, 1),
                         (16, '2021:12:01 10:15:00',1003, 2),
                         (17, '2021:12:01 10:15:00',1008, 3),
                         (18, '2021:12:01 12:15:00',1005, 1),
                         (19, '2021:12:01 12:45:00',1007, 2),
                         (20, '2021:12:01 12:45:00',1004, 3),
                         (21, '2021:12:01 14:45:00',1008, 1),
                         (22, '2021:12:01 15:15:00',1006, 2),
                         (23, '2021:12:01 15:15:00',1001, 3),
                         (24, '2021:12:01 17:15:00',1003, 1),
                         (25, '2021:12:01 18:15:00',1002, 1),
                         (26, '2021:12:01 18:45:00',1004, 3),
                         (27, '2021:12:01 19:45:00',1005, 1);

INSERT INTO shows VALUES (28, '2021:12:02 10:15:00',1004, 1),
                         (29, '2021:12:02 10:15:00',1006, 2),
                         (30, '2021:12:02 10:15:00',1005, 3),
                         (31, '2021:12:02 12:45:00',1007, 1),
                         (32, '2021:12:02 12:45:00',1001, 3),
                         (33, '2021:12:02 13:15:00',1008, 2),
                         (34, '2021:12:02 15:15:00',1003, 1),
                         (35, '2021:12:02 15:45:00',1002, 2),
                         (36, '2021:12:02 16:15:00',1007, 3),
                         (37, '2021:12:02 17:45:00',1001, 1),
                         (38, '2021:12:02 17:45:00',1005, 2),
                         (39, '2021:12:02 18:45:00',1002, 3),
                         (40, '2021:12:02 20:15:00',1004, 2);

INSERT INTO shows VALUES (41, '2021:12:03 10:15:00',1001, 1),
                         (42, '2021:12:03 10:15:00',1004, 2),
                         (43, '2021:12:03 10:15:00',1007, 3),
                         (44, '2021:12:03 12:45:00',1002, 2),
                         (45, '2021:12:03 12:45:00',1006, 3),
                         (46, '2021:12:03 13:45:00',1008, 1),
                         (47, '2021:12:03 14:45:00',1003, 2),
                         (48, '2021:12:03 15:45:00',1005, 3),
                         (49, '2021:12:03 16:15:00',1006, 1),
                         (50, '2021:12:03 17:15:00',1001, 2),
                         (51, '2021:12:03 18:15:00',1007, 3),
                         (52, '2021:12:03 19:15:00',1004, 1),
                         (53, '2021:12:03 20:45:00',1008, 2),
                         (54, '2021:12:03 20:45:00',1002, 3);

INSERT INTO shows VALUES (55, '2021:12:04 10:15:00',1002, 1),
                         (56, '2021:12:04 10:15:00',1003, 2),
                         (57, '2021:12:04 10:15:00',1008, 3),
                         (58, '2021:12:04 12:15:00',1005, 1),
                         (59, '2021:12:04 12:45:00',1007, 2),
                         (60, '2021:12:04 12:45:00',1004, 3),
                         (61, '2021:12:04 14:45:00',1008, 1),
                         (62, '2021:12:04 15:15:00',1006, 2),
                         (63, '2021:12:04 15:15:00',1001, 3),
                         (64, '2021:12:04 17:15:00',1003, 1),
                         (65, '2021:12:04 18:15:00',1002, 1),
                         (66, '2021:12:04 18:45:00',1004, 3),
                         (67, '2021:12:04 19:45:00',1005, 1);

INSERT INTO shows VALUES (68, '2021:12:05 10:15:00',1004, 1),
                         (69, '2021:12:05 10:15:00',1006, 2),
                         (70, '2021:12:05 10:15:00',1005, 3),
                         (71, '2021:12:05 12:45:00',1007, 1),
                         (72, '2021:12:05 12:45:00',1001, 3),
                         (73, '2021:12:05 13:15:00',1008, 2),
                         (74, '2021:12:05 15:15:00',1003, 1),
                         (75, '2021:12:05 15:45:00',1002, 2),
                         (76, '2021:12:05 16:15:00',1007, 3),
                         (77, '2021:12:05 17:45:00',1001, 1),
                         (78, '2021:12:05 17:45:00',1005, 2),
                         (79, '2021:12:05 18:45:00',1002, 3),
                         (80, '2021:12:05 20:15:00',1004, 2);

INSERT INTO shows VALUES (81, '2021:12:06 10:15:00',1001, 1),
                         (82, '2021:12:06 10:15:00',1004, 2),
                         (83, '2021:12:06 10:15:00',1007, 3),
                         (84, '2021:12:06 12:45:00',1002, 2),
                         (85, '2021:12:06 12:45:00',1006, 3),
                         (86, '2021:12:06 13:45:00',1008, 1),
                         (87, '2021:12:06 14:45:00',1003, 2),
                         (88, '2021:12:06 15:45:00',1005, 3),
                         (89, '2021:12:06 16:15:00',1006, 1),
                         (90, '2021:12:06 17:15:00',1001, 2),
                         (91, '2021:12:06 18:15:00',1007, 3),
                         (92, '2021:12:06 19:15:00',1004, 1),
                         (93, '2021:12:06 20:45:00',1008, 2),
                         (94, '2021:12:06 20:45:00',1002, 3);

INSERT INTO shows VALUES (95, '2021:12:07 10:15:00',1002, 1),
                         (96, '2021:12:07 10:15:00',1003, 2),
                         (97, '2021:12:07 10:15:00',1008, 3),
                         (98, '2021:12:07 12:15:00',1005, 1),
                         (99, '2021:12:07 12:45:00',1007, 2),
                         (100, '2021:12:07 12:45:00',1004, 3),
                         (101, '2021:12:07 14:45:00',1008, 1),
                         (102, '2021:12:07 15:15:00',1006, 2),
                         (103, '2021:12:07 15:15:00',1001, 3),
                         (104, '2021:12:07 17:15:00',1003, 1),
                         (105, '2021:12:07 18:15:00',1002, 1),
                         (106, '2021:12:07 18:45:00',1004, 3),
                         (107, '2021:12:07 19:45:00',1005, 1);

INSERT INTO shows VALUES (108, '2021:12:08 10:15:00',1004, 1),
                         (109, '2021:12:08 10:15:00',1006, 2),
                         (110, '2021:12:08 10:15:00',1005, 3),
                         (111, '2021:12:08 12:45:00',1007, 1),
                         (112, '2021:12:08 12:45:00',1001, 3),
                         (113, '2021:12:08 13:15:00',1008, 2),
                         (114, '2021:12:08 15:15:00',1003, 1),
                         (115, '2021:12:08 15:45:00',1002, 2),
                         (116, '2021:12:08 16:15:00',1007, 3),
                         (117, '2021:12:08 17:45:00',1001, 1),
                         (118, '2021:12:08 17:45:00',1005, 2),
                         (119, '2021:12:08 18:45:00',1002, 3),
                         (120, '2021:12:08 20:15:00',1004, 2);

INSERT INTO shows VALUES (121, '2021:12:09 10:15:00',1001, 1),
                         (122, '2021:12:09 10:15:00',1004, 2),
                         (123, '2021:12:09 10:15:00',1007, 3),
                         (124, '2021:12:09 12:45:00',1002, 2),
                         (125, '2021:12:09 12:45:00',1006, 3),
                         (126, '2021:12:09 13:45:00',1008, 1),
                         (127, '2021:12:09 14:45:00',1003, 2),
                         (128, '2021:12:09 15:45:00',1005, 3),
                         (129, '2021:12:09 16:15:00',1006, 1),
                         (130, '2021:12:09 17:15:00',1001, 2),
                         (131, '2021:12:09 18:15:00',1007, 3),
                         (132, '2021:12:09 19:15:00',1004, 1),
                         (133, '2021:12:09 20:45:00',1008, 2),
                         (134, '2021:12:09 20:45:00',1002, 3);

INSERT INTO shows VALUES (135, '2021:12:10 10:15:00',1002, 1),
                         (136, '2021:12:10 10:15:00',1003, 2),
                         (137, '2021:12:10 10:15:00',1008, 3),
                         (138, '2021:12:10 12:15:00',1005, 1),
                         (139, '2021:12:10 12:45:00',1007, 2),
                         (140, '2021:12:10 12:45:00',1004, 3),
                         (141, '2021:12:10 14:45:00',1008, 1),
                         (142, '2021:12:10 15:15:00',1006, 2),
                         (143, '2021:12:10 15:15:00',1001, 3),
                         (144, '2021:12:10 17:15:00',1003, 1),
                         (145, '2021:12:10 18:15:00',1002, 1),
                         (146, '2021:12:10 18:45:00',1004, 3),
                         (147, '2021:12:10 19:45:00',1005, 1);

INSERT INTO shows VALUES (148, '2021:12:11 10:15:00',1004, 1),
                         (149, '2021:12:11 10:15:00',1006, 2),
                         (150, '2021:12:11 10:15:00',1005, 3),
                         (151, '2021:12:11 12:45:00',1007, 1),
                         (152, '2021:12:11 12:45:00',1001, 3),
                         (153, '2021:12:11 13:15:00',1008, 2),
                         (154, '2021:12:11 15:15:00',1003, 1),
                         (155, '2021:12:11 15:45:00',1002, 2),
                         (156, '2021:12:11 16:15:00',1007, 3),
                         (157, '2021:12:11 17:45:00',1001, 1),
                         (158, '2021:12:11 17:45:00',1005, 2),
                         (159, '2021:12:11 18:45:00',1002, 3),
                         (160, '2021:12:11 20:15:00',1004, 2);

INSERT INTO shows VALUES (161, '2021:12:12 10:15:00',1001, 1),
                         (162, '2021:12:12 10:15:00',1004, 2),
                         (163, '2021:12:12 10:15:00',1007, 3),
                         (164, '2021:12:12 12:45:00',1002, 2),
                         (165, '2021:12:12 12:45:00',1006, 3),
                         (166, '2021:12:12 13:45:00',1008, 1),
                         (167, '2021:12:12 14:45:00',1003, 2),
                         (168, '2021:12:12 15:45:00',1005, 3),
                         (169, '2021:12:12 16:15:00',1006, 1),
                         (170, '2021:12:12 17:15:00',1001, 2),
                         (171, '2021:12:12 18:15:00',1007, 3),
                         (172, '2021:12:12 19:15:00',1004, 1),
                         (173, '2021:12:12 20:45:00',1008, 2),
                         (174, '2021:12:12 20:45:00',1002, 3);

INSERT INTO shows VALUES (175, '2021:12:13 10:15:00',1002, 1),
                         (176, '2021:12:13 10:15:00',1003, 2),
                         (177, '2021:12:13 10:15:00',1008, 3),
                         (178, '2021:12:13 12:15:00',1005, 1),
                         (179, '2021:12:13 12:45:00',1007, 2),
                         (180, '2021:12:13 12:45:00',1004, 3),
                         (181, '2021:12:13 14:45:00',1008, 1),
                         (182, '2021:12:13 15:15:00',1006, 2),
                         (183, '2021:12:13 15:15:00',1001, 3),
                         (184, '2021:12:13 17:15:00',1003, 1),
                         (185, '2021:12:13 18:15:00',1002, 1),
                         (186, '2021:12:13 18:45:00',1004, 3),
                         (187, '2021:12:13 19:45:00',1005, 1);

INSERT INTO shows VALUES (188, '2021:12:14 10:15:00',1004, 1),
                         (189, '2021:12:14 10:15:00',1006, 2),
                         (190, '2021:12:14 10:15:00',1005, 3),
                         (191, '2021:12:14 12:45:00',1007, 1),
                         (192, '2021:12:14 12:45:00',1001, 3),
                         (193, '2021:12:14 13:15:00',1008, 2),
                         (194, '2021:12:14 15:15:00',1003, 1),
                         (195, '2021:12:14 15:45:00',1002, 2),
                         (196, '2021:12:14 16:15:00',1007, 3),
                         (197, '2021:12:14 17:45:00',1001, 1),
                         (198, '2021:12:14 17:45:00',1005, 2),
                         (199, '2021:12:14 18:45:00',1002, 3),
                         (200, '2021:12:14 20:15:00',1004, 2);

INSERT INTO seat_availabilities VALUES (1, 1, 1, true), (2, 1, 1, true), (3, 1, 1, true), (4, 1, 1, true), (5, 1, 1, true), (6, 1, 1, true), (7, 1, 1, false), (8, 1, 1, false), (9, 1, 1, false), (10, 1, 1, true), (11, 1, 1, true), (12, 1, 1, true), (13, 1, 1, true), (14, 1, 1, false), (15, 1, 1, false), (16, 1, 1, false), (17, 1, 1, false), (18, 1, 1, false), (19, 1, 1, false), (20, 1, 1, false);
INSERT INTO seat_availabilities VALUES (21, 2, 2, true), (22, 2, 2, true), (23, 2, 2, true), (24, 2, 2, true), (25, 2, 2, true), (26, 2, 2, true), (27, 2, 2, false), (28, 2, 2, false), (29, 2, 2, false), (30, 2, 2, true), (31, 2, 2, true), (32, 2, 2, true), (33, 2, 2, true), (34, 2, 2, false), (35, 2, 2, false), (36, 2, 2, false), (37, 2, 2, false), (38, 2, 2, false), (39, 2, 2, false), (40, 2, 2, false);
INSERT INTO seat_availabilities VALUES (41, 3, 3, true), (42, 3, 3, false), (43, 3, 3, false), (44, 3, 3, false), (45, 3, 3, true), (46, 3, 3, true), (47, 3, 3, true), (48, 3, 3, true), (49, 3, 3, false), (50, 3, 3, true), (51, 3, 3, true), (52, 3, 3, false), (53, 3, 3, false), (54, 3, 3, true), (55, 3, 3, true), (56, 3, 3, false), (57, 3, 3, true), (58, 3, 3, false), (59, 3, 3, false), (60, 3, 3, false);
INSERT INTO seat_availabilities VALUES (21, 4, 2, true), (22, 4, 2, true), (23, 4, 2, true), (24, 4, 2, true), (25, 4, 2, true), (26, 4, 2, true), (27, 4, 2, false), (28, 4, 2, false), (29, 4, 2, false), (30, 4, 2, true), (31, 4, 2, true), (32, 4, 2, true), (33, 4, 2, true), (34, 4, 2, false), (35, 4, 2, false), (36, 4, 2, false), (37, 4, 2, false), (38, 4, 2, false), (39, 4, 2, false), (40, 4, 2, false);
INSERT INTO seat_availabilities VALUES (41, 5, 3, true), (42, 5, 3, true), (43, 5, 3, true), (44, 5, 3, true), (45, 5, 3, true), (46, 5, 3, true), (47, 5, 3, false), (48, 5, 3, false), (49, 5, 3, false), (50, 5, 3, true), (51, 5, 3, true), (52, 5, 3, true), (53, 5, 3, true), (54, 5, 3, false), (55, 5, 3, false), (56, 5, 3, false), (57, 5, 3, false), (58, 5, 3, false), (59, 5, 3, false), (60, 5, 3, false);
INSERT INTO seat_availabilities VALUES (1, 6, 1, false), (2, 6, 1, false), (3, 6, 1, true), (4, 6, 1, true), (5, 6, 1, true), (6, 6, 1, true), (7, 6, 1, true), (8, 6, 1, true), (9, 6, 1, false), (10, 6, 1, true), (11, 6, 1, true), (12, 6, 1, false), (13, 6, 1, false), (14, 6, 1, false), (15, 6, 1, true), (16, 6, 1, true), (17, 6, 1, true), (18, 6, 1, false), (19, 6, 1, false), (20, 6, 1, true);
INSERT INTO seat_availabilities VALUES (21, 7, 2, true), (22, 7, 2, false), (23, 7, 2, false), (24, 7, 2, false), (25, 7, 2, true), (26, 7, 2, true), (27, 7, 2, true), (28, 7, 2, true), (29, 7, 2, false), (30, 7, 2, true), (31, 7, 2, true), (32, 7, 2, false), (33, 7, 2, false), (34, 7, 2, true), (35, 7, 2, true), (36, 7, 2, false), (37, 7, 2, true), (38, 7, 2, false), (39, 7, 2, false), (40, 7, 2, false);
INSERT INTO seat_availabilities VALUES (41, 8, 3, true), (42, 8, 3, false), (43, 8, 3, false), (44, 8, 3, false), (45, 8, 3, true), (46, 8, 3, true), (47, 8, 3, true), (48, 8, 3, true), (49, 8, 3, false), (50, 8, 3, true), (51, 8, 3, true), (52, 8, 3, false), (53, 8, 3, false), (54, 8, 3, true), (55, 8, 3, true), (56, 8, 3, false), (57, 8, 3, true), (58, 8, 3, false), (59, 8, 3, false), (60, 8, 3, false);
INSERT INTO seat_availabilities VALUES (1, 9, 1, false), (2, 9, 1, false), (3, 9, 1, true), (4, 9, 1, true), (5, 9, 1, true), (6, 9, 1, true), (7, 9, 1, true), (8, 9, 1, true), (9, 9, 1, false), (10, 9, 1, true), (11, 9, 1, true), (12, 9, 1, false), (13, 9, 1, false), (14, 9, 1, false), (15, 9, 1, true), (16, 9, 1, true), (17, 9, 1, true), (18, 9, 1, false), (19, 9, 1, false), (20, 9, 1, true);
INSERT INTO seat_availabilities VALUES (21, 10, 2, false), (22, 10, 2, false), (23, 10, 2, true), (24, 10, 2, true), (25, 10, 2, true), (26, 10, 2, true), (27, 10, 2, true), (28, 10, 2, true), (29, 10, 2, false), (30, 10, 2, true), (31, 10, 2, true), (32, 10, 2, false), (33, 10, 2, false), (34, 10, 2, false), (35, 10, 2, true), (36, 10, 2, true), (37, 10, 2, true), (38, 10, 2, false), (39, 10, 2, false), (40, 10, 2, true);
INSERT INTO seat_availabilities VALUES (41, 11, 3, true), (42, 11, 3, true), (43, 11, 3, true), (44, 11, 3, true), (45, 11, 3, true), (46, 11, 3, true), (47, 11, 3, false), (48, 11, 3, false), (49, 11, 3, false), (50, 11, 3, true), (51, 11, 3, true), (52, 11, 3, true), (53, 11, 3, true), (54, 11, 3, false), (55, 11, 3, false), (56, 11, 3, false), (57, 11, 3, false), (58, 11, 3, false), (59, 11, 3, false), (60, 11, 3, false);
INSERT INTO seat_availabilities VALUES (1, 12, 1, true), (2, 12, 1, false), (3, 12, 1, false), (4, 12, 1, false), (5, 12, 1, true), (6, 12, 1, true), (7, 12, 1, true), (8, 12, 1, true), (9, 12, 1, false), (10, 12, 1, true), (11, 12, 1, true), (12, 12, 1, false), (13, 12, 1, false), (14, 12, 1, true), (15, 12, 1, true), (16, 12, 1, false), (17, 12, 1, true), (18, 12, 1, false), (19, 12, 1, false), (20, 12, 1, false);
INSERT INTO seat_availabilities VALUES (21, 13, 2, true), (22, 13, 2, true), (23, 13, 2, true), (24, 13, 2, true), (25, 13, 2, true), (26, 13, 2, true), (27, 13, 2, false), (28, 13, 2, false), (29, 13, 2, false), (30, 13, 2, true), (31, 13, 2, true), (32, 13, 2, true), (33, 13, 2, true), (34, 13, 2, false), (35, 13, 2, false), (36, 13, 2, false), (37, 13, 2, false), (38, 13, 2, false), (39, 13, 2, false), (40, 13, 2, false);
INSERT INTO seat_availabilities VALUES (41, 14, 3, false), (42, 14, 3, false), (43, 14, 3, true), (44, 14, 3, true), (45, 14, 3, true), (46, 14, 3, true), (47, 14, 3, true), (48, 14, 3, true), (49, 14, 3, false), (50, 14, 3, true), (51, 14, 3, true), (52, 14, 3, false), (53, 14, 3, false), (54, 14, 3, false), (55, 14, 3, true), (56, 14, 3, true), (57, 14, 3, true), (58, 14, 3, false), (59, 14, 3, false), (60, 14, 3, true);
INSERT INTO seat_availabilities VALUES (1, 15, 1, false), (2, 15, 1, false), (3, 15, 1, true), (4, 15, 1, true), (5, 15, 1, true), (6, 15, 1, true), (7, 15, 1, true), (8, 15, 1, true), (9, 15, 1, false), (10, 15, 1, true), (11, 15, 1, true), (12, 15, 1, false), (13, 15, 1, false), (14, 15, 1, false), (15, 15, 1, true), (16, 15, 1, true), (17, 15, 1, true), (18, 15, 1, false), (19, 15, 1, false), (20, 15, 1, true);
INSERT INTO seat_availabilities VALUES (21, 16, 2, true), (22, 16, 2, true), (23, 16, 2, true), (24, 16, 2, true), (25, 16, 2, true), (26, 16, 2, true), (27, 16, 2, false), (28, 16, 2, false), (29, 16, 2, false), (30, 16, 2, true), (31, 16, 2, true), (32, 16, 2, true), (33, 16, 2, true), (34, 16, 2, false), (35, 16, 2, false), (36, 16, 2, false), (37, 16, 2, false), (38, 16, 2, false), (39, 16, 2, false), (40, 16, 2, false);
INSERT INTO seat_availabilities VALUES (41, 17, 3, true), (42, 17, 3, false), (43, 17, 3, false), (44, 17, 3, false), (45, 17, 3, true), (46, 17, 3, true), (47, 17, 3, true), (48, 17, 3, true), (49, 17, 3, false), (50, 17, 3, true), (51, 17, 3, true), (52, 17, 3, false), (53, 17, 3, false), (54, 17, 3, true), (55, 17, 3, true), (56, 17, 3, false), (57, 17, 3, true), (58, 17, 3, false), (59, 17, 3, false), (60, 17, 3, false);
INSERT INTO seat_availabilities VALUES (1, 18, 1, true), (2, 18, 1, false), (3, 18, 1, false), (4, 18, 1, false), (5, 18, 1, true), (6, 18, 1, true), (7, 18, 1, true), (8, 18, 1, true), (9, 18, 1, false), (10, 18, 1, true), (11, 18, 1, true), (12, 18, 1, false), (13, 18, 1, false), (14, 18, 1, true), (15, 18, 1, true), (16, 18, 1, false), (17, 18, 1, true), (18, 18, 1, false), (19, 18, 1, false), (20, 18, 1, false);
INSERT INTO seat_availabilities VALUES (21, 19, 2, true), (22, 19, 2, true), (23, 19, 2, true), (24, 19, 2, true), (25, 19, 2, true), (26, 19, 2, true), (27, 19, 2, false), (28, 19, 2, false), (29, 19, 2, false), (30, 19, 2, true), (31, 19, 2, true), (32, 19, 2, true), (33, 19, 2, true), (34, 19, 2, false), (35, 19, 2, false), (36, 19, 2, false), (37, 19, 2, false), (38, 19, 2, false), (39, 19, 2, false), (40, 19, 2, false);
INSERT INTO seat_availabilities VALUES (41, 20, 3, false), (42, 20, 3, false), (43, 20, 3, true), (44, 20, 3, true), (45, 20, 3, true), (46, 20, 3, true), (47, 20, 3, true), (48, 20, 3, true), (49, 20, 3, false), (50, 20, 3, true), (51, 20, 3, true), (52, 20, 3, false), (53, 20, 3, false), (54, 20, 3, false), (55, 20, 3, true), (56, 20, 3, true), (57, 20, 3, true), (58, 20, 3, false), (59, 20, 3, false), (60, 20, 3, true);
INSERT INTO seat_availabilities VALUES (1, 21, 1, false), (2, 21, 1, false), (3, 21, 1, true), (4, 21, 1, true), (5, 21, 1, true), (6, 21, 1, true), (7, 21, 1, true), (8, 21, 1, true), (9, 21, 1, false), (10, 21, 1, true), (11, 21, 1, true), (12, 21, 1, false), (13, 21, 1, false), (14, 21, 1, false), (15, 21, 1, true), (16, 21, 1, true), (17, 21, 1, true), (18, 21, 1, false), (19, 21, 1, false), (20, 21, 1, true);
INSERT INTO seat_availabilities VALUES (21, 22, 2, true), (22, 22, 2, false), (23, 22, 2, false), (24, 22, 2, false), (25, 22, 2, true), (26, 22, 2, true), (27, 22, 2, true), (28, 22, 2, true), (29, 22, 2, false), (30, 22, 2, true), (31, 22, 2, true), (32, 22, 2, false), (33, 22, 2, false), (34, 22, 2, true), (35, 22, 2, true), (36, 22, 2, false), (37, 22, 2, true), (38, 22, 2, false), (39, 22, 2, false), (40, 22, 2, false);
INSERT INTO seat_availabilities VALUES (41, 23, 3, true), (42, 23, 3, true), (43, 23, 3, true), (44, 23, 3, true), (45, 23, 3, true), (46, 23, 3, true), (47, 23, 3, false), (48, 23, 3, false), (49, 23, 3, false), (50, 23, 3, true), (51, 23, 3, true), (52, 23, 3, true), (53, 23, 3, true), (54, 23, 3, false), (55, 23, 3, false), (56, 23, 3, false), (57, 23, 3, false), (58, 23, 3, false), (59, 23, 3, false), (60, 23, 3, false);
INSERT INTO seat_availabilities VALUES (1, 24, 1, true), (2, 24, 1, false), (3, 24, 1, false), (4, 24, 1, false), (5, 24, 1, true), (6, 24, 1, true), (7, 24, 1, true), (8, 24, 1, true), (9, 24, 1, false), (10, 24, 1, true), (11, 24, 1, true), (12, 24, 1, false), (13, 24, 1, false), (14, 24, 1, true), (15, 24, 1, true), (16, 24, 1, false), (17, 24, 1, true), (18, 24, 1, false), (19, 24, 1, false), (20, 24, 1, false);
INSERT INTO seat_availabilities VALUES (21, 25, 2, true), (22, 25, 2, true), (23, 25, 2, true), (24, 25, 2, true), (25, 25, 2, true), (26, 25, 2, true), (27, 25, 2, false), (28, 25, 2, false), (29, 25, 2, false), (30, 25, 2, true), (31, 25, 2, true), (32, 25, 2, true), (33, 25, 2, true), (34, 25, 2, false), (35, 25, 2, false), (36, 25, 2, false), (37, 25, 2, false), (38, 25, 2, false), (39, 25, 2, false), (40, 25, 2, false);
INSERT INTO seat_availabilities VALUES (41, 26, 3, false), (42, 26, 3, false), (43, 26, 3, true), (44, 26, 3, true), (45, 26, 3, true), (46, 26, 3, true), (47, 26, 3, true), (48, 26, 3, true), (49, 26, 3, false), (50, 26, 3, true), (51, 26, 3, true), (52, 26, 3, false), (53, 26, 3, false), (54, 26, 3, false), (55, 26, 3, true), (56, 26, 3, true), (57, 26, 3, true), (58, 26, 3, false), (59, 26, 3, false), (60, 26, 3, true);
INSERT INTO seat_availabilities VALUES (1, 27, 1, true), (2, 27, 1, false), (3, 27, 1, false), (4, 27, 1, false), (5, 27, 1, true), (6, 27, 1, true), (7, 27, 1, true), (8, 27, 1, true), (9, 27, 1, false), (10, 27, 1, true), (11, 27, 1, true), (12, 27, 1, false), (13, 27, 1, false), (14, 27, 1, true), (15, 27, 1, true), (16, 27, 1, false), (17, 27, 1, true), (18, 27, 1, false), (19, 27, 1, false), (20, 27, 1, false);
INSERT INTO seat_availabilities VALUES (1, 28, 1, true), (2, 28, 1, false), (3, 28, 1, false), (4, 28, 1, false), (5, 28, 1, true), (6, 28, 1, true), (7, 28, 1, true), (8, 28, 1, true), (9, 28, 1, false), (10, 28, 1, true), (11, 28, 1, true), (12, 28, 1, false), (13, 28, 1, false), (14, 28, 1, true), (15, 28, 1, true), (16, 28, 1, false), (17, 28, 1, true), (18, 28, 1, false), (19, 28, 1, false), (20, 28, 1, false);
INSERT INTO seat_availabilities VALUES (21, 29, 2, true), (22, 29, 2, false), (23, 29, 2, false), (24, 29, 2, false), (25, 29, 2, true), (26, 29, 2, true), (27, 29, 2, true), (28, 29, 2, true), (29, 29, 2, false), (30, 29, 2, true), (31, 29, 2, true), (32, 29, 2, false), (33, 29, 2, false), (34, 29, 2, true), (35, 29, 2, true), (36, 29, 2, false), (37, 29, 2, true), (38, 29, 2, false), (39, 29, 2, false), (40, 29, 2, false);
INSERT INTO seat_availabilities VALUES (41, 30, 3, true), (42, 30, 3, true), (43, 30, 3, true), (44, 30, 3, true), (45, 30, 3, true), (46, 30, 3, true), (47, 30, 3, false), (48, 30, 3, false), (49, 30, 3, false), (50, 30, 3, true), (51, 30, 3, true), (52, 30, 3, true), (53, 30, 3, true), (54, 30, 3, false), (55, 30, 3, false), (56, 30, 3, false), (57, 30, 3, false), (58, 30, 3, false), (59, 30, 3, false), (60, 30, 3, false);
INSERT INTO seat_availabilities VALUES (1, 31, 1, false), (2, 31, 1, false), (3, 31, 1, true), (4, 31, 1, true), (5, 31, 1, true), (6, 31, 1, true), (7, 31, 1, true), (8, 31, 1, true), (9, 31, 1, false), (10, 31, 1, true), (11, 31, 1, true), (12, 31, 1, false), (13, 31, 1, false), (14, 31, 1, false), (15, 31, 1, true), (16, 31, 1, true), (17, 31, 1, true), (18, 31, 1, false), (19, 31, 1, false), (20, 31, 1, true);
INSERT INTO seat_availabilities VALUES (41, 32, 3, true), (42, 32, 3, true), (43, 32, 3, true), (44, 32, 3, true), (45, 32, 3, true), (46, 32, 3, true), (47, 32, 3, false), (48, 32, 3, false), (49, 32, 3, false), (50, 32, 3, true), (51, 32, 3, true), (52, 32, 3, true), (53, 32, 3, true), (54, 32, 3, false), (55, 32, 3, false), (56, 32, 3, false), (57, 32, 3, false), (58, 32, 3, false), (59, 32, 3, false), (60, 32, 3, false);
INSERT INTO seat_availabilities VALUES (21, 33, 2, false), (22, 33, 2, false), (23, 33, 2, true), (24, 33, 2, true), (25, 33, 2, true), (26, 33, 2, true), (27, 33, 2, true), (28, 33, 2, true), (29, 33, 2, false), (30, 33, 2, true), (31, 33, 2, true), (32, 33, 2, false), (33, 33, 2, false), (34, 33, 2, false), (35, 33, 2, true), (36, 33, 2, true), (37, 33, 2, true), (38, 33, 2, false), (39, 33, 2, false), (40, 33, 2, true);
INSERT INTO seat_availabilities VALUES (1, 34, 1, true), (2, 34, 1, false), (3, 34, 1, false), (4, 34, 1, false), (5, 34, 1, true), (6, 34, 1, true), (7, 34, 1, true), (8, 34, 1, true), (9, 34, 1, false), (10, 34, 1, true), (11, 34, 1, true), (12, 34, 1, false), (13, 34, 1, false), (14, 34, 1, true), (15, 34, 1, true), (16, 34, 1, false), (17, 34, 1, true), (18, 34, 1, false), (19, 34, 1, false), (20, 34, 1, false);
INSERT INTO seat_availabilities VALUES (21, 35, 2, false), (22, 35, 2, false), (23, 35, 2, true), (24, 35, 2, true), (25, 35, 2, true), (26, 35, 2, true), (27, 35, 2, true), (28, 35, 2, true), (29, 35, 2, false), (30, 35, 2, true), (31, 35, 2, true), (32, 35, 2, false), (33, 35, 2, false), (34, 35, 2, false), (35, 35, 2, true), (36, 35, 2, true), (37, 35, 2, true), (38, 35, 2, false), (39, 35, 2, false), (40, 35, 2, true);
INSERT INTO seat_availabilities VALUES (41, 36, 3, true), (42, 36, 3, true), (43, 36, 3, true), (44, 36, 3, true), (45, 36, 3, true), (46, 36, 3, true), (47, 36, 3, false), (48, 36, 3, false), (49, 36, 3, false), (50, 36, 3, true), (51, 36, 3, true), (52, 36, 3, true), (53, 36, 3, true), (54, 36, 3, false), (55, 36, 3, false), (56, 36, 3, false), (57, 36, 3, false), (58, 36, 3, false), (59, 36, 3, false), (60, 36, 3, false);
INSERT INTO seat_availabilities VALUES (1, 37, 1, false), (2, 37, 1, false), (3, 37, 1, true), (4, 37, 1, true), (5, 37, 1, true), (6, 37, 1, true), (7, 37, 1, true), (8, 37, 1, true), (9, 37, 1, false), (10, 37, 1, true), (11, 37, 1, true), (12, 37, 1, false), (13, 37, 1, false), (14, 37, 1, false), (15, 37, 1, true), (16, 37, 1, true), (17, 37, 1, true), (18, 37, 1, false), (19, 37, 1, false), (20, 37, 1, true);
INSERT INTO seat_availabilities VALUES (21, 38, 2, false), (22, 38, 2, false), (23, 38, 2, true), (24, 38, 2, true), (25, 38, 2, true), (26, 38, 2, true), (27, 38, 2, true), (28, 38, 2, true), (29, 38, 2, false), (30, 38, 2, true), (31, 38, 2, true), (32, 38, 2, false), (33, 38, 2, false), (34, 38, 2, false), (35, 38, 2, true), (36, 38, 2, true), (37, 38, 2, true), (38, 38, 2, false), (39, 38, 2, false), (40, 38, 2, true);
INSERT INTO seat_availabilities VALUES (41, 39, 3, true), (42, 39, 3, false), (43, 39, 3, false), (44, 39, 3, false), (45, 39, 3, true), (46, 39, 3, true), (47, 39, 3, true), (48, 39, 3, true), (49, 39, 3, false), (50, 39, 3, true), (51, 39, 3, true), (52, 39, 3, false), (53, 39, 3, false), (54, 39, 3, true), (55, 39, 3, true), (56, 39, 3, false), (57, 39, 3, true), (58, 39, 3, false), (59, 39, 3, false), (60, 39, 3, false);
INSERT INTO seat_availabilities VALUES (21, 40, 2, true), (22, 40, 2, true), (23, 40, 2, true), (24, 40, 2, true), (25, 40, 2, true), (26, 40, 2, true), (27, 40, 2, false), (28, 40, 2, false), (29, 40, 2, false), (30, 40, 2, true), (31, 40, 2, true), (32, 40, 2, true), (33, 40, 2, true), (34, 40, 2, false), (35, 40, 2, false), (36, 40, 2, false), (37, 40, 2, false), (38, 40, 2, false), (39, 40, 2, false), (40, 40, 2, false);

INSERT INTO seat_availabilities VALUES (1, 41, 1, true), (2, 41, 1, true), (3, 41, 1, true), (4, 41, 1, true), (5, 41, 1, true), (6, 41, 1, true), (7, 41, 1, false), (8, 41, 1, false), (9, 41, 1, false), (10, 41, 1, true), (11, 41, 1, true), (12, 41, 1, true), (13, 41, 1, true), (14, 41, 1, false), (15, 41, 1, false), (16, 41, 1, false), (17, 41, 1, false), (18, 41, 1, false), (19, 41, 1, false), (20, 41, 1, false);
INSERT INTO seat_availabilities VALUES (21, 42, 2, true), (22, 42, 2, true), (23, 42, 2, true), (24, 42, 2, true), (25, 42, 2, true), (26, 42, 2, true), (27, 42, 2, false), (28, 42, 2, false), (29, 42, 2, false), (30, 42, 2, true), (31, 42, 2, true), (32, 42, 2, true), (33, 42, 2, true), (34, 42, 2, false), (35, 42, 2, false), (36, 42, 2, false), (37, 42, 2, false), (38, 42, 2, false), (39, 42, 2, false), (40, 42, 2, false);
INSERT INTO seat_availabilities VALUES (41, 43, 3, true), (42, 43, 3, false), (43, 43, 3, false), (44, 43, 3, false), (45, 43, 3, true), (46, 43, 3, true), (47, 43, 3, true), (48, 43, 3, true), (49, 43, 3, false), (50, 43, 3, true), (51, 43, 3, true), (52, 43, 3, false), (53, 43, 3, false), (54, 43, 3, true), (55, 43, 3, true), (56, 43, 3, false), (57, 43, 3, true), (58, 43, 3, false), (59, 43, 3, false), (60, 43, 3, false);
INSERT INTO seat_availabilities VALUES (21, 44, 2, true), (22, 44, 2, true), (23, 44, 2, true), (24, 44, 2, true), (25, 44, 2, true), (26, 44, 2, true), (27, 44, 2, false), (28, 44, 2, false), (29, 44, 2, false), (30, 44, 2, true), (31, 44, 2, true), (32, 44, 2, true), (33, 44, 2, true), (34, 44, 2, false), (35, 44, 2, false), (36, 44, 2, false), (37, 44, 2, false), (38, 44, 2, false), (39, 44, 2, false), (40, 44, 2, false);
INSERT INTO seat_availabilities VALUES (41, 45, 3, true), (42, 45, 3, true), (43, 45, 3, true), (44, 45, 3, true), (45, 45, 3, true), (46, 45, 3, true), (47, 45, 3, false), (48, 45, 3, false), (49, 45, 3, false), (50, 45, 3, true), (51, 45, 3, true), (52, 45, 3, true), (53, 45, 3, true), (54, 45, 3, false), (55, 45, 3, false), (56, 45, 3, false), (57, 45, 3, false), (58, 45, 3, false), (59, 45, 3, false), (60, 45, 3, false);
INSERT INTO seat_availabilities VALUES (1, 46, 1, false), (2, 46, 1, false), (3, 46, 1, true), (4, 46, 1, true), (5, 46, 1, true), (6, 46, 1, true), (7, 46, 1, true), (8, 46, 1, true), (9, 46, 1, false), (10, 46, 1, true), (11, 46, 1, true), (12, 46, 1, false), (13, 46, 1, false), (14, 46, 1, false), (15, 46, 1, true), (16, 46, 1, true), (17, 46, 1, true), (18, 46, 1, false), (19, 46, 1, false), (20, 46, 1, true);
INSERT INTO seat_availabilities VALUES (21, 47, 2, true), (22, 47, 2, false), (23, 47, 2, false), (24, 47, 2, false), (25, 47, 2, true), (26, 47, 2, true), (27, 47, 2, true), (28, 47, 2, true), (29, 47, 2, false), (30, 47, 2, true), (31, 47, 2, true), (32, 47, 2, false), (33, 47, 2, false), (34, 47, 2, true), (35, 47, 2, true), (36, 47, 2, false), (37, 47, 2, true), (38, 47, 2, false), (39, 47, 2, false), (40, 47, 2, false);
INSERT INTO seat_availabilities VALUES (41, 48, 3, true), (42, 48, 3, false), (43, 48, 3, false), (44, 48, 3, false), (45, 48, 3, true), (46, 48, 3, true), (47, 48, 3, true), (48, 48, 3, true), (49, 48, 3, false), (50, 48, 3, true), (51, 48, 3, true), (52, 48, 3, false), (53, 48, 3, false), (54, 48, 3, true), (55, 48, 3, true), (56, 48, 3, false), (57, 48, 3, true), (58, 48, 3, false), (59, 48, 3, false), (60, 48, 3, false);
INSERT INTO seat_availabilities VALUES (1, 49, 1, false), (2, 49, 1, false), (3, 49, 1, true), (4, 49, 1, true), (5, 49, 1, true), (6, 49, 1, true), (7, 49, 1, true), (8, 49, 1, true), (9, 49, 1, false), (10, 49, 1, true), (11, 49, 1, true), (12, 49, 1, false), (13, 49, 1, false), (14, 49, 1, false), (15, 49, 1, true), (16, 49, 1, true), (17, 49, 1, true), (18, 49, 1, false), (19, 49, 1, false), (20, 49, 1, true);
INSERT INTO seat_availabilities VALUES (21, 50, 2, false), (22, 50, 2, false), (23, 50, 2, true), (24, 50, 2, true), (25, 50, 2, true), (26, 50, 2, true), (27, 50, 2, true), (28, 50, 2, true), (29, 50, 2, false), (30, 50, 2, true), (31, 50, 2, true), (32, 50, 2, false), (33, 50, 2, false), (34, 50, 2, false), (35, 50, 2, true), (36, 50, 2, true), (37, 50, 2, true), (38, 50, 2, false), (39, 50, 2, false), (40, 50, 2, true);
INSERT INTO seat_availabilities VALUES (41, 51, 3, true), (42, 51, 3, true), (43, 51, 3, true), (44, 51, 3, true), (45, 51, 3, true), (46, 51, 3, true), (47, 51, 3, false), (48, 51, 3, false), (49, 51, 3, false), (50, 51, 3, true), (51, 51, 3, true), (52, 51, 3, true), (53, 51, 3, true), (54, 51, 3, false), (55, 51, 3, false), (56, 51, 3, false), (57, 51, 3, false), (58, 51, 3, false), (59, 51, 3, false), (60, 51, 3, false);
INSERT INTO seat_availabilities VALUES (1, 52, 1, true), (2, 52, 1, false), (3, 52, 1, false), (4, 52, 1, false), (5, 52, 1, true), (6, 52, 1, true), (7, 52, 1, true), (8, 52, 1, true), (9, 52, 1, false), (10, 52, 1, true), (11, 52, 1, true), (12, 52, 1, false), (13, 52, 1, false), (14, 52, 1, true), (15, 52, 1, true), (16, 52, 1, false), (17, 52, 1, true), (18, 52, 1, false), (19, 52, 1, false), (20, 52, 1, false);
INSERT INTO seat_availabilities VALUES (21, 53, 2, true), (22, 53, 2, true), (23, 53, 2, true), (24, 53, 2, true), (25, 53, 2, true), (26, 53, 2, true), (27, 53, 2, false), (28, 53, 2, false), (29, 53, 2, false), (30, 53, 2, true), (31, 53, 2, true), (32, 53, 2, true), (33, 53, 2, true), (34, 53, 2, false), (35, 53, 2, false), (36, 53, 2, false), (37, 53, 2, false), (38, 53, 2, false), (39, 53, 2, false), (40, 53, 2, false);
INSERT INTO seat_availabilities VALUES (41, 54, 3, false), (42, 54, 3, false), (43, 54, 3, true), (44, 54, 3, true), (45, 54, 3, true), (46, 54, 3, true), (47, 54, 3, true), (48, 54, 3, true), (49, 54, 3, false), (50, 54, 3, true), (51, 54, 3, true), (52, 54, 3, false), (53, 54, 3, false), (54, 54, 3, false), (55, 54, 3, true), (56, 54, 3, true), (57, 54, 3, true), (58, 54, 3, false), (59, 54, 3, false), (60, 54, 3, true);
INSERT INTO seat_availabilities VALUES (1, 55, 1, false), (2, 55, 1, false), (3, 55, 1, true), (4, 55, 1, true), (5, 55, 1, true), (6, 55, 1, true), (7, 55, 1, true), (8, 55, 1, true), (9, 55, 1, false), (10, 55, 1, true), (11, 55, 1, true), (12, 55, 1, false), (13, 55, 1, false), (14, 55, 1, false), (15, 55, 1, true), (16, 55, 1, true), (17, 55, 1, true), (18, 55, 1, false), (19, 55, 1, false), (20, 55, 1, true);
INSERT INTO seat_availabilities VALUES (21, 56, 2, true), (22, 56, 2, true), (23, 56, 2, true), (24, 56, 2, true), (25, 56, 2, true), (26, 56, 2, true), (27, 56, 2, false), (28, 56, 2, false), (29, 56, 2, false), (30, 56, 2, true), (31, 56, 2, true), (32, 56, 2, true), (33, 56, 2, true), (34, 56, 2, false), (35, 56, 2, false), (36, 56, 2, false), (37, 56, 2, false), (38, 56, 2, false), (39, 56, 2, false), (40, 56, 2, false);
INSERT INTO seat_availabilities VALUES (41, 57, 3, true), (42, 57, 3, false), (43, 57, 3, false), (44, 57, 3, false), (45, 57, 3, true), (46, 57, 3, true), (47, 57, 3, true), (48, 57, 3, true), (49, 57, 3, false), (50, 57, 3, true), (51, 57, 3, true), (52, 57, 3, false), (53, 57, 3, false), (54, 57, 3, true), (55, 57, 3, true), (56, 57, 3, false), (57, 57, 3, true), (58, 57, 3, false), (59, 57, 3, false), (60, 57, 3, false);
INSERT INTO seat_availabilities VALUES (1, 58, 1, true), (2, 58, 1, false), (3, 58, 1, false), (4, 58, 1, false), (5, 58, 1, true), (6, 58, 1, true), (7, 58, 1, true), (8, 58, 1, true), (9, 58, 1, false), (10, 58, 1, true), (11, 58, 1, true), (12, 58, 1, false), (13, 58, 1, false), (14, 58, 1, true), (15, 58, 1, true), (16, 58, 1, false), (17, 58, 1, true), (18, 58, 1, false), (19, 58, 1, false), (20, 58, 1, false);
INSERT INTO seat_availabilities VALUES (21, 59, 2, true), (22, 59, 2, true), (23, 59, 2, true), (24, 59, 2, true), (25, 59, 2, true), (26, 59, 2, true), (27, 59, 2, false), (28, 59, 2, false), (29, 59, 2, false), (30, 59, 2, true), (31, 59, 2, true), (32, 59, 2, true), (33, 59, 2, true), (34, 59, 2, false), (35, 59, 2, false), (36, 59, 2, false), (37, 59, 2, false), (38, 59, 2, false), (39, 59, 2, false), (40, 59, 2, false);
INSERT INTO seat_availabilities VALUES (41, 60, 3, false), (42, 60, 3, false), (43, 60, 3, true), (44, 60, 3, true), (45, 60, 3, true), (46, 60, 3, true), (47, 60, 3, true), (48, 60, 3, true), (49, 60, 3, false), (50, 60, 3, true), (51, 60, 3, true), (52, 60, 3, false), (53, 60, 3, false), (54, 60, 3, false), (55, 60, 3, true), (56, 60, 3, true), (57, 60, 3, true), (58, 60, 3, false), (59, 60, 3, false), (60, 60, 3, true);
INSERT INTO seat_availabilities VALUES (1, 61, 1, false), (2, 61, 1, false), (3, 61, 1, true), (4, 61, 1, true), (5, 61, 1, true), (6, 61, 1, true), (7, 61, 1, true), (8, 61, 1, true), (9, 61, 1, false), (10, 61, 1, true), (11, 61, 1, true), (12, 61, 1, false), (13, 61, 1, false), (14, 61, 1, false), (15, 61, 1, true), (16, 61, 1, true), (17, 61, 1, true), (18, 61, 1, false), (19, 61, 1, false), (20, 61, 1, true);
INSERT INTO seat_availabilities VALUES (21, 62, 2, true), (22, 62, 2, false), (23, 62, 2, false), (24, 62, 2, false), (25, 62, 2, true), (26, 62, 2, true), (27, 62, 2, true), (28, 62, 2, true), (29, 62, 2, false), (30, 62, 2, true), (31, 62, 2, true), (32, 62, 2, false), (33, 62, 2, false), (34, 62, 2, true), (35, 62, 2, true), (36, 62, 2, false), (37, 62, 2, true), (38, 62, 2, false), (39, 62, 2, false), (40, 62, 2, false);
INSERT INTO seat_availabilities VALUES (41, 63, 3, true), (42, 63, 3, true), (43, 63, 3, true), (44, 63, 3, true), (45, 63, 3, true), (46, 63, 3, true), (47, 63, 3, false), (48, 63, 3, false), (49, 63, 3, false), (50, 63, 3, true), (51, 63, 3, true), (52, 63, 3, true), (53, 63, 3, true), (54, 63, 3, false), (55, 63, 3, false), (56, 63, 3, false), (57, 63, 3, false), (58, 63, 3, false), (59, 63, 3, false), (60, 63, 3, false);
INSERT INTO seat_availabilities VALUES (1, 64, 1, true), (2, 64, 1, false), (3, 64, 1, false), (4, 64, 1, false), (5, 64, 1, true), (6, 64, 1, true), (7, 64, 1, true), (8, 64, 1, true), (9, 64, 1, false), (10, 64, 1, true), (11, 64, 1, true), (12, 64, 1, false), (13, 64, 1, false), (14, 64, 1, true), (15, 64, 1, true), (16, 64, 1, false), (17, 64, 1, true), (18, 64, 1, false), (19, 64, 1, false), (20, 64, 1, false);
INSERT INTO seat_availabilities VALUES (21, 65, 2, true), (22, 65, 2, true), (23, 65, 2, true), (24, 65, 2, true), (25, 65, 2, true), (26, 65, 2, true), (27, 65, 2, false), (28, 65, 2, false), (29, 65, 2, false), (30, 65, 2, true), (31, 65, 2, true), (32, 65, 2, true), (33, 65, 2, true), (34, 65, 2, false), (35, 65, 2, false), (36, 65, 2, false), (37, 65, 2, false), (38, 65, 2, false), (39, 65, 2, false), (40, 65, 2, false);
INSERT INTO seat_availabilities VALUES (41, 66, 3, false), (42, 66, 3, false), (43, 66, 3, true), (44, 66, 3, true), (45, 66, 3, true), (46, 66, 3, true), (47, 66, 3, true), (48, 66, 3, true), (49, 66, 3, false), (50, 66, 3, true), (51, 66, 3, true), (52, 66, 3, false), (53, 66, 3, false), (54, 66, 3, false), (55, 66, 3, true), (56, 66, 3, true), (57, 66, 3, true), (58, 66, 3, false), (59, 66, 3, false), (60, 66, 3, true);
INSERT INTO seat_availabilities VALUES (1, 67, 1, true), (2, 67, 1, false), (3, 67, 1, false), (4, 67, 1, false), (5, 67, 1, true), (6, 67, 1, true), (7, 67, 1, true), (8, 67, 1, true), (9, 67, 1, false), (10, 67, 1, true), (11, 67, 1, true), (12, 67, 1, false), (13, 67, 1, false), (14, 67, 1, true), (15, 67, 1, true), (16, 67, 1, false), (17, 67, 1, true), (18, 67, 1, false), (19, 67, 1, false), (20, 67, 1, false);
INSERT INTO seat_availabilities VALUES (1, 68, 1, true), (2, 68, 1, false), (3, 68, 1, false), (4, 68, 1, false), (5, 68, 1, true), (6, 68, 1, true), (7, 68, 1, true), (8, 68, 1, true), (9, 68, 1, false), (10, 68, 1, true), (11, 68, 1, true), (12, 68, 1, false), (13, 68, 1, false), (14, 68, 1, true), (15, 68, 1, true), (16, 68, 1, false), (17, 68, 1, true), (18, 68, 1, false), (19, 68, 1, false), (20, 68, 1, false);
INSERT INTO seat_availabilities VALUES (21, 69, 2, true), (22, 69, 2, false), (23, 69, 2, false), (24, 69, 2, false), (25, 69, 2, true), (26, 69, 2, true), (27, 69, 2, true), (28, 69, 2, true), (29, 69, 2, false), (30, 69, 2, true), (31, 69, 2, true), (32, 69, 2, false), (33, 69, 2, false), (34, 69, 2, true), (35, 69, 2, true), (36, 69, 2, false), (37, 69, 2, true), (38, 69, 2, false), (39, 69, 2, false), (40, 69, 2, false);
INSERT INTO seat_availabilities VALUES (41, 70, 3, true), (42, 70, 3, true), (43, 70, 3, true), (44, 70, 3, true), (45, 70, 3, true), (46, 70, 3, true), (47, 70, 3, false), (48, 70, 3, false), (49, 70, 3, false), (50, 70, 3, true), (51, 70, 3, true), (52, 70, 3, true), (53, 70, 3, true), (54, 70, 3, false), (55, 70, 3, false), (56, 70, 3, false), (57, 70, 3, false), (58, 70, 3, false), (59, 70, 3, false), (60, 70, 3, false);
INSERT INTO seat_availabilities VALUES (1, 71, 1, false), (2, 71, 1, false), (3, 71, 1, true), (4, 71, 1, true), (5, 71, 1, true), (6, 71, 1, true), (7, 71, 1, true), (8, 71, 1, true), (9, 71, 1, false), (10, 71, 1, true), (11, 71, 1, true), (12, 71, 1, false), (13, 71, 1, false), (14, 71, 1, false), (15, 71, 1, true), (16, 71, 1, true), (17, 71, 1, true), (18, 71, 1, false), (19, 71, 1, false), (20, 71, 1, true);
INSERT INTO seat_availabilities VALUES (41, 72, 3, true), (42, 72, 3, true), (43, 72, 3, true), (44, 72, 3, true), (45, 72, 3, true), (46, 72, 3, true), (47, 72, 3, false), (48, 72, 3, false), (49, 72, 3, false), (50, 72, 3, true), (51, 72, 3, true), (52, 72, 3, true), (53, 72, 3, true), (54, 72, 3, false), (55, 72, 3, false), (56, 72, 3, false), (57, 72, 3, false), (58, 72, 3, false), (59, 72, 3, false), (60, 72, 3, false);
INSERT INTO seat_availabilities VALUES (21, 73, 2, false), (22, 73, 2, false), (23, 73, 2, true), (24, 73, 2, true), (25, 73, 2, true), (26, 73, 2, true), (27, 73, 2, true), (28, 73, 2, true), (29, 73, 2, false), (30, 73, 2, true), (31, 73, 2, true), (32, 73, 2, false), (33, 73, 2, false), (34, 73, 2, false), (35, 73, 2, true), (36, 73, 2, true), (37, 73, 2, true), (38, 73, 2, false), (39, 73, 2, false), (40, 73, 2, true);
INSERT INTO seat_availabilities VALUES (1, 74, 1, true), (2, 74, 1, false), (3, 74, 1, false), (4, 74, 1, false), (5, 74, 1, true), (6, 74, 1, true), (7, 74, 1, true), (8, 74, 1, true), (9, 74, 1, false), (10, 74, 1, true), (11, 74, 1, true), (12, 74, 1, false), (13, 74, 1, false), (14, 74, 1, true), (15, 74, 1, true), (16, 74, 1, false), (17, 74, 1, true), (18, 74, 1, false), (19, 74, 1, false), (20, 74, 1, false);
INSERT INTO seat_availabilities VALUES (21, 75, 2, false), (22, 75, 2, false), (23, 75, 2, true), (24, 75, 2, true), (25, 75, 2, true), (26, 75, 2, true), (27, 75, 2, true), (28, 75, 2, true), (29, 75, 2, false), (30, 75, 2, true), (31, 75, 2, true), (32, 75, 2, false), (33, 75, 2, false), (34, 75, 2, false), (35, 75, 2, true), (36, 75, 2, true), (37, 75, 2, true), (38, 75, 2, false), (39, 75, 2, false), (40, 75, 2, true);
INSERT INTO seat_availabilities VALUES (41, 76, 3, true), (42, 76, 3, true), (43, 76, 3, true), (44, 76, 3, true), (45, 76, 3, true), (46, 76, 3, true), (47, 76, 3, false), (48, 76, 3, false), (49, 76, 3, false), (50, 76, 3, true), (51, 76, 3, true), (52, 76, 3, true), (53, 76, 3, true), (54, 76, 3, false), (55, 76, 3, false), (56, 76, 3, false), (57, 76, 3, false), (58, 76, 3, false), (59, 76, 3, false), (60, 76, 3, false);
INSERT INTO seat_availabilities VALUES (1, 77, 1, false), (2, 77, 1, false), (3, 77, 1, true), (4, 77, 1, true), (5, 77, 1, true), (6, 77, 1, true), (7, 77, 1, true), (8, 77, 1, true), (9, 77, 1, false), (10, 77, 1, true), (11, 77, 1, true), (12, 77, 1, false), (13, 77, 1, false), (14, 77, 1, false), (15, 77, 1, true), (16, 77, 1, true), (17, 77, 1, true), (18, 77, 1, false), (19, 77, 1, false), (20, 77, 1, true);
INSERT INTO seat_availabilities VALUES (21, 78, 2, false), (22, 78, 2, false), (23, 78, 2, true), (24, 78, 2, true), (25, 78, 2, true), (26, 78, 2, true), (27, 78, 2, true), (28, 78, 2, true), (29, 78, 2, false), (30, 78, 2, true), (31, 78, 2, true), (32, 78, 2, false), (33, 78, 2, false), (34, 78, 2, false), (35, 78, 2, true), (36, 78, 2, true), (37, 78, 2, true), (38, 78, 2, false), (39, 78, 2, false), (40, 78, 2, true);
INSERT INTO seat_availabilities VALUES (41, 79, 3, true), (42, 79, 3, false), (43, 79, 3, false), (44, 79, 3, false), (45, 79, 3, true), (46, 79, 3, true), (47, 79, 3, true), (48, 79, 3, true), (49, 79, 3, false), (50, 79, 3, true), (51, 79, 3, true), (52, 79, 3, false), (53, 79, 3, false), (54, 79, 3, true), (55, 79, 3, true), (56, 79, 3, false), (57, 79, 3, true), (58, 79, 3, false), (59, 79, 3, false), (60, 79, 3, false);
INSERT INTO seat_availabilities VALUES (21, 80, 2, true), (22, 80, 2, true), (23, 80, 2, true), (24, 80, 2, true), (25, 80, 2, true), (26, 80, 2, true), (27, 80, 2, false), (28, 80, 2, false), (29, 80, 2, false), (30, 80, 2, true), (31, 80, 2, true), (32, 80, 2, true), (33, 80, 2, true), (34, 80, 2, false), (35, 80, 2, false), (36, 80, 2, false), (37, 80, 2, false), (38, 80, 2, false), (39, 80, 2, false), (40, 80, 2, false);
