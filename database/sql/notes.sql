CREATE TABLE IF NOT EXISTS `user` (
    `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `lang` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `books` (
    `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `notes` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `time_boos` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `status` tinyint(1) NOT NULL DEFAULT '0',
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `user` (`id`, `phone`, `name`, `email`, `password`, `role`, `lang`, `created_at`, `updated_at`)
VALUES
    ('92b8f560-01dd-4319-a0be-d71204dfs', '0987654321', 'Admin', 'admin@gmail.com', MD5('123456789'), 'user', 'en', NOW(), NOW()),
    ('92btq560-01dd-4319-a0be-d71204213', '1122334455', 'Tu name', 'tu@gmail.com', MD5('123456789'), 'user', 'fr', NOW(), NOW()),
    ('92btq560-yuq-4319-a0be-d71204213', '5566778899', 'Nu Thi', 'thi@gmail.com', MD5('123456789'), 'moderator', 'de', NOW(), NOW());