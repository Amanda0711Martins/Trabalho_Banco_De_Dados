import mysql
import csv
import pymysql

# Conectar ao banco de dados
conn = pymysql.connect(
  host="localhost",
  user="root",
  password="Minas@0202",
  database="Showdomilhao",
  charset="utf8mb4"
)

#Para as operações abaixo só é possível realizar a inserção de registros em uma tabela por vez, devemos comentar as demais partes do código

#Realizamos abaixo a operação para inserção dos registros na tabela pergunta
# Criar um cursor para executar as queries
cursor = conn.cursor()

# Nome do arquivo CSV e tabela
arquivo_csv = 'C:/Users/AmandaeLuiz04/Downloads/Trabalho_Banco_De_Dados/Trabalho_Banco_De_Dados/BackEnd/pergunta.csv'
tabela = 'pergunta'  # inserção de dados da tabela pergunta

# Abrir o arquivo CSV
with open(arquivo_csv, 'r', encoding='utf-8') as csvfile:
    csvreader = csv.reader(csvfile)
    next(csvreader)  # Ignorar o cabeçalho

    for row in csvreader:
        sql = f"INSERT INTO {tabela} (enunciado) VALUES (%s)"
        cursor.execute(sql, row)

# Confirmar as alterações
conn.commit()

# Fechar a conexão
conn.close()


#Realizamos a operação novamente para inserção dos registros na tabela alternativa
# Criar um cursor para executar as queries
cursor = conn.cursor()

# Nome do arquivo CSV e tabela
arquivo_csv = 'C:/Users/AmandaeLuiz04/Downloads/Trabalho_Banco_De_Dados/Trabalho_Banco_De_Dados/BackEnd/alternativa.csv'
tabela = 'alternativa'  # Registros da tabela alternativa

# Abrir o arquivo CSV
with open(arquivo_csv, 'r', encoding='utf-8') as csvfile:
    csvreader = csv.reader(csvfile)
    next(csvreader)  # Ignorar o cabeçalho

    for row in csvreader:
        idpergunta, conteudo, alternativacorreta = row
        sql = f"INSERT INTO {tabela} (idpergunta, conteudo, alternativacorreta) VALUES (%s, %s, %s)"
        cursor.execute(sql, (idpergunta, conteudo, alternativacorreta))

# Confirmar as alterações
conn.commit()

# Fechar a conexão
conn.close()

#Realizamos a operação novamente para inserção dos registros na tabela jogador
# Criar um cursor para executar as queries
cursor = conn.cursor()

# Nome do arquivo CSV e tabela
arquivo_csv = 'C:/Users/AmandaeLuiz04/Downloads/Trabalho_Banco_De_Dados/Trabalho_Banco_De_Dados/BackEnd/jogador.csv'
tabela = 'jogador'  # Registros da tabela jogador

# Abrir o arquivo CSV
with open(arquivo_csv, 'r', encoding='utf-8') as csvfile:
    csvreader = csv.reader(csvfile)
    next(csvreader)  # Ignorar o cabeçalho

    for row in csvreader:
        sql = f"INSERT INTO {tabela} (nome, email, senha) VALUES (%s, %s, %s)"
        cursor.execute(sql, row)

# Confirmar as alterações
conn.commit()

# Fechar a conexão
conn.close()

#Realizamos abaixo a operação para inserção dos registros na tabela partida
# Criar um cursor para executar as queries
cursor = conn.cursor()

# Nome do arquivo CSV e tabela
arquivo_csv = 'C:/Users/AmandaeLuiz04/Downloads/Trabalho_Banco_De_Dados/Trabalho_Banco_De_Dados/BackEnd/partida.csv'
tabela = 'partida'  # inserção de dados da tabela partida

# Abrir o arquivo CSV
with open(arquivo_csv, 'r', encoding='utf-8') as csvfile:
    csvreader = csv.reader(csvfile)
    next(csvreader)  # Ignorar o cabeçalho

    for row in csvreader:
        sql = f"INSERT INTO {tabela} (idjogador, pontuacaoparcial, rodada) VALUES (%s, %s, %s)"
        cursor.execute(sql, row)

# Confirmar as alterações
conn.commit()

# Fechar a conexão
conn.close()
