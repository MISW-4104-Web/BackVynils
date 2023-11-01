variable "do_token" {
  description = "DigitalOcean API token"
  type        = string
}

variable "region" {
  description = "The region to deploy to"
  type        = string
}

variable "digitalocean_ssh_key_id" {
  description = "The ID of the SSH key to use for the droplet"
  type        = string
}

variable "vpc_uuid" {
  description = "The ID of the VPC to use for the droplet"
  type        = string
}

variable "ip_address" {
  description = "The IP address to assign to the droplet"
  type        = string
}

variable "proyect_id" {
  description = "The ID of the project to use for the droplet"
  type        = string
}
