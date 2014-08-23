node default {

  include nodejs

  package { 'git':
    ensure => 'installed',
  }

  package { 'yo':
    provider => npm,
  }

  package { 'compass':
    ensure   => 'installed',
    provider => 'gem',
  }

  file { "/etc/profile.d/node_path.sh":
    content => "PATH=\$PATH:/usr/local/node/node-v0.10.24/bin\n",
  }
}
