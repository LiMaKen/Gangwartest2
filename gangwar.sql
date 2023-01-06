-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.19-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table war.colshapes
CREATE TABLE IF NOT EXISTS `colshapes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `frak` text NOT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `z` double NOT NULL,
  `size` int(11) NOT NULL,
  `dim` int(11) NOT NULL,
  `fraktype` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table war.colshapes: ~4 rows (approximately)
/*!40000 ALTER TABLE `colshapes` DISABLE KEYS */;
INSERT INTO `colshapes` (`id`, `frak`, `x`, `y`, `z`, `size`, `dim`, `fraktype`) VALUES
	(1, 'ballas', 102.81621551513672, -1959.047607421875, 20.796850204467773, 3, 0, 'gang'),
	(2, 'gf', -187.53390502929688, -1534.8175048828125, 33.73308181762695, 3, 0, 'gang'),
	(6, 'lost', 175.803955078125, -1656.381591796875, 29.803224563598633, 3, 0, 'gang'),
	(7, 'lsv', 347.2834167480469, -2037.449462890625, 21.938114166259766, 3, 0, 'gang');
/*!40000 ALTER TABLE `colshapes` ENABLE KEYS */;

-- Dumping structure for table war.colshapesvukhi
CREATE TABLE IF NOT EXISTS `colshapesvukhi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `frak` text NOT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `z` double NOT NULL,
  `size` int(11) NOT NULL,
  `dim` int(11) NOT NULL,
  `fraktype` text NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- Dumping data for table war.colshapesvukhi: ~4 rows (approximately)
/*!40000 ALTER TABLE `colshapesvukhi` DISABLE KEYS */;
INSERT INTO `colshapesvukhi` (`id`, `frak`, `x`, `y`, `z`, `size`, `dim`, `fraktype`) VALUES
	(1, 'vagos', 363.3938293457031, -2065.082275390625, 21.579654693603516, 3, 0, 'gang'),
	(2, 'ballas', 84.81816101074219, -1967.3404541015625, 20.747446060180664, 3, 0, 'gang'),
	(3, 'grove', -179.44723510742188, -1534.9200439453125, 34.353782653808594, 3, 0, 'gang'),
	(4, 'lost', 183.7766571044922, -1654.8350830078125, 29.926143646240234, 3, 0, 'gang');
/*!40000 ALTER TABLE `colshapesvukhi` ENABLE KEYS */;

-- Dumping structure for table war.faction_cars
CREATE TABLE IF NOT EXISTS `faction_cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `faction` varchar(32) NOT NULL,
  `car` varchar(32) NOT NULL,
  `pos_x` double NOT NULL,
  `pos_y` double NOT NULL,
  `pos_z` double NOT NULL,
  `heading_x` double NOT NULL,
  `heading_y` double NOT NULL,
  `heading_z` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `faction` (`faction`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table war.faction_cars: ~23 rows (approximately)
/*!40000 ALTER TABLE `faction_cars` DISABLE KEYS */;
INSERT INTO `faction_cars` (`id`, `faction`, `car`, `pos_x`, `pos_y`, `pos_z`, `heading_x`, `heading_y`, `heading_z`) VALUES
	(3, 'rednecks', 'schafterg', 2393.084716796875, 5083.576171875, 46.68191909790039, -7.441954612731934, 1.8848224878311157, 52.456390380859375),
	(4, 'rednecks', 'schafterg', 2398.77734375, 5079.40234375, 46.44804763793945, -2.2717833518981934, 0.3057329058647156, 53.164886474609375),
	(5, 'rednecks', 'schafterg', 2403.960205078125, 5075.63427734375, 46.31690979003906, -0.6840426325798035, -0.2493581473827362, 54.90509033203125),
	(6, 'rednecks', 'schafterg', 2409.09765625, 5071.8369140625, 46.27484893798828, -0.6451660990715027, 0.14512930810451508, 53.30657958984375),
	(7, 'rednecks', 'schafterg', 2414.006591796875, 5068.09814453125, 46.16169357299805, -1.0815105438232422, -1.4775336980819702, 50.1539306640625),
	(8, 'rednecks', 'schafterg', 2418.885986328125, 5064.4228515625, 46.013519287109375, -0.7344196438789368, -0.34783709049224854, 51.815185546875),
	(9, 'rednecks', 'jugular', 2396.601806640625, 5087.2705078125, 46.776546478271484, -1.9371302127838135, -0.82541424036026, 50.53179931640625),
	(10, 'rednecks', 'jugular', 2401.242919921875, 5083.6103515625, 46.51582717895508, -2.238126754760742, -1.4601795673370361, 52.53167724609375),
	(11, 'rednecks', 'jugular', 2405.88623046875, 5079.8623046875, 46.3760986328125, -0.5023338794708252, -0.9429594874382019, 51.07806396484375),
	(12, 'rednecks', 'jugular', 2410.518310546875, 5076.486328125, 46.27656173706055, -0.5073984265327454, -0.8185093998908997, 52.776153564453125),
	(13, 'rednecks', 'jugular', 2415.2099609375, 5072.87060546875, 46.1677360534668, -1.2644073963165283, -0.523419976234436, 52.08050537109375),
	(14, 'rednecks', 'jugular', 2419.645263671875, 5069.47216796875, 46.052635192871094, -1.1563140153884888, -0.6052748560905457, 52.590576171875),
	(15, 'rednecks', 'schafter6', 2411.67919921875, 5059.5283203125, 46.0337028503418, 1.0491663217544556, -1.3086698055267334, 16.674163818359375),
	(16, 'rednecks', 'schafter6', 2415.194580078125, 5056.83642578125, 45.99360275268555, -0.9396920204162598, -1.2183010578155518, 13.7874755859375),
	(17, 'rednecks', 'bf400', 2418.45654296875, 5054.07421875, 45.77426528930664, -1.968066692352295, 10.368279457092285, 357.0562744140625),
	(18, 'rednecks', 'bf400', 2420.001220703125, 5053.17724609375, 45.764991760253906, -1.227515459060669, 6.483521938323975, 0.442626953125),
	(19, 'rednecks', 'bf400', 2421.245361328125, 5052.46826171875, 45.76314926147461, 2.7826273441314697, 10.07365608215332, 353.9553527832031),
	(20, 'rednecks', 'bf400', 2422.56591796875, 5051.75341796875, 45.763919830322266, 2.4532198905944824, 7.615052223205566, 358.6535339355469),
	(21, 'rednecks', 'drafter', 2425.15234375, 5049.04541015625, 45.77476119995117, 2.379380226135254, -2.40114426612854, 1.669219970703125),
	(22, 'rednecks', 'drafter', 2428.28759765625, 5047.115234375, 45.7708625793457, 3.197709798812866, -1.3615503311157227, 1.319244384765625),
	(23, 'rednecks', 'kuruma', 2410.8818359375, 5083.6806640625, 46.75449752807617, -1.7176169157028198, -0.6413182020187378, 47.850311279296875),
	(24, 'rednecks', 'kuruma', 2415.428955078125, 5079.9345703125, 46.55195999145508, -1.0021475553512573, -2.5620055198669434, 53.86138916015625),
	(25, 'rednecks', 'kuruma', 2419.772705078125, 5076.63427734375, 46.38386154174805, -1.463590383529663, -0.2602193057537079, 52.70477294921875);
/*!40000 ALTER TABLE `faction_cars` ENABLE KEYS */;

-- Dumping structure for table war.faction_tuning
CREATE TABLE IF NOT EXISTS `faction_tuning` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `car` varchar(32) NOT NULL,
  `modtype` int(11) NOT NULL,
  `modindex` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table war.faction_tuning: ~25 rows (approximately)
/*!40000 ALTER TABLE `faction_tuning` DISABLE KEYS */;
INSERT INTO `faction_tuning` (`id`, `car`, `modtype`, `modindex`) VALUES
	(1, 'drafter', 0, 5),
	(2, 'drafter', 4, 2),
	(3, 'drafter', 11, 1),
	(4, 'drafter', 22, 0),
	(5, 'drafter', 53, 1),
	(6, 'drafter', 55, 1),
	(7, 'schafterg', 0, 1),
	(8, 'schafterg', 11, 1),
	(9, 'schafterg', 22, 0),
	(10, 'schafterg', 53, 1),
	(11, 'schafterg', 55, 1),
	(21, 'schafter6', 0, 1),
	(22, 'schafter6', 11, 3),
	(23, 'schafter6', 15, 3),
	(24, 'schafter6', 22, 0),
	(25, 'schafter6', 53, 1),
	(26, 'schafter6', 55, 1),
	(27, 'schafter6', 18, 0),
	(28, 'kuruma', 22, 0),
	(29, 'kuruma', 53, 1),
	(30, 'kuruma', 55, 1),
	(31, 'jugular', 11, 1),
	(32, 'jugular', 22, 0),
	(33, 'jugular', 53, 1),
	(34, 'jugular', 55, 1);
/*!40000 ALTER TABLE `faction_tuning` ENABLE KEYS */;

-- Dumping structure for table war.ffa_spawns
CREATE TABLE IF NOT EXISTS `ffa_spawns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ffa` int(11) NOT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `z` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ffa` (`ffa`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table war.ffa_spawns: ~23 rows (approximately)
/*!40000 ALTER TABLE `ffa_spawns` DISABLE KEYS */;
INSERT INTO `ffa_spawns` (`id`, `ffa`, `x`, `y`, `z`) VALUES
	(1, 1, 131.03121948242188, -989.6233520507812, 29.35209846496582),
	(2, 1, 178.09918212890625, -875.5635375976562, 30.92080307006836),
	(3, 1, 222.36068725585938, -928.2314453125, 30.68678855895996),
	(4, 1, 168.12452697753906, -995.5804443359375, 29.354185104370117),
	(5, 1, 136.6728973388672, -988.537841796875, 29.355335235595703),
	(6, 1, 179.0377197265625, -994.7080688476562, 29.291824340820312),
	(7, 1, 151.87660217285156, -920.5578002929688, 30.1065673828125),
	(8, 1, 188.21112060546875, -1013.4005737304688, 29.313173294067383),
	(9, 1, 208.74961853027344, -1000.2320556640625, 29.291845321655273),
	(10, 1, 139.36595153808594, -955.367431640625, 29.683889389038086),
	(11, 1, 196.31268310546875, -994.8193359375, 30.091928482055664),
	(12, 1, 181.58792114257812, -965.3744506835938, 29.579233169555664),
	(13, 1, 175.50537109375, -937.67236328125, 30.091909408569336),
	(14, 1, 217.56028747558594, -895.8761596679688, 30.692686080932617),
	(15, 1, 263.0151062011719, -874.7175903320312, 29.157180786132812),
	(16, 1, 215.67333984375, -934.7403564453125, 24.14157485961914),
	(17, 1, 151.9551544189453, -963.4129028320312, 30.09191131591797),
	(18, 1, 212.05941772460938, -957.2402954101562, 30.441709518432617),
	(19, 1, 237.21485900878906, -905.8319091796875, 28.893693923950195),
	(20, 1, 201.71131896972656, -880.2003784179688, 31.498353958129883),
	(21, 1, 162.66221618652344, -917.3997802734375, 30.18037223815918),
	(22, 1, 197.903076171875, -935.3107299804688, 30.686811447143555),
	(23, 1, 178.19512939453125, -906.1447143554688, 30.692825317382812);
/*!40000 ALTER TABLE `ffa_spawns` ENABLE KEYS */;

-- Dumping structure for table war.markers
CREATE TABLE IF NOT EXISTS `markers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `z` double NOT NULL,
  `radius` int(11) NOT NULL,
  `r` int(11) NOT NULL,
  `g` int(11) NOT NULL,
  `b` int(11) NOT NULL,
  `a` int(11) NOT NULL,
  `dim` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table war.markers: ~1 rows (approximately)
/*!40000 ALTER TABLE `markers` DISABLE KEYS */;
INSERT INTO `markers` (`id`, `type`, `x`, `y`, `z`, `radius`, `r`, `g`, `b`, `a`, `dim`) VALUES
	(1, 1, 198.4713134765625, -936.09033203125, 20.13947868347168, 200, 224, 50, 50, 255, 1001);
/*!40000 ALTER TABLE `markers` ENABLE KEYS */;

-- Dumping structure for table war.npc
CREATE TABLE IF NOT EXISTS `npc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fraktion` text NOT NULL,
  `type` varchar(32) DEFAULT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `z` double NOT NULL,
  `heading` double NOT NULL,
  `ped` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table war.npc: ~4 rows (approximately)
/*!40000 ALTER TABLE `npc` DISABLE KEYS */;
INSERT INTO `npc` (`id`, `fraktion`, `type`, `x`, `y`, `z`, `heading`, `ped`) VALUES
	(1, 'ballas', 'garage', 84.1562, -1966.6931, 20.9391, 230.3266, 'g_m_y_ballaeast_01'),
	(2, 'grove', 'garage', -179.98548889160156, -1534.4207763671875, 34.35630798339844, 230.3266, 'mp_m_famdd_01'),
	(6, 'lost', 'garage', 184.38336181640625, -1654.030029296875, 29.92606544494629, 143.8771, 'g_m_y_lost_01'),
	(7, 'lsv', 'garage', 363.9832458496094, -2065.745361328125, 21.74066925048828, 390, 'u_m_y_mani');
/*!40000 ALTER TABLE `npc` ENABLE KEYS */;

-- Dumping structure for table war.spawns_garage
CREATE TABLE IF NOT EXISTS `spawns_garage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `team` text NOT NULL,
  `pos_x` double NOT NULL,
  `pos_y` double NOT NULL,
  `pos_z` double NOT NULL,
  `heading_x` double NOT NULL,
  `heading_y` double NOT NULL,
  `heading_z` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table war.spawns_garage: ~0 rows (approximately)
/*!40000 ALTER TABLE `spawns_garage` DISABLE KEYS */;
/*!40000 ALTER TABLE `spawns_garage` ENABLE KEYS */;

-- Dumping structure for table war.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `socialclub` varchar(64) NOT NULL,
  `admin` int(11) NOT NULL DEFAULT 0,
  `kills` int(11) NOT NULL DEFAULT 0,
  `deaths` int(11) NOT NULL DEFAULT 0,
  `lastlogin` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `socialclub` (`socialclub`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table war.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `socialclub`, `admin`, `kills`, `deaths`, `lastlogin`) VALUES
	(1, 'quangtu222', 9, 0, 1, '0000-00-00 00:00:00'),
	(2, 'VN-Bett', 0, 0, 0, '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
