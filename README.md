# ДА БЛИН, ОПЯТЬ НЕ ИНТЕГРАЦИОННЫЕ ТЕСТЫ
Короче, использовал следующие библиотеки:
- **jest** для тестирования на ЖабкоСкрипте
- **axios** чтобы парсить моковые данные и асинхронные функции приближенные к реальности потестировать
# А зачем?
Захотелось мне, значит, побороть свою задержку в развитии и таки прикоснуться к тестам. </br>
Ну, могу сказать, что штука оказалась весьма полезной. 
> -- *Надо же, кто бы мог подумать* 

Например, в будущем, если кто-то будет дописывать код, то непройденный старый вонючий unit тест в дебрях кода,
даст знать о том, что логика определенного метода нарушилась.
Ноооо, честно говоря, как-то лень покрывать весь код unit тестами. Так что мораль думайте сами.
Дальше планирую интеграционные и e2e пощупать, и может быть даже скриншотные тесты, но они выглядят как полный кринж.