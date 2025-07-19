import os
import pyttsx3

# Specify the directory path
directory_path = '/PROJECTS/gcrg/college/assets/images'

try:
    # Get the list of entries in the directory
    entries = os.listdir(directory_path)
    
    # Separate files and directories
    files = [entry for entry in entries if os.path.isfile(os.path.join(directory_path, entry))]
    directories = [entry for entry in entries if os.path.isdir(os.path.join(directory_path, entry))]
    
    print("Files:")
    for file in files:
        print(file)
    
    print("\nDirectories:")
    for directory in directories:
        print(directory)
except FileNotFoundError:
    print(f"The directory {directory_path} does not exist.")
except PermissionError:
    print(f"Permission denied to access {directory_path}.")


engine = pyttsx3.init()
engine.say("Did you know that coding is the backbone of everything. from websites to AI and even cryptocurrencies like Bitcoin? It’s no longer just for tech experts—programming is changing industries like healthcare, gaming, and education. Whether it’s building apps, creating smart machines, or designing futuristic tech, coding is the skill of tomorrow. Let’s explore how you can be part of this exciting revolution!")
engine.runAndWait()