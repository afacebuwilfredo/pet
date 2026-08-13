from __future__ import annotations

from pathlib import Path

from PIL import Image

SRC = Path(r"C:\Users\PM Shift\.cursor\projects\c-Users-PM-Shift-Desktop-pet\assets")
DST = Path(r"C:\Users\PM Shift\Desktop\pet\docs\store")
DST.mkdir(parents=True, exist_ok=True)


def cover_resize(image: Image.Image, width: int, height: int) -> Image.Image:
    src = image.convert("RGB")
    scale = max(width / src.width, height / src.height)
    resized = src.resize(
        (max(1, round(src.width * scale)), max(1, round(src.height * scale))),
        Image.Resampling.LANCZOS,
    )
    left = max(0, (resized.width - width) // 2)
    top = max(0, (resized.height - height) // 2)
    return resized.crop((left, top, left + width, top + height))


def save_icon() -> None:
    image = Image.open(SRC / "play-icon.png").convert("RGBA")
    image = image.resize((512, 512), Image.Resampling.LANCZOS)
    image.save(DST / "icon-512.png", format="PNG", optimize=True)


def save_feature() -> None:
    image = cover_resize(Image.open(SRC / "feature-graphic.png"), 1024, 500)
    image.save(DST / "feature-graphic.png", format="PNG", optimize=True)


def save_screenshot(name: str, dest: str) -> None:
    image = cover_resize(Image.open(SRC / name), 1080, 1920)
    image.save(DST / dest, format="PNG", optimize=True)


save_icon()
save_feature()
save_screenshot("screenshot-home.png", "screenshot-1-home.png")
save_screenshot("screenshot-feed.png", "screenshot-2-feed.png")
save_screenshot("screenshot-play.png", "screenshot-3-play.png")
save_screenshot("screenshot-sleep.png", "screenshot-4-sleep.png")

for path in sorted(DST.glob("*.png")):
    with Image.open(path) as image:
        print(f"{path.name}: {image.size[0]}x{image.size[1]} {image.mode}")
