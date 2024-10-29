#!/bin/zsh

# macOS Defaults Customization
# Warning: Some settings may require admin privileges

# Check for sudo permissions if necessary
if [ "$EUID" -ne 0 ]; then
    echo "Some macOS customizations may require sudo privileges. Please run with sudo if necessary."
fi

echo "Setting macOS defaults..."

# Helper function to execute commands with error handling
apply_default() {
    local description=$1
    local command=$2

    echo "Applying: $description"
    eval "$command" || echo "Warning: Failed to apply $description"
}

# Expand save/print panels by default
apply_default "Expand save panels by default" \
    "defaults write NSGlobalDomain NSNavPanelExpandedStateForSaveMode -bool true"

apply_default "Expand print panels by default" \
    "defaults write NSGlobalDomain PMPrintingExpandedStateForPrint -bool true"

# Save to disk (not iCloud) by default
apply_default "Set default save location to disk" \
    "defaults write NSGlobalDomain NSDocumentSaveNewDocumentsToCloud -bool false"

# Auto-hide the Dock
apply_default "Enable Dock auto-hide" \
    "defaults write com.apple.dock autohide -bool true"

# Remove delay for hiding and showing the Dock
apply_default "Remove Dock hide/show delay" \
    "defaults write com.apple.dock autohide-delay -float 0"
apply_default "Set Dock hide/show animation speed" \
    "defaults write com.apple.dock autohide-time-modifier -float 0.3"

# Adjust dock size
apply_default "Set Dock size" \
    "defaults write com.apple.dock tilesize -int 36"

# Minimize windows using the scale effect
apply_default "Set Dock minimize effect to scale" \
    "defaults write com.apple.dock mineffect -string 'scale'"

# Speed up Mission Control animations
apply_default "Speed up Mission Control animations" \
    "defaults write com.apple.dock expose-animation-duration -float 0.1"

# Show only active applications in the Dock
apply_default "Show only active applications in Dock" \
    "defaults write com.apple.dock static-only -bool true"

# Show all filename extensions
apply_default "Show all file extensions" \
    "defaults write NSGlobalDomain AppleShowAllExtensions -bool true"

# Show status bar in Finder
apply_default "Show status bar in Finder" \
    "defaults write com.apple.finder ShowStatusBar -bool true"

# Show path bar in Finder
apply_default "Show path bar in Finder" \
    "defaults write com.apple.finder ShowPathbar -bool true"

# Use list view in all Finder windows
apply_default "Set Finder to use list view by default" \
    "defaults write com.apple.finder FXPreferredViewStyle -string 'Nlsv'"

# Avoid creating .DS_Store files on network or USB volumes
apply_default "Prevent .DS_Store files on network or USB volumes" \
    "defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true"
apply_default "Prevent .DS_Store files on USB volumes" \
    "defaults write com.apple.desktopservices DSDontWriteUSBStores -bool true"

# Safari settings - requires sudo
echo "Applying Safari preferences..."

apply_default "Disable auto-open of 'safe' files in Safari" \
    "sudo defaults write com.apple.Safari AutoOpenSafeDownloads -bool false"

apply_default "Enable Safari’s developer tools" \
    "sudo defaults write com.apple.Safari IncludeDevelopMenu -bool true; sudo defaults write com.apple.Safari WebKitDeveloperExtrasEnabledPreferenceKey -bool true; sudo defaults write com.apple.Safari 'com.apple.Safari.ContentPageGroupIdentifier.WebKit2DeveloperExtrasEnabled' -bool true; sudo defaults write NSGlobalDomain WebKitDeveloperExtras -bool true"

apply_default "Enable Safari’s debug menu" \
    "sudo defaults write com.apple.Safari IncludeInternalDebugMenu -bool true"

# Require password immediately after sleep or screen saver begins
apply_default "Require password immediately after sleep or screen saver begins" \
    "defaults write com.apple.screensaver askForPassword -int 1"
apply_default "Set password prompt delay to 0 seconds" \
    "defaults write com.apple.screensaver askForPasswordDelay -int 0"

# Enable tap to click for trackpad
apply_default "Enable tap to click for trackpad" \
    "defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad Clicking -bool true"

# Enable tap to click for the login screen
apply_default "Enable tap to click on login screen" \
    "defaults write com.apple.AppleMultitouchTrackpad Clicking -bool true; defaults -currentHost write NSGlobalDomain com.apple.mouse.tapBehavior -int 1; defaults write NSGlobalDomain com.apple.mouse.tapBehavior -int 1"

# Save screenshots to the Downloads folder
apply_default "Set screenshot location to Downloads folder" \
    "defaults write com.apple.screencapture location -string '${HOME}/Downloads'"

# Save screenshots in PNG format
apply_default "Set screenshot format to PNG" \
    "defaults write com.apple.screencapture type -string 'png'"

# Disable shadow in screenshots
apply_default "Disable screenshot shadows" \
    "defaults write com.apple.screencapture disable-shadow -bool true"

# Apply screenshot changes
killall SystemUIServer || echo "Warning: Failed to refresh SystemUIServer settings"

# Use UTF-8 in Terminal and iTerm2
apply_default "Set Terminal to use UTF-8 encoding" \
    "defaults write com.apple.terminal StringEncodings -array 4"
apply_default "Disable iTerm2 quit confirmation" \
    "defaults write com.googlecode.iterm2 PromptOnQuit -bool false"

# Apply changes to Dock
killall Dock || echo "Warning: Failed to refresh Dock settings"

echo "macOS defaults applied!"
