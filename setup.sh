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
create_symlink "$DOTFILES_DIR/login/.hushlogin" ~/.hushlogin
create_symlink "$DOTFILES_DIR/vim/.vimrc" ~/.vimrc

# iTerm2 Dynamic Profiles setup
ITERM_PROFILE_SOURCE="$DOTFILES_DIR/iterm/frshaad.json"
ITERM_PROFILE_TARGET=~/Library/Application\ Support/iTerm2/DynamicProfiles/frshaad.json

if [ -f "$ITERM_PROFILE_SOURCE" ]; then
    create_symlink "$ITERM_PROFILE_SOURCE" "$ITERM_PROFILE_TARGET"
    echo "Linked iTerm2 profiles."
else
    echo "No iTerm2 profile JSON found; skipping profile setup."
fi

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
