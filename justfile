set windows-shell := ["powershell.exe", "-NoLogo", "-NoProfile", "-Command"]

live-preview $SLINT_LIVE_PREVIEW="1":
    cargo run --features slint/live-preview

[windows]
format:
    Get-ChildItem -Path ui -Recurse -Filter *.slint | ForEach-Object { slint-lsp format -i $_.FullName }

[unix]
format:
    find ui -name '*.slint' -exec slint-lsp format -i {} +
