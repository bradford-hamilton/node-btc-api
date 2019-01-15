Run btc node for development:
```
docker run -v bitcoind-data:/bitcoin --name=bitcoind-node -d \
    -p 8333:8333 \
    -p 127.0.0.1:8332:8332 \
    -e DISABLEWALLET=0 \
    -e PRINTTOCONSOLE=1 \
    -e RPCUSER=admin \
    -e RPCPASSWORD=password \
    kylemanna/bitcoind
```

Run API:
```
npm start
```

Run Tests:
```
npm test
```

Run Linter:
```
npm run lint
```

Prod Build:
```
npm run build
```
