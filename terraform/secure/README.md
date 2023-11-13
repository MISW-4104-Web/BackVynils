# Configuración de la infraestructura

## Generate SSH key pair

```bash
ssh-keygen -t ecdsa -b 521 -C 'Llave para digital ocean' -f do_ecdsa
```

## Configuracion del servidor

```bash
ssh -i do_ecdsa root@appbajopruebas.com

# Una vez dentro del servidor

# 1. Actualizar el sistema e instalar nginx y docker
apt update
apt upgrade -y
apt install -y nginx certbot python3-certbot-nginx apt-transport-https ca-certificates curl software-properties-common apache2-utils
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
apt update
apt-cache policy docker-ce
apt -y install docker-ce docker-compose-plugin
systemctl status docker

# 2. Configurar el usuario
useradd -ms /bin/bash appuser
# Asegurar que el nuevo ususario no pertenesca a ningun grupo mas que a el mismo.
groups appuser
# En caso de que pertenesca a alguno borrar con: gpasswd -d appuser grupo

# Agregar el usuario al grupo docker
usermod -aG docker appuser
apt autoremove -y
su - appuser
mkdir -p ~/.ssh
chmod 700 ~/.ssh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
vim ~/.ssh/authorized_keys # Copiar la llave publica del usuario que se usara para conectarse al servidor
```

## Levanatar el api de BackVynils

```bash
# desde la maquina local
scp -i do_ecdsa ../../docker-compose.prod.yml appuser@appbajopruebas.com:~/docker-compose.yml
ssh -i do_ecdsa appuser@appbajopruebas.com

# desde el servidor (como appuser)
docker-compose up -d --build
```

## Configurar nginx

```bash
# desde el servidor (como root)
vim /etc/nginx/sites-available/appbajopruebas.com
```

```nginx
server {
    listen 80;
    server_name appbajopruebas.com www.appbajopruebas.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

```bash
# desde el servidor (como root)
ln -s /etc/nginx/sites-available/appbajopruebas.com /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

## Configurar certbot

```bash
# desde el servidor (como root)
certbot --nginx -d appbajopruebas.com -d www.appbajopruebas.com
```

## Agregar un api-key a nginx para proteger el api

```bash
# desde el servidor (como root)
htpasswd -c /etc/nginx/.htpasswd appuser
vim /etc/nginx/sites-available/appbajopruebas.com
```

```nginx
server {
    listen 80;
    server_name appbajopruebas.com www.appbajopruebas.com;
    location / {
        auth_basic "Restricted Content";
        auth_basic_user_file /etc/nginx/.htpasswd;
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
# ... El resto del archivo con la configuracion https que creo certbot
```

```bash
# desde el servidor (como root)
nginx -t
systemctl restart nginx
```

## Configurar el firewall de ubuntu (Como medida redundante al firewall de digital ocean)

```bash
#!/bin/bash

# Asegurar que el script esta siendo ejecutado como root.
if [[ "${UID}" -ne 0 ]]; then
  echo 'Por favor correr con sudo o como root.' >&2
  exit 1
fi

ufw reset

ufw default deny incoming
ufw default allow outgoing

ufw allow in on lo
ufw allow from 127.0.0.1/8

ufw allow 22
# ufw allow 80 # La idea es quitar http cuando ya se tiene https.
ufw allow 443

# Prender cuando ya tenga las reglas claras
ufw enable # disable

ufw status numbered
```