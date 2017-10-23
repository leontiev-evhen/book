-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Окт 23 2017 г., 11:00
-- Версия сервера: 10.1.25-MariaDB-
-- Версия PHP: 7.0.22-0ubuntu0.17.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `book`
--

-- --------------------------------------------------------

--
-- Структура таблицы `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `authors`
--

INSERT INTO `authors` (`id`, `name`, `create_at`) VALUES
(20, 'Diney Costeloe', '2017-10-16 15:16:23'),
(21, 'Loreth Anne White', '2017-10-16 15:16:38'),
(22, 'Amy Harmon', '2017-10-16 15:16:47'),
(23, 'Richard H. Thaler', '2017-10-16 15:16:55'),
(24, 'Tess Gerritsen', '2017-10-16 15:17:07');

-- --------------------------------------------------------

--
-- Структура таблицы `book2author`
--

CREATE TABLE `book2author` (
  `id_book` int(11) NOT NULL,
  `id_author` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `book2author`
--

INSERT INTO `book2author` (`id_book`, `id_author`) VALUES
(2, 20);

-- --------------------------------------------------------

--
-- Структура таблицы `book2genre`
--

CREATE TABLE `book2genre` (
  `id_book` int(11) NOT NULL,
  `id_genre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `book2order`
--

CREATE TABLE `book2order` (
  `id_order` int(11) NOT NULL,
  `id_book` int(11) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `book2order`
--

INSERT INTO `book2order` (`id_order`, `id_book`, `count`) VALUES
(1, 2, 5),
(2, 2, 5),
(3, 2, 3),
(4, 2, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `discaunt` int(11) NOT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `books`
--

INSERT INTO `books` (`id`, `name`, `description`, `price`, `discaunt`, `create_at`) VALUES
(2, 'The Girl With No Name', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 100, -10, '2017-10-23 10:23:18'),
(3, 'A Dark Lure', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 200, 10, '2017-10-23 10:24:06'),
(4, 'The Baker\'s Secret: A Novel', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 300, 0, '2017-10-23 10:24:21'),
(5, 'The Hideaway', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 400, 0, '2017-10-23 10:24:40'),
(6, 'Sweet Tea Tuesdays', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 500, 0, '2017-10-23 10:24:53');

--
-- Триггеры `books`
--
DELIMITER $$
CREATE TRIGGER `book_history` AFTER INSERT ON `books` FOR EACH ROW INSERT INTO history_book (id_book, name_book, price_book, discaunt_book)
	VALUES (NEW.id, NEW.name, NEW.price, NEW.discaunt)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_book` int(11) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `discaunt` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `token_create_at` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `id_role` int(11) NOT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `password`, `discaunt`, `token`, `token_create_at`, `status`, `id_role`, `create_at`) VALUES
(1, 'yevhen', 'leo@mail.cz', '$2y$10$4oujZTCU.sng4rqAKMWeU.WiDaPPrWTCVBl.0BakT.knh9ziJYw2i', 0, 'ShdizgbtPSv2LsBcbBdbJPQq5i1ZvXLD', 1508747725, 1, 1, '2017-10-23 10:30:18');

-- --------------------------------------------------------

--
-- Структура таблицы `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `genres`
--

INSERT INTO `genres` (`id`, `name`, `create_at`) VALUES
(2, 'History', '2017-10-23 09:52:08'),
(3, 'Travel', '2017-10-23 09:52:23'),
(4, 'Arts & Photography', '2017-10-23 09:52:37'),
(5, 'Sports & Outdoors', '2017-10-23 09:53:02'),
(6, 'Education & Teaching', '2017-10-23 09:53:18');

-- --------------------------------------------------------

--
-- Структура таблицы `history_book`
--

CREATE TABLE `history_book` (
  `id` int(11) NOT NULL,
  `id_book` int(11) NOT NULL,
  `name_book` varchar(255) NOT NULL,
  `price_book` int(11) NOT NULL,
  `discaunt_book` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `history_book`
--

INSERT INTO `history_book` (`id`, `id_book`, `name_book`, `price_book`, `discaunt_book`) VALUES
(2, 2, 'The Girl With No Name', 100, 0),
(3, 3, 'A Dark Lure', 200, 10),
(4, 4, 'The Baker\'s Secret: A Novel', 300, 0),
(5, 5, 'The Hideaway', 400, 0),
(6, 6, 'Sweet Tea Tuesdays', 500, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `sum` int(11) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `id_status` int(11) NOT NULL,
  `id_payment` int(11) NOT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`id`, `sum`, `id_customer`, `id_status`, `id_payment`, `create_at`) VALUES
(1, 500, 1, 4, 1, '2017-10-23 10:32:48'),
(2, 500, 1, 1, 1, '2017-10-23 10:32:56'),
(3, 300, 1, 1, 4, '2017-10-23 10:35:43'),
(4, 220, 1, 1, 4, '2017-10-23 10:56:36');

-- --------------------------------------------------------

--
-- Структура таблицы `payment_system`
--

CREATE TABLE `payment_system` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `payment_system`
--

INSERT INTO `payment_system` (`id`, `name`) VALUES
(1, 'PayPal'),
(2, 'Google Checkout'),
(3, 'Amazon Payments'),
(4, 'Dwolla');

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Структура таблицы `status_order`
--

CREATE TABLE `status_order` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `status_order`
--

INSERT INTO `status_order` (`id`, `name`) VALUES
(1, 'Pending'),
(2, 'Completed'),
(3, 'Shipped'),
(4, 'Refunded');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `book2author`
--
ALTER TABLE `book2author`
  ADD KEY `id_book` (`id_book`),
  ADD KEY `id_author` (`id_author`);

--
-- Индексы таблицы `book2genre`
--
ALTER TABLE `book2genre`
  ADD KEY `id_genre` (`id_genre`),
  ADD KEY `id_book` (`id_book`);

--
-- Индексы таблицы `book2order`
--
ALTER TABLE `book2order`
  ADD KEY `id_order` (`id_order`),
  ADD KEY `id_book` (`id_book`);

--
-- Индексы таблицы `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_book` (`id_book`),
  ADD KEY `id_customer` (`id_customer`);

--
-- Индексы таблицы `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_role` (`id_role`);

--
-- Индексы таблицы `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `history_book`
--
ALTER TABLE `history_book`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_customer` (`id_customer`),
  ADD KEY `id_status` (`id_status`),
  ADD KEY `id_payment` (`id_payment`);

--
-- Индексы таблицы `payment_system`
--
ALTER TABLE `payment_system`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `status_order`
--
ALTER TABLE `status_order`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT для таблицы `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `history_book`
--
ALTER TABLE `history_book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `payment_system`
--
ALTER TABLE `payment_system`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `status_order`
--
ALTER TABLE `status_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `book2author`
--
ALTER TABLE `book2author`
  ADD CONSTRAINT `book2author_ibfk_1` FOREIGN KEY (`id_book`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `book2author_ibfk_2` FOREIGN KEY (`id_author`) REFERENCES `authors` (`id`);

--
-- Ограничения внешнего ключа таблицы `book2genre`
--
ALTER TABLE `book2genre`
  ADD CONSTRAINT `book2genre_ibfk_1` FOREIGN KEY (`id_genre`) REFERENCES `genres` (`id`),
  ADD CONSTRAINT `book2genre_ibfk_2` FOREIGN KEY (`id_book`) REFERENCES `books` (`id`);

--
-- Ограничения внешнего ключа таблицы `book2order`
--
ALTER TABLE `book2order`
  ADD CONSTRAINT `book2order_ibfk_1` FOREIGN KEY (`id_order`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `book2order_ibfk_2` FOREIGN KEY (`id_book`) REFERENCES `books` (`id`);

--
-- Ограничения внешнего ключа таблицы `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`id_book`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`id_customer`) REFERENCES `customers` (`id`);

--
-- Ограничения внешнего ключа таблицы `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`);

--
-- Ограничения внешнего ключа таблицы `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id_customer`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`id_status`) REFERENCES `status_order` (`id`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`id_payment`) REFERENCES `payment_system` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
