# ========================
# ZSH Core Settings
# ========================
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="robbyrussell"

# History configuration
HISTFILE=~/.zsh_history
HISTSIZE=1000000
SAVEHIST=1000000

# ========================
# Plugins
# ========================
plugins=(
    git
    zsh-autosuggestions
    zsh-syntax-highlighting
    colored-man-pages
    extract
)

source $ZSH/oh-my-zsh.sh

# ZSH options (must come after oh-my-zsh source)
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_FIND_NO_DUPS
setopt HIST_SAVE_NO_DUPS
setopt SHARE_HISTORY
setopt INC_APPEND_HISTORY
setopt AUTO_CD
setopt AUTO_PUSHD
setopt PUSHD_IGNORE_DUPS
setopt COMPLETE_ALIASES

# Better completion
zstyle ':completion:*' menu select
zstyle ':completion:*' matcher-list 'm:{a-zA-Z}={A-Za-z}'

# ========================
# Aliases
# ========================
# Navigation & File Operations
alias ..='cd ..'
alias ...='cd ../..'
alias ls="eza --icons --color --long --git"
alias ll="eza --icons --color --long"
alias la="eza --icons --color --long --all"
alias tree="eza --tree --icons"
alias cat="bat"
alias mkdir="mkdir -p"
alias cd="z"
alias c="clear"

# Development
alias zshrc="code ~/.zshrc"
alias reload="source ~/.zshrc && echo 'ZSH config reloaded'"

# Package Management
alias pn="pnpm"
alias pnpx="pnpm exec"
alias pndx="pnpm dlx"
alias brewupdate="brew update && brew upgrade && brew autoremove && brew cleanup && brew doctor"

# Media & Downloads
alias dl="aria2c"
alias yta='yt-dlp -x --audio-format mp3'
alias ythd="yt-dlp -f 136+140 --embed-metadata"
alias yt="yt-dlp -f - --embed-metadata"

# ========================
# Environment Variables
# ========================
export EDITOR='code'
export VISUAL='code'
export BAT_THEME=tokyonight_night
export FPATH="~/eza/completions/zsh:$FPATH"

# pnpm configuration
export PNPM_HOME="/Users/farshad/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac

# ========================
# Tool Initializations
# ========================
# Initialize zoxide
eval "$(zoxide init zsh)"

# Initialize fnm
eval "$(fnm env --use-on-cd --shell zsh --version-file-strategy=recursive)"

# Initialize console-ninja (fixed path check)
[[ -d ~/.console-ninja/.bin ]] && export PATH="$HOME/.console-ninja/.bin:$PATH"