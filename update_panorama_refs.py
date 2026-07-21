from pathlib import Path
path = Path('src/data/rooms.ts')
text = path.read_text(encoding='utf-8')
text = text.replace("assetPath('/rooms/panorama.jpg')", "assetPath('/rooms/new_panorama.jpg')")
path.write_text(text, encoding='utf-8')
print('updated', path)
