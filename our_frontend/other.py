import os

def afficher_contenu_dossier(dossier):
    # Vérifie si le chemin spécifié est un dossier
    if not os.path.isdir(dossier):
        print(f"{dossier} n'est pas un dossier valide.")
        return
    
    # Parcourt les fichiers du dossier
    for nom_fichier in os.listdir(dossier):
        chemin_fichier = os.path.join(dossier, nom_fichier)
        
        # Vérifie si le chemin est un fichier
        if os.path.isfile(chemin_fichier):
            try:
                with open(chemin_fichier, 'r') as fichier:
                    contenu = fichier.read()
                    print(f"Contenu de '{nom_fichier}':")
                    print(contenu)
                    print('-' * 50)  # Séparateur visuel entre les fichiers
            except FileNotFoundError:
                print(f"Le fichier '{nom_fichier}' n'a pas été trouvé.")
            except IOError:
                print(f"Erreur lors de la lecture du fichier '{nom_fichier}'.")

# Spécifie le chemin du dossier à parcourir
dossier_path = 'src'
afficher_contenu_dossier(dossier_path)
