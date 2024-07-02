import os

def rename_files_in_directory(directory):
    # Parcourt le dossier et les sous-dossiers
    print('1')
    for root, dirs, files in os.walk(directory):
        print('2')
        for file in files:
            print('3')
            # Crée le chemin complet du fichier
            old_file_path = os.path.join(root, file)
            
            # Renomme les fichiers .js en .ts
            if file.endswith('.js'):
                new_file_path = old_file_path[:-3] + '.ts'
                os.rename(old_file_path, new_file_path)
                print(f'Renamed: {old_file_path} to {new_file_path}')
            
            # Renomme les fichiers .jsx en .tsx
            elif file.endswith('.jsx'):
                new_file_path = old_file_path[:-4] + '.tsx'
                os.rename(old_file_path, new_file_path)
                print(f'Renamed: {old_file_path} to {new_file_path}')

# Spécifie le chemin du dossier à parcourir
directory_path = 'src'
rename_files_in_directory(directory_path)
