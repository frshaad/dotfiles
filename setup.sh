# Clone dotfiles repository if not already cloned
if [ ! -d "~/dotfiles" ]; then
  git clone git@github.com:frshaad/dotfiles.git ~/dotfiles
fi

mkdir -p ~/.config

# Install Homebrew if not installed
if ! command -v brew &>/dev/null; then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# Install Homebrew packages from Brewfile
brew bundle --file=~/dotfiles/homebrew/Brewfile

# Set up iTerm2 preferences
defaults write com.googlecode.iterm2 PrefsCustomFolder -string "~/dotfiles/iterm2"
defaults write com.googlecode.iterm2 LoadPrefsFromCustomFolder -bool true

# Source other dotfiles
ln -sf ~/dotfiles/.zshrc ~/.zshrc
ln -sf ~/dotfiles/.vimrc ~/.vimrc
ln -sf ~/dotfiles/.gitconfig ~/.gitconfig

# Install the LTS version of Node.js
fnm install --lts

# Clone Obsidian backup
git clone git@github.com:frshaad/obsidian-backup.git ~/Documents

# Clone neovim setup
git clone git@github.com:frshaad/nvim.git ~/.config

# Enable key-repeating
$ defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false            # For VS Code
$ defaults write com.microsoft.VSCodeInsiders ApplePressAndHoldEnabled -bool false    # For VS Code Insider
$ defaults write com.vscodium ApplePressAndHoldEnabled -bool false                    # For VS Codium
$ defaults write com.microsoft.VSCodeExploration ApplePressAndHoldEnabled -bool false # For VS Codium Exploration users
$ defaults delete -g ApplePressAndHoldEnabled
