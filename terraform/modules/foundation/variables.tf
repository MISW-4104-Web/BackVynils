variable "do_token" {
  description = "DigitalOcean API token"
  type        = string
}

variable "do_ssh_pub_key_file" {
  description = "Path to the public key file for DigitalOcean"
  type        = string
}

variable "region" {
  description = "The region to deploy to"
  type        = string
}

variable "domain" {
  description = "value for the domain name"
  type        = string
}
