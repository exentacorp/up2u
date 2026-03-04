# Инструкция по деплою UP2U на GitHub Pages

## Шаг 1: Убедитесь что Git установлен
Откройте командную строку (cmd или PowerShell) и проверьте:
```
git --version
```

## Шаг 2: Настройте Git (если ещё не настроен)
```
git config --global user.name "Ваше имя"
git config --global user.email "ваш@email.com"
```

## Шаг 3: Перейдите в папку проекта
```
cd путь\к\папке\my-project
```

## Шаг 4: Инициализируйте Git репозиторий
Если папка `.git` уже существует, удалите её сначала:
```
rmdir /s /q .git
```

Затем инициализируйте:
```
git init
git branch -M main
```

## Шаг 5: Добавьте все файлы и создайте коммит
```
git add .
git commit -m "Initial commit - UP2U website"
```

## Шаг 6: Добавьте удалённый репозиторий
```
git remote add origin https://github.com/exentacorp/up2u.git
```

Если remote уже существует, удалите его:
```
git remote remove origin
git remote add origin https://github.com/exentacorp/up2u.git
```

## Шаг 7: Отправьте код на GitHub
```
git push -u origin main
```

## Шаг 8: Установите зависимости и запустите деплой
```
bun install
bun run build
bun run deploy
```

## ВАЖНО: Используйте `bun` вместо `npm`!
Этот проект использует `bun` как пакетный менеджер. Команды `npm` работать не будут.

---

## Быстрая команда для PowerShell (скопируйте и вставьте):

```powershell
# Удалить старый .git если есть
if (Test-Path .git) { Remove-Item -Recurse -Force .git }

# Инициализация
git init
git branch -M main
git add .
git commit -m "Initial commit - UP2U website"

# Добавить remote (удалить старый если есть)
git remote remove origin 2>$null
git remote add origin https://github.com/exentacorp/up2u.git

# Отправить на GitHub
git push -u origin main --force

# Собрать и задеплоить
bun install
bun run build
bun run deploy
```

---

## Что делает каждая команда:
- `git init` - создаёт новый Git репозиторий
- `git branch -M main` - переименовывает ветку в `main`
- `git add .` - добавляет все файлы в индекс
- `git commit` - создаёт коммит
- `git remote add origin` - связывает с GitHub репозиторием
- `git push` - отправляет код на GitHub
- `bun run build` - собирает статический сайт в папку `out`
- `bun run deploy` - публикует папку `out` на GitHub Pages

---

## Результат:
После успешного деплоя сайт будет доступен по адресу:
**https://exentacorp.github.io/up2u/**
