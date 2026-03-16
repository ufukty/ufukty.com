#!/bin/bash

set -ve

GOBIN="$PWD" go install go.ufukty.com/kask@v0.16.1
./kask build -in src -out public -domain https://ufukty.com -v -cfw
