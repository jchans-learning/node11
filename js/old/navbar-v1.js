const template = document.createElement('template');
template.innerHTML = `
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar-custom">
        <a class="navbar-brand" href="/">老翰的儲藏室</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="https://github.com/jchans">Repo</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="https://github.com/jchans/jchans.github.io/tree/master/notes">Notes</a>
                </li>
                

                <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li> -->
            </ul>
        </div>
    </nav>

    <nav class="navbar fixed-bottom navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">TBD</a>
      </div>
    </nav>

`

document.body.appendChild(template.content);