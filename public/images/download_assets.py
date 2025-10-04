#!/usr/bin/env python3
import os
import requests
import time
from pathlib import Path

def download_file(url, filepath, timeout=30):
    """Download a single file with timeout"""
    try:
        response = requests.get(url, timeout=timeout, stream=True)
        response.raise_for_status()

        # Create directory if it doesn't exist
        os.makedirs(os.path.dirname(filepath), exist_ok=True)

        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)

        return True, f"Successfully downloaded {filepath}"
    except Exception as e:
        return False, f"Failed to download {url}: {str(e)}"

def find_image_files(root_dir="."):
    """Find all non-SVG image files recursively"""
    image_extensions = {'.png', '.jpg', '.jpeg', '.ico', '.gif', '.bmp', '.webp'}
    image_files = []

    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if Path(file).suffix.lower() in image_extensions:
                full_path = os.path.join(root, file)
                # Convert to relative path
                rel_path = os.path.relpath(full_path, root_dir)
                image_files.append(rel_path)

    return image_files

def main():
    base_url = "https://sprukomarket.com/products/html/bootstrap/vyzor/dist/assets/images/"
    root_dir = "."

    print("Starting download of all non-SVG image files...")
    print(f"Base URL: {base_url}")
    print(f"Local directory: {os.path.abspath(root_dir)}")

    # Find all image files
    image_files = find_image_files(root_dir)
    print(f"\nFound {len(image_files)} image files to download/update")

    success_count = 0
    failed_count = 0
    failed_files = []

    # Process files in batches
    batch_size = 10
    for i in range(0, len(image_files), batch_size):
        batch = image_files[i:i + batch_size]
        print(f"\nProcessing batch {i//batch_size + 1}/{(len(image_files) + batch_size - 1)//batch_size}")

        for rel_path in batch:
            # Construct URL
            url = base_url + rel_path.replace('\\', '/')  # Ensure forward slashes
            local_path = os.path.join(root_dir, rel_path)

            print(f"  Downloading: {rel_path}")
            success, message = download_file(url, local_path)

            if success:
                success_count += 1
                print(f"    [OK] {message}")
            else:
                failed_count += 1
                failed_files.append((rel_path, url, str(message)))
                print(f"    [FAIL] {message}")

            # Small delay to avoid overwhelming the server
            time.sleep(0.1)

        # Longer delay between batches
        time.sleep(1)

    # Summary
    print("\n" + "="*60)
    print("DOWNLOAD SUMMARY")
    print("="*60)
    print(f"Total files processed: {len(image_files)}")
    print(f"Successfully downloaded: {success_count}")
    print(f"Failed downloads: {failed_count}")

    if failed_files:
        print(f"\nFailed files ({len(failed_files)}):")
        for rel_path, url, error in failed_files:
            print(f"  - {rel_path}: {error}")

    print(f"\nCompleted at {time.strftime('%Y-%m-%d %H:%M:%S')}")

if __name__ == "__main__":
    main()