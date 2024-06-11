# ========================
# Oh-My-Zsh Configuration
# ========================
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="robbyrussell"
plugins=(git brew zsh-autosuggestions zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh

# ========================
# Preferred Editor for Local and Remote Sessions
# ========================
if [[ -n $SSH_CONNECTION ]]; then
  export EDITOR='vim'
else
  export EDITOR='code'
fi

# ========================
# Functions
# ========================
git_commit() {
  git commit -m "$1"
}

# ========================
# Aliases
# ========================
alias zshrc="vim ~/.zshrc"
alias ohmyzsh="vim ~/.oh-my-zsh"
alias reload="source ~/.zshrc"
alias _="sudo"
alias g="git"
alias rr="rm -rf"
alias pn="pnpm"
alias pncu="pnpm up -L -i"
alias pnpx="pnpm exec"
alias pndx="pnpm dlx"
alias pnpmupgrade='curl -fsSL https://get.pnpm.io/install.sh | sh -'
alias c="clear"
alias cat="bat"
alias cd='z'
alias vim="nvim"
alias ls="eza --icons --grid --color"
alias ll="eza --icons --color --long"
alias la="eza --icons --color --long --all"
alias dl="aria2c"
alias ytdl480="yt-dlp -f 135+139 --embed-metadata"
alias ytdl720="yt-dlp -f 22 --embed-metadata"
alias ytdl1080="yt-dlp -f 137+140 --embed-metadata"
alias ytdl="yt-dlp -f -  --embed-metadata"
alias commit="git_commit"
alias push="git push"
alias bi="brew info"
alias bif="brew install"
alias bic="brew install --cask"
alias bls="brew ls"
alias bs="brew search"
alias bdoc="brew doctor"
alias bu="brew uninstall"
alias barcu="brew autoremove && brew cleanup"
alias py="python3"
alias sha256="shasum -a 256"

# ========================
# Environment Variables
# ========================
export FPATH="~/eza/completions/zsh:$FPATH"
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
export PATH="/Users/farshad/Library/Application Support/fnm:$PATH"
export PNPM_HOME="/Users/farshad/Library/pnpm"

# ========================
# Plugin and Completion Setup
# ========================
eval "$(zoxide init zsh)"
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
source <(fzf --zsh)
eval "$(fnm env)"

# pnpm
export PNPM_HOME="/Users/farshad/Library/pnpm"
case ":$PATH:" in
*":$PNPM_HOME:"*) ;;
*) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end
