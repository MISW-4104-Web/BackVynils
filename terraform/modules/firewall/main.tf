resource "digitalocean_firewall" "web" {
  name = "web-22-53-80-443-3000-y-5432-8140-local"

  droplet_ids = [var.droplet_id]

  inbound_rule {
    protocol         = "tcp"
    port_range       = "22"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }
  inbound_rule {
    protocol         = "tcp"
    port_range       = "80"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }
  inbound_rule {
    protocol         = "tcp"
    port_range       = "443"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }
  /* Solo para pruebas
  inbound_rule {
    protocol         = "tcp"
    port_range       = "3000"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }
  */
  inbound_rule {
    protocol         = "tcp"
    port_range       = "5432"
    source_addresses = ["127.0.0.1/8", "::1/128"]
  }
  inbound_rule {
    protocol         = "tcp"
    port_range       = "8140"
    source_addresses = ["127.0.0.1/8", "::1/128"]
  }
  outbound_rule {
    protocol              = "tcp"
    port_range            = "53"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
  outbound_rule {
    protocol              = "udp"
    port_range            = "53"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
  outbound_rule {
    protocol              = "tcp"
    port_range            = "80"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
  outbound_rule {
    protocol              = "tcp"
    port_range            = "443"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
  /* Solo para pruebas
  outbound_rule {
    protocol              = "tcp"
    port_range            = "3000"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
  */
  outbound_rule {
    protocol              = "tcp"
    port_range            = "5432"
    destination_addresses = ["127.0.0.1/8", "::1/128"]
  }
  outbound_rule {
    protocol              = "tcp"
    port_range            = "8140"
    destination_addresses = ["127.0.0.1/8", "::1/128"]
  }
}
