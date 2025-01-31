#!/bin/bash

forge build
forge script script/Deploy.s.sol --broadcast --json --rpc-url $RPC_URL
forge script script/PreparePlayground.s.sol --tc PreparePlayground --broadcast --json --rpc-url $RPC_URL
echo "Deployed contract addresses"
jq '[.transactions[] | select(.transactionType == "CREATE")] | map({contractName, contractAddress})' ./broadcast/Deploy.s.sol/31337/run-latest.json

echo "Register workers"

WORKER_ID=$(python3 b58.py $WORKER1_ID) forge script script/RegisterWorker.s.sol --broadcast --rpc-url $RPC_URL
WORKER_ID=$(python3 b58.py $WORKER2_ID) forge script script/RegisterWorker.s.sol --broadcast --rpc-url $RPC_URL

echo "Register gateways"

GATEWAY_ID=$(python3 b58.py $GATEWAY_ID) forge script script/RegisterGateway.s.sol --broadcast --rpc-url $RPC_URL
