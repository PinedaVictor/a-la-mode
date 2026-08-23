#!/usr/bin/env bash
# Uploads a travel itinerary asset (PDF, image, etc.) to Firebase Storage
# under itineraries/<file>, flat (no per-guide subfolder).
#
# Usage: scripts/upload-itinerary.sh <local-file-path> [asset-file-name]
# Example: scripts/upload-itinerary.sh ~/Desktop/cao-bang.pdf
# Example: scripts/upload-itinerary.sh ~/Desktop/map.jpg "Cao Bang Map.jpg"
set -euo pipefail

if [ $# -lt 1 ] || [ $# -gt 2 ]; then
  echo "Usage: $0 <local-file-path> [asset-file-name]" >&2
  exit 1
fi

LOCAL_PATH="$1"
ASSET_NAME="${2:-$(basename "$LOCAL_PATH")}"
BUCKET="vicagency-34bf8.firebasestorage.app"
DEST="gs://${BUCKET}/itineraries/${ASSET_NAME}"

gcloud storage cp "$LOCAL_PATH" "$DEST"

echo "Uploaded to $DEST"
echo "Add a matching asset entry to src/configs/itineraries.ts: { label: \"...\", storagePath: \"itineraries/${ASSET_NAME}\" }"
