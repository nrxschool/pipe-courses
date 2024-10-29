import os


content = [
    "# Aula N: Como criar carteiras",
    "# Aula N: Como assinar mensagem",
    "# Aula N: Lendo saldos da blockchain",
    "# Aula N: Lendo dados de transações",
    "# Aula N: Lendo dados de blocos",
    "# Aula N: Como criar transações simples (envio de Ether)",
    "# Aula N: O que são ABIs",
    "# Aula N: Como se conectar com contratos",
    "# Aula N: Como ler dados simples do contrato (tipos primitivos)",
    "# Aula N: Como ler dados complexos do contrato (Struct, Enum e Array)",
    "# Aula N: Como criar transações complexas (envio de ERC20)",
    "# Aula N: Como criar transações complexas (envio de Struct, Enum e Array)",
]

# Define a quantidade de pastas que deseja criar
num_aulas = len(content)  # Ajuste o número de aulas conforme necessário

for i in range(1, num_aulas):
    # Define o nome da pasta e do arquivo
    pasta = f"aula{i}"
    arquivo = os.path.join(pasta, "roteiro.md")
    # aula/roteiro.md

    # Cria a pasta, se ela não existir
    os.makedirs(pasta, exist_ok=True)

    # Cria o arquivo vazio dentro da pasta
    with open(arquivo, "w") as f:
        aula = content[i]
        aula = aula.replace("N", str(i))
        f.write(aula)

print(f"{num_aulas} pastas e arquivos 'roteiro.md' criados com sucesso!")
