" Enable syntax highlighting
syntax on

" Line numbers
set number
set relativenumber

" Highlight the current line
set cursorline

" Indentation settings
set shiftwidth=4
set tabstop=4
set expandtab       " Use spaces instead of tabs
set autoindent

" Enable mouse support
set mouse=a

" Improve usability
set nocompatible
set hidden

" Fuzzy finder configuration
set rtp+=/opt/homebrew/opt/fzf

" Colorscheme
colorscheme slate

" Enable line wrapping at convenient points
set linebreak
set showbreak=>>\  " Mark line break with '>>'

" Show matching brackets when text indicator is over them
set showmatch

" Case insensitive searching, except when using capital letters
set ignorecase
set smartcase

" Incremental search
set incsearch

" Highlight search results
set hlsearch

" Enable clipboard integration
set clipboard=unnamedplus

" Persistent undo
set undofile

" Disable swap files
set noswapfile

" Visual bell instead of audio
set visualbell

" Enhance command-line completion
set wildmenu
set wildmode=list:longest

" Display line numbers relative to the cursor position
set relativenumber

" Always show the status line
set laststatus=2

" Highlight current line number
set cursorline

" Enable 256 colors in terminal
set t_Co=256
