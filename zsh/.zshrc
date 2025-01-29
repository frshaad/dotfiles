# ========================
# Oh-My-Zsh & Plugins
# ========================
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="robbyrussell"
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
source $ZSH/oh-my-zsh.sh

# ========================
# Aliases
# ========================
# General Shortcuts
alias zshrc="code ~/.zshrc"
alias reload="source ~/.zshrc"
alias c="clear"
alias ls="eza --icons --color --long --git"
alias ll="eza --icons --color --long"
alias la="eza --icons --color --long --all"
alias cd='z'
alias cat="bat"

# pn Shortcuts
alias pn="pnpm"
alias pnpx="pnpm exec"
alias pndx="pnpm dlx"
alias pnpmupgrade='curl -fsSL https://get.pnpm.io/install.sh | sh -'

# Brew Shortcuts
alias brewupdate="brew update && brew upgrade && brew autoremove && brew cleanup && brew doctor"

# Python & Hash Commands
alias sha256="shasum -a 256"

# Download and File Handling Aliases
alias dl="aria2c"
alias yta='yt-dlp -x --audio-format mp3'
alias ythd="yt-dlp -f 136+140 --embed-metadata"
alias yt="yt-dlp -f - --embed-metadata"

# ========================
# Environment Variables
# ========================
export FPATH="~/eza/completions/zsh:$FPATH"
export PNPM_HOME="/Users/farshad/Library/pnpm"
export PATH="$PNPM_HOME:$PATH"
export BAT_THEME=tokyonight_night

# ========================
# Initializations
# ========================
eval "$(zoxide init zsh)"

# pnpm
export PNPM_HOME="/Users/farshad/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

eval "$(fnm env --use-on-cd --shell zsh --version-file-strategy=recursive)"

PATH=~/.console-ninja/.bin:$PATH