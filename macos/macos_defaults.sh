#!/bin/zsh

# macOS Defaults Customization
# Warning: Some settings may require admin privileges

# Check for sudo permission at the start
if [ "$EUID" -ne 0 ]; then
    echo "Some macOS customizations may require sudo privileges. Please run with sudo if necessary."
fi

echo "Setting macOS defaults..."

# Expand save/print panels by default
defaults write NSGlobalDomain NSNavPanelExpandedStateForSaveMode -bool true
defaults write NSGlobalDomain PMPrintingExpandedStateForPrint -bool true

# Save to disk (not iCloud) by default
defaults write NSGlobalDomain NSDocumentSaveNewDocumentsToCloud -bool false

# Auto-hide the Dock
defaults write com.apple.dock autohide -bool true

# Remove delay for hiding and showing the Dock
defaults write com.apple.dock autohide-delay -float 0
defaults write com.apple.dock autohide-time-modifier -float 0.3

# Adjust dock size
defaults write com.apple.dock tilesize -int 36

# Minimize windows using the scale effect
defaults write com.apple.dock mineffect -string "scale"

# Speed up Mission Control animations
defaults write com.apple.dock expose-animation-duration -float 0.1

# Show only active applications in the Dock
defaults write com.apple.dock static-only -bool true

# Show all filename extensions
defaults write NSGlobalDomain AppleShowAllExtensions -bool true

# Show status bar
defaults write com.apple.finder ShowStatusBar -bool true

# Show path bar
defaults write com.apple.finder ShowPathbar -bool true

# Use list view in all Finder windows
defaults write com.apple.finder FXPreferredViewStyle -string "Nlsv"

# Avoid creating .DS_Store files on network or USB volumes
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
defaults write com.apple.desktopservices DSDontWriteUSBStores -bool true

# Safari - Needs sudo
echo "Applying Safari preferences..."
# Prevent Safari from opening 'safe' files automatically after downloading
sudo defaults write com.apple.Safari AutoOpenSafeDownloads -bool false

# Enable Safari’s developer tools
sudo defaults write com.apple.Safari IncludeDevelopMenu -bool true
sudo defaults write com.apple.Safari WebKitDeveloperExtrasEnabledPreferenceKey -bool true
sudo defaults write com.apple.Safari "com.apple.Safari.ContentPageGroupIdentifier.WebKit2DeveloperExtrasEnabled" -bool true
sudo defaults write NSGlobalDomain WebKitDeveloperExtras -bool true

# Enable the debug menu in Safari
sudo defaults write com.apple.Safari IncludeInternalDebugMenu -bool true

# Require password immediately after sleep or screen saver begins
defaults write com.apple.screensaver askForPassword -int 1
defaults write com.apple.screensaver askForPasswordDelay -int 0

# Enable tap to click for trackpad
defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad Clicking -bool true

# Enable tap to click for the login screen
defaults write com.apple.AppleMultitouchTrackpad Clicking -bool true
defaults -currentHost write NSGlobalDomain com.apple.mouse.tapBehavior -int 1
defaults write NSGlobalDomain com.apple.mouse.tapBehavior -int 1

# Save screenshots to the Downloads folder
defaults write com.apple.screencapture location -string "${HOME}/Downloads"

# Save screenshots in PNG format
defaults write com.apple.screencapture type -string "png"

# Disable shadow in screenshots
defaults write com.apple.screencapture disable-shadow -bool true

# Apply screenshot changes
killall SystemUIServer

# Use UTF-8 in Terminal and iTerm2
defaults write com.apple.terminal StringEncodings -array 4
defaults write com.googlecode.iterm2 PromptOnQuit -bool false

# Apply changes
killall Dock

echo "macOS defaults applied!"
