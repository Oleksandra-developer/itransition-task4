# itransition-task4

Обобщенная консольная игра "камень-ножницы-бумага" (любое число произвольных комбинаций).
Пользователь задает игровые ходы, неповторяющиеся. нечетное количество больше 3. Программа выбирает ход,
шифрует его и показывает HMAC пользователю. Пользователь делает ход, программа определяет победителя и 
информирует пользователя, также показав ключ шифрования (для проверки честности игры).
Согласно правилам, половина элементов массива, следующая ПОСЛЕ выбранного - проигрывают ему, половина,
стоящая ПЕРЕД выбранным - выигрывают у него.