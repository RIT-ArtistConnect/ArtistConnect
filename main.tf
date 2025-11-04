resource "ssh_resource" "init" {
  triggers = {
    always_run = "${timestamp()}"
  }

  host = "cad.rit.edu"
  user = ritartists
  agent = true

  commands = [
     "cd ArtistConnect"
     "git pull"
     "./github/actions/deploy.sh"
  ]
}


