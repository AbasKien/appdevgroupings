-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2024 at 03:41 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appdev_ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `price`, `stock`, `image`, `created_at`) VALUES
(14, 'Meistertruck', 'Pen', 20.00, 20, 'uploads/1727931869445.jpg', '2024-10-03 05:04:29'),
(15, 'Octagon', 'Pen', 30.00, 20, 'uploads/1727931894075.jpg', '2024-10-03 05:04:54'),
(16, 'A4', 'Papers', 100.00, 20, 'uploads/1727931915552.jpg', '2024-10-03 05:05:15'),
(17, 'Short', 'Papers', 200.00, 10, 'uploads/1727931930747.jpg', '2024-10-03 05:05:30'),
(18, 'Long', 'Pen', 100.00, 200, 'uploads/1727931950762.jpg', '2024-10-03 05:05:50'),
(19, 'Blue Notebook', 'Notebooks', 100.00, 12, 'uploads/1727931969681.jpg', '2024-10-03 05:06:09'),
(20, 'Green Notebooks', 'Notebooks', 100.00, 20, 'uploads/1727932003711.jpg', '2024-10-03 05:06:43'),
(21, 'Highlighter', 'Highlighter', 100.00, 20, 'uploads/1727932025466.jpg', '2024-10-03 05:07:05'),
(22, 'Crayons', 'Coloring Materials', 100.00, 20, 'uploads/1727932046925.jpg', '2024-10-03 05:07:26');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`) VALUES
(11, 'Vincent Acha', 'vnino1228@gmail.com', '123', '2024-10-03 09:03:43'),
(12, 'Vincent Acha', 'nino@gmail.com', 'pogiako', '2024-10-03 13:21:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
