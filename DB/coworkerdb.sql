-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2021 at 08:27 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coworkerdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `bank_account`
--

CREATE TABLE `bank_account` (
  `ba_id` int(11) NOT NULL,
  `ba_holderName` varchar(52) NOT NULL,
  `bc_cardNumber` varchar(52) NOT NULL,
  `ba_cvv` varchar(11) NOT NULL,
  `ba_expiryDate` varchar(52) NOT NULL,
  `ba_balance` int(11) NOT NULL,
  `ba_email` varchar(52) NOT NULL,
  `ba_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bank_account`
--

INSERT INTO `bank_account` (`ba_id`, `ba_holderName`, `bc_cardNumber`, `ba_cvv`, `ba_expiryDate`, `ba_balance`, `ba_email`, `ba_created_at`) VALUES
(1, 'Faique Mukadam', '1234 1234 1234', '123', '06 / 21', 2500, 'faique@gmail.com', '2021-04-16 13:02:17');

-- --------------------------------------------------------

--
-- Table structure for table `customer_master`
--

CREATE TABLE `customer_master` (
  `cm_id` int(11) NOT NULL,
  `cm_name` varchar(52) NOT NULL,
  `cm_email` varchar(51) NOT NULL,
  `cm_password` varchar(51) NOT NULL,
  `cm_role` varchar(52) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_master`
--

INSERT INTO `customer_master` (`cm_id`, `cm_name`, `cm_email`, `cm_password`, `cm_role`, `date`) VALUES
(1, 'faique', 'faique@gmail.com', '123', 'user', '2021-04-02 04:09:13'),
(2, 'sajid', 'sajid@gmail.com', '123', 'user', '2021-04-02 04:09:13'),
(5, 'admin', 'admin@gmail.com', '123', 'admin', '2021-04-02 04:58:37'),
(6, 'try', 'try@gmail.com', '123', 'user', '2021-04-02 05:00:09'),
(8, 'test', 'test@gmail.com', '123', 'user', '2021-04-13 12:27:38'),
(9, 'Asif Sayyed', 'asif@gmail.com', '123', 'user', '2021-04-18 05:49:56');

-- --------------------------------------------------------

--
-- Table structure for table `space`
--

CREATE TABLE `space` (
  `space_id` int(11) NOT NULL,
  `space_name` varchar(255) NOT NULL,
  `space_location` varchar(255) NOT NULL,
  `space_area` varchar(52) NOT NULL,
  `space_description` varchar(255) NOT NULL,
  `space_people_Qty` int(11) NOT NULL,
  `space_duration` varchar(255) NOT NULL,
  `space_price` double NOT NULL,
  `space_status` varchar(255) NOT NULL DEFAULT 'available',
  `space_map_location` varchar(255) NOT NULL,
  `space_image1` varchar(255) NOT NULL,
  `space_image2` varchar(255) NOT NULL,
  `space_image3` varchar(255) NOT NULL,
  `space_type_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `space`
--

INSERT INTO `space` (`space_id`, `space_name`, `space_location`, `space_area`, `space_description`, `space_people_Qty`, `space_duration`, `space_price`, `space_status`, `space_map_location`, `space_image1`, `space_image2`, `space_image3`, `space_type_id`, `created_at`) VALUES
(1, 'MTDX', 'Navi Mumbai', 'Vashis', 'New Space.', 10, 'Monthly', 1000, 'available', 'https://maps.google.com/maps?q=arora%20tower%20pune%20india&t=&z=15&ie=UTF8&iwloc=&output=embed', 'uploads/665684home-electrical-mcb-1613893508.jpg', 'uploads/872940h.png', 'uploads/11874wire.png', 1, '2021-04-11 18:30:00'),
(2, 'Amanora', 'Pune', 'Hadapsar,Magar Patta', 'Cool & Silent Area.', 10, 'Monthly', 15000, 'booked', 'https://maps.google.com/maps?q=arora%20tower%20pune%20india&t=&z=15&ie=UTF8&iwloc=&output=embed', 'uploads/281009db board.jpg', 'uploads/859378home-electrical-mcb.jpg', 'uploads/409096h.png', 2, '2021-04-12 18:30:00'),
(7, 'ChkFaci', 'ChkFaci', 'ChkFaci', 'ChkFaci', 20, 'Monthly', 10000, 'available', 'https://maps.google.com/maps?q=arora%20tower%20pune%20india&t=&z=15&ie=UTF8&iwloc=&output=embed', 'uploads/527552switch.jpg', 'uploads/658621switch.jpg', 'uploads/346256switch.jpg', 1, '2021-04-14 06:59:39'),
(8, 'ChkFaciFinal', 'Pune', 'ChkFaciFinal', 'ChkFaciFinal', 10, 'Weekly', 10000, 'available', 'https://maps.google.com/maps?q=arora%20tower%20pune%20india&t=&z=15&ie=UTF8&iwloc=&output=embed', 'uploads/943890switch.jpg', 'uploads/342696switch.jpg', 'uploads/830670switch.jpg', 1, '2021-04-21 07:11:04'),
(9, 'SpaceMeeting', 'MG road camp pune', 'Aurora Tower', 'Good Space For Meeting.', 10, 'Monthly', 10000, 'booked', 'https://maps.google.com/maps?q=arora%20tower%20pune%20india&t=&z=15&ie=UTF8&iwloc=&output=embed', 'uploads/706008room1.jpg', 'uploads/143889room2.jpg', 'uploads/278877room3.jpg', 2, '2021-05-15 04:43:56'),
(12, 'testSpace', 'Thane', 'Aurora Tower', 'Good Space For Meeting.', 5, 'Monthly', 5000, 'available', 'https://maps.google.com/maps?q=arora%20tower%20pune%20india&t=&z=15&ie=UTF8&iwloc=&output=embed', 'uploads/489237room2.jpg', 'uploads/268765room1.jpg', 'uploads/236421room3.jpg', 4, '2021-05-15 07:33:56');

-- --------------------------------------------------------

--
-- Table structure for table `space_booking`
--

CREATE TABLE `space_booking` (
  `sb_id` int(11) NOT NULL,
  `sb_name` varchar(52) NOT NULL,
  `sb_companyEmail` varchar(52) NOT NULL,
  `sb_companyName` varchar(52) NOT NULL,
  `sb_mobile` varchar(10) NOT NULL,
  `sb_bdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `sb_endDate` date NOT NULL,
  `sb_paymentType` varchar(52) NOT NULL,
  `sb_smount` int(11) NOT NULL,
  `sb_space_id` int(11) NOT NULL,
  `sb_cm_id` int(11) NOT NULL,
  `sb_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `space_booking`
--

INSERT INTO `space_booking` (`sb_id`, `sb_name`, `sb_companyEmail`, `sb_companyName`, `sb_mobile`, `sb_bdate`, `sb_endDate`, `sb_paymentType`, `sb_smount`, `sb_space_id`, `sb_cm_id`, `sb_created_at`) VALUES
(2, 'Asif Sayyed', 'paradocs@gmail.com', 'Paradocs', '98691758', '2021-04-29 18:30:00', '2021-05-07', 'COD', 10000, 8, 1, '2021-04-24 06:53:32'),
(3, 'Faique Mukadam', 'test@gmail.com', 'Test', '98691758', '2021-04-24 18:30:00', '2021-05-25', 'Credit/Debit', 1000, 1, 1, '2021-04-24 07:04:20'),
(4, 'Faique Mukadam', 'chk@gmail.com', 'Kotlin', '98691758', '2021-04-24 08:15:39', '2021-04-23', 'Wallet', 10000, 7, 1, '2021-04-24 07:11:57'),
(5, 'Faique Mukadam', 'paradocs@gmail.com', 'Paradocs', '98691758', '2021-04-29 18:30:00', '2021-05-30', 'COD', 15000, 2, 1, '2021-04-24 07:20:40'),
(6, 'Faique Mukadam', 'paradocs@gmail.com', 'Paradocs', '98691758', '2021-04-29 18:30:00', '2021-05-30', 'COD', 15000, 2, 1, '2021-04-24 07:29:06'),
(7, 'Salman', 'sam@gmail.com', 'SamComp', '9869217648', '2021-04-24 08:31:11', '2021-04-23', 'COD', 10000, 8, 5, '2021-04-24 08:24:10'),
(8, 'Faique Mukadam', 'paradocs@gmail.com', 'Paradocs', '98691758', '2021-04-29 18:30:00', '2021-05-07', 'COD', 10000, 8, 1, '2021-04-25 06:24:57'),
(13, 'Asif Sayyed', 'paradocs@gmail.com', 'Paradocs', '98691758', '2021-05-19 18:30:00', '2021-06-19', 'Wallet', 10000, 9, 1, '2021-05-19 17:44:27');

-- --------------------------------------------------------

--
-- Table structure for table `space_facilities`
--

CREATE TABLE `space_facilities` (
  `sf_id` int(11) NOT NULL,
  `sf_name` varchar(52) DEFAULT NULL,
  `sf_rate` int(11) DEFAULT NULL,
  `sf_space_id` int(11) NOT NULL,
  `sf_status` varchar(52) NOT NULL DEFAULT 'want'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `space_facilities`
--

INSERT INTO `space_facilities` (`sf_id`, `sf_name`, `sf_rate`, `sf_space_id`, `sf_status`) VALUES
(1, 'PARKING', 50, 8, 'unwant'),
(2, 'A/C', 150, 8, 'unwant'),
(3, 'AC', 2000, 9, 'unwant'),
(4, 'AC', 1000, 12, 'unwant');

-- --------------------------------------------------------

--
-- Table structure for table `space_type`
--

CREATE TABLE `space_type` (
  `st_id` int(11) NOT NULL,
  `st_name` varchar(255) NOT NULL,
  `st_status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `space_type`
--

INSERT INTO `space_type` (`st_id`, `st_name`, `st_status`, `created_at`) VALUES
(1, 'Private Desk', 1, '2021-04-12 11:19:38'),
(2, 'Meeting Room', 1, '2021-04-13 10:52:40'),
(4, 'Test', 1, '2021-05-15 13:00:40');

-- --------------------------------------------------------

--
-- Table structure for table `user_enquiry`
--

CREATE TABLE `user_enquiry` (
  `ue_id` int(11) NOT NULL,
  `ue_cm_id` int(11) NOT NULL,
  `ue_name` varchar(52) NOT NULL,
  `ue_email` varchar(52) NOT NULL,
  `ue_mobile` varchar(52) NOT NULL,
  `ue_description` varchar(255) NOT NULL,
  `ue_status` varchar(52) NOT NULL DEFAULT 'unread',
  `ue_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_enquiry`
--

INSERT INTO `user_enquiry` (`ue_id`, `ue_cm_id`, `ue_name`, `ue_email`, `ue_mobile`, `ue_description`, `ue_status`, `ue_created_at`) VALUES
(1, 1, 'Arham', 'arham@gmail.com', '8793501458', 'Enquiry for 10 person space looking in pune camp area.', 'read', '2021-04-12 18:30:00'),
(3, 1, 'Faique', 'f@gmail.com', '98691758', 'Test Enquiry..', 'unread', '2021-04-14 06:00:00'),
(4, 1, 'Faique Mukadam', 'faique@gmail.com', '9403463917', 'Update space area is not working.', 'unread', '2021-04-21 12:56:24'),
(5, 1, 'Faique Mukadam', 'faique@gmail.com', '9403463917', 'Second time for enquiry regarding space in mumbai.', 'read', '2021-04-21 12:57:11'),
(6, 1, 'Faique Mukadam', 'faiquefaiz909@gmail.com', '9403463917', 'Enquiry for space in pune kondwa area.', 'read', '2021-05-15 04:55:35');

-- --------------------------------------------------------

--
-- Table structure for table `wallet`
--

CREATE TABLE `wallet` (
  `w_id` int(11) NOT NULL,
  `w_cm_email` varchar(52) NOT NULL,
  `w_balance` int(11) NOT NULL,
  `w_updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `w_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wallet`
--

INSERT INTO `wallet` (`w_id`, `w_cm_email`, `w_balance`, `w_updated_at`, `w_created_at`) VALUES
(1, 'asif@gmail.com', 500, '2021-04-20 09:13:21', '2021-04-18 05:49:56'),
(2, 'faique@gmail.com', 0, '2021-05-19 17:44:27', '2021-04-18 09:35:37'),
(3, 'try@gmail.com', 800, '2021-04-18 10:34:26', '2021-04-18 10:34:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bank_account`
--
ALTER TABLE `bank_account`
  ADD PRIMARY KEY (`ba_id`);

--
-- Indexes for table `customer_master`
--
ALTER TABLE `customer_master`
  ADD PRIMARY KEY (`cm_id`);

--
-- Indexes for table `space`
--
ALTER TABLE `space`
  ADD PRIMARY KEY (`space_id`),
  ADD KEY `space_type_id` (`space_type_id`);

--
-- Indexes for table `space_booking`
--
ALTER TABLE `space_booking`
  ADD PRIMARY KEY (`sb_id`),
  ADD KEY `sb_space_id` (`sb_space_id`),
  ADD KEY `sb_cm_id` (`sb_cm_id`);

--
-- Indexes for table `space_facilities`
--
ALTER TABLE `space_facilities`
  ADD PRIMARY KEY (`sf_id`),
  ADD KEY `sf_space_id` (`sf_space_id`);

--
-- Indexes for table `space_type`
--
ALTER TABLE `space_type`
  ADD PRIMARY KEY (`st_id`);

--
-- Indexes for table `user_enquiry`
--
ALTER TABLE `user_enquiry`
  ADD PRIMARY KEY (`ue_id`),
  ADD KEY `ue_cm_id` (`ue_cm_id`);

--
-- Indexes for table `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`w_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bank_account`
--
ALTER TABLE `bank_account`
  MODIFY `ba_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customer_master`
--
ALTER TABLE `customer_master`
  MODIFY `cm_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `space`
--
ALTER TABLE `space`
  MODIFY `space_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `space_booking`
--
ALTER TABLE `space_booking`
  MODIFY `sb_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `space_facilities`
--
ALTER TABLE `space_facilities`
  MODIFY `sf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `space_type`
--
ALTER TABLE `space_type`
  MODIFY `st_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_enquiry`
--
ALTER TABLE `user_enquiry`
  MODIFY `ue_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `wallet`
--
ALTER TABLE `wallet`
  MODIFY `w_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `space`
--
ALTER TABLE `space`
  ADD CONSTRAINT `space_ibfk_1` FOREIGN KEY (`space_type_id`) REFERENCES `space_type` (`st_id`);

--
-- Constraints for table `space_booking`
--
ALTER TABLE `space_booking`
  ADD CONSTRAINT `space_booking_ibfk_1` FOREIGN KEY (`sb_space_id`) REFERENCES `space` (`space_id`),
  ADD CONSTRAINT `space_booking_ibfk_2` FOREIGN KEY (`sb_cm_id`) REFERENCES `customer_master` (`cm_id`);

--
-- Constraints for table `space_facilities`
--
ALTER TABLE `space_facilities`
  ADD CONSTRAINT `space_facilities_ibfk_1` FOREIGN KEY (`sf_space_id`) REFERENCES `space` (`space_id`);

--
-- Constraints for table `user_enquiry`
--
ALTER TABLE `user_enquiry`
  ADD CONSTRAINT `user_enquiry_ibfk_1` FOREIGN KEY (`ue_cm_id`) REFERENCES `customer_master` (`cm_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
