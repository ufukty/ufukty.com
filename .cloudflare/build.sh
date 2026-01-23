#!/bin/bash

set -ve

(
  cd "$(mktemp -d)"
  git clone --depth 1 --branch v0.9.0 https://github.com/ufukty/kask
  cd kask
  make install
)

~/bin/kask build -in src -out public -domain / -v
