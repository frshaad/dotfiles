#!/bin/zsh

# Define dotfiles directory
DOTFILES_DIR=~/dotfiles

# Create symbolic links
echo "Setting up symbolic links..."
ln -sf $DOTFILES_DIR/zsh/.zshrc ~/.zshrc
ln -sf $DOTFILES_DIR/vscode/vscode-settings.json ~/Library/Application\ Support/Code/User/settings.json
ln -sf $DOTFILES_DIR/git/.gitconfig ~/.gitconfig
ln -sf $DOTFILES_DIR/iterm/com.googlecode.iterm2.plist ~/Library/Preferences/com.googlecode.iterm2.plist
# ln -sf $DOTFILES_DIR/ssh/config ~/.ssh/config

# Install Homebrew and Homebrew packages
if ! command -v brew &>/dev/null; then
    echo "Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

echo "Installing Homebrew packages from Brewfile..."
brew bundle --file=$DOTFILES_DIR/homebrew/Brewfile

# Run macOS customizations
echo "Applying macOS defaults..."
zsh $DOTFILES_DIR/macos/macos_defaults.sh
echo "macOS customizations applied!"

echo "Dotfiles setup complete!"
