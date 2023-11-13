output "digitalocean_ssh_key_id" {
  value = digitalocean_ssh_key.default.id
}

output "vpc_uuid" {
  value = digitalocean_vpc.default.id
}

output "ip_address" {
  value = digitalocean_reserved_ip.default.ip_address
}

output "proyect_id" {
  value = digitalocean_project.default.id
}
