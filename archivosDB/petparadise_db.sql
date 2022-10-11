-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2022 a las 04:47:08
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `petparadise_db`
--
CREATE DATABASE IF NOT EXISTS `petparadise_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `petparadise_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `picture_brand` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brand`
--

INSERT INTO `brand` (`id`, `name`, `picture_brand`) VALUES
(21, 'Peligriee', 'brand-1663020730473.png'),
(22, 'Royal Canin', 'brand-1663121817431.png'),
(23, 'Royal Canin', 'brand-1663124559124.png'),
(24, 'Dog Chow', 'brand-1663124568992.png'),
(25, 'Whiskas', 'brand-1663124578693.png'),
(26, 'Pro Plan', 'brand-1663124587000.png'),
(27, 'Purina', 'brand-1663124594206.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`, `description`, `image`) VALUES
(1, 'Comida para perros', '', 'category-1663121780100.png'),
(2, 'Higiene', '', 'category-1663124481777.png'),
(3, 'Juguetes', '', 'category-1663124493680.png'),
(4, 'Antipulgas', '', 'category-1663124506540.png'),
(5, 'Alimento balanceado para gatos', '', 'category-1663124524349.png'),
(6, 'Snacks', '', 'category-1663124532916.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_details`
--

CREATE TABLE `order_details` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `subtotal` decimal(10,0) NOT NULL,
  `quantity` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `descriptions` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `descriptions`, `image`, `category_id`, `brand_id`) VALUES
(1, 'Pants Custom Dry Clean', 'Oth fx upper end of left ulna, subs for clos fx w delay heal', 'product-1663121858956.png', 6, 22),
(2, 'Lemon Pepper', 'Burn of unsp deg mult sites of unsp wrist and hand, init', 'product-1663121858956.png', 4, 22),
(3, 'Plate Foam Laminated 9in Blk', 'Undescended and ectopic testicle', 'product-1663121858956.png', 5, 23),
(4, 'Pork - Bacon, Double Smoked', 'Nondisp fx of nk of r rad, 7thR', 'product-1663121858956.png', 5, 22),
(5, 'Fish - Soup Base, Bouillon', 'Fatigue fx vertebra, site unsp, subs for fx w delay heal', 'product-1663121858956.png', 1, 22),
(6, 'Muffin Mix - Blueberry', 'Pedl cyclst injured in trnsp accident w military vehicle', 'product-1663121858956.png', 6, 22),
(7, 'Higashimaru Usukuchi Soy', 'Pnctr w foreign body of l rng fngr w/o damage to nail, init', 'product-1663121858956.png', 6, 22),
(8, 'Shrimp - 16/20, Peeled Deviened', 'Malnutrition in pregnancy, childbirth and the puerperium', 'product-1663121858956.png', 4, 23),
(9, 'Lettuce - Baby Salad Greens', 'Adverse effect of other nonsteroidal anti-inflammatory drugs', 'product-1663121858956.png', 4, 23),
(10, 'Sauce - Ranch Dressing', 'Poisoning by oth systemic anti-infect/parasit, undet, init', 'product-1663121858956.png', 1, 23),
(11, 'Lentils - Red, Dry', 'Displ oblique fx shaft of unsp rad, 7thN', 'product-1663121858956.png', 1, 22),
(12, 'Shrimp - Black Tiger 26/30', 'Unsp inj flexor musc/fasc/tend unsp fngr at wrs/hnd lv, sqla', 'product-1663121858956.png', 3, 23),
(13, 'Chocolate - Compound Coating', 'Unsp superficial injury of vagina and vulva, init encntr', 'product-1663121858956.png', 5, 23),
(14, 'Tart - Butter Plain Squares', 'Unspecified otitis externa, left ear', 'product-1663121858956.png', 2, 22),
(15, 'Veal - Liver', 'Pnctr w fb of unsp lesser toe(s) w/o damage to nail, subs', 'product-1663121858956.png', 3, 23),
(16, 'Sprouts - Brussel', 'Disp fx of hook pro of hamate bone, unsp wrs, 7thP', 'product-1663121858956.png', 6, 23),
(17, 'Dried Figs', 'Car driver injured in collision w van in nontraffic accident', 'product-1663121858956.png', 4, 22),
(18, 'Rum - Coconut, Malibu', 'Fx subcondylar process of mandible, unspecified side, 7thB', 'product-1663121858956.png', 5, 22),
(19, 'Lobster - Tail, 3 - 4 Oz', 'Pathological fracture, right foot, init encntr for fracture', 'product-1663121858956.png', 1, 23),
(20, 'Ostrich - Fan Fillet', 'Person outsd bus inj in clsn w statnry object in traf, subs', 'product-1663121858956.png', 6, 23),
(21, 'Tea - Grapefruit Green Tea', 'Corrosion of third degree of left foot, sequela', 'product-1663121858956.png', 4, 23),
(23, 'Appetizer - Smoked Salmon / Dill', 'Toxic effect of mycotoxin food contaminants, undetermined', 'product-1663121858956.png', 3, 22),
(24, 'Wine - Red, Gallo, Merlot', 'Pedl cyc driver inj in clsn w nonmtr vehicle nontraf, init', 'product-1663121858956.png', 2, 23),
(25, 'Beer - Maudite', 'Adverse effect of other opioids, initial encounter', 'product-1663121858956.png', 1, 22),
(26, 'Raisin - Dark', 'Sltr-haris Type III physl fx lower end humer, unsp arm, 7thD', 'product-1663121858956.png', 6, 22),
(27, 'Milkettes - 2%', 'Unsp traum nondisp spondylolysis of 7th cervcal vert, 7thD', 'product-1663121858956.png', 3, 23),
(28, 'Wine - Zinfandel California 2002', 'Adolescent idiopathic scoliosis, cervicothoracic region', 'product-1663121858956.png', 1, 23),
(29, 'Pork - Back, Short Cut, Boneless', 'Unsp injury of anterior tibial artery, unspecified leg', 'product-1663121858956.png', 5, 23),
(30, 'Sprouts - Brussel', 'Pnctr w fb of unsp external genital organs, male, subs', 'product-1663121858956.png', 5, 22),
(33, 'Alimento Pro Plan Complete para Perro Cachorro', 'Purina Pro Plan elimina la “brecha inmunológica” y provee nutrición completa que ayuda a los cachorros a crecer fuertes y sanos. A su vez, también ayuda a otras cosas claves en el cuidado de la mascota, tales como reforzar el sistema inmune, fortalecer la microflora intestinal y reforzar la barrera cutánea.Formulado con carne fresca de pollo como ingrediente principal, además de vitaminas y minerales esenciales, PRO PLAN® Puppy Razas Medianas ofrece una óptima nutrición para cachorros en crecimiento.  Beneficios El DHA (ácido docosahexaenoico) y EPA (ácido eicasapentaenoico) del aceite de pescado estimulan el desarrollo del cerebro y la maduración de la visión Formulado con anticuerpos naturales provenientes del calostro y proteínas de la carne fresca de pollo, altamente digeribles para estimular el desarrollo de un sistema inmunológico fuerte, protege a los cachorros contra patógenos y enfermedades Proporción óptima de proteína y grasa que promueve un crecimiento saludable al desarrollar músculos fuertes y m', 'product-1663121858956.png', 1, 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `address` varchar(30) NOT NULL,
  `country` varchar(16) NOT NULL,
  `phone` varchar(16) NOT NULL,
  `date` date NOT NULL,
  `picture_user` varchar(45) NOT NULL,
  `role` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `name`, `surname`, `address`, `country`, `phone`, `date`, `picture_user`, `role`) VALUES
(34, 'juan.solis.trabajo@gmail.com', '$2a$10$MixWs4PJoFTke/Eemlx3z.oyMjpF6A0pvuG8VGKayWw.t4wUs0KgO', 'Juan', 'Solis', 'Avenida Dorrego 2124', 'Argentina', '+541158274144', '2022-01-01', 'user-1664031131730.jpg', 0),
(35, 'juan.solis.trabajo@gmail.commm', '$2a$10$DQXJNj4oJJNG4eyfxsf8UO0mw3vUwsR352.95.3VkkUdhgn7fXxii', 'Juan', 'Solis', 'Avenida Dorrego 2124', 'Argentina', '+541158274144', '2021-01-01', 'product-1663006073387.jpg', 0),
(36, 'juan@gmail.com', '$2a$10$X1nWaq3tU/aARAQjcYGxLOk94whfRLNcvOZszcVKGE8C/0LTHbt6O', 'Juan', 'Solis', 'Avenida Dorrego 2124', 'Argentina', '+541158274144', '2022-01-01', 'user-1663209630042.jpg', 0),
(37, 'juan.solis.trabajo@gmail.comm', '$2a$10$TLGHf1lCTcVx/ETVpR35rOiNU1encYCo5/Bu.c/rCxGOfi0NuWcHC', 'Juan', 'Solis', 'Avenida Dorrego 2124', 'Argentina', '+541158274144', '2022-01-01', 'user-1664828245618.png', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `weight`
--

CREATE TABLE `weight` (
  `id` int(11) NOT NULL,
  `stock` smallint(6) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `weight`
--

INSERT INTO `weight` (`id`, `stock`, `size`, `price`, `product_id`) VALUES
(41, 6, '3kg', '6', 33);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_user_idx` (`user_id`);

--
-- Indices de la tabla `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orderdetails_order _idx` (`order_id`),
  ADD KEY `fk_orderdetails_product_idx` (`product_id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_prod_brand_idx` (`brand_id`),
  ADD KEY `fk_prod_catego_idx` (`category_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `weight`
--
ALTER TABLE `weight`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_wei_prod_id_idx` (`product_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `weight`
--
ALTER TABLE `weight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_orders_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `fk_orderdetails_order ` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_orderdetails_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_prod_brand` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_prod_catego` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `weight`
--
ALTER TABLE `weight`
  ADD CONSTRAINT `fk_wei_prod_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
