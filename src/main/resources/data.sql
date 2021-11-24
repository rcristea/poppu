DELETE FROM movie_actors;
DELETE FROM actors;
DELETE FROM shows;
DELETE FROM reviews;
DELETE FROM movies;
DELETE FROM showrooms;
DELETE FROM users;

INSERT INTO users VALUES (1, 'poppuofficial@gmail.com', 'poppu', true, 'admin', '$2a$10$O1RbZIPCQCLr522HZUP51.E43Zn4oYSnjIrMeKTUaLqmI46jBM74m', '(123) 456 - 7890', 'ADMIN', 'ACTIVE', null);
INSERT INTO users VALUES (2, 'poppucustomer@gmail.com', 'poppu', true, 'customer', '$2a$10$O1RbZIPCQCLr522HZUP51.E43Zn4oYSnjIrMeKTUaLqmI46jBM74m', '(123) 456 - 7890', 'USER', 'ACTIVE', null);

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
*/
INSERT INTO actors VALUES (120,'Zendaya','Coleman'),(121,'Tom','Holland'),(122,'Benedict','Cumberbatch'),(123,'Marisa','Tomei'),(124,'Jon','Favreau'),(125,'Jonathan','Simmons'),(126,'Angourie','Rice'),(127,'Paula','Newsome'),(128,'Rhys','Ifans'),(129,'Jamie','Foxx'),(130,'Alfred','Molina'),(131,'Benedict','Wong'),(132,'Thomas','Church'),(133,'Martin','Starr'),(134,'Tony','Revolori'),(135,'Jacob','Batalon'),(136,'Jerry','Smoove'),(137,'Harry','Holland');
INSERT INTO movies VALUES (1009,'Action','2021:12:17','Jon Watts','',false,'Kevin Feige','Unrated',7.8,'For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.','Spider-Man: No Way Home','rt-2cxAiPJk','assets/img/posters/spider_man_no_way_home.jpeg');
INSERT INTO movie_actors VALUES (120,1008,'MJ'),(121,1008,'Peter Parker'),(122,1008,'Doctor Strange'),(123,1008,'May Parker'),(124,1008,'Happy Hogan'),(125,1008,'J. Jonah Jameson'),(126,1008,'Betty Brant'),(127,1008,'none'),(128,1008,'Dr. Curtis Connors'),(129,1008,'Max Dillon'),(130,1008,'Otto Octavius'),(131,1008,'Wong'),(132,1008,'Flint Marko'),(133,1008,'Mr. Harrington'),(134,1008,'Flash Thompson'),(135,1008,'Ned Leeds'),(136,1008,'Mr. Dell'),(137,1008,'Drug Dealer');
/*
INSERT INTO actors VALUES (138,'Daiki','Yamashita'),(139,'Nobuhiko','Okamoto'),(140,'Yûki','Kaji'),(141,'Tetsu','Inada'),(142,'Yûichi','Nakamura'),(143,'Yoshimasa','Hosoya'),(144,'Ryô','Yoshizawa'),(145,'Arisa','Sekine'),(146,'Megumi','Hayashibara'),(147,'Yoko','Honna'),(148,'Kazuya','Nakai'),(149,'Mariya','Ise'),(150,'Yuichiro','Umehara'),(151,'Junya','Enoki'),(152,'Shogo','Sakata'),(153,'Yuuki','Hayashi'),(154,'Hirofumi','Nojima'),(155,'Takumu','Miyazono');
INSERT INTO movies VALUES (1009,'Animation','2021:10:29','Kenji Nagasaki','1h 44m',false,'None','PG13',6.6,'When a cult of terrorists ruins a city by releasing a toxin that causes people''s abilities to spiral out of control, Japan''s greatest heroes spread around the world in an attempt to track down the mastermind and put him to justice.','My Hero Academia: World Heroes'' Mission','6cBYUfAno-0','assets/img/posters/my_hero_academia_world_heroes_mission.png');
INSERT INTO movie_actors VALUES (138,1009,'Izuku Midoriya (voice)'),(139,1009,'Katsuki Bakugo (voice)'),(140,1009,'Shoto Todoroki (voice)'),(141,1009,'Endeavor (voice)'),(142,1009,'Hawks (voice)'),(143,1009,'Fumikage Tokoyami (voice)'),(144,1009,'Rody Soul (voice)'),(145,1009,'Rody Soul (Child) (voice)'),(146,1009,'Pino (voice)'),(147,1009,'Clair Voyance (voice)'),(148,1009,'Flect Turn (voice)'),(149,1009,'Belos (voice)'),(150,1009,'Sidero (voice)'),(151,1009,'Serpenters (voice)'),(152,1009,'Leviathan (voice)'),(153,1009,'Rogone (voice)'),(154,1009,'Alan Kay (voice)'),(155,1009,'Salaam (voice)');
*/
INSERT INTO actors VALUES (156,'Christina','Ricci'),(157,'Keanu','Reeves'),(158,'Carrie-Anne','Moss'),(159,'Jessica','Henwick'),(160,'Priyanka','Jonas'),(161,'Jonathan','Groff'),(162,'Ellen','Hollman'),(163,'Yahya','Abdul-Mateen II'),(164,'Jada','Smith'),(165,'Neil','Harris'),(166,'Daniel','Bernhardt'),(167,'Max','Riemelt'),(168,'Lambert','Wilson'),(169,'Brian','Smith'),(170,'Telma','Hopkins'),(171,'Eréndira','Ibarra'),(172,'Andrew','Caldwell'),(173,'Ian','Pirie');
INSERT INTO movies VALUES (1010,'Action','2021:12:22','Lana Wachowski','2h 28m',false,'Grant Hill','R',4.2,'There is not a synopsis for this movie yet.','The Matrix Resurrections','9ix7TUGVYIo','assets/img/posters/the_matrix_resurrections.jpg');
INSERT INTO movie_actors VALUES (156,1010,'nome'),(157,1010,'Neo'),(158,1010,'Trinity'),(159,1010,'Bugs'),(160,1010,'none'),(161,1010,'none'),(162,1010,'none'),(163,1010,'Morpheus'),(164,1010,'Niobe'),(165,1010,'The Analyst'),(166,1010,'Agent Johnson'),(167,1010,'none'),(168,1010,'Merovingian'),(169,1010,'none'),(170,1010,'none'),(171,1010,'none'),(172,1010,'none'),(173,1010,'Lieutenant');

INSERT INTO actors VALUES (174,'Gemma','Chan'),(175,'Richard','Madden'),(176,'Angelina','Jolie'),(177,'Salma','Hayek'),(178,'Kit','Harington'),(179,'Kumail','Nanjiani'),(180,'Lia','McHugh'),(181,'Brian','Henry'),(182,'Lauren','Ridloff'),(183,'Barry','Keoghan'),(184,'Ma','Dong-seok'),(185,'Harish','Patel'),(186,'Bill','Skarsgård'),(187,'Haaz','Sleiman'),(188,'Esai','Cross'),(189,'Harry','Styles'),(190,'Alan','Scott'),(191,'Hannah','Dodd');
INSERT INTO movies VALUES (1001,'Action','2021:11:05','Chloé Zhao','2h 36m',true,'Kevin Feige','PG13',7.5,'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.','Eternals','x_me3xsvDgk','assets/img/posters/eternals.jpeg');
INSERT INTO movie_actors VALUES (174,1011,'Sersi'),(175,1011,'Ikaris'),(176,1011,'Thena'),(177,1011,'Ajak'),(178,1011,'Dane Whitman'),(179,1011,'Kingo'),(180,1011,'Sprite'),(181,1011,'Phastos'),(182,1011,'Makkari'),(183,1011,'Druig'),(184,1011,'Gilgamesh'),(185,1011,'Karun'),(186,1011,'Kro'),(187,1011,'Ben'),(188,1011,'Jack'),(189,1011,'Eros'),(190,1011,'Patrick'),(191,1011,'Sandra');

INSERT INTO actors VALUES (1, 'Darby', 'Camp'), (2, 'Jack', 'Whitehall'), (3, 'Izaac', 'Wang'), (4, 'John', 'Cleese'), (5, 'Sienna', 'Guillory'), (6, 'Tony', 'Hale'), (7, 'David', 'Grier'), (8, 'Horatio', 'Sanz'), (9, 'Paul', 'Rodriquez'), (10, 'Russel', 'Peters'), (11, 'Keith', 'Ewell'), (12, 'Bear', 'Allen-Blaine'), (13, 'Tovah', 'Feldshuh'), (14, 'Jessica', 'Wynn'), (15, 'Ty', 'Jones'), (16, 'Russel', 'Wong'), (17, 'Siobhan', 'Hogan'), (18, 'Mia', 'Ronn');
INSERT INTO movies VALUES (1002, 'Adventure', '2021:11:10', 'Walt Becker', '1h 36m', true, 'Jordan Kerner', 'PG', 6.0, 'A young girl''s love for a tiny puppy named Clifford makes the dog grow to an enormous size.', 'Clifford the Big Red Dog', 'TODO', 'TODO');
INSERT INTO movie_actors VALUES (1, 1002, 'Emily'), (2, 1002, 'Casey'), (3, 1002, 'Owen'), (4, 1002, 'Bridwell'), (5, 1002, 'Maggie'), (6, 1002, 'Tieran'), (7, 1002, 'Packard'), (8, 1002, 'Raul'), (9, 1002, 'Alonso'), (10, 1002, 'Malik'), (11, 1002, 'Mr. Jarvis'), (12, 1002, 'Mrs. Jarvis'), (13, 1002, 'Mrs. Crullerman'), (14, 1002, 'Colette'), (15, 1002, 'Police Chief Watkins'), (16, 1002, 'Mr. Yu'), (17, 1002, 'Petra'), (18, 1002, 'Florence');

INSERT INTO actors VALUES (19, 'Jude', 'Hill'), (20, 'Lewis', 'McAskie'), (21, 'Caitriona', 'Balfe'), (22, 'Jamie', 'Dornan'), (23, 'Judi', 'Dench'), (24, 'Ciarán', 'Hinds'), (25, 'Josie', 'Walker'), (26, 'Freya', 'Yates'), (27, 'Nessa', 'Eriksson'), (28, 'Charlie', 'Barnard'), (29, 'Frankie', 'Hastings'), (30, 'Caolan', 'McCarthy'), (31, 'Ian', 'Dunnett Jnr'), (32, 'Michael', 'Maloney'), (33, 'Lara', 'McDonnell'), (34, 'Chris', 'McCurry'), (35, 'Rachel', 'Feeney');
INSERT INTO movies VALUES (1003, 'Drama', '2021:11:12', 'Kenneth Branagh', '1h 38m', true, 'Laura Berwick', 'PG13', 7.8, 'A young boy and his working class family experience the tumultuous late 1960s.', 'Belfast', 'TODO', 'TODO');
INSERT INTO movie_actors VALUES (19, 1003, 'Buddy'), (20, 1003, 'Will'), (21, 1003, 'Ma'), (22, 1003, 'Pa'), (23, 1003, 'Granny'), (24, 1003, 'Pop'), (25, 1003, 'Aunt Violet'), (26, 1003, 'Cousin Frances'), (27, 1003, 'Cousin Vanessa'), (28, 1003, 'Cousin Charlie'), (29, 1003, 'Auntie Mary'), (30, 1003, 'Uncle Sammie'), (31, 1003, 'Uncle Tony'), (32, 1003, 'Frankie West'), (33, 1003, 'Moira'), (34, 1003, 'Mr. Stewart'), (35, 1003, 'Mrs Ford');

INSERT INTO movies VALUES (1004, 'Action', '2021:11:12', 'Edward Drake', '1h 34m', true, 'Corey Large', 'Unrated', 3.2, 'Five elite hunters pay to hunt down a man on a deserted island, only to find themselves becoming the prey.', 'Apex', 'TODO', 'TODO');

INSERT INTO actors VALUES (192,'Shameik','Moore'),(193,'Hailee','Steinfeld'),(194,'Issa','Rae');
INSERT INTO movies VALUES (1011,'Animation','2022:10:07','Joaquim Santos','',false,'Phil Lord','Unrated',9.7,'There is not a synopsis for this movie yet.','Spider-Man: Into the Spider-Verse 2','HsX8pVqp_gg','assets/img/posters/spider_man_into_the_spider_verse_2.jpeg');
INSERT INTO movie_actors VALUES (192,1012,'Miles Morales (voice)'),(193,1012,'Gwen Stacey (voice)'),(194,1012,'Jessica Drew (voice)');


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
//
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