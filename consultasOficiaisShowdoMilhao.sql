-Operações de seleção simples:

-- Retorna o nome dos jogadores, id da partida e a pontuação nessa partida
SELECT j.nome, p.idpartida, p.pontuacaoparcial
FROM jogador j
INNER JOIN partida p ON j.idjogador = p.idjogador;

-- 2. Conseguimos ver o somatório de quantas partidas já foram jogadas por cada jogador.
SELECT j.nome, COUNT(p.idpartida) AS total_partidas 
FROM jogador j
INNER JOIN partida p ON j.idjogador = p.idjogador
GROUP BY j.nome
ORDER BY total_partidas DESC;


-- Junção de duas relações:

-- 3. Retorna o gabarito geral do jogo, das 100 perguntas cadastradas
SELECT pe.idpergunta, pe.enunciado, a.conteudo
FROM pergunta AS pe JOIN alternativa AS a
ON pe.idpergunta = a.idpergunta
WHERE a.alternativacorreta = 1;

-- 4. Retorna o nome dos jogadores que já ganharam o prêmio máximo e em qual partida isso ocorreu.
SELECT j.nome, p.idpartida, p.pontuacaoparcial
FROM jogador j
INNER JOIN partida p ON j.idjogador = p.idjogador
WHERE p.pontuacaoparcial = 1000000;


-- Funções de agregação sobre o resultado da junção de duas ou mais relações:

-- 5. Conseguimos ver o somatório de quantas partidas já foram jogadas por cada jogador.
SELECT j.nome, COUNT(p.idpartida) AS total_partidas 
FROM jogador j
INNER JOIN partida p ON j.idjogador = p.idjogador
GROUP BY j.nome
ORDER BY total_partidas DESC;

-- 6. Retorna a média geral de pontuação de cada jogador, 
-- onde somamos a pontuação total de todas as partidas e dividimos pelo total de partidas jogadas.
SELECT j.nome, ROUND(AVG(p.pontuacaoparcial), 2) AS 'media_pontuacao'
FROM jogador j
INNER JOIN partida p ON j.idjogador = p.idjogador
GROUP BY j.nome
ORDER BY media_pontuacao DESC;
