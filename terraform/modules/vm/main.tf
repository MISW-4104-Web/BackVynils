# Create a new tag
resource "digitalocean_tag" "default" {
  name = "webapp"
}

# Create a web server
resource "digitalocean_droplet" "default" {
  name              = "backvynils"
  size              = "s-1vcpu-2gb"
  image             = "ubuntu-22-04-x64"
  region            = var.region
  monitoring        = true
  graceful_shutdown = true
  ssh_keys          = [var.digitalocean_ssh_key_id]
  vpc_uuid          = var.vpc_uuid
  tags              = [digitalocean_tag.default.id]
}

resource "digitalocean_monitor_alert" "cpu_alert" {
  alerts {
    email = ["jm.gonzalez1844@uniandes.edu.co"]
  }
  window      = "5m"
  type        = "v1/insights/droplet/cpu"
  compare     = "GreaterThan"
  value       = 90
  enabled     = true
  entities    = [digitalocean_droplet.default.id]
  description = "Alert about CPU usage"
}

resource "digitalocean_reserved_ip_assignment" "default" {
  ip_address = var.ip_address
  droplet_id = digitalocean_droplet.default.id
}

resource "digitalocean_project_resources" "default" {
  project = var.proyect_id
  resources = [
    digitalocean_droplet.default.urn
  ]
}
