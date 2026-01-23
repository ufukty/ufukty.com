#!/bin/bash

set -ve

(
  cd "$(mktemp -d)"
  git clone https://github.com/ufukty/kask
  cd kask
  git fetch --tags --quiet
  git checkout v0.9.0
  make install
)

~/bin/kask build -in src -out public -domain / -v
