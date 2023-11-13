variable "do_token" {
  description = "DigitalOcean API token"
  type        = string
}

variable "droplet_id" {
  description = "The ID of the droplet to apply the firewall to"
  type        = number
}
