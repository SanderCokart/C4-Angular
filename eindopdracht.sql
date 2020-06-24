-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2020 at 07:39 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eindopdracht`
--

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `id` int(30) NOT NULL,
  `voornaam` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `achternaam` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `straat` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `huisnummer` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `postcode` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `woonplaats` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `telefoonnummer` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `tijd_toegevoegd` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`id`, `voornaam`, `achternaam`, `straat`, `huisnummer`, `postcode`, `woonplaats`, `telefoonnummer`, `tijd_toegevoegd`) VALUES
(1, 'Bartjan', 'Bruins', 'Noble Boulevard', '12', '1234AB', 'Fürstenhaus', '2147483647', '2020-02-10 14:08:19'),
(2, 'Maurits', 'Stroeve', 'Storm Way', '124', '9870ZA', 'Klagensee', '467764386', '2020-02-10 14:08:19'),
(3, 'Arjan', 'Docter', 'West Lane', '875', '0989CF', 'Hervik', '2147483647', '2020-02-10 14:08:19'),
(4, 'Kobus', 'den Ouden', 'Jade Lane', '75', '0987CB', 'Denderaarde', '1608269479', '2020-02-10 14:08:19'),
(24, 'Sander', 'Cokart', 'Vinkenveld', '25', '7827DP', 'Emmen', '630137594', '2020-02-12 14:22:15'),
(25, 'Sander', 'Cokart', 'Vinkenveld', '25', '7827DP', 'Emmen', '0630137594', '2020-02-12 19:46:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `person`
--
ALTER TABLE `person`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
