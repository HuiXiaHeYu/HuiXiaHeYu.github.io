## 一键安装

```bash
curl -fsSL https://ollama.com/install.sh | sh
sudo vim /etc/systemd/system/ollama.service
sudo ufw allow 11434/tcp
sudo systemctl daemon-reload & sudo systemctl restart ollama
```

### ollama.service

`使用显卡进行推理`

```toml
[Unit]
Description=Ollama Service
After=network-online.target

[Service]
ExecStart=/usr/local/bin/ollama serve
User=ollama
Group=ollama
Restart=always
RestartSec=3
Environment="PATH=/mnt/big_disk_0/spa/.cargo/bin:/mnt/big_disk_0/spa/miniconda3/bin:/mnt/big_disk_0/spa/miniconda3/condabin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/mnt/big_disk_0/spa/.local/bin:/mnt/big_disk_0/spa/bin"
Environment="OLLAMA_HOST=0.0.0.0:11434"
Environment="CUDA_VISIBLE_DEVICES=1,0"

[Install]
WantedBy=default.target
```

