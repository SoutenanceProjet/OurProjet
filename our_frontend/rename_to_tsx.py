import os
import re

def rename_jsx_to_tsx(root_directory):
    for dirpath, dirnames, filenames in os.walk(root_directory):
        for filename in filenames:
            if filename.endswith('.jsx'):
                old_file = os.path.join(dirpath, filename)
                new_file = os.path.join(dirpath, filename[:-4] + '.tsx')
                os.rename(old_file, new_file)
                print(f'Renamed: {old_file} -> {new_file}')
            elif filename.endswith('.js'):
                old_file = os.path.join(dirpath, filename)
                new_file = os.path.join(dirpath, filename[:-3] + '.ts')
                os.rename(old_file, new_file)
                print(f'Renamed: {old_file} -> {new_file}')

def add_types_to_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Add simple type annotations
    content = re.sub(r'const (\w+) = (\[.*?\]|{.*?}|".*?"|\d+);', r'const \1: any = \2;', content)
    content = re.sub(r'let (\w+) = (\[.*?\]|{.*?}|".*?"|\d+);', r'let \1: any = \2;', content)
    content = re.sub(r'function (\w+)\((.*?)\)\s*{', r'function \1(\2): any {', content)
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)
    print(f'Updated: {file_path}')

def process_directory(root_directory):
    for dirpath, dirnames, filenames in os.walk(root_directory):
        for filename in filenames:
            if filename.endswith(('.ts', '.tsx')):
                file_path = os.path.join(dirpath, filename)
                add_types_to_file(file_path)

# Remplacez 'votre_chemin_de_dossier' par le chemin de votre dossier cible
root_directory = 'src'
rename_jsx_to_tsx(root_directory)
process_directory(root_directory)
