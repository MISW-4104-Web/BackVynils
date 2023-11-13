module "foundation" {
  source              = "./modules/foundation"
  do_token            = var.do_token
  region              = var.region
  domain              = var.domain
  do_ssh_pub_key_file = var.do_ssh_pub_key_file
}

module "vm" {
  source                  = "./modules/vm"
  do_token                = var.do_token
  region                  = var.region
  digitalocean_ssh_key_id = module.foundation.digitalocean_ssh_key_id
  vpc_uuid                = module.foundation.vpc_uuid
  ip_address              = module.foundation.ip_address
  proyect_id              = module.foundation.proyect_id
}


module "firewall" {
  source     = "./modules/firewall"
  do_token   = var.do_token
  droplet_id = module.vm.droplet_id
}
