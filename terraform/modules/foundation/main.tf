resource "digitalocean_ssh_key" "default" {
  name       = "SSH-DigitalOcean-key"
  public_key = file(var.do_ssh_pub_key_file)
}

resource "digitalocean_vpc" "default" {
  name     = "my-network"
  region   = var.region
  ip_range = "10.10.11.0/24"
}

resource "digitalocean_reserved_ip" "default" {
  region = var.region
}

resource "digitalocean_domain" "default" {
  name       = var.domain
  ip_address = digitalocean_reserved_ip.default.ip_address
}

resource "digitalocean_record" "www" {
  domain = digitalocean_domain.default.id
  type   = "A"
  name   = "www"
  value  = digitalocean_reserved_ip.default.ip_address
}

resource "digitalocean_project" "default" {
  name        = "AppBajoPruebas"
  description = "Un proyecto web del curso: Ingenieria de software para aplicaciones moviles."
  purpose     = "Web Application"
  environment = "Development"
  resources   = [digitalocean_domain.default.urn]
}
