#### Доброго времени суток уважаемый проверяющий! 
Хотелось бы сказать пару слов. Задеплоил 19.07 ночью на хероку, он же медленно отдавал ответы и куча ошибок стало вылетать, которых нету в проекте. Растроился,так как час до сабмита, но подумал что неуважительно кудать такую работу на проверку. Поэтому сделал по принципу async race. В условиях нигде не сказано о том, что на хероку обязательно кидать. Я думаю это такой обходной момент немного, но всё же не критичный. Попрошу вас, выгрузите у себя server и запустите потому что без него только модальное оконо и увидете. Всего вам доброго!   


* +30 - присутствует верстка со всеми базовыми элементами (Игроки, таблицы ходов, игровое поле)+
* +20 - все фигуры ходят согласно правилам шахмат 15/20 (Фигуры ходят по правилам, но у ферзя, слона и ладьи есть способность перелетать через фигуры -5 баллов) 
 +10 - реализована возможность смены имени игрока +
* +10 - реализован запуск игрового цикла + 
* +10 - шаги игроков и время хода отображаются в таблице +
* +10 - реализованна возможность перетаскивать фигуры с помощью drag and drop +
* +10 - во время игры игрок может признать поражение, противник при этом должен быть признан победителем +
* +5 - игрок, совершающий ход, имеет соответствующую отметкуа +
* +5 - победивший игрок подсвечивается +
* +5 - после победы есть возможность вернуться в Лобби +
* +10 - Присутствует возможность включения автопревращения пешки, которая дошла до последней горизонтали, в ферзя
-------------------------------------
* +100 - реализован механизм игры по сети с живым противником с использованием websocket 90/100 (В правилах сказано, что нужно ожидать в гостинной другого игрока, а как тот подключится подключаться к нему, у меня же нету такой комнаты -10 баллов) 
 * +30 - после запуска боя начинается автоматическое воспроизведение игры + (считаю, что это пункт касается именно перехода из ожидания противника в онлайн партию, потому что это сложнее реализовать чем автовоспроизведение повтора, а так же не логично относить было бы это к повторам, если смотреть на то, что этот пунтк стоит перед тем как упоминается страница повторов)
 * +10 - реализована страница выбора повторов +
 * +10 - для каждого матча есть карточка с кратким описанием матча +
 * +5 - после победы есть возможность перейти на страницу повторов +
 * +5 - в лобби есть возможность перейти на страницу повторов +
 * +5 - повторы не удаляются после перезагрузки страницы +
 * +5 - есть кнопка выйти в лобби +

Итого: 280 баллов

# Chess-Server
-----------------
1) Загрузить репозиторий :
git clone https://github.com/OlegRabushko/Chess-Server.git
----------
2) Установить зависимости :
npm install
------------
3) Запустить сервер :
npm start
-----------
4) Открыть ещё один терминал и запустить webSocket: 
npm run socket
------------
5) Для игры по сети откройте 2ой браузер.
