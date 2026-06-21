#!/bin/bash

set -ve

GOBIN="$PWD" go install go.ufukty.com/kask@v0.17.2
./kask build -in src -out public -domain / -v -cfw
