#!/usr/bin/env bash
set -e

echo "This script will generate the hero image and save it to assets/concept-pack/render_hero_1.png"
if [ -z "$OPENAI_API_KEY" ]; then
  echo "ERROR: OPENAI_API_KEY is not set."
  echo "Set it first with: export OPENAI_API_KEY=\"sk-YOUR_KEY_HERE\""
  exit 1;
fi
echo "Using OPENAI_API_KEY from environment."

mkdir -p "assets/concept-pack"

cat > /tmp/render_payload.json <<'JSON'
{
  "model": "gpt-image-1",
  "prompt": "Late-afternoon Washington D.C. apartment kitchen, warm golden-hour light, a kitchen table overflowing with yams, mac and cheese, cornbread, fried chicken, chitterlings, cabbage, and smothered pork chops in gravy, thick steam rising. A 25-year-old Black man in slightly worn stylish streetwear sits mid-bite, frozen in ecstatic shock, mouth agape and eyes wide, chair tilting. A vibrant Black mother in a colorful apron over a floral dress stands pointing playfully with a dish towel in hand. Background living area shows a woman beginning to dance. Subtle reveal: framed photo on wall (mother with a dignitary) or a Secret-Service-style lanyard on the counter. Exaggerated-animation style, bold silhouettes, expressive linework, Spider-Verse concept-art lighting, painterly textured background, cel-shaded characters, warm rim light, grainy halftone accents.",
  "size": "1536x1024"
}
JSON

curl -s -X POST "https://api.openai.com/v1/images/generations" \
  -H "Authorization: Bearer ${OPENAI_API_KEY}" \
  -H "Content-Type: application/json" \
  -d @/tmp/render_payload.json \
  -o /tmp/render_response.json

if ! command -v jq >/dev/null 2>&1; then
  echo "Warning: jq not found; can't verify response JSON. Install jq for better diagnostics."
fi

if ! jq -e '.data[0].b64_json' /tmp/render_response.json >/dev/null 2>&1; then
  echo "API response did not contain image data. Inspect /tmp/render_response.json for details.";
  cat /tmp/render_response.json
  exit 2
fi

jq -r '.data[0].b64_json' /tmp/render_response.json | base64 --decode > "assets/concept-pack/render_hero_1.png"

echo "Saved: assets/concept-pack/render_hero_1.png"
ls -lh "assets/concept-pack/render_hero_1.png" || true
