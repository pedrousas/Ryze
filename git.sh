# abortar em erros
set -e

echo "Escreva sua mensagem de commit:"
read message 

git add .
git commit -m "${message}"
git push origin main

echo "Tudo Certo"