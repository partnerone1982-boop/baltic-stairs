from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

SOURCE = Path("../baltic-stairs-works-original-backup")
TARGET = Path("public/images/works")
FONT = "/System/Library/Fonts/Helvetica.ttc"
TEXT = "mylestnica.ru"

fixed = 0

for src in SOURCE.rglob("cover.jpg"):
    rel = src.relative_to(SOURCE)
    dst = TARGET / rel

    if not dst.exists():
        continue

    with Image.open(src) as original, Image.open(dst) as current:
        original_landscape = original.width > original.height
        current_landscape = current.width > current.height

        # Исправляем только обложки с изменившейся ориентацией
        if original_landscape == current_landscape:
            continue

    # Берём чистый оригинал и применяем правильную EXIF-ориентацию
    with Image.open(src) as original:
        image = ImageOps.exif_transpose(original).convert("RGBA")

        # Добавляем водяной знак заново
        font_size = max(20, int(image.width * 0.08))
        font = ImageFont.truetype(FONT, font_size)

        layer = Image.new("RGBA", image.size, (0, 0, 0, 0))
        draw = ImageDraw.Draw(layer)

        bbox = draw.textbbox((0, 0), TEXT, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]

        x = (image.width - text_width) // 2
        y = (image.height - text_height) // 2

        draw.text(
            (x, y),
            TEXT,
            font=font,
            fill=(255, 255, 255, 100),
        )

        result = Image.alpha_composite(image, layer)

        result.convert("RGB").save(dst, quality=92)

    fixed += 1
    print("ИСПРАВЛЕНО:", rel)

print("ВСЕГО ИСПРАВЛЕНО:", fixed)