# Исправление неработающих донатов Paypal для Украины

Важно - кто-то должен записать скринкаст как это все работает, с английской озвучкой и мы выложим на YouTube, вставив видео в форму. Это важный компонент, но его можно оставить нан потом.


## Алгоритм:

- Использовать Google Forms для описания процесса действия, потому что они могут помочь в автозаполнении формы, куда можно вставить email и отправить ссылку благодетелю для оплаты. [Вот пример](https://docs.google.com/forms/d/e/1FAIpQLScPs3GhuqYsix6pGNjf23t_AACFrqjPxn2d3eUqKuJnzLlODg/viewform?usp=pp_url&entry.2141641275=esupport@esupport.org.ua)
- Для того, чтоб это упростить, мы делаем сайт [paypal-donate.pp.ua](https://https://paypal-donate.pp.ua), с помощью которого генерируем такую ссылку и получаем для нее фирменный код вставки на сайт, генерируя все на JavaScript - без бакенда
- Также мы вставляем кнопку, которая позволяет отправить сгенеренный код знакомому по email и иными альтернативными вариантами, но без использования бакенда - только фронт, только JavaScript

## Ограничения:
- Не использовать ничего связанного с TM PayPal. Делаем свои цвета и шрифты. Все картинки для кнопок должны быть нарисованы, а не скачаны.
- Дописать политику безопасности, чтоб не нести отвественности
- Использовать https://happycoding.io/tutorials/html/github-pages для размещения

## Полезно знать:

PayPal не дает никаких API для P2P, так как это рискованные операции

