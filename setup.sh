#!/bin/zsh

# Define dotfiles directory
DOTFILES_DIR=~/dotfiles

# Function to create symbolic links with checks
create_symlink() {
    local source=$1
    local target=$2

    if [ -e "$target" ]; then
        echo "Removing existing file or symlink at $target..."
        rm -rf "$target"
    fi

    echo "Creating symlink from $source to $target..."
    ln -sf "$source" "$target"
}

# Set up Homebrew
if ! command -v brew &>/dev/null; then
    echo "Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
else
    echo "Homebrew is already installed"
fi

# Install Homebrew packages
echo "Installing Homebrew packages from Brewfile..."
brew bundle --file=$DOTFILES_DIR/homebrew/Brewfile || {
    echo "Error: Brewfile installation failed"
    exit 1
}

# Set up symbolic links
echo "Setting up symbolic links..."
create_symlink "$DOTFILES_DIR/zsh/.zshrc" ~/.zshrc
create_symlink "$DOTFILES_DIR/vscode/vscode-settings.json" ~/Library/Application\ Support/Code/User/settings.json
create_symlink "$DOTFILES_DIR/git/.gitconfig" ~/.gitconfig
create_symlink "$DOTFILES_DIR/iterm/com.googlecode.iterm2.plist" ~/Library/Preferences/com.googlecode.iterm2.plist

# Optional: Set up SSH config if file exists
if [ -f "$DOTFILES_DIR/ssh/config" ]; then
    create_symlink "$DOTFILES_DIR/ssh/config" ~/.ssh/config
else
    echo "No SSH config found in dotfiles; skipping."
fi

# Run macOS defaults if file exists
if [ -f "$DOTFILES_DIR/macos/macos_defaults.sh" ]; then
    echo "Applying macOS customizations..."
    zsh "$DOTFILES_DIR/macos/macos_defaults.sh" || echo "macOS defaults encountered an error"
else
    echo "No macOS defaults script found in dotfiles; skipping."
fi

echo "Dotfiles setup complete!"
