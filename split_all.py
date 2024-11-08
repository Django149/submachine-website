import os

def split_text_file(file_path, output_dir, max_chars=5000):
    # Ensure the output directory exists
    os.makedirs(output_dir, exist_ok=True)

    # Read the content of the original file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Split content by sections using the section header
    sections = content.split('=== ')
    sections = [section for section in sections if section.strip()]  # Remove any empty elements

    # Initialize variables for creating chunks
    current_chunk = ""
    part_num = 1

    # Process each section to create balanced chunks
    for section in sections:
        section_with_header = '=== ' + section  # Re-add header for each section
        if len(current_chunk) + len(section_with_header) > max_chars:
            # Write the current chunk to a file if adding this section would exceed max_chars
            output_file_path = os.path.join(output_dir, f'part_{part_num}.txt')
            with open(output_file_path, 'w', encoding='utf-8') as output_file:
                output_file.write(current_chunk)
            print(f"Saved {output_file_path} with {len(current_chunk)} characters.")
            
            # Reset chunk and increment part number
            current_chunk = section_with_header
            part_num += 1
        else:
            # Append section to current chunk
            current_chunk += section_with_header

    # Write any remaining content in the last chunk
    if current_chunk:
        output_file_path = os.path.join(output_dir, f'part_{part_num}.txt')
        with open(output_file_path, 'w', encoding='utf-8') as output_file:
            output_file.write(current_chunk)
        print(f"Saved {output_file_path} with {len(current_chunk)} characters.")

    print(f"Split completed! Files are saved in '{output_dir}'.")

# Usage
file_path = './all_files_content.txt'  # Replace with the path to your file
output_dir = './dire'                  # Replace with your desired output directory
split_text_file(file_path, output_dir)
