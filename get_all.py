import os

def write_directory_contents_to_file(directory_path, output_file):
    with open(output_file, 'w', encoding='utf-8') as out_file:
        for root, _, files in os.walk(directory_path):
            for file_name in files:
                file_path = os.path.join(root, file_name)
                try:
                    with open(file_path, 'r', encoding='utf-8') as file:
                        content = file.read()
                    # Write the full path, filename, and content to the output file
                    out_file.write(f"=== {file_path} ===\n")
                    out_file.write(content)
                    out_file.write("\n\n")  # Separate each file with a blank line
                except Exception as e:
                    # Log any errors encountered (e.g., for non-text files)
                    print(f"Could not read {file_path}: {e}")

    print(f"Directory contents written to {output_file}")

# Specify the directory you want to read and the output file path
directory_path = "./src"  # Replace with your directory path
output_file = "./all_files_content.txt"      # This file will contain the output

write_directory_contents_to_file(directory_path, output_file)
